import { v as validateRequest } from '../../../chunks/auth_vVaSFFbT.mjs';
export { renderers } from '../../../renderers.mjs';

async function generateImageWithGemini(prompt) {
  {
    throw new Error("GEMINI_API_KEY environment variable is not set. Get your key at https://aistudio.google.com/apikey");
  }
}

const prerender = false;
const POST = async ({ request }) => {
  const authError = validateRequest(request);
  if (authError) return authError;
  try {
    const body = await request.json();
    const { slug, prompt } = body;
    if (!slug || !prompt) {
      return new Response(JSON.stringify({
        error: "Missing required parameters",
        details: "Both slug and prompt are required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = await generateImageWithGemini(prompt);
    return new Response(JSON.stringify({
      previewUrl: result.url,
      // Base64 data URL
      mimeType: result.mimeType,
      slug
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error generating image:", error);
    if (error instanceof Error) {
      if (error.message.includes("API key") || error.message.includes("GEMINI_API_KEY")) {
        return new Response(JSON.stringify({
          error: "Gemini API key is invalid or not configured",
          details: "Please set your GEMINI_API_KEY in .env. Get a key at https://aistudio.google.com/apikey"
        }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
      if (error.message.includes("rate limit") || error.message.includes("429")) {
        return new Response(JSON.stringify({
          error: "Gemini rate limit exceeded",
          details: "Please wait a moment and try again"
        }), {
          status: 429,
          headers: { "Content-Type": "application/json" }
        });
      }
      if (error.message.includes("rejected")) {
        return new Response(JSON.stringify({
          error: "Content policy violation",
          details: "The prompt was rejected by Gemini. Please try a different prompt."
        }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    return new Response(JSON.stringify({
      error: "Failed to generate image",
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
