# Ready Aim Retire

## 1. Project File Structure

```text
src/
├── components/          # Reusable UI building blocks (hero, cards, accordion, banners, testimonials, etc.)
├── data/                # Content source in Markdown/JSON (page content, FAQs, cards, hero text, banners, header/footer/CTA)
│   ├── pages/           # Page-level content files (pricing, contact, advisors, retirees, policies, etc.)
│   ├── faqs/            # FAQ category content
│   ├── heroDescription/ # Hero supporting copy rendered from Markdown body
│   ├── infoCard/        # Card-style grouped content
│   ├── infoColumn/      # Multi-column section content
│   ├── displayCard/     # Display/stat card content
│   ├── banner/          # Banner data
│   └── *.md/json        # Shared static data (e.g., testimonials)
├── layouts/             # Shared page layout (global head, header/footer, global styles)
├── pages/               # Route files and page-level composition logic
│   ├── */index.astro    # Main routed pages
│   ├── *.astro          # Top-level routes (home, policies, 404, etc.)
│   └── api/admin/       # Admin API endpoints for blog image workflow
├── schema/              # Zod schemas for content collections
├── styles/              # Centralized global styling
├── content.config.ts    # Astro content collection + loader mapping (src/data/** -> named collections)
└── lib/                 # Utilities (auth, filesystem, OpenAI/Gemini helpers)
```

Content flow is collection-driven:
- Markdown in `src/data/` is mapped in `src/content.config.ts` with collection loaders + schemas.
- Pages in `src/pages/` fetch content via `getEntry(...)` (and `render(...)` where Markdown body is needed).
- Page routes assemble shared components from `src/components/` with collection data passed as props.

## 2. Installation

```bash
npm install
```

## 3. Building

- Development server:

```bash
npm run dev
```

- Optional LAN/dev host mode:

```bash
npm run host
```

- Production build:

```bash
npm run build
```

- Preview built output:

```bash
npm run preview
```

## 4. Content Management Guidelines

This project is content-first. In most cases, you can update page text by editing Markdown files in `src/data/` without touching Astro components.

### A) How to update page text (simple workflow)

1. Find the right content file in `src/data/`.
   - Main page text: `src/data/pages/...`
   - Reusable section text: `src/data/faqs/`, `src/data/heroDescription/`, `src/data/infoCard/`, `src/data/infoColumn/`, `src/data/displayCard/`, `src/data/banner/`
2. Open the file and change only the text value (right side of `:`), not the field name (left side).
3. Save the file.
4. Run `npm run dev` (if not already running).
5. Refresh the page in browser and confirm the update appears in the correct section.
6. If the text does not appear, check that you edited the correct file and did not change indentation.

### B) How Markdown files are structured

Most files use this pattern:

```md
---
title: "Your title"
description: "Your description"
---
Optional body content here (used on some pages).
```

- The block between the two `---` lines is **frontmatter** (structured fields used by components).
- Content below the second `---` is the Markdown **body** (used on pages that render rich text, such as policy pages and some descriptions).

### C) What to keep in mind while editing

- Think of each line as **label: value**.
  - Example: `title: "Contact Us"` -> you should usually change only `"Contact Us"`, not `title`.
- Keep the left side exactly the same.
  - Do not rename keys like `title`, `description`, `faqs`, `items`, `hero`, `plans`.
- Keep spacing/indentation as it is.
  - YAML is spacing-sensitive. Small indent mistakes can break a whole block.
- Keep quotes around text when already present.
  - This avoids issues with punctuation like `:` and special characters.
- For list content, keep the dash format.
  - Example:
    - `- question: "..."` must stay as a list item.
    - If there is an `answer` under it, keep it aligned at the same indent level.
- Some text includes simple HTML for styling (like `<br/>` or `<span class='text-teal'>`).
  - You can edit the words inside, but do not remove closing tags.
- Save small changes and check in browser after each edit.
  - This makes it easy to spot which change caused an issue.
- If a section looks broken, revert only your last edit and compare with another working file in the same folder.

What to avoid in client-only updates:
- Do not rename or remove top-level keys.
- Do not change folder names or move files.
- Do not introduce brand-new data structures unless a developer is involved.

### E) Quick mapping examples

- Update `/pricing` page text: edit `src/data/pages/pricing/pricing.md`
- Update `/contact` page content: edit `src/data/pages/contact/contact.md`
- Update FAQ sections: edit files in `src/data/faqs/`
- Update hero description text used across pages: edit files in `src/data/heroDescription/`

## 5. Optimization & Refactoring Notes

- Global styling was centralized into shared style assets, reducing CSS from roughly ~8k lines to ~3–4k lines.
- Styling is now consolidated to reduce duplication and make updates easier across pages.
- The app is structured around reusable components and page composition, replacing scattered page-specific patterns.
- Content and presentation concerns are cleaner: structured Markdown data + schemas feed page components through Astro collections.
- Overall maintainability improved through clearer boundaries (`data`, `schema`, `components`, `pages`, `styles`).
