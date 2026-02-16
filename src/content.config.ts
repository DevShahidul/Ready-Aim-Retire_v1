import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { pricingSchema } from "./schema/pricingSchema";
import { bannerSchema } from "./schema/bannerSchema";
import { heroDescriptionShcema } from "./schema/heroDescriptionSchema";
import { contactSchema } from "./schema/contactSchema";
import { infoCardSchema } from "./schema/infoCardSchema";

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

const infoCard = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/infoCard" }),
    schema: infoCardSchema,
});

export const collections = {
    infoCard,
    pricingPage,
    banner,
    heroDescription,
    contactPage,
};
