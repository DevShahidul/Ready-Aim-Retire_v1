import OpenAI from 'openai';

let openaiClient: OpenAI | null = null;

/**
 * Get or create OpenAI client singleton
 */
export function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    const apiKey = import.meta.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}

interface PromptResult {
  prompt: string;
  reasoning: string;
}

/**
 * Generate an image prompt using GPT-4 based on blog content
 */
export async function generateImagePrompt(
  title: string,
  description: string,
  content: string,
  category: string
): Promise<PromptResult> {
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
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    response_format: { type: 'json_object' },
    temperature: 0.7,
    max_tokens: 1000
  });

  const responseContent = response.choices[0]?.message?.content;
  if (!responseContent) {
    throw new Error('No response from GPT-4');
  }

  try {
    const result = JSON.parse(responseContent) as PromptResult;
    if (!result.prompt || !result.reasoning) {
      throw new Error('Invalid response structure');
    }
    return result;
  } catch (e) {
    throw new Error(`Failed to parse GPT-4 response: ${e}`);
  }
}

interface ImageResult {
  url: string;
  revisedPrompt?: string;
}

/**
 * Generate an image using DALL-E 3
 */
export async function generateImage(prompt: string): Promise<ImageResult> {
  const client = getOpenAIClient();

  const response = await client.images.generate({
    model: 'dall-e-3',
    prompt: prompt,
    n: 1,
    size: '1792x1024',
    quality: 'standard',
    style: 'vivid'
  });

  const imageData = response.data[0];
  if (!imageData?.url) {
    throw new Error('No image URL in DALL-E response');
  }

  return {
    url: imageData.url,
    revisedPrompt: imageData.revised_prompt
  };
}
