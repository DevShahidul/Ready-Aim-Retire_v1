import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { pricingSchema } from "./schema/pricingShcema";
import { bannerSchema } from "./schema/bannerShcema";
import { heroDescriptionShcema } from "./schema/heroDescriptionShcema";
import { contactSchema } from "./schema/contactShcema";

const pricingPage = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/pages/pricing" }),
    schema: pricingSchema,
});

const contactPage = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/pages/contact" }),
    schema: contactSchema,
});

const banner = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/banner" }),
    schema: bannerSchema,
});

const heroDescription = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/heroDescription" }),
    schema: heroDescriptionShcema,
});

export const collections = {
    pricingPage,
    banner,
    heroDescription,
    contactPage,
};
