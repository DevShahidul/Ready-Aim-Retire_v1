import { f as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_DZIuF2pX.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://readyaimretire.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items, theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`breadcrumbs breadcrumbs-${theme}`, "class")} aria-label="Breadcrumb" data-astro-cid-ilhxcym7> <ol data-astro-cid-ilhxcym7> <li data-astro-cid-ilhxcym7> <a href="/" data-astro-cid-ilhxcym7>Home</a> </li> ${items.map((item, index) => renderTemplate`<li data-astro-cid-ilhxcym7> ${item.href && index < items.length - 1 ? renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-ilhxcym7>${item.label}</a>` : renderTemplate`<span aria-current="page" data-astro-cid-ilhxcym7>${item.label}</span>`} </li>`)} </ol> </nav> `;
}, "C:/ProjectsSteve/calculator-www/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
