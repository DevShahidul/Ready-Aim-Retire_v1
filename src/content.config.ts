import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pricingPage = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/pricing" }),
    schema: z.object({
        // Basic metadata
        title: z.string(),
        description: z.string(),
        heroTitle: z.string(),
        heroSubtitle: z.string(),
        heroImage: z.string().optional(),

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
            title: z.string(),
            subtitle: z.string(),
            description: z.string(),
            benefits: z.array(z.string()),
            trustIndicators: z.array(z.string()),
        }),
    }),
});

export const collections = { pricingPage };
