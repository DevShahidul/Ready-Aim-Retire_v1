import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { pricingSchema } from "./schema/pricingShcema";
import { bannerSchema } from "./schema/bannerShcema";
import { heroDescriptionShcema } from "./schema/heroDescriptionShcema";

const pricingPage = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/pages/pricing" }),
    schema: pricingSchema,
});

const heroDescription = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/heroDescription" }),
    schema: heroDescriptionShcema,
});

const banner = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/banner" }),
    schema: bannerSchema,
});

export const collections = { pricingPage, banner, heroDescription };
