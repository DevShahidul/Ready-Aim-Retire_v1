import { z } from "astro/zod";

export const bannerSchema = z.object({
    logo: z.string(),
    image: z.string(),
    title: z.string(),
    subtitle: z.string(),
    pointsList: z
        .array(
            z.object({
                point: z.string(),
                details: z.string(),
            }),
        )
        .optional(),
    buttonText: z.string(),
    largeBtn: z.boolean(),
    largeGap: z.boolean(),
});
