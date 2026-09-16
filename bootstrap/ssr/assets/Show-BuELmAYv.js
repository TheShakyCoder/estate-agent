import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-B0QZbCHf.js";
import { Head, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { unref, useSSRContext } from "vue";
import { marked } from "marked";
//#region resources/js/Pages/Page/Show.vue
var _sfc_main = {
	__name: "Show",
	__ssrInlineRender: true,
	props: {
		page: {
			type: Object,
			required: true
		},
		canLogin: { type: Boolean },
		canRegister: { type: Boolean }
	},
	setup(__props) {
		const navLinks = usePage().props.site.nav_links;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), {
				title: `${__props.page.title} — Acme Estate Agents`,
				description: __props.page.description
			}, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white">`);
			_push(ssrRenderComponent(_sfc_main$1, {
				navLinks: unref(navLinks),
				canLogin: __props.canLogin,
				canRegister: __props.canRegister
			}, null, _parent));
			_push(`<section class="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white"><div class="absolute -top-16 -right-16 w-72 h-72 bg-brand-500/25 rounded-full blur-3xl pointer-events-none"></div><div class="absolute -bottom-20 -left-10 w-64 h-64 bg-brand-800/35 rounded-full blur-3xl pointer-events-none"></div><div class="absolute right-[-40px] top-1/2 w-72 h-72 pointer-events-none select-none flex items-center justify-center" style="${ssrRenderStyle({ "transform": "translateY(-50%) rotate(-8deg)" })}"><svg class="w-full h-auto opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 55 L50 25 L82 55" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 50 L28 78 L72 78 L72 50" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44 78 L44 60 L56 60 L56 78" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"><nav class="flex items-center gap-2 text-white/50 text-xs mb-5"><a href="/" class="hover:text-white transition-colors">Home</a><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-white/80 truncate max-w-xs">${ssrInterpolate(__props.page.title)}</span></nav><h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">${ssrInterpolate(__props.page.title)}</h1></div><div class="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full"><path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z" fill="white"></path></svg></div></section><section class="py-16 lg:py-20 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 xl:gap-16"><div class="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-warm-900 prose-p:text-warm-700 prose-p:leading-relaxed prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-warm-900 prose-ul:text-warm-700 prose-ol:text-warm-700">${unref(marked).parse(__props.page.content ?? "") ?? ""}</div>`);
			if (__props.page.thumbnail_url) _push(`<aside class="mt-10 lg:mt-0"><div class="sticky top-8"><img${ssrRenderAttr("src", __props.page.thumbnail_url)}${ssrRenderAttr("alt", __props.page.title)} class="w-full rounded-2xl shadow-md object-cover"></div></aside>`);
			else _push(`<!---->`);
			_push(`</div></div></section>`);
			_push(ssrRenderComponent(_sfc_main$2, { navLinks: unref(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Page/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
