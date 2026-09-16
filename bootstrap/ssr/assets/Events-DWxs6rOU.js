import { ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Events.vue
var _sfc_main = {
	__name: "Events",
	__ssrInlineRender: true,
	setup(__props) {
		const team = [
			{
				name: "Eleanor Marsh",
				role: "Director · Senior Valuer",
				notes: "Period homes · Penwortham · Hutton · Longton",
				years: "18 yrs",
				initial: "E"
			},
			{
				name: "Iris Whittaker",
				role: "Sales Manager",
				notes: "Family homes · First-time buyers · Chain progression",
				years: "11 yrs",
				initial: "I"
			},
			{
				name: "Saoirse Doyle",
				role: "Lettings Manager",
				notes: "Managed portfolios · Compliance · Tenant referencing",
				years: "9 yrs",
				initial: "S"
			},
			{
				name: "Theo Ainsworth",
				role: "Senior Negotiator",
				notes: "New build · Investments · Land & commercial",
				years: "7 yrs",
				initial: "T"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "team",
				class: "py-20 lg:py-28 bg-white"
			}, _attrs))}><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5"><div><p class="eyebrow text-accent-600 mb-3">The team</p><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-display leading-[1.1]"> Local agents who <span class="accent-italic">listen</span> first. </h2></div><a href="#contact" class="inline-flex items-center gap-2 self-start text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"> Speak to an agent <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
			ssrRenderList(team, (member) => {
				_push(`<article class="group"><div class="relative aspect-square overflow-hidden bg-cream-200 mb-5"><div class="absolute inset-0 opacity-[0.06]" style="${ssrRenderStyle({
					"background-image": "radial-gradient(circle, #13243a 1px, transparent 1px)",
					"background-size": "18px 18px"
				})}"></div><div class="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"><div class="w-28 h-28 rounded-full bg-white shadow-sm flex items-center justify-center"><p class="text-5xl font-bold text-brand-900 tracking-display">${ssrInterpolate(member.initial)}</p></div></div><span class="absolute top-3 right-3 px-2.5 py-1 bg-white text-brand-900 text-[10px] tracking-[0.2em] uppercase font-semibold">${ssrInterpolate(member.years)}</span></div><h3 class="text-lg font-bold text-brand-900 tracking-display leading-snug">${ssrInterpolate(member.name)}</h3><p class="text-sm text-brand-700 mt-0.5">${ssrInterpolate(member.role)}</p><p class="text-xs text-warm-500 mt-2 leading-relaxed">${ssrInterpolate(member.notes)}</p></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Events.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
