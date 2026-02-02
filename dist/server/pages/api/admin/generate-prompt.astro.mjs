import { v as validateRequest } from '../../../chunks/auth_CeA7DTJX.mjs';
import { g as getBlogPostContent } from '../../../chunks/filesystem_C7jewRaT.mjs';
import OpenAI from 'openai';
export { renderers } from '../../../renderers.mjs';

let openaiClient = null;
function getOpenAIClient() {
  if (!openaiClient) {
    const apiKey = "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";
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}
async function generateImagePrompt(title, description, content, category) {
  const client = getOpenAIClient();
  const systemPrompt = `You are an expert at creating image generation prompts for blog article hero images.

Your task is to analyze a blog article and create a compelling, professional image prompt that:
1. Captures the essence and main theme of the article
2. Uses a clean, modern, professional aesthetic suitable for a financial planning website
3. NO people, faces, hands, or human figures - use abstract concepts, objects, and metaphors instead
4. NO text, words, letters, numbers, logos, or watermarks in the image
5. Works well as a hero image (16:9 aspect ratio, landscape orientation)
6. Uses sophisticated color palettes (teal, navy, gold, white - professional colors)
7. Conveys trust, growth, stability, and financial security through symbolic imagery

Focus on: abstract shapes, nature metaphors (growth, paths, horizons), financial symbols (charts going up, compasses, lighthouses), serene landscapes, geometric patterns, or conceptual illustrations.

The prompt should describe a single cohesive scene with clear composition, lighting, and mood. Keep it simple and elegant.

Respond with a JSON object containing:
- "prompt": The image prompt (clear and specific, 50-100 words, no people)
- "reasoning": Brief explanation of your creative choices (30-50 words)`;
  const userPrompt = `Please create an image generation prompt for this blog article:

Title: ${title}
Category: ${category}
Description: ${description}

Article Content (first 1500 chars):
${content.substring(0, 1500)}...`;
  const response = await client.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt }
    ],
    response_format: { type: "json_object" },
    temperature: 0.7,
    max_tokens: 1e3
  });
  const responseContent = response.choices[0]?.message?.content;
  if (!responseContent) {
    throw new Error("No response from GPT-4");
  }
  try {
    const result = JSON.parse(responseContent);
    if (!result.prompt || !result.reasoning) {
      throw new Error("Invalid response structure");
    }
    return result;
  } catch (e) {
    throw new Error(`Failed to parse GPT-4 response: ${e}`);
  }
}

const prerender = false;
const POST = async ({ request }) => {
  const authError = validateRequest(request);
  if (authError) return authError;
  try {
    const body = await request.json();
    const { slug } = body;
    if (!slug) {
      return new Response(JSON.stringify({ error: "Missing required parameter: slug" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const postData = getBlogPostContent(slug);
    if (!postData) {
      return new Response(JSON.stringify({ error: `Blog post not found: ${slug}` }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { frontmatter, content } = postData;
    const result = await generateImagePrompt(
      frontmatter.title || slug,
      frontmatter.description || "",
      content,
      frontmatter.category || "General"
    );
    return new Response(JSON.stringify({
      prompt: result.prompt,
      reasoning: result.reasoning,
      postTitle: frontmatter.title
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error generating prompt:", error);
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return new Response(JSON.stringify({
          error: "OpenAI API key is invalid or not configured",
          details: "Please check your OPENAI_API_KEY environment variable"
        }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
      if (error.message.includes("rate limit") || error.message.includes("429")) {
        return new Response(JSON.stringify({
          error: "OpenAI rate limit exceeded",
          details: "Please wait a moment and try again"
        }), {
          status: 429,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    return new Response(JSON.stringify({
      error: "Failed to generate image prompt",
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
