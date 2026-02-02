import { f as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, a as renderTemplate } from './astro/server_DZIuF2pX.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://readyaimretire.com");
const $$CTABanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTABanner;
  const {
    headline = "Take aim at your retirement with OnTarget™",
    description = "Sign up today and start building the financial plan you deserve. It's free to get started!",
    buttonText = "Get Started",
    buttonLink = `${"https://app.readyaimretire.com"}/signup`
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="cta-banner" data-astro-cid-kzge7gel> <div class="cta-container" data-astro-cid-kzge7gel> <h2 data-astro-cid-kzge7gel>${unescapeHTML(headline.replace("OnTarget™", "OnTarget<sup>™</sup>"))}</h2> <div class="cta-right" data-astro-cid-kzge7gel> <p data-astro-cid-kzge7gel>${description}</p> <a${addAttribute(buttonLink, "href")} class="cta-button" data-astro-cid-kzge7gel> ${buttonText} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kzge7gel> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-kzge7gel></line> <polyline points="12 5 19 12 12 19" data-astro-cid-kzge7gel></polyline> </svg> </a> </div> </div> </section> `;
}, "C:/ProjectsSteve/calculator-www/src/components/CTABanner.astro", void 0);

export { $$CTABanner as $ };
