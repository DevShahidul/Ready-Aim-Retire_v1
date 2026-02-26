import { z } from "astro:content";

export const faqsSchema = z.object({
    title: z.string().optional(),
    faqs: z
        .array(
            z.object({
                question: z.string().optional(),
                answer: z.string().optional(),
            }),
        )
        .optional(),
});
