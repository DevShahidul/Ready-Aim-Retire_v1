import { z } from "astro:content";

export const referSchema = z.object({
    title: z.string(),
    referCards: z
        .array(
            z.object({
                id: z.number(),
                image: z.string().optional(),
                title: z.string().optional(),
                subtitle: z.string().optional(),
                description: z.string().optional(),
                numberList: z
                    .array(
                        z.object({
                            title: z.string().optional(),
                            description: z.string().optional(),
                        }),
                    )
                    .optional(),
                list: z
                    .object({
                        title: z.string().optional(),
                        items: z.array(z.string()).optional(),
                    })
                    .optional(),
                bottomText: z.string().optional(),
            }),
        )
        .optional(),
    referCta: z
        .object({
            title: z.string().optional(),
            subtitle: z.string().optional(),
            btnText: z.string().optional(),
        })
        .optional(),
    referProgramDetails: z.array(z.string()).optional(),
});
