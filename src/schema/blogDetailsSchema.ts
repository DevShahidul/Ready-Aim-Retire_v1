import { z } from "astro:content";

export const blogDetailsSchema = z.object({
    title: z.string().optional(),
    time: z.string().optional(),
    date: z.string().optional(),
    breadcrumb: z
        .object({
            step1: z.string().optional(),
            step2: z.string().optional(),
            step3: z.string().optional(),
        })
        .optional(),
    relatedArticles: z
        .array(
            z.object({
                id: z.number(),
                title: z.string().optional(),
                time: z.string().optional(),
                date: z.string().optional(),
                image: z.string().optional(),
            }),
        )
        .optional(),
    socials: z.array(z.string()).optional(),
});
