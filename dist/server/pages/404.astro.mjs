import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C1KXtyjF.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_wN0cFeTq.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found \u2013 ReadyAimRetire", "description": "The page you're looking for doesn't exist. Return to ReadyAimRetire's homepage.", "solidHeader": true, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="error-404" data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <div class="error-content" data-astro-cid-zetdm5md> <!-- Large 404 Number --> <div class="error-number" data-astro-cid-zetdm5md>404</div> <!-- Headline --> <h1 class="error-title" data-astro-cid-zetdm5md>Page Not Found</h1> <!-- Retirement-themed message --> <p class="error-message" data-astro-cid-zetdm5md>Looks like this page retired early!</p> <!-- Friendly explanation --> <p class="error-description" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist or may have been
                    moved. Don't worry though – we'll help you get back on
                    track.
</p> <!-- Helpful navigation links --> <div class="helpful-links" data-astro-cid-zetdm5md> <h2 class="helpful-title" data-astro-cid-zetdm5md>Here are some helpful links:</h2> <div class="links-grid" data-astro-cid-zetdm5md> <a href="/" class="link-card" data-astro-cid-zetdm5md> <i class="fa-solid fa-home" data-astro-cid-zetdm5md></i> <span data-astro-cid-zetdm5md>Home</span> </a> <a href="/pricing" class="link-card" data-astro-cid-zetdm5md> <i class="fa-solid fa-tag" data-astro-cid-zetdm5md></i> <span data-astro-cid-zetdm5md>Pricing</span> </a> <a href="/faqs" class="link-card" data-astro-cid-zetdm5md> <i class="fa-solid fa-circle-question" data-astro-cid-zetdm5md></i> <span data-astro-cid-zetdm5md>FAQs</span> </a> <a href="/contact" class="link-card" data-astro-cid-zetdm5md> <i class="fa-solid fa-envelope" data-astro-cid-zetdm5md></i> <span data-astro-cid-zetdm5md>Contact</span> </a> </div> </div> <!-- Optional: Back to previous page button --> <button onclick="history.back()" class="btn-back" data-astro-cid-zetdm5md> <i class="fa-solid fa-arrow-left" data-astro-cid-zetdm5md></i>
Go Back
</button> </div> </div> </section> ` })} `;
}, "/run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/src/pages/404.astro", void 0);

const $$file = "/run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
