import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Volunteer.vue
var _sfc_main = {
	__name: "Volunteer",
	__ssrInlineRender: true,
	setup(__props) {
		const cards = [
			{
				title: "Book a free valuation",
				body: "A no-obligation, in-person appraisal from a local valuer. We will give you an honest view of what your property is worth — and what we would do to sell or let it.",
				cta: "Book yours",
				href: "#valuation",
				accent: true
			},
			{
				title: "Landlord services",
				body: "Tenant-find or fully managed, with rent collection, inventories, compliance and ongoing property care. A single point of contact and transparent fees.",
				cta: "Talk to lettings",
				href: "#contact",
				accent: false
			},
			{
				title: "Why choose us",
				body: "Independent, local, and the area's longest-established. The same agent looks after you from instruction to completion — no call centres, no being passed around.",
				cta: "About our office",
				href: "#about",
				accent: false
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "valuation",
				class: "py-20 lg:py-24 bg-white"
			}, _attrs))}><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="text-center mb-14 max-w-2xl mx-auto"><p class="eyebrow text-accent-600 mb-3">How we help</p><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-display leading-[1.1]"> Three good <span class="accent-italic">first</span> steps. </h2></div><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
			ssrRenderList(cards, (card) => {
				_push(`<div class="${ssrRenderClass([card.accent ? "bg-brand-900 text-white border-brand-900" : "bg-white text-brand-900 border-warm-200 hover:border-accent-300", "p-8 border transition-colors flex flex-col"])}"><h3 class="${ssrRenderClass([card.accent ? "text-white" : "text-brand-900", "text-2xl font-bold tracking-display leading-tight mb-4"])}">${ssrInterpolate(card.title)}</h3><p class="${ssrRenderClass([card.accent ? "text-white/75" : "text-warm-500", "text-sm leading-relaxed mb-8 flex-1"])}">${ssrInterpolate(card.body)}</p><a${ssrRenderAttr("href", card.href)} class="${ssrRenderClass([card.accent ? "text-accent-300 hover:text-accent-200" : "text-accent-600 hover:text-accent-700", "inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-semibold"])}">${ssrInterpolate(card.cta)} <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Volunteer.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
