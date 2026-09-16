import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Admin/Role/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { roles: Object },
	setup(__props) {
		const page = usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Roles" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Roles</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>Manage staff roles and their permissions</p></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/admin/roles/create",
							class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path></svg> New role `);
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
								})])), createTextVNode(" New role ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Roles"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, "Manage staff roles and their permissions")]), createVNode(unref(Link), {
						href: "/admin/roles/create",
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
						})])), createTextVNode(" New role ")]),
						_: 1
					})])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(unref(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						if (!__props.roles?.data?.length) {
							_push(`<div class="text-center py-20 bg-warm-50 rounded-2xl border border-warm-200"${_scopeId}><span class="text-4xl block mb-3"${_scopeId}>🔐</span><p class="font-semibold text-warm-800 mb-1"${_scopeId}>No roles yet</p><p class="text-sm text-warm-500 mb-5"${_scopeId}>Create your first role to start managing permissions.</p>`);
							_push(ssrRenderComponent(unref(Link), {
								href: "/admin/roles/create",
								class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Create a role `);
									else return [createTextVNode(" Create a role ")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else {
							_push(`<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"${_scopeId}><!--[-->`);
							ssrRenderList(__props.roles.data, (role) => {
								_push(ssrRenderComponent(unref(Link), {
									key: role.id,
									href: `/admin/roles/${role.id}`,
									class: "group flex items-center gap-4 p-5 bg-white border border-warm-200 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`<div class="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0"${_scopeId}><svg class="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"${_scopeId}></path></svg></div><div class="flex-1 min-w-0"${_scopeId}><p class="font-semibold text-warm-900 text-sm group-hover:text-brand-700 transition-colors truncate"${_scopeId}>${ssrInterpolate(role.name)}</p><p class="text-xs text-warm-400 font-mono mt-0.5 truncate"${_scopeId}>${ssrInterpolate(role.slug)}</p></div><svg class="w-4 h-4 text-warm-300 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg>`);
										else return [
											createVNode("div", { class: "w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0" }, [(openBlock(), createBlock("svg", {
												class: "w-5 h-5 text-brand-600",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor"
											}, [createVNode("path", {
												"stroke-linecap": "round",
												"stroke-linejoin": "round",
												"stroke-width": "2",
												d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											})]))]),
											createVNode("div", { class: "flex-1 min-w-0" }, [createVNode("p", { class: "font-semibold text-warm-900 text-sm group-hover:text-brand-700 transition-colors truncate" }, toDisplayString(role.name), 1), createVNode("p", { class: "text-xs text-warm-400 font-mono mt-0.5 truncate" }, toDisplayString(role.slug), 1)]),
											(openBlock(), createBlock("svg", {
												class: "w-4 h-4 text-warm-300 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all shrink-0",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor"
											}, [createVNode("path", {
												"stroke-linecap": "round",
												"stroke-linejoin": "round",
												"stroke-width": "2",
												d: "M9 5l7 7-7 7"
											})]))
										];
									}),
									_: 2
								}, _parent, _scopeId));
							});
							_push(`<!--]--></div>`);
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
					})])), createTextVNode(" " + toDisplayString(unref(page).props.flash.success), 1)])) : createCommentVNode("", true), !__props.roles?.data?.length ? (openBlock(), createBlock("div", {
						key: 1,
						class: "text-center py-20 bg-warm-50 rounded-2xl border border-warm-200"
					}, [
						createVNode("span", { class: "text-4xl block mb-3" }, "🔐"),
						createVNode("p", { class: "font-semibold text-warm-800 mb-1" }, "No roles yet"),
						createVNode("p", { class: "text-sm text-warm-500 mb-5" }, "Create your first role to start managing permissions."),
						createVNode(unref(Link), {
							href: "/admin/roles/create",
							class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Create a role ")]),
							_: 1
						})
					])) : (openBlock(), createBlock("div", {
						key: 2,
						class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.roles.data, (role) => {
						return openBlock(), createBlock(unref(Link), {
							key: role.id,
							href: `/admin/roles/${role.id}`,
							class: "group flex items-center gap-4 p-5 bg-white border border-warm-200 rounded-2xl hover:border-brand-300 hover:shadow-md transition-all"
						}, {
							default: withCtx(() => [
								createVNode("div", { class: "w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0" }, [(openBlock(), createBlock("svg", {
									class: "w-5 h-5 text-brand-600",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								})]))]),
								createVNode("div", { class: "flex-1 min-w-0" }, [createVNode("p", { class: "font-semibold text-warm-900 text-sm group-hover:text-brand-700 transition-colors truncate" }, toDisplayString(role.name), 1), createVNode("p", { class: "text-xs text-warm-400 font-mono mt-0.5 truncate" }, toDisplayString(role.slug), 1)]),
								(openBlock(), createBlock("svg", {
									class: "w-4 h-4 text-warm-300 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all shrink-0",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M9 5l7 7-7 7"
								})]))
							]),
							_: 2
						}, 1032, ["href"]);
					}), 128))]))];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Role/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
