import { v as validateRequest } from '../../../chunks/auth_CeA7DTJX.mjs';
import { a as getAllBlogPosts, s as saveImage, u as updateBlogFrontmatter } from '../../../chunks/filesystem_C7jewRaT.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const authError = validateRequest(request);
  if (authError) return authError;
  try {
    const body = await request.json();
    const { slug, imageUrl } = body;
    if (!slug || !imageUrl) {
      return new Response(JSON.stringify({
        error: "Missing required parameters",
        details: "Both slug and imageUrl are required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const posts = getAllBlogPosts();
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      return new Response(JSON.stringify({
        error: `Blog post not found: ${slug}`
      }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const imagePath = await saveImage(imageUrl, slug);
    updateBlogFrontmatter(post.filePath, imagePath);
    return new Response(JSON.stringify({
      success: true,
      imagePath,
      message: `Image saved and blog post updated: ${slug}`
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error saving image:", error);
    if (error instanceof Error) {
      if (error.message.includes("download")) {
        return new Response(JSON.stringify({
          error: "Failed to download image",
          details: "The image URL may have expired. Please regenerate the image."
        }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    return new Response(JSON.stringify({
      error: "Failed to save image",
      details: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
