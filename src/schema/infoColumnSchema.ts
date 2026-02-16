import { z } from "astro:content";

export const infoColumnSchema = z.array(
    z.object({
        id: z.string(),
        title: z.string(),
        subtitle: z.string().default(""),
        dotList: z
            .object({
                title: z.string(),
                items: z.array(z.string()),
            })
            .optional(),
        btnText: z.string(),
        bottomText: z.string(),
        email: z.string(),
    }),
);
