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
            })
            .optional(),
        btnText: z.string(),
        bottomText: z.string(),
        bottomText2: z.string().optional(),
        image: z.string().optional(),
        email: z.string(),
    }),
);
