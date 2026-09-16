import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Admin/User/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { users: Object },
	setup(__props) {
		const page = usePage();
		function destroy(id) {
			if (confirm("Delete this user? This cannot be undone.")) router.delete(`/admin/users/${id}`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Users" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Users</h1>`);
					else return [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Users")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(unref(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						_push(`<div class="bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"${_scopeId}><div class="px-6 py-4 border-b border-warm-100 bg-warm-50"${_scopeId}><h2 class="text-sm font-semibold text-warm-700"${_scopeId}>All Users</h2></div><div class="divide-y divide-warm-100"${_scopeId}><!--[-->`);
						ssrRenderList(__props.users.data, (user) => {
							_push(`<div class="flex items-center gap-4 px-6 py-3.5"${_scopeId}><div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-bold shrink-0"${_scopeId}>${ssrInterpolate(user.name.charAt(0).toUpperCase())}</div><div class="flex-1 min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-900 truncate"${_scopeId}>${ssrInterpolate(user.name)}</p><p class="text-xs text-warm-400 truncate"${_scopeId}>${ssrInterpolate(user.email)}</p></div><div class="flex items-center gap-2 shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: `/admin/users/${user.id}/roles`,
								class: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"${_scopeId}></path></svg> Roles `);
									else return [(openBlock(), createBlock("svg", {
										class: "w-3.5 h-3.5",
										fill: "none",
										viewBox: "0 0 24 24",
										stroke: "currentColor"
									}, [createVNode("path", {
										"stroke-linecap": "round",
										"stroke-linejoin": "round",
										"stroke-width": "2",
										d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									})])), createTextVNode(" Roles ")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(ssrRenderComponent(unref(Link), {
								href: `/admin/users/${user.id}/edit`,
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
						_push(`<!--]--></div></div>`);
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
					})])), createTextVNode(" " + toDisplayString(unref(page).props.flash.success), 1)])) : createCommentVNode("", true), createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm" }, [createVNode("div", { class: "px-6 py-4 border-b border-warm-100 bg-warm-50" }, [createVNode("h2", { class: "text-sm font-semibold text-warm-700" }, "All Users")]), createVNode("div", { class: "divide-y divide-warm-100" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user) => {
						return openBlock(), createBlock("div", {
							key: user.id,
							class: "flex items-center gap-4 px-6 py-3.5"
						}, [
							createVNode("div", { class: "w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-bold shrink-0" }, toDisplayString(user.name.charAt(0).toUpperCase()), 1),
							createVNode("div", { class: "flex-1 min-w-0" }, [createVNode("p", { class: "text-sm font-medium text-warm-900 truncate" }, toDisplayString(user.name), 1), createVNode("p", { class: "text-xs text-warm-400 truncate" }, toDisplayString(user.email), 1)]),
							createVNode("div", { class: "flex items-center gap-2 shrink-0" }, [
								createVNode(unref(Link), {
									href: `/admin/users/${user.id}/roles`,
									class: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
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
										d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									})])), createTextVNode(" Roles ")]),
									_: 1
								}, 8, ["href"]),
								createVNode(unref(Link), {
									href: `/admin/users/${user.id}/edit`,
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
									onClick: ($event) => destroy(user.id),
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
					}), 128))])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/User/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
