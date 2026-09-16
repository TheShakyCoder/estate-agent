import { n as _sfc_main$2, t as _sfc_main$3 } from "./Footer-B0QZbCHf.js";
import _sfc_main$4 from "./Hero-CUvyHo_M.js";
import _sfc_main$5 from "./Stats-CCBpve-y.js";
import _sfc_main$6 from "./About--56_rZsy.js";
import _sfc_main$7 from "./Services-DoVFhSiN.js";
import _sfc_main$8 from "./Events-DWxs6rOU.js";
import _sfc_main$9 from "./News-ZbO-o8vm.js";
import _sfc_main$10 from "./Volunteer-DLv-LSLx.js";
import _sfc_main$11 from "./Contact-BTq34yia.js";
import { Head, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { mergeProps, unref, useSSRContext } from "vue";
//#region resources/js/Components/InstagramFeed.vue
var _sfc_main$1 = {
	__name: "InstagramFeed",
	__ssrInlineRender: true,
	setup(__props) {
		const badges = [
			{
				label: "Rightmove",
				sub: "Portal"
			},
			{
				label: "Zoopla",
				sub: "Portal"
			},
			{
				label: "OnTheMarket",
				sub: "Portal"
			},
			{
				label: "Property Redress",
				sub: "PRS"
			},
			{
				label: "Client Money Protect",
				sub: "CMP"
			},
			{
				label: "ICO Registered",
				sub: "Data"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 lg:py-20 bg-white border-y border-warm-100" }, _attrs))}><div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><p class="eyebrow text-warm-400 text-center mb-10">Members · Listed on · Regulated by</p><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center"><!--[-->`);
			ssrRenderList(badges, (badge) => {
				_push(`<div class="flex flex-col items-center text-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"><div class="h-12 flex items-center justify-center mb-2"><p class="text-lg font-bold tracking-display text-brand-900">${ssrInterpolate(badge.label)}</p></div><p class="eyebrow text-warm-400">${ssrInterpolate(badge.sub)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InstagramFeed.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Pages/Home/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		canLogin: { type: Boolean },
		canRegister: { type: Boolean },
		site: { type: Object }
	},
	setup(__props) {
		const navLinks = usePage().props.site.nav_links;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: __props.site.fullname }, null, _parent));
			_push(`<div class="font-sans antialiased text-brand-900 bg-white">`);
			_push(ssrRenderComponent(_sfc_main$2, {
				navLinks: unref(navLinks),
				canLogin: __props.canLogin,
				canRegister: __props.canRegister
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$4, { site: __props.site }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$10, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$11, { site: __props.site }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, { navLinks: unref(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
