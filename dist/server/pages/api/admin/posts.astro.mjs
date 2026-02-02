import { v as validateRequest } from '../../../chunks/auth_CeA7DTJX.mjs';
import { a as getAllBlogPosts } from '../../../chunks/filesystem_C7jewRaT.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const authError = validateRequest(request);
  if (authError) return authError;
  try {
    const posts = getAllBlogPosts();
    const stats = {
      total: posts.length,
      withImages: posts.filter((p) => p.hasImage).length,
      needImages: posts.filter((p) => !p.hasImage).length
    };
    return new Response(JSON.stringify({
      posts,
      stats
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response(JSON.stringify({
      error: "Failed to fetch blog posts",
      details: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
