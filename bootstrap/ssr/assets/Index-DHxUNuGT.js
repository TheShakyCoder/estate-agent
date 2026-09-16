import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Internal/Competitions/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { competitions: Object },
	setup(__props) {
		const page = usePage();
		const statusLabel = {
			open: {
				text: "Open",
				cls: "bg-emerald-100 text-emerald-700"
			},
			closed: {
				text: "Closed",
				cls: "bg-warm-100 text-warm-500"
			},
			results: {
				text: "Results",
				cls: "bg-brand-100 text-brand-700"
			}
		};
		function destroy(id, title) {
			if (confirm(`Delete "${title}"? This cannot be undone.`)) router.delete(`/internal/competitions/${id}`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Competitions" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Competitions</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>Manage competitions &amp; submissions</p></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/internal/competitions/create",
							class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path></svg> New competition `);
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
								})])), createTextVNode(" New competition ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Competitions"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, "Manage competitions & submissions")]), createVNode(unref(Link), {
						href: "/internal/competitions/create",
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
						})])), createTextVNode(" New competition ")]),
						_: 1
					})])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(unref(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						if (!__props.competitions?.data?.length) {
							_push(`<div class="text-center py-20 bg-warm-50 rounded-2xl border border-warm-200"${_scopeId}><span class="text-4xl block mb-3"${_scopeId}>🏆</span><p class="font-semibold text-warm-800 mb-1"${_scopeId}>No competitions yet</p><p class="text-sm text-warm-500 mb-5"${_scopeId}>Create your first competition to get started.</p>`);
							_push(ssrRenderComponent(unref(Link), {
								href: "/internal/competitions/create",
								class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Create a competition `);
									else return [createTextVNode(" Create a competition ")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else {
							_push(`<div class="bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"${_scopeId}><div class="divide-y divide-warm-100"${_scopeId}><!--[-->`);
							ssrRenderList(__props.competitions.data, (competition) => {
								_push(`<div class="flex items-center gap-4 px-6 py-4"${_scopeId}><div class="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-sm shrink-0"${_scopeId}> 🏆 </div><div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><p class="text-sm font-medium text-warm-900 truncate"${_scopeId}>${ssrInterpolate(competition.title)}</p><span class="${ssrRenderClass([statusLabel[competition.status].cls, "shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold"])}"${_scopeId}>${ssrInterpolate(statusLabel[competition.status].text)}</span></div><p class="text-xs text-warm-400 font-mono mt-0.5 truncate"${_scopeId}>${ssrInterpolate(competition.slug)}</p></div><div class="flex items-center gap-2 shrink-0"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Link), {
									href: `/internal/competitions/${competition.id}`,
									class: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> Entries `);
										else return [(openBlock(), createBlock("svg", {
											class: "w-3.5 h-3.5",
											fill: "none",
											viewBox: "0 0 24 24",
											stroke: "currentColor"
										}, [createVNode("path", {
											"stroke-linecap": "round",
											"stroke-linejoin": "round",
											"stroke-width": "2",
											d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										}), createVNode("path", {
											"stroke-linecap": "round",
											"stroke-linejoin": "round",
											"stroke-width": "2",
											d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										})])), createTextVNode(" Entries ")];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(ssrRenderComponent(unref(Link), {
									href: `/internal/competitions/${competition.id}/edit`,
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
							if (__props.competitions.last_page > 1) {
								_push(`<div class="flex items-center justify-between px-6 py-4 border-t border-warm-100 bg-warm-50"${_scopeId}><p class="text-xs text-warm-500"${_scopeId}> Showing ${ssrInterpolate(__props.competitions.from)}–${ssrInterpolate(__props.competitions.to)} of ${ssrInterpolate(__props.competitions.total)}</p><div class="flex gap-1"${_scopeId}><!--[-->`);
								ssrRenderList(__props.competitions.links, (link) => {
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
					})])), createTextVNode(" " + toDisplayString(unref(page).props.flash.success), 1)])) : createCommentVNode("", true), !__props.competitions?.data?.length ? (openBlock(), createBlock("div", {
						key: 1,
						class: "text-center py-20 bg-warm-50 rounded-2xl border border-warm-200"
					}, [
						createVNode("span", { class: "text-4xl block mb-3" }, "🏆"),
						createVNode("p", { class: "font-semibold text-warm-800 mb-1" }, "No competitions yet"),
						createVNode("p", { class: "text-sm text-warm-500 mb-5" }, "Create your first competition to get started."),
						createVNode(unref(Link), {
							href: "/internal/competitions/create",
							class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Create a competition ")]),
							_: 1
						})
					])) : (openBlock(), createBlock("div", {
						key: 2,
						class: "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"
					}, [createVNode("div", { class: "divide-y divide-warm-100" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.competitions.data, (competition) => {
						return openBlock(), createBlock("div", {
							key: competition.id,
							class: "flex items-center gap-4 px-6 py-4"
						}, [
							createVNode("div", { class: "w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-sm shrink-0" }, " 🏆 "),
							createVNode("div", { class: "flex-1 min-w-0" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("p", { class: "text-sm font-medium text-warm-900 truncate" }, toDisplayString(competition.title), 1), createVNode("span", { class: ["shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold", statusLabel[competition.status].cls] }, toDisplayString(statusLabel[competition.status].text), 3)]), createVNode("p", { class: "text-xs text-warm-400 font-mono mt-0.5 truncate" }, toDisplayString(competition.slug), 1)]),
							createVNode("div", { class: "flex items-center gap-2 shrink-0" }, [
								createVNode(unref(Link), {
									href: `/internal/competitions/${competition.id}`,
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
										d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									}), createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										"stroke-width": "2",
										d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									})])), createTextVNode(" Entries ")]),
									_: 1
								}, 8, ["href"]),
								createVNode(unref(Link), {
									href: `/internal/competitions/${competition.id}/edit`,
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
								}, 8, ["href"]),
								createVNode("button", {
									onClick: ($event) => destroy(competition.id, competition.title),
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
								})])), createTextVNode(" Delete ")], 8, ["onClick"])
							])
						]);
					}), 128))]), __props.competitions.last_page > 1 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "flex items-center justify-between px-6 py-4 border-t border-warm-100 bg-warm-50"
					}, [createVNode("p", { class: "text-xs text-warm-500" }, " Showing " + toDisplayString(__props.competitions.from) + "–" + toDisplayString(__props.competitions.to) + " of " + toDisplayString(__props.competitions.total), 1), createVNode("div", { class: "flex gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.competitions.links, (link) => {
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Competitions/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
