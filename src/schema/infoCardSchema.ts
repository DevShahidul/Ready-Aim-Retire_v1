import { z } from "astro:content";

export const infoCardSchema = z.array(
    z.object({
        id: z.string(),
        tag: z.string(),
        title: z.string(),
        subtitle: z.string(),
        checkList: z.object({
            title: z.string(),
            items: z.array(z.string()),
        }),
        bottomText: z.string(),
    }),
);
