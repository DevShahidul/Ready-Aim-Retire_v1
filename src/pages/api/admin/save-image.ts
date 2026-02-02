import type { APIRoute } from 'astro';
import { validateRequest } from '../../../lib/auth';
import { getAllBlogPosts, saveImage, updateBlogFrontmatter } from '../../../lib/filesystem';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Validate authentication
  const authError = validateRequest(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const { slug, imageUrl } = body;

    if (!slug || !imageUrl) {
      return new Response(JSON.stringify({
        error: 'Missing required parameters',
        details: 'Both slug and imageUrl are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Find the blog post to get its file path
    const posts = getAllBlogPosts();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
      return new Response(JSON.stringify({
        error: `Blog post not found: ${slug}`
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Download and save the image
    const imagePath = await saveImage(imageUrl, slug);

    // Update the blog post frontmatter
    updateBlogFrontmatter(post.filePath, imagePath);

    return new Response(JSON.stringify({
      success: true,
      imagePath,
      message: `Image saved and blog post updated: ${slug}`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error saving image:', error);

    if (error instanceof Error) {
      if (error.message.includes('download')) {
        return new Response(JSON.stringify({
          error: 'Failed to download image',
          details: 'The image URL may have expired. Please regenerate the image.'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response(JSON.stringify({
      error: 'Failed to save image',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
