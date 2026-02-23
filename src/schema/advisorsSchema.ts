import { z } from "zod";

const listSchema = z
    .object({
        title: z.string().optional(),
        items: z.array(z.string()).optional(),
    })
    .optional();

const advisorsCardSchema = z
    .object({
        id: z.number().optional(),
        secondary: z.boolean().optional(),
        title: z.string().optional(),
        subtitle: z.string().optional(),
        list: listSchema,
        bottomText: z.string().optional(),
    })
    .optional();

const ctaInfoSchema = z
    .object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        description: z.string().optional(),
        btnText: z.string().optional(),
    })
    .optional();

export const advisorsSchema = z.object({
    title: z.string().optional(),
    advisorsCards: z.array(advisorsCardSchema).optional(),
    ctaInfo: ctaInfoSchema,
});
