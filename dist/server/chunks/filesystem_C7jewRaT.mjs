import * as fs from 'node:fs';
import * as path from 'node:path';
import matter from 'gray-matter';

function getAllBlogPosts() {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  if (!fs.existsSync(blogDir)) {
    return [];
  }
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  const posts = [];
  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);
    const slug = file.replace(".md", "");
    const image = data.image || null;
    const hasImage = image !== null && !image.includes("placeholder") && fs.existsSync(path.join(process.cwd(), "public", image.replace(/^\//, "")));
    posts.push({
      slug,
      title: data.title || slug,
      description: data.description || "",
      category: data.category || "Uncategorized",
      date: data.date ? new Date(data.date).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
      image,
      hasImage,
      filePath
    });
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}
function getBlogPostContent(slug) {
  const blogDir = path.join(process.cwd(), "src", "content", "blog");
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {
    frontmatter: data,
    content
  };
}
async function saveImage(imageUrl, slug) {
  const imageDir = path.join(process.cwd(), "public", "images", "blog");
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
  }
  let buffer;
  let extension;
  if (imageUrl.startsWith("data:")) {
    const matches = imageUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!matches) {
      throw new Error("Invalid base64 data URL format");
    }
    const mimeType = matches[1];
    const base64Data = matches[2];
    buffer = Buffer.from(base64Data, "base64");
    extension = mimeType.includes("jpeg") || mimeType.includes("jpg") ? "jpg" : "png";
  } else {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type") || "image/png";
    extension = contentType.includes("jpeg") ? "jpg" : "png";
    const arrayBuffer = await response.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  }
  const filename = `${slug}.${extension}`;
  const imagePath = path.join(imageDir, filename);
  fs.writeFileSync(imagePath, buffer);
  return `/images/blog/${filename}`;
}
function updateBlogFrontmatter(filePath, imagePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const { data, content: markdown } = matter(content);
  data.image = imagePath;
  const newContent = matter.stringify(markdown, data);
  fs.writeFileSync(filePath, newContent, "utf-8");
}

export { getAllBlogPosts as a, getBlogPostContent as g, saveImage as s, updateBlogFrontmatter as u };
