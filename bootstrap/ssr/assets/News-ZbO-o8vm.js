import { ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { mergeProps, useSSRContext } from "vue";
//#region resources/js/Pages/Home/Partials/News.vue
var _sfc_main = {
	__name: "News",
	__ssrInlineRender: true,
	setup(__props) {
		const reviews = [
			{
				body: "From valuation through to completion, the team were honest, attentive and consistently a step ahead. We had an offer within ten days and never once felt pressured. Easily the best agents we have used.",
				name: "The Whitaker family",
				location: "Sold in Penwortham",
				rating: 5
			},
			{
				body: "Eleanor and Iris went above and beyond. The photography was excellent, the valuation was realistic, and they always picked up the phone. It made a stressful move feel manageable.",
				name: "Mr & Mrs Hughes",
				location: "Sold in Hutton",
				rating: 5
			},
			{
				body: "As a landlord with three properties in the area, the level of care from the lettings team is what keeps me with Acme. Tenants are well-chosen, compliance is on top of and rent always arrives on time.",
				name: "D. Patel",
				location: "Landlord, Longton",
				rating: 5
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 lg:py-24 bg-cream-100 border-y border-warm-100" }, _attrs))}><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-5"><div><p class="eyebrow text-accent-600 mb-3">Client reviews</p><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-display leading-[1.1]"> Trusted by <span class="accent-italic">people</span> who’ve moved with us. </h2></div><div class="flex items-center gap-3 text-sm text-warm-600"><div class="flex"><!--[-->`);
			ssrRenderList(5, (i) => {
				_push(`<svg class="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.445a1 1 0 00-1.176 0l-3.366 2.445c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.072 9.384c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.951-.69l1.287-3.957z"></path></svg>`);
			});
			_push(`<!--]--></div><span class="font-semibold text-brand-900">4.9</span><span class="text-warm-500">on Google · 180+ reviews</span></div></div><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
			ssrRenderList(reviews, (review) => {
				_push(`<article class="bg-white border border-warm-100 p-7 flex flex-col"><div class="flex mb-5"><!--[-->`);
				ssrRenderList(review.rating, (i) => {
					_push(`<svg class="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.445a1 1 0 00-1.176 0l-3.366 2.445c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.072 9.384c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.951-.69l1.287-3.957z"></path></svg>`);
				});
				_push(`<!--]--></div><p class="text-brand-800 leading-relaxed text-[15px] mb-6 flex-1">“${ssrInterpolate(review.body)}”</p><div class="pt-5 border-t border-warm-100"><p class="font-semibold text-brand-900 text-sm">${ssrInterpolate(review.name)}</p><p class="text-xs text-warm-500 mt-0.5">${ssrInterpolate(review.location)}</p></div></article>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Partials/News.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
