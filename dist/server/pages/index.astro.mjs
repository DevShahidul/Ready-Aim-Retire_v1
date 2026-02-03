import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderScript, k as renderComponent } from '../chunks/astro/server_C1KXtyjF.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_wN0cFeTq.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$CTABanner } from '../chunks/CTABanner_BX4k0jEI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://readyaimretire.com");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { id, name, date, quote, sourceImage, sourceType = "email" } = Astro2.props;
  const initials = name.charAt(0).toUpperCase();
  const colors = ["#3b7eff", "#14b8a6", "#8b5cf6", "#f59e0b", "#ef4444", "#10b981", "#6366f1", "#ec4899"];
  const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const avatarColor = colors[colorIndex];
  return renderTemplate`${maybeRenderHead()}<div class="testimonial-card-v2"${addAttribute(id, "data-testimonial-id")} data-astro-cid-3ba2o4vp> <p class="quote" data-astro-cid-3ba2o4vp>"${quote}"</p> <div class="card-footer" data-astro-cid-3ba2o4vp> <div class="author" data-astro-cid-3ba2o4vp> <div class="avatar-initials"${addAttribute(`background-color: ${avatarColor}`, "style")} data-astro-cid-3ba2o4vp> ${initials} </div> <div class="author-info" data-astro-cid-3ba2o4vp> <div class="name" data-astro-cid-3ba2o4vp>${name}</div> <div class="date" data-astro-cid-3ba2o4vp>${date}</div> </div> </div> ${sourceImage && renderTemplate`<button class="view-source-btn"${addAttribute(`/images/reviews/${sourceImage}`, "data-source-image")}${addAttribute(sourceType, "data-source-type")}${addAttribute(name, "data-testimonial-name")} aria-label="View original testimonial" data-astro-cid-3ba2o4vp> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ba2o4vp> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-3ba2o4vp></path> <polyline points="15 3 21 3 21 9" data-astro-cid-3ba2o4vp></polyline> <line x1="10" y1="14" x2="21" y2="3" data-astro-cid-3ba2o4vp></line> </svg>
View Source
</button>`} </div> </div> `;
}, "/run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/src/components/TestimonialCard.astro", void 0);

const $$SourceModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="source-modal" class="source-modal" aria-hidden="true" role="dialog" aria-modal="true" data-astro-cid-ixcohupy> <div class="modal-backdrop" data-astro-cid-ixcohupy></div> <div class="modal-container" data-astro-cid-ixcohupy> <div class="modal-header" data-astro-cid-ixcohupy> <span class="modal-title" data-astro-cid-ixcohupy>Original Testimonial</span> <button class="modal-close" aria-label="Close modal" data-astro-cid-ixcohupy> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ixcohupy> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-ixcohupy></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-ixcohupy></line> </svg> </button> </div> <div class="modal-body" data-astro-cid-ixcohupy> <div class="modal-image-container" data-astro-cid-ixcohupy> <img id="modal-source-image" src="" alt="Original testimonial" data-astro-cid-ixcohupy> </div> <div class="modal-caption" data-astro-cid-ixcohupy> <span id="modal-source-type" class="source-badge" data-astro-cid-ixcohupy>Email</span> <span id="modal-source-name" class="source-name" data-astro-cid-ixcohupy></span> </div> </div> </div> </div>  ${renderScript($$result, "/run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/src/components/SourceModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/src/components/SourceModal.astro", void 0);

const testimonials = [{"id":1,"name":"Graham","date":"Jan 2018","quote":"I have been using the calculator a lot and I think it's fantastic! Nothing else I've found comes close to how useful this is.","sourceImage":"Review-1.png","sourceType":"email"},{"id":4,"name":"Diane","date":"Apr 2019","quote":"Your version is the best one I've found yet! Thanks for sharing it.","sourceImage":"Review-4.png","sourceType":"email"},{"id":5,"name":"Anddie","date":"Apr 2019","quote":"I love your calculator. It is my favorite one I have found because I can put in multiple pensions starting at various ages. When I discuss finances with friends and family it is always the calculator I point them to.","sourceImage":"Review-5.png","sourceType":"email"},{"id":6,"name":"Raj","date":"Apr 2019","quote":"So glad to see this site back up. I love being able to manipulate different scenarios. The table view gives me the most info. Love it. Please keep it up!","sourceImage":"Review-6.png","sourceType":"email"},{"id":7,"name":"Felix","date":"May 2019","quote":"Your 4% investment retirement calculator is #1 best. Thanks for the great calc again!","sourceImage":"Review-7.png","sourceType":"email"},{"id":10,"name":"Susan","date":"Feb 2020","quote":"I just found your calculator from a comment to an article and just wanted to tell you how clear and easy it is! Our financial advisor uses Living Balance Sheet and your calculator was much easier to use than his. I just love being able to work with the various levers to see the results of the Monte Carlo simulations.","sourceImage":"Review-10.png","sourceType":"email"},{"id":11,"name":"Roy","date":"Apr 2020","quote":"I love your calculator because it makes it look like I can retire now!","sourceImage":"Review-11.png","sourceType":"email"},{"id":12,"name":"David","date":"May 2020","quote":"Your calculator is absolutely amazing.","sourceImage":"Review-12.png","sourceType":"email"},{"id":13,"name":"Rich","date":"Aug 2020","quote":"Calculator is amazing. Great work and thank you!","sourceImage":"Review-13.png","sourceType":"email"},{"id":14,"name":"Geoffry","date":"Aug 2020","quote":"I really like using your savings withdrawal calculator. Congrats! It's super easy running various scenarios.","sourceImage":"Review-14.png","sourceType":"email"},{"id":16,"name":"Adam","date":"Dec 2020","quote":"Just wanted to say that as a financial nerd of sorts, I truly love and appreciate your tool. It's the most comprehensive and accurate tool out there. Thank you very much!","sourceImage":"Review-16.png","sourceType":"email"},{"id":17,"name":"Ginny","date":"Jan 2021","quote":"Thank you for creating that calculator!","sourceImage":"Review-17.png","sourceType":"email"},{"id":18,"name":"Howard","date":"Jan 2021","quote":"I think this is the most comprehensive and dynamic tool I have seen for retirement planning. I love the flexibility of scenarios that are offered, and a simplistic interface. Thanks for providing this incredible tool for the compulsive planner!!","sourceImage":"Review-18.png","sourceType":"email"},{"id":19,"name":"Jon","date":"Jan 2021","quote":"I love your calculator. I have been scouring the internet trying to find one that could do what I needed it to do, and yours was the best one. Especially with all the options. I sat down with my bride, and we walked through your tool adding in our income and expense streams and it looks very good. It really gave her peace of mind and perspective.","sourceImage":"Review-19.png","sourceType":"email"},{"id":21,"name":"Deryk","date":"Mar 2021","quote":"Really enjoy your calculator. Really well done and I think it's even better than the firecalc calculator. I love some of the add-ons you put in it. Really like this site, I'll put a link on my FB Page.","sourceImage":"Review-21.png","sourceType":"email"},{"id":22,"name":"John","date":"Apr 2021","quote":"I just wanted to say I love the calculator. Great tool!","sourceImage":"Review-22.png","sourceType":"email"},{"id":23,"name":"Imad","date":"Apr 2021","quote":"Your calculator is well coded and comprehensive. I found it the most close to reality of all calculators out there. Thanks again. You helped a lot.","sourceImage":"Review-23.png","sourceType":"email"},{"id":24,"name":"David","date":"May 2021","quote":"I stumbled on your site/calculator. It was the first I clicked on and I see no need to look further. It seems exhaustive, or at least it has all the capabilities I'd like to see.","sourceImage":"Review-24.png","sourceType":"email"},{"id":29,"name":"J","date":"Jun 2021","quote":"Your 4 percent rule calculator is the most complete retirement calculator I've found. I absolutely love it. Great job overall on your calculator!!!!","sourceImage":"Review-29.png","sourceType":"email"},{"id":30,"name":"Ken","date":"Jul 2021","quote":"I wanted to take a moment to thank you for your work on this very valuable tool to help folks like myself. It gives me some peace of mind and helps me easily add in some inflation along with Social Security for my wife and me at 70 years of age.","sourceImage":"Review-30.png","sourceType":"email"},{"id":60,"name":"Ed","date":"Oct 2023","quote":"Good calculator. Nice to play with various numbers and see the impact.","sourceImage":"Review-60.png","sourceType":"email"},{"id":65,"name":"Scott","date":"Feb 2024","quote":"As I approach retirement, I have looked at quite a few calculators on the web to get a complete number of variables like yours. Yours seems to be nicely done and takes into account my situation with retiring but delaying SS and simple army pension included as it impacts bottom line to see when I can retire and hope to live a long life to enjoy it.","sourceImage":"Review-65.png","sourceType":"email"},{"id":70,"name":"Robert","date":"Jun 2024","quote":"I utilize the calculator all the time, it's fantastic and part of my quarterly finetuning. In fact, I've even shared it with a few of my friends. I'm 52 and looking at a possible early retirement 58-60 range and find the ability to game out options invaluable. Thanks so much for creating that tool.","sourceImage":"Review-70.png","sourceType":"email"},{"id":75,"name":"Rich","date":"Sep 2024","quote":"I recently found your calculator, it appears to be the best I've seen.","sourceImage":"Review-75.png","sourceType":"email"},{"id":80,"name":"Terri","date":"Feb 2025","quote":"I found your web site and love it.","sourceImage":"Review-80.png","sourceType":"email"},{"id":81,"name":"Tawny","date":"Feb 2025","quote":"Just wanted to say thank you for such a great online tool and that you make it available to everyone really says a lot about you! Thank you so much!","sourceImage":"Review-81.png","sourceType":"email"},{"id":82,"name":"Mark","date":"Mar 2025","quote":"I found your calculator about a year ago and have relied heavily on it for retirement calculations.","sourceImage":"Review-82.png","sourceType":"email"},{"id":83,"name":"Timothy","date":"Mar 2025","quote":"Firstly, amazing website. Thank you for your work. This is a really great resource.","sourceImage":"Review-83.png","sourceType":"email"}];
const testimonialData = {
  testimonials};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://readyaimretire.com");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const {
    limit,
    initialShow,
    showHeader = true,
    heading = "Success stories from our users and see how OnTarget transforms their planning.",
    layout = "masonry"
  } = Astro2.props;
  const testimonials = limit ? testimonialData.testimonials.slice(0, limit) : testimonialData.testimonials;
  const hasLoadMore = initialShow && initialShow < testimonials.length;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="testimonials-section" data-astro-cid-aadlzisc> <div class="container" data-astro-cid-aadlzisc> ', " <div", ' data-aos="fade-up" data-aos-delay="100"', " data-astro-cid-aadlzisc> ", " </div> ", " </div> </section> <!-- Modal for viewing source images - included once --> ", "  <script>\ndocument.addEventListener('DOMContentLoaded', function() {\n    var btn = document.getElementById('load-more-testimonials');\n    if (!btn) return;\n    btn.addEventListener('click', function(e) {\n        e.preventDefault();\n        var hidden = document.querySelectorAll('.testimonial-hidden');\n        hidden.forEach(function(el) {\n            el.classList.remove('testimonial-hidden');\n        });\n        btn.parentElement.remove();\n    });\n});\n</script>"])), maybeRenderHead(), showHeader && renderTemplate`<div class="testimonials-header" data-aos="fade-up" data-astro-cid-aadlzisc> <h2 data-astro-cid-aadlzisc>${heading}</h2> <a${addAttribute(`${undefined                              }/signup`, "href")} class="btn-dark" data-astro-cid-aadlzisc>Try for free <span class="arrow" data-astro-cid-aadlzisc>→</span></a> </div>`, addAttribute(`testimonials-${layout}`, "class"), addAttribute(initialShow, "data-initial-show"), testimonials.map((testimonial, i) => renderTemplate`<div${addAttribute(["testimonial-wrapper", { "testimonial-hidden": hasLoadMore && i >= initialShow }], "class:list")} data-astro-cid-aadlzisc> ${renderComponent($$result, "TestimonialCard", $$TestimonialCard, { "id": testimonial.id, "name": testimonial.name, "date": testimonial.date, "quote": testimonial.quote, "sourceImage": testimonial.sourceImage, "sourceType": testimonial.sourceType, "data-astro-cid-aadlzisc": true })} </div>`), hasLoadMore && renderTemplate`<div class="load-more-container" data-astro-cid-aadlzisc> <a href="#" class="load-more-link" id="load-more-testimonials" data-astro-cid-aadlzisc>Load more</a> </div>`, renderComponent($$result, "SourceModal", $$SourceModal, { "data-astro-cid-aadlzisc": true }));
}, "/run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/src/components/Testimonials.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "ReadyAimRetire – Visualize Your Retirement", "description": "Plan your retirement with confidence. Adjust income, spending, and market assumptions and instantly see the impact with ReadyAimRetire." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", `<section class="hero" id="home"> <div class="container" data-aos="fade" data-aos-delay="200"> <h1 id="hero-title">Visualize your<br>retirement</h1> <p class="hero-tagline-text">
Clearly, confidently, all in one place
</p> <p id="hero-subtitle">
Ready Aim Retire offers the easiest way to model, visualize, and
                stress-test your retirement plan – whether you're just starting
                to think about retirement or fine-tuning a detailed plan. Take
                aim at your retirement with OnTarget™.
</p> <a`, ` id="hero-btn" class="btn btn-hero" style="margin-bottom: 2rem;">Start Your Plan <span class="arrow"> <i class="fa-solid fa-arrow-right"></i> </span></a> </div> </section>  <section class="hero-screenshot"> <div class="container" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200"> <img class="hero-img" src="/images/landingapp.png" alt="ReadyAimRetire app screenshot"> </div> </section>  <section class="ontarget-section"> <div class="container"> <div class="ontarget-header" data-aos="fade-up"> <img src="/images/logos/ontarget/ontarget_black_green.png" alt="OnTarget™ by Ready Aim Retire" class="ontarget-logo"> </div> <div class="ontarget-cards" data-aos="fade-up" data-aos-delay="100"> <div class="ontarget-card ontarget-card-highlight"> <h3>Holistic Timeline</h3> <p>
Watch your financial life unfold year by year –
                        accumulation, retirement, and beyond.
</p> </div> <div class="ontarget-card"> <h3>Scenario Planning</h3> <p>
What if you retire earlier? Spend more? Markets
                        underperform? Adjust assumptions and instantly see the
                        long and short term impact.
</p> </div> <div class="ontarget-card"> <h3>Income & Spending Clarity</h3> <p>
Understand where your money comes from and where it goes
                        – before and after retirement.
</p> </div> <div class="ontarget-card"> <h3>Stress Test Your Plan</h3> <p>
Run your plan through historical market data. More
                        certainty comes from better insight.
</p> </div> <div class="ontarget-card"> <h3>Maximize Taxes & Benefits</h3> <p>
See taxes and social security as part of the plan – that
                        fits into long-term sustainability.
</p> </div> </div> <!-- Interactive Animation Demo (commented out) --> <!-- <div class="animation-demo" data-aos="fade-up" data-aos-delay="200">
                <MonthlySpendingAnimation />
            </div> --> </div> </section>  <section class="complete-system-section"> <div class="container feature" data-aos="fade-up"> <div class="feature-text"> <h2>
Complete retirement planning system – built to show the <span class="text-teal">full picture</span> </h2> <p>
OnTarget™ isn't a collection of disconnected accounts and
                    assumptions. It's a holistic planning environment that
                    models your entire financial life – before, during, and
                    throughout retirement.
</p> <p class="text-italic">
Everything connects. Nothing lives in isolation.
</p> <a`, ' class="btn-dark">\nStart Planning\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="5" y1="12" x2="19" y2="12"></line> <polyline points="12 5 19 12 12 19"></polyline> </svg> </a> </div> <div class="feature-img"> <img src="/images/taxes.png" alt="Tax strategy chart"> </div> </div> </section>  <section id="features" class="section-gray"> <div class="container feature" data-aos="fade-right"> <div class="feature-img"> <img src="/images/taxes.png" alt="Tax strategy chart"> <!-- Scrolling Sliders Window Overlay (commented out) --> <!-- <div class="scrolling-window" style="position: absolute; top: 50%; left: -70px; transform: translateY(-50%); width: 54%; height: 420px; overflow: hidden; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">\n                    <div class="scrolling-content">\n                        <img src="/images/sliders.png" alt="Sliders preview">\n                        <img src="/images/sliders.png" alt="Sliders preview">\n                    </div>\n                </div> --> </div> <div class="feature-text"> <h2>\nUnlimited scenarios, unlimited <span class="text-teal">flexibility</span> </h2> <p>\nModel real life – not perfect assumptions. Life changes,\n                    your plan should be able to change with it. OnTarget™ allows\n                    you to create, save, and compare unlimited scenarios, such\n                    as:\n</p> <ul class="feature-list"> <li>Retiring earlier or later</li> <li>Spending more or less</li> <li>Market underperformance or outperformance</li> <li>Major purchases or windfalls</li> <li>Health events or lifestyle changes</li> </ul> <p class="text-italic">\nExplore "what if?" scenarios without fear of breaking your\n                    plan.\n</p> <a', ' class="btn-dark" style="margin-top: 1.5rem;">Try for free <span class="arrow"> <i class="fa-solid fa-arrow-right"></i> </span></a> </div> </div> </section>  <section> <div class="container feature" data-aos="fade-left"> <div class="feature-text"> <h2>\nBuild a detailed retirement budget with <span class="text-teal">smarter</span> retirement withdrawals\n</h2> <p>\nKnow what retirement actually costs. Create a detailed, <strong>realistic budget</strong> for your retirement years – and adjust it as life evolves. Strategize\n                    how and when to withdraw from your accounts to support <strong>long-term longevity</strong>.\n</p> <ul class="feature-list"> <li>Different withdrawal strategies</li> <li>Account sequencing</li> <li>The impact of taxes and timing</li> <li>Make your money last – Intentionally</li> </ul> <p class="text-italic">\nSmall decisions can have large long-term consequences.\n                    OnTarget™ helps you see them clearly.\n</p> <a', ' class="btn-dark" style="margin-top: 1.5rem;">Start Planning <span class="arrow">→</span></a> </div> <div class="feature-img"> <img src="/images/taxes.png" alt="Tax strategy chart"> </div> </div> </section>  <section class="section-gray"> <div class="container feature" data-aos="fade-right"> <div class="feature-img"> <img src="/images/accounts.png" alt="Stress testing visualization"> </div> <div class="feature-text"> <h2> <span class="text-teal">Confidence</span> comes from pressure-testing\n</h2> <p>\nExplore how your retirement plan could perform under various\n                    economic conditions. OnTarget™ uses <strong>Monte Carlo simulations</strong> to model thousands of scenarios, delivering realistic insights\n                    rather than misleading presumptions.\n</p> <p>Stress testing helps you:</p> <ul class="feature-checklist"> <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg>\nUnderstand risk, not fear it\n</li> <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg>\nSee potential weak points\n</li> <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg>\nMake adjustments before compromising\n</li> </ul> <a', ' class="btn-dark" style="margin-top: 1.5rem;">Try for free <span class="arrow">→</span></a> </div> </div> </section>  <section> <div class="container feature" data-aos="fade-left"> <div class="feature-text"> <h2>\nNavigate taxes with <span class="text-teal">clarity</span> and\n<span class="text-teal">plan</span> for Social Security with confidence\n</h2> <p> <strong>Taxes matter</strong> – especially in retirement. OnTarget™\n                    helps you plan across all major account types, including tax-deferred,\n                    tax-free, and taxable accounts.\n</p> <p>\nModel Social Security collection strategies and see how <strong>timing</strong> impacts your retirement income and overall plan. Uncover how\n                    benefits integrate with other income sources and the tradeoffs\n                    of claiming earlier vs later.\n</p> <a', ` class="btn-dark" style="margin-top: 1.5rem;">Start Planning <span class="arrow">→</span></a> </div> <div class="feature-img"> <img src="/images/taxes.png" alt="Tax strategy chart"> </div> </div> </section>    <section class="clearer-plan-section-v2"> <div class="container"> <div class="clearer-plan-card" data-aos="fade-up"> <div class="clearer-plan-text"> <h2>
A clearer way to plan retirement – built for <span class="text-teal">real people</span> </h2> <p>
OnTarget™ helps you model your entire financial life,
                        not just a single number or projection. Visualize
                        income, spending, taxes, and assets over time. Explore
                        endless "what-if" scenarios without breaking anything.
                        Understand how today's decisions affect decades of
                        retirement.
</p> <p class="text-bold">
Adjust as life changes – because it always does.
</p> </div> <div class="clearer-plan-image"> <img src="/images/landing/stock/couple_water.jpg" alt="People with a retirement plan feel more confident about their future"> <div class="clearer-plan-stat-overlay"> <div class="stat-number">87%</div> <div class="stat-headline">
People with a retirement plan feel more confident
                            about their future.
</div> <div class="stat-subtext">
Confidence comes from planning, not guessing.
</div> </div> </div> </div> <div class="clearer-plan-benefits" data-aos="fade-up" data-aos-delay="100"> <div class="benefit-pill"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span>Spot risks early</span> </div> <div class="benefit-pill"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span>Understand trade-offs</span> </div> <div class="benefit-pill"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span>Prepare for the unexpected</span> </div> <div class="benefit-pill"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span>Everything works together</span> </div> </div> </div> </section>  `, "  ", `  <script>
        document.addEventListener("DOMContentLoaded", function () {
            // Scrolling sliders animation (commented out)
            /*
        const scrollingContent = document.querySelector('.scrolling-content');
        if (scrollingContent) {
            scrollingContent.style.animationPlayState = 'running';

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        scrollingContent.style.animation = 'none';
                        scrollingContent.offsetHeight;
                        scrollingContent.style.animation = 'scrollUp 30s linear infinite';
                        scrollingContent.style.animationPlayState = 'running';
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(scrollingContent);

            setTimeout(function() {
                scrollingContent.style.animation = 'none';
                scrollingContent.offsetHeight;
                scrollingContent.style.animation = 'scrollUp 30s linear infinite';
                scrollingContent.style.animationPlayState = 'running';
            }, 1000);
        }
        */

            // GSAP animations
            const heroTitleEl = document.getElementById("hero-title");
            const originalTitleHTML = heroTitleEl ? heroTitleEl.innerHTML : "";

            function splitWordsToSpans(element) {
                const html = element.innerHTML;
                const words = html
                    .replace(/<br[^>]*>/gi, " __BR__ ")
                    .split(" ");
                element.innerHTML = "";
                words.forEach((word, i) => {
                    if (word === "__BR__") {
                        element.appendChild(document.createElement("br"));
                    } else if (word) {
                        const span = document.createElement("span");
                        span.textContent = word;
                        span.style.display = "inline-block";
                        span.style.marginRight = "0.3em";
                        if (word.toLowerCase() === "retirement") {
                            span.classList.add("text-primary");
                        }
                        element.appendChild(span);
                    }
                });
                return element.querySelectorAll("span");
            }

            // Hero animation on page load
            if (heroTitleEl) {
                heroTitleEl.style.visibility = "hidden";
                const heroSubtitleEl = document.getElementById("hero-subtitle");
                const heroBtnEl = document.getElementById("hero-btn");
                gsap.set([heroSubtitleEl, heroBtnEl], { opacity: 0, y: 20 });

                setTimeout(function () {
                    heroTitleEl.style.visibility = "visible";
                    heroTitleEl.innerHTML = originalTitleHTML;
                    const words = splitWordsToSpans(heroTitleEl);
                    gsap.fromTo(
                        words,
                        { opacity: 0, filter: "blur(20px)" },
                        {
                            opacity: 1,
                            filter: "blur(0px)",
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "power2.out",
                        },
                    );

                    setTimeout(function () {
                        gsap.to(heroSubtitleEl, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                        });
                        gsap.to(heroBtnEl, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: 0.15,
                            ease: "power2.out",
                        });
                    }, 750);
                }, 300);
            }

            // Section Animations with GSAP ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            const featureSections = document.querySelectorAll(".feature");
            let currentSectionTriggers = [];

            function applySectionAnimations() {
                featureSections.forEach((section, index) => {
                    const img = section.querySelector(".feature-img");
                    const text = section.querySelector(".feature-text");
                    const isEven = index % 2 === 1;
                    gsap.set(img, { opacity: 0, x: isEven ? 100 : -100 });
                    gsap.set(text, { opacity: 0, x: isEven ? -100 : 100 });
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "top 30%",
                            toggleActions: "play none none none",
                        },
                    });
                    tl.to(img, {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    }).to(
                        text,
                        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
                        "-=0.6",
                    );
                    currentSectionTriggers.push(tl.scrollTrigger);
                });
            }

            applySectionAnimations();

            // Testimonial cards elastic bounce animation
            const testimonialCards = document.querySelectorAll(
                ".testimonial-card-v2",
            );
            testimonialCards.forEach((card, index) => {
                gsap.set(card, { opacity: 0, y: 60, scale: 0.8 });
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    delay: (index % 3) * 0.1,
                });
            });
        });
    </script>  <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ReadyAimRetire",
            "description": "Retirement planning software that helps you visualize your financial future with powerful scenario modeling and tax optimization tools.",
            "url": "https://readyaimretire.com",
            "logo": "https://readyaimretire.com/images/logos/rar/rar_white_black_bg.png",
            "sameAs": [
                "https://linkedin.com/company/readyaimretire",
                "https://x.com/readyaimretire",
                "https://facebook.com/readyaimretire",
                "https://youtube.com/@readyaimretire",
                "https://instagram.com/readyaimretire"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "support@readyaimretire.com"
            }
        }
    </script> `])), maybeRenderHead(), addAttribute(`${undefined                              }/signup`, "href"), addAttribute(`${undefined                              }/signup`, "href"), addAttribute(`${undefined                              }/signup`, "href"), addAttribute(`${undefined                              }/signup`, "href"), addAttribute(`${undefined                              }/signup`, "href"), addAttribute(`${undefined                              }/signup`, "href"), renderComponent($$result2, "Testimonials", $$Testimonials, { "limit": 28, "heading": "Our success stories", "initialShow": 18 }), renderComponent($$result2, "CTABanner", $$CTABanner, {})) })}`;
}, "/run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/src/pages/index.astro", void 0);
const $$file = "/run/media/dev-ahad-ali/Work-Station/_Development/Work/Projects/ready-aim-retire/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
