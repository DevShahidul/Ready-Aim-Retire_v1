import z from "astro/zod";

export const pricingSchema = z.object({
    // Basic metadata
    title: z.string(),
    description: z.string(),

    // Billing toggle
    billingToggle: z.object({
        monthly: z.string(),
        annual: z.string(),
        annualSavings: z.number(),
    }),

    // Plans array with detailed validation
    plans: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            price: z.number(),
            period: z.string(),
            description: z.string(),
            buttonText: z.string(),
            popular: z.boolean(),
            badge: z.string().optional(),
            icon: z.string().optional(),
            features: z.array(z.string()),
            limitations: z.array(z.string()).optional(),
        }),
    ),

    // FAQ section
    faqs: z.array(
        z.object({
            question: z.string(),
            answer: z.string(),
        }),
    ),

    // Why worth it section
    whyWorthIt: z.object({
        onTargetLogo: z.string(),
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        listTitle: z.string(),
        benefits: z.array(z.string()),
        trustIndicators: z.array(z.string()),
    }),
});
