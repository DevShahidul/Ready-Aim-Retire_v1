import { z } from "zod";

export const privacyPolicySchema = z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.string(),
});
