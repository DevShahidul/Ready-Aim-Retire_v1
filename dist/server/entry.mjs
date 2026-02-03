import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C_OPwgY-.mjs';
import { manifest } from './manifest_B4p-DiwW.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/accounts.astro.mjs');
const _page4 = () => import('./pages/advisors.astro.mjs');
const _page5 = () => import('./pages/affiliates.astro.mjs');
const _page6 = () => import('./pages/api/admin/generate-image.astro.mjs');
const _page7 = () => import('./pages/api/admin/generate-prompt.astro.mjs');
const _page8 = () => import('./pages/api/admin/posts.astro.mjs');
const _page9 = () => import('./pages/api/admin/save-image.astro.mjs');
const _page10 = () => import('./pages/budget.astro.mjs');
const _page11 = () => import('./pages/chanceofsuccess.astro.mjs');
const _page12 = () => import('./pages/contact.astro.mjs');
const _page13 = () => import('./pages/cookies.astro.mjs');
const _page14 = () => import('./pages/faqs.astro.mjs');
const _page15 = () => import('./pages/features/income.astro.mjs');
const _page16 = () => import('./pages/features/scenarios.astro.mjs');
const _page17 = () => import('./pages/features/stress-test.astro.mjs');
const _page18 = () => import('./pages/features/taxes.astro.mjs');
const _page19 = () => import('./pages/features/timeline.astro.mjs');
const _page20 = () => import('./pages/features.astro.mjs');
const _page21 = () => import('./pages/financial-literacy.astro.mjs');
const _page22 = () => import('./pages/fire.astro.mjs');
const _page23 = () => import('./pages/gift-memberships.astro.mjs');
const _page24 = () => import('./pages/networth.astro.mjs');
const _page25 = () => import('./pages/pricing.astro.mjs');
const _page26 = () => import('./pages/privacy.astro.mjs');
const _page27 = () => import('./pages/refer.astro.mjs');
const _page28 = () => import('./pages/retirees.astro.mjs');
const _page29 = () => import('./pages/terms.astro.mjs');
const _page30 = () => import('./pages/updates.astro.mjs');
const _page31 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/accounts.astro", _page3],
    ["src/pages/advisors.astro", _page4],
    ["src/pages/affiliates.astro", _page5],
    ["src/pages/api/admin/generate-image.ts", _page6],
    ["src/pages/api/admin/generate-prompt.ts", _page7],
    ["src/pages/api/admin/posts.ts", _page8],
    ["src/pages/api/admin/save-image.ts", _page9],
    ["src/pages/budget.astro", _page10],
    ["src/pages/chanceofsuccess.astro", _page11],
    ["src/pages/contact.astro", _page12],
    ["src/pages/cookies.astro", _page13],
    ["src/pages/faqs.astro", _page14],
    ["src/pages/features/income.astro", _page15],
    ["src/pages/features/scenarios.astro", _page16],
    ["src/pages/features/stress-test.astro", _page17],
    ["src/pages/features/taxes.astro", _page18],
    ["src/pages/features/timeline.astro", _page19],
    ["src/pages/features/index.astro", _page20],
    ["src/pages/financial-literacy.astro", _page21],
    ["src/pages/fire.astro", _page22],
    ["src/pages/gift-memberships.astro", _page23],
    ["src/pages/networth.astro", _page24],
    ["src/pages/pricing.astro", _page25],
    ["src/pages/privacy.astro", _page26],
    ["src/pages/refer.astro", _page27],
    ["src/pages/retirees.astro", _page28],
    ["src/pages/terms.astro", _page29],
    ["src/pages/updates.astro", _page30],
    ["src/pages/index.astro", _page31]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/dist/client/",
    "server": "file:///run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
