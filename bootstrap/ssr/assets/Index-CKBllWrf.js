import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Internal/Pages/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { pages: Object },
	setup(__props) {
		const page = usePage();
		function destroy(id, title) {
			if (confirm(`Delete "${title}"? This cannot be undone.`)) router.delete(`/internal/pages/${id}`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Pages" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Pages</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>Manage static content pages</p></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/internal/pages/create",
							class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path></svg> New page `);
								else return [(openBlock(), createBlock("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M12 4v16m8-8H4"
								})])), createTextVNode(" New page ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Pages"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, "Manage static content pages")]), createVNode(unref(Link), {
						href: "/internal/pages/create",
						class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
					}, {
						default: withCtx(() => [(openBlock(), createBlock("svg", {
							class: "w-4 h-4",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M12 4v16m8-8H4"
						})])), createTextVNode(" New page ")]),
						_: 1
					})])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(unref(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						if (!__props.pages?.data?.length) {
							_push(`<div class="text-center py-20 bg-warm-50 rounded-2xl border border-warm-200"${_scopeId}><span class="text-4xl block mb-3"${_scopeId}>📄</span><p class="font-semibold text-warm-800 mb-1"${_scopeId}>No pages yet</p><p class="text-sm text-warm-500 mb-5"${_scopeId}>Create your first page to get started.</p>`);
							_push(ssrRenderComponent(unref(Link), {
								href: "/internal/pages/create",
								class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Create a page `);
									else return [createTextVNode(" Create a page ")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else {
							_push(`<div class="bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"${_scopeId}><div class="divide-y divide-warm-100"${_scopeId}><!--[-->`);
							ssrRenderList(__props.pages.data, (p) => {
								_push(`<div class="flex items-center gap-4 px-6 py-4"${_scopeId}><div class="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-sm shrink-0"${_scopeId}> 📄 </div><div class="flex-1 min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-900 truncate"${_scopeId}>${ssrInterpolate(p.title)}</p><p class="text-xs text-warm-400 font-mono mt-0.5 truncate"${_scopeId}>${ssrInterpolate(p.slug)}</p></div><div class="flex items-center gap-2 shrink-0"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Link), {
									href: `/internal/pages/${p.id}/edit`,
									class: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg> Edit `);
										else return [(openBlock(), createBlock("svg", {
											class: "w-3.5 h-3.5",
											fill: "none",
											viewBox: "0 0 24 24",
											stroke: "currentColor"
										}, [createVNode("path", {
											"stroke-linecap": "round",
											"stroke-linejoin": "round",
											"stroke-width": "2",
											d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
										})])), createTextVNode(" Edit ")];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`<button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg> Delete </button></div></div>`);
							});
							_push(`<!--]--></div>`);
							if (__props.pages.last_page > 1) {
								_push(`<div class="flex items-center justify-between px-6 py-4 border-t border-warm-100 bg-warm-50"${_scopeId}><p class="text-xs text-warm-500"${_scopeId}> Showing ${ssrInterpolate(__props.pages.from)}–${ssrInterpolate(__props.pages.to)} of ${ssrInterpolate(__props.pages.total)}</p><div class="flex gap-1"${_scopeId}><!--[-->`);
								ssrRenderList(__props.pages.links, (link) => {
									_push(ssrRenderComponent(unref(Link), {
										key: link.label,
										href: link.url ?? "#",
										class: ["px-3 py-1.5 text-xs rounded-lg border transition-colors", link.active ? "bg-brand-600 text-white border-brand-600" : link.url ? "border-warm-200 text-warm-600 hover:bg-warm-100" : "border-warm-100 text-warm-300 cursor-not-allowed pointer-events-none"]
									}, null, _parent, _scopeId));
								});
								_push(`<!--]--></div></div>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						}
					} else return [unref(page).props.flash.success ? (openBlock(), createBlock("div", {
						key: 0,
						class: "mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"
					}, [(openBlock(), createBlock("svg", {
						class: "w-4 h-4 shrink-0",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					})])), createTextVNode(" " + toDisplayString(unref(page).props.flash.success), 1)])) : createCommentVNode("", true), !__props.pages?.data?.length ? (openBlock(), createBlock("div", {
						key: 1,
						class: "text-center py-20 bg-warm-50 rounded-2xl border border-warm-200"
					}, [
						createVNode("span", { class: "text-4xl block mb-3" }, "📄"),
						createVNode("p", { class: "font-semibold text-warm-800 mb-1" }, "No pages yet"),
						createVNode("p", { class: "text-sm text-warm-500 mb-5" }, "Create your first page to get started."),
						createVNode(unref(Link), {
							href: "/internal/pages/create",
							class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Create a page ")]),
							_: 1
						})
					])) : (openBlock(), createBlock("div", {
						key: 2,
						class: "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"
					}, [createVNode("div", { class: "divide-y divide-warm-100" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.pages.data, (p) => {
						return openBlock(), createBlock("div", {
							key: p.id,
							class: "flex items-center gap-4 px-6 py-4"
						}, [
							createVNode("div", { class: "w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-sm shrink-0" }, " 📄 "),
							createVNode("div", { class: "flex-1 min-w-0" }, [createVNode("p", { class: "text-sm font-medium text-warm-900 truncate" }, toDisplayString(p.title), 1), createVNode("p", { class: "text-xs text-warm-400 font-mono mt-0.5 truncate" }, toDisplayString(p.slug), 1)]),
							createVNode("div", { class: "flex items-center gap-2 shrink-0" }, [createVNode(unref(Link), {
								href: `/internal/pages/${p.id}/edit`,
								class: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"
							}, {
								default: withCtx(() => [(openBlock(), createBlock("svg", {
									class: "w-3.5 h-3.5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
								})])), createTextVNode(" Edit ")]),
								_: 1
							}, 8, ["href"]), createVNode("button", {
								onClick: ($event) => destroy(p.id, p.title),
								class: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
							}, [(openBlock(), createBlock("svg", {
								class: "w-3.5 h-3.5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								"stroke-width": "2",
								d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							})])), createTextVNode(" Delete ")], 8, ["onClick"])])
						]);
					}), 128))]), __props.pages.last_page > 1 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "flex items-center justify-between px-6 py-4 border-t border-warm-100 bg-warm-50"
					}, [createVNode("p", { class: "text-xs text-warm-500" }, " Showing " + toDisplayString(__props.pages.from) + "–" + toDisplayString(__props.pages.to) + " of " + toDisplayString(__props.pages.total), 1), createVNode("div", { class: "flex gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.pages.links, (link) => {
						return openBlock(), createBlock(unref(Link), {
							key: link.label,
							href: link.url ?? "#",
							innerHTML: link.label,
							class: ["px-3 py-1.5 text-xs rounded-lg border transition-colors", link.active ? "bg-brand-600 text-white border-brand-600" : link.url ? "border-warm-200 text-warm-600 hover:bg-warm-100" : "border-warm-100 text-warm-300 cursor-not-allowed pointer-events-none"]
						}, null, 8, [
							"href",
							"innerHTML",
							"class"
						]);
					}), 128))])])) : createCommentVNode("", true)]))];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Pages/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
