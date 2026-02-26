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
import { commitmentSchema } from "./schema/our-commitmentSchema";
import { advisorsSchema } from "./schema/advisorsSchema";
import { fireSchema } from "./schema/fireSchema";
import { aboutSchema } from "./schema/aboutSchema";
import { privacyPolicySchema } from "./schema/privacyPolicySchema";
import { referSchema } from "./schema/referSchema";
import { blogDetailsSchema } from "./schema/blogDetailsSchema";
import { retireesSchema } from "./schema/retireesSchema";
import { faqsSchema } from "./schema/faqsSchema";

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

const privacyPage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/privacy-policy",
    }),
    schema: privacyPolicySchema,
});

const ourCommitmentPage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/our-commitment",
    }),
    schema: commitmentSchema,
});

const advisorsPage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/advisors",
    }),
    schema: advisorsSchema,
});

const firePage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/fire",
    }),
    schema: fireSchema,
});

const aboutPage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/about",
    }),
    schema: aboutSchema,
});

const referPage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/refer",
    }),
    schema: referSchema,
});

const blogDetailsPage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/blog-details",
    }),
    schema: blogDetailsSchema,
});

const retireesPage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/retirees",
    }),
    schema: retireesSchema,
});

const faqsPage = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/pages/faqs",
    }),
    schema: faqsSchema,
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
    ourCommitmentPage,
    advisorsPage,
    firePage,
    aboutPage,
    privacyPage,
    referPage,
    blogDetailsPage,
    retireesPage,
    faqsPage,
};
