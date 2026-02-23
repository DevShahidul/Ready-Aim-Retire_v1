import { z } from "zod";

const listSchema = z
    .object({
        title: z.string().optional(),
        items: z.array(z.string()).optional(),
    })
    .optional();

const aboutCardSchema = z
    .object({
        id: z.number().optional(),
        title: z.string().optional(),
        subtitle: z.string().optional(),
        description: z.string().optional(),
        list: listSchema,
        firstBottomText: z.string().optional(),
        secondBottomText: z.string().optional(),
    })
    .optional();

export const aboutSchema = z.object({
    title: z.string().optional(),
    aboutCards: z.array(aboutCardSchema).optional(),
});
