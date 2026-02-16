import { z } from "zod";

export const cookiePolicySchema = z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.string(),
});
