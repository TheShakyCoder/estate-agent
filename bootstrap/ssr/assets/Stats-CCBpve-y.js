import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/Stats.vue
var _sfc_main = {
	__name: "Stats",
	__ssrInlineRender: true,
	setup(__props) {
		const stats = [
			{
				value: "47",
				label: "Years in Penwortham"
			},
			{
				value: "180+",
				label: "Five-star reviews"
			},
			{
				value: "101",
				label: "Sales in 2025"
			},
			{
				value: "98%",
				label: "Of asking price achieved"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-brand-900 text-white py-14" }, _attrs))}><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4"><!--[-->`);
			ssrRenderList(stats, (stat, i) => {
				_push(`<div class="${ssrRenderClass([i > 0 ? "lg:border-l lg:border-white/10" : "", "px-2 lg:px-6"])}"><p class="text-4xl sm:text-5xl font-bold tracking-display"><span class="accent-italic !text-accent-300">${ssrInterpolate(stat.value)}</span></p><p class="eyebrow text-white/50 mt-3">${ssrInterpolate(stat.label)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/Stats.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
