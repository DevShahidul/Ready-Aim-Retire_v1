import type { APIRoute } from 'astro';
import { validateRequest } from '../../../lib/auth';
import { getAllBlogPosts } from '../../../lib/filesystem';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  // Validate authentication
  const authError = validateRequest(request);
  if (authError) return authError;

  try {
    const posts = getAllBlogPosts();

    const stats = {
      total: posts.length,
      withImages: posts.filter(p => p.hasImage).length,
      needImages: posts.filter(p => !p.hasImage).length
    };

    return new Response(JSON.stringify({
      posts,
      stats
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch blog posts',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
