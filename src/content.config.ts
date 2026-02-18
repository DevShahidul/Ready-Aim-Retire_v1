import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { pricingSchema } from "./schema/pricingSchema";
import { bannerSchema } from "./schema/bannerSchema";
import { heroDescriptionShcema } from "./schema/heroDescriptionSchema";
import { contactSchema } from "./schema/contactSchema";
import { infoCardSchema } from "./schema/infoCardSchema";
import { infoColumnSchema } from "./schema/infoColumnSchema";
import { cookiePolicySchema } from "./schema/cookiePolicySchema";
import { displayCardSchema } from "./schema/displayCardSchema";

const pricingPage = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/pages/pricing" }),
    schema: pricingSchema,
});

const contactPage = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/pages/contact" }),
    schema: contactSchema,
});

const cookiePage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/cookie-policy",
    }),
    schema: cookiePolicySchema,
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

const infoColumn = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/infoColumn" }),
    schema: infoColumnSchema,
});

const displayCard = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/displayCard" }),
    schema: displayCardSchema,
});

export const collections = {
    infoColumn,
    displayCard,
    infoCard,
    pricingPage,
    banner,
    heroDescription,
    contactPage,
    cookiePage,
};
