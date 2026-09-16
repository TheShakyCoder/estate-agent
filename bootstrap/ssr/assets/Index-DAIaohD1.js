import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-B0QZbCHf.js";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Competition/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		competitions: {
			type: Array,
			required: true
		},
		canLogin: { type: Boolean },
		canRegister: { type: Boolean }
	},
	setup(__props) {
		const navLinks = usePage().props.site.nav_links;
		const statusLabel = {
			open: {
				text: "Open",
				cls: "bg-emerald-100 text-emerald-700"
			},
			closed: {
				text: "Closed",
				cls: "bg-warm-100 text-warm-600"
			},
			results: {
				text: "Results",
				cls: "bg-brand-100 text-brand-700"
			}
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Competitions — Acme Estate Agents" }, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white">`);
			_push(ssrRenderComponent(_sfc_main$1, {
				navLinks: unref(navLinks),
				canLogin: __props.canLogin,
				canRegister: __props.canRegister
			}, null, _parent));
			_push(`<section class="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white"><div class="absolute -top-16 -right-16 w-72 h-72 bg-brand-500/25 rounded-full blur-3xl pointer-events-none"></div><div class="absolute -bottom-20 -left-10 w-64 h-64 bg-brand-800/35 rounded-full blur-3xl pointer-events-none"></div><div class="absolute right-[-40px] top-1/2 w-72 h-72 pointer-events-none select-none flex items-center justify-center" style="${ssrRenderStyle({ "transform": "translateY(-50%) rotate(-8deg)" })}"><svg class="w-full h-auto opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 55 L50 25 L82 55" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 50 L28 78 L72 78 L72 50" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44 78 L44 60 L56 60 L56 78" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"><nav class="flex items-center gap-2 text-white/50 text-xs mb-5"><a href="/" class="hover:text-white transition-colors">Home</a><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-white/80">Competitions</span></nav><h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">Competitions</h1><p class="text-white/75 text-lg max-w-xl leading-relaxed"> Enter our community competitions and show off your talent. </p></div><div class="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full"><path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z" fill="white"></path></svg></div></section><section class="py-16 lg:py-20 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`);
			if (!__props.competitions.length) _push(`<div class="text-center py-24 px-6 bg-warm-50 rounded-2xl border border-warm-200"><span class="text-5xl block mb-4">🏆</span><h2 class="font-display text-xl font-semibold text-warm-800 mb-2">No competitions yet</h2><p class="text-warm-500 text-sm">Check back soon — competitions will be posted here.</p></div>`);
			else {
				_push(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
				ssrRenderList(__props.competitions, (competition) => {
					_push(ssrRenderComponent(unref(Link), {
						key: competition.id,
						href: `/competitions/${competition.slug}`,
						class: "group flex flex-col border border-warm-200 rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-lg transition-all duration-200"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="aspect-video bg-warm-100 overflow-hidden"${_scopeId}>`);
								if (competition.thumbnail_url) _push(`<img${ssrRenderAttr("src", competition.thumbnail_url)}${ssrRenderAttr("alt", competition.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"${_scopeId}>`);
								else _push(`<div class="w-full h-full flex items-center justify-center text-5xl"${_scopeId}>🏆</div>`);
								_push(`</div><div class="p-6 flex flex-col flex-1 gap-3"${_scopeId}><div class="flex items-start justify-between gap-3"${_scopeId}><h2 class="font-semibold text-warm-900 leading-snug group-hover:text-brand-700 transition-colors"${_scopeId}>${ssrInterpolate(competition.title)}</h2><span class="${ssrRenderClass([statusLabel[competition.status].cls, "shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold"])}"${_scopeId}>${ssrInterpolate(statusLabel[competition.status].text)}</span></div>`);
								if (competition.description) _push(`<p class="text-sm text-warm-500 leading-relaxed flex-1"${_scopeId}>${ssrInterpolate(competition.description)}</p>`);
								else _push(`<!---->`);
								_push(`<div class="flex items-center gap-1 text-xs font-semibold text-brand-600 mt-auto"${_scopeId}>${ssrInterpolate(competition.status === "results" ? "View results" : "View & enter")} <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg></div></div>`);
							} else return [createVNode("div", { class: "aspect-video bg-warm-100 overflow-hidden" }, [competition.thumbnail_url ? (openBlock(), createBlock("img", {
								key: 0,
								src: competition.thumbnail_url,
								alt: competition.title,
								class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							}, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
								key: 1,
								class: "w-full h-full flex items-center justify-center text-5xl"
							}, "🏆"))]), createVNode("div", { class: "p-6 flex flex-col flex-1 gap-3" }, [
								createVNode("div", { class: "flex items-start justify-between gap-3" }, [createVNode("h2", { class: "font-semibold text-warm-900 leading-snug group-hover:text-brand-700 transition-colors" }, toDisplayString(competition.title), 1), createVNode("span", { class: ["shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold", statusLabel[competition.status].cls] }, toDisplayString(statusLabel[competition.status].text), 3)]),
								competition.description ? (openBlock(), createBlock("p", {
									key: 0,
									class: "text-sm text-warm-500 leading-relaxed flex-1"
								}, toDisplayString(competition.description), 1)) : createCommentVNode("", true),
								createVNode("div", { class: "flex items-center gap-1 text-xs font-semibold text-brand-600 mt-auto" }, [createTextVNode(toDisplayString(competition.status === "results" ? "View results" : "View & enter") + " ", 1), (openBlock(), createBlock("svg", {
									class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M9 5l7 7-7 7"
								})]))])
							])];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			}
			_push(`</div></section>`);
			_push(ssrRenderComponent(_sfc_main$2, { navLinks: unref(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Competition/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
