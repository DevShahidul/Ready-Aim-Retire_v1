import { z } from "astro:content";

export const faqsPageSchema = z.object({
    title: z.string().optional(),
    primaryCards: z
        .array(
            z.object({
                id: z.number(),
                isPrimary: z.boolean().optional(),
                title: z.string().optional(),
                subtitle: z.string().optional(),
                description: z.string().optional(),
                list: z.array(z.string()).optional(),
                bottomText: z.string().optional(),
                buttonText: z.string().optional(),
            }),
        )
        .optional(),
    secondaryCard: z
        .array(
            z.object({
                id: z.number(),
                isPrimary: z.boolean().optional(),
                title: z.string().optional(),
                subtitle: z.string().optional(),
                description: z.string().optional(),
                list: z.array(z.string()).optional(),
                bottomText: z.string().optional(),
                buttonText: z.string().optional(),
            }),
        )
        .optional(),
    faqsCta: z
        .object({
            heading: z.string().optional(),
            title: z.string().optional(),
            subtitle: z.string().optional(),
            description: z.string().optional(),
            bottomText: z.string().optional(),
        })
        .optional(),
});
