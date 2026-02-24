import { z } from "astro:content";

export const infoColumnSchema = z.array(
    z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string().default(""),
        description: z.string().optional(),
        dotList: z
            .object({
                title: z.string(),
                items: z.array(z.string()),
                footer: z.string().optional(),
            })
            .optional(),
        dotList2: z
            .object({
                title: z.string(),
                items: z.array(z.string()),
                footer: z.string().optional(),
            })
            .optional(),
        btnText: z.string(),
        bottomText: z.string(),
        bottomText2: z.string().optional(),
        image: z.string().optional(),
        email: z.string(),
    }),
);
