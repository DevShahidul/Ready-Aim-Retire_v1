import { z } from "astro:content";

export const retireesSchema = z.object({
    title: z.string().optional(),
    thoughts: z
        .object({
            title: z.string().optional(),
            questions: z.array(z.string()).optional(),
            bottomText: z.string().optional(),
            btnText: z.string().optional(),
        })
        .optional(),
    retireesCta: z
        .object({
            title: z.string().optional(),
            subtitle: z.string().optional(),
            description: z.string().optional(),
            bottomText: z.string().optional(),
            btnText: z.string().optional(),
        })
        .optional(),
});
