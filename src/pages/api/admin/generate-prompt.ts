import type { APIRoute } from 'astro';
import { validateRequest } from '../../../lib/auth';
import { getBlogPostContent } from '../../../lib/filesystem';
import { generateImagePrompt } from '../../../lib/openai';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Validate authentication
  const authError = validateRequest(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug) {
      return new Response(JSON.stringify({ error: 'Missing required parameter: slug' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get blog post content
    const postData = getBlogPostContent(slug);

    if (!postData) {
      return new Response(JSON.stringify({ error: `Blog post not found: ${slug}` }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { frontmatter, content } = postData;

    // Generate image prompt using GPT-4
    const result = await generateImagePrompt(
      frontmatter.title || slug,
      frontmatter.description || '',
      content,
      frontmatter.category || 'General'
    );

    return new Response(JSON.stringify({
      prompt: result.prompt,
      reasoning: result.reasoning,
      postTitle: frontmatter.title
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error generating prompt:', error);

    // Handle specific OpenAI errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return new Response(JSON.stringify({
          error: 'OpenAI API key is invalid or not configured',
          details: 'Please check your OPENAI_API_KEY environment variable'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      if (error.message.includes('rate limit') || error.message.includes('429')) {
        return new Response(JSON.stringify({
          error: 'OpenAI rate limit exceeded',
          details: 'Please wait a moment and try again'
        }), {
          status: 429,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response(JSON.stringify({
      error: 'Failed to generate image prompt',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
