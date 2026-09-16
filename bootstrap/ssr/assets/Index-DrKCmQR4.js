import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Link, router, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, onMounted, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Internal/MenuItem/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { items: {
		type: Array,
		required: true
	} },
	setup(__props) {
		const page = usePage();
		function deleteItem(id) {
			if (!confirm("Delete this menu item?")) return;
			router.delete(route("internal.menu-items.destroy", id), { onSuccess: () => {
				console.log("Item deleted");
			} });
		}
		onMounted(() => {
			console.log("Can:", page.props.can);
			console.log("Route name:", route().current());
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Menu Builder" }, _attrs), {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-3xl font-bold text-warm-900"${_scopeId}>Menu Builder</h1><p class="text-warm-500 mt-1"${_scopeId}>Manage the header navigation menu</p></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/internal/menu-items/create",
							class: "px-4 py-2 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` + New Item `);
								else return [createTextVNode(" + New Item ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-3xl font-bold text-warm-900" }, "Menu Builder"), createVNode("p", { class: "text-warm-500 mt-1" }, "Manage the header navigation menu")]), createVNode(unref(Link), {
						href: "/internal/menu-items/create",
						class: "px-4 py-2 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
					}, {
						default: withCtx(() => [createTextVNode(" + New Item ")]),
						_: 1
					})])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}>${ssrInterpolate(unref(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						_push(`<div class="bg-white rounded-2xl border border-warm-200 overflow-hidden"${_scopeId}>`);
						if (__props.items.length === 0) _push(`<div class="p-12 text-center"${_scopeId}><p class="text-warm-500"${_scopeId}>No menu items yet. Create one to get started.</p></div>`);
						else {
							_push(`<div class="divide-y divide-warm-100"${_scopeId}><!--[-->`);
							ssrRenderList(__props.items, (item) => {
								_push(`<div class="p-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex-1"${_scopeId}><p class="font-semibold text-warm-900"${_scopeId}>${ssrInterpolate(item.label)}</p><p class="text-xs text-warm-500 mt-1"${_scopeId}>${ssrInterpolate(item.href ? "🔗 " + item.href : "📁 Submenu")}</p></div><div class="flex items-center gap-2"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Link), {
									href: `/internal/menu-items/${item.id}/edit`,
									class: "px-3 py-1.5 text-sm text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(` Edit `);
										else return [createTextVNode(" Edit ")];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`<button class="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"${_scopeId}> Delete </button></div></div>`);
								if (item.children.length > 0) {
									_push(`<div class="mt-4 ml-6 space-y-2 pt-4 border-l-2 border-warm-100 pl-4"${_scopeId}><!--[-->`);
									ssrRenderList(item.children, (child) => {
										_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex-1"${_scopeId}><p class="text-sm text-warm-700"${_scopeId}>${ssrInterpolate(child.label)}</p><p class="text-xs text-warm-500"${_scopeId}>🔗 ${ssrInterpolate(child.href)}</p></div><div class="flex items-center gap-2"${_scopeId}>`);
										_push(ssrRenderComponent(unref(Link), {
											href: `/internal/menu-items/${child.id}/edit`,
											class: "px-2 py-1 text-xs text-brand-600 hover:bg-brand-50 rounded transition-colors"
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(` Edit `);
												else return [createTextVNode(" Edit ")];
											}),
											_: 2
										}, _parent, _scopeId));
										_push(`<button class="px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded transition-colors"${_scopeId}> Delete </button></div></div>`);
									});
									_push(`<!--]-->`);
									_push(ssrRenderComponent(unref(Link), {
										href: `/internal/menu-items/create?parent_id=${item.id}`,
										class: "inline-flex text-xs text-brand-600 hover:text-brand-800 mt-2"
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` + Add submenu item `);
											else return [createTextVNode(" + Add submenu item ")];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(`</div>`);
								} else {
									_push(`<div class="mt-3"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Link), {
										href: `/internal/menu-items/create?parent_id=${item.id}`,
										class: "inline-flex text-xs text-brand-600 hover:text-brand-800"
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(` + Add submenu `);
											else return [createTextVNode(" + Add submenu ")];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(`</div>`);
								}
								_push(`</div>`);
							});
							_push(`<!--]--></div>`);
						}
						_push(`</div>`);
					} else return [unref(page).props.flash.success ? (openBlock(), createBlock("div", {
						key: 0,
						class: "mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"
					}, toDisplayString(unref(page).props.flash.success), 1)) : createCommentVNode("", true), createVNode("div", { class: "bg-white rounded-2xl border border-warm-200 overflow-hidden" }, [__props.items.length === 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "p-12 text-center"
					}, [createVNode("p", { class: "text-warm-500" }, "No menu items yet. Create one to get started.")])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "divide-y divide-warm-100"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
						return openBlock(), createBlock("div", {
							key: item.id,
							class: "p-4"
						}, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", { class: "flex-1" }, [createVNode("p", { class: "font-semibold text-warm-900" }, toDisplayString(item.label), 1), createVNode("p", { class: "text-xs text-warm-500 mt-1" }, toDisplayString(item.href ? "🔗 " + item.href : "📁 Submenu"), 1)]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(Link), {
							href: `/internal/menu-items/${item.id}/edit`,
							class: "px-3 py-1.5 text-sm text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Edit ")]),
							_: 1
						}, 8, ["href"]), createVNode("button", {
							onClick: ($event) => deleteItem(item.id),
							class: "px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
						}, " Delete ", 8, ["onClick"])])]), item.children.length > 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mt-4 ml-6 space-y-2 pt-4 border-l-2 border-warm-100 pl-4"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
							return openBlock(), createBlock("div", {
								key: child.id,
								class: "flex items-center justify-between"
							}, [createVNode("div", { class: "flex-1" }, [createVNode("p", { class: "text-sm text-warm-700" }, toDisplayString(child.label), 1), createVNode("p", { class: "text-xs text-warm-500" }, "🔗 " + toDisplayString(child.href), 1)]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(Link), {
								href: `/internal/menu-items/${child.id}/edit`,
								class: "px-2 py-1 text-xs text-brand-600 hover:bg-brand-50 rounded transition-colors"
							}, {
								default: withCtx(() => [createTextVNode(" Edit ")]),
								_: 1
							}, 8, ["href"]), createVNode("button", {
								onClick: ($event) => deleteItem(child.id),
								class: "px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded transition-colors"
							}, " Delete ", 8, ["onClick"])])]);
						}), 128)), createVNode(unref(Link), {
							href: `/internal/menu-items/create?parent_id=${item.id}`,
							class: "inline-flex text-xs text-brand-600 hover:text-brand-800 mt-2"
						}, {
							default: withCtx(() => [createTextVNode(" + Add submenu item ")]),
							_: 1
						}, 8, ["href"])])) : (openBlock(), createBlock("div", {
							key: 1,
							class: "mt-3"
						}, [createVNode(unref(Link), {
							href: `/internal/menu-items/create?parent_id=${item.id}`,
							class: "inline-flex text-xs text-brand-600 hover:text-brand-800"
						}, {
							default: withCtx(() => [createTextVNode(" + Add submenu ")]),
							_: 1
						}, 8, ["href"])]))]);
					}), 128))]))])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/MenuItem/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
