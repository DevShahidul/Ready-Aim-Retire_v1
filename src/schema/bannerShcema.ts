import { z } from "astro/zod";

export const bannerSchema = z.object({
    logo: z.string(),
    image: z.string(),
    title: z.string(),
    subtitle: z.string(),
    buttonText: z.string(),
});
