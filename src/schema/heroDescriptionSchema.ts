import { z } from "astro/zod";

export const heroDescriptionShcema = z.object({
    title: z.string(),
    btnText: z.string().default(""),
    checkList: z
        .array(
            z.object({
                point: z.string().default(""),
            }),
        )
        .default([{ point: "" }, { point: "" }, { point: "" }]),
    largeContent: z.boolean().default(true).optional(),
});
