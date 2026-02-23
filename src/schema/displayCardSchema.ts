import { z } from "zod";

export const displayCardSchema = z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    time: z.string().optional(),
    description: z.string().optional(),
    image: z.string(),
    list: z
        .object({
            title: z.string().optional(),
            listItems: z.array(z.string()),
        })
        .optional(),
    btnText: z.string().optional(),
    textRight: z.boolean().optional(),
    bottomText: z.string().optional(),
    absoluteContent: z
        .object({
            stats: z.string().optional(),
            title: z.string().optional(),
            subtitle: z.string().optional(),
        })
        .optional(),
});
