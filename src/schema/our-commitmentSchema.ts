import { z } from "zod";

const emailInfoSchema = z
    .object({
        title: z.string().optional(),
        email: z.string().optional(),
    })
    .optional();

const listSchema = z
    .object({
        title: z.string().optional(),
        listItems: z.array(z.string()).optional(),
    })
    .optional();

const commitmentCardSchema = z
    .object({
        id: z.number().optional(),
        title: z.string().optional(),
        subtitle: z.string().optional(),
        description: z.string().optional(),
        shortDescription: z.string().optional(),
        list: listSchema,
        firstBottomText: z.string().optional(),
        secondBottomText: z.string().optional(),
        emailInfo: emailInfoSchema,
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

export const commitmentSchema = z.object({
    title: z.string().optional(),
    commitmentCards: z.array(commitmentCardSchema).optional(),
    ctaInfo: ctaInfoSchema,
});
