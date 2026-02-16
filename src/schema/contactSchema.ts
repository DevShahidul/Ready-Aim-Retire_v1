import { z } from "astro:content";

export const contactSchema = z.object({
    hero: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
    }),
    contactOptions: z.array(
        z.object({
            title: z.string(),
            email: z.string(),
            description: z.string(),
            icon: z.string(),
        }),
    ),
    mailingAddress: z.object({
        title: z.string(),
        address: z.string(),
    }),
    stayConnected: z.object({
        title: z.string(),
        description: z.string(),
        socialLinks: z.array(
            z.object({
                platform: z.string(),
                url: z.string(),
            }),
        ),
        ctaButton: z.object({
            text: z.string(),
            url: z.string(),
        }),
    }),
});
