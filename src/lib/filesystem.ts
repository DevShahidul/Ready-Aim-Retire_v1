import * as fs from 'node:fs';
import * as path from 'node:path';
import matter from 'gray-matter';

export interface BlogPostInfo {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string | null;
  hasImage: boolean;
  filePath: string;
}

/**
 * Get all blog posts with their metadata and image status
 */
export function getAllBlogPosts(): BlogPostInfo[] {
  const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  const posts: BlogPostInfo[] = [];

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    const slug = file.replace('.md', '');
    const image = data.image || null;

    // Check if image exists and is not a placeholder
    const hasImage = image !== null &&
                     !image.includes('placeholder') &&
                     fs.existsSync(path.join(process.cwd(), 'public', image.replace(/^\//, '')));

    posts.push({
      slug,
      title: data.title || slug,
      description: data.description || '',
      category: data.category || 'Uncategorized',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      image,
      hasImage,
      filePath
    });
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Get raw content of a blog post for prompt generation
 */
export function getBlogPostContent(slug: string): { frontmatter: Record<string, any>; content: string } | null {
  const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data,
    content
  };
}

/**
 * Save an image from a URL or base64 data URL
 */
export async function saveImage(imageUrl: string, slug: string): Promise<string> {
  const imageDir = path.join(process.cwd(), 'public', 'images', 'blog');

  // Ensure directory exists
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
  }

  let buffer: Buffer;
  let extension: string;

  // Check if it's a base64 data URL (from Gemini)
  if (imageUrl.startsWith('data:')) {
    const matches = imageUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!matches) {
      throw new Error('Invalid base64 data URL format');
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    buffer = Buffer.from(base64Data, 'base64');
    extension = mimeType.includes('jpeg') || mimeType.includes('jpg') ? 'jpg' : 'png';
  } else {
    // Fetch from URL (for DALL-E or other URL-based APIs)
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type') || 'image/png';
    extension = contentType.includes('jpeg') ? 'jpg' : 'png';

    const arrayBuffer = await response.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  }

  const filename = `${slug}.${extension}`;
  const imagePath = path.join(imageDir, filename);

  fs.writeFileSync(imagePath, buffer);

  return `/images/blog/${filename}`;
}

/**
 * Update the frontmatter of a blog post with a new image path
 */
export function updateBlogFrontmatter(filePath: string, imagePath: string): void {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: markdown } = matter(content);

  // Update the image field
  data.image = imagePath;

  // Reconstruct the file with updated frontmatter
  const newContent = matter.stringify(markdown, data);

  fs.writeFileSync(filePath, newContent, 'utf-8');
}
