import { usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, unref, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/About.vue
var _sfc_main = {
	__name: "About",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const bullets = [
			"Senior, named agents — no being passed around",
			"Honest, evidenced valuations — never inflated to win the instruction",
			"Professional photography, floor plans &amp; accompanied viewings on every listing",
			"Listed on Rightmove, Zoopla and OnTheMarket as standard"
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "about",
				class: "py-20 lg:py-28 bg-white"
			}, _attrs))}><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"><div class="order-2 lg:order-1"><div class="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden bg-brand-gradient"><div class="absolute inset-0 opacity-10" style="${ssrRenderStyle({
				"background-image": "radial-gradient(circle, #ffffff 1px, transparent 1px)",
				"background-size": "22px 22px"
			})}"></div><svg class="absolute inset-0 w-full h-full" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><path d="M0 280 L40 240 L80 280 L80 400 L0 400 Z" fill="#0c1827" opacity="0.55"></path><path d="M80 260 L80 230 L130 180 L180 230 L180 400 L80 400 Z" fill="#0c1827" opacity="0.55"></path><path d="M180 290 L180 260 L220 220 L260 260 L260 400 L180 400 Z" fill="#0c1827" opacity="0.55"></path><path d="M260 300 L260 280 L290 250 L320 280 L320 400 L260 400 Z" fill="#0c1827" opacity="0.55"></path><rect x="15" y="290" width="10" height="14" fill="#06b89a"></rect><rect x="35" y="290" width="10" height="14" fill="#06b89a"></rect><rect x="100" y="280" width="14" height="18" fill="#06b89a"></rect><rect x="130" y="280" width="14" height="18" fill="#06b89a"></rect><rect x="155" y="280" width="14" height="18" fill="#06b89a"></rect><rect x="195" y="290" width="12" height="16" fill="#06b89a"></rect><rect x="225" y="290" width="12" height="16" fill="#06b89a"></rect><rect x="270" y="310" width="10" height="14" fill="#06b89a"></rect><rect x="290" y="310" width="10" height="14" fill="#06b89a"></rect></svg><div class="absolute bottom-6 left-6 bg-white px-5 py-4 shadow-md"><p class="text-xs text-warm-500 mb-1">Established</p><p class="text-2xl font-bold text-brand-900 tracking-display">${ssrInterpolate(unref(page).props.site.established)}</p><p class="text-xs text-accent-600 font-semibold mt-1">Independent &amp; family-run</p></div></div></div><div class="order-1 lg:order-2"><p class="eyebrow text-accent-600 mb-3">About the office</p><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-display leading-[1.1] mb-6"> The area’s longest-established <span class="accent-italic">independent</span> estate agent. </h2><p class="text-warm-600 leading-relaxed mb-5"> Opened on Penwortham high street in ${ssrInterpolate(unref(page).props.site.established)}, we’ve been selling and letting homes across South Ribble and the Ribble Valley ever since. Five local agents, accompanied viewings, and a phone that gets picked up. </p><p class="text-warm-600 leading-relaxed mb-8"> We won’t over-value to win the instruction, and the same agent will look after you from valuation to completion. </p><ul class="space-y-3 mb-10"><!--[-->`);
			ssrRenderList(bullets, (b) => {
				_push(`<li class="flex items-start gap-3 text-sm text-brand-800"><svg class="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span>${b ?? ""}</span></li>`);
			});
			_push(`<!--]--></ul><div class="flex flex-wrap gap-3"><a href="#valuation" class="inline-flex items-center gap-3 px-7 py-3.5 bg-accent-500 text-white text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-accent-600 transition-colors shadow-sm"> Book a valuation </a><a href="#team" class="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase font-semibold text-brand-900 border border-brand-200 hover:border-brand-900 transition-colors"> Meet the team </a></div></div></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/About.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
