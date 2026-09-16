import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, watch, withCtx, withDirectives } from "vue";
//#region resources/js/Pages/Internal/Activities/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		activities: {
			type: Object,
			required: true
		},
		search: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const search = ref(__props.search);
		let debounce = null;
		watch(search, (val) => {
			clearTimeout(debounce);
			debounce = setTimeout(() => {
				router.get(route("internal.activities.index"), { search: val || void 0 }, {
					preserveState: true,
					replace: true
				});
			}, 300);
		});
		const statusBadge = {
			active: "bg-green-100 text-green-700",
			inactive: "bg-gray-100 text-gray-500"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Activities" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Activities</h1>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.activities.create"),
							class: "px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` New Activity `);
								else return [createTextVNode(" New Activity ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Activities"), createVNode(unref(Link), {
						href: _ctx.route("internal.activities.create"),
						class: "px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
					}, {
						default: withCtx(() => [createTextVNode(" New Activity ")]),
						_: 1
					}, 8, ["href"])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="mb-4"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Search activities…" class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"${_scopeId}></div><div class="bg-white rounded-lg shadow overflow-x-auto"${_scopeId}><table class="min-w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-left text-gray-500"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 font-medium"${_scopeId}>Title</th><th class="px-4 py-3 font-medium"${_scopeId}>Status</th><th class="px-4 py-3 font-medium"${_scopeId}>Meetings</th><th class="px-4 py-3 font-medium"${_scopeId}></th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						ssrRenderList(__props.activities.data, (a) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 font-medium text-warm-900"${_scopeId}>${ssrInterpolate(a.title)}</td><td class="px-4 py-3"${_scopeId}><span class="${ssrRenderClass([statusBadge[a.status], "px-2 py-0.5 rounded-full text-xs font-medium"])}"${_scopeId}>${ssrInterpolate(a.status)}</span></td><td class="px-4 py-3 text-gray-500"${_scopeId}>${ssrInterpolate(a.meetings_count)}</td><td class="px-4 py-3 text-right space-x-2"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: _ctx.route("internal.activities.edit", a.id),
								class: "text-brand-600 hover:underline text-xs"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Edit`);
									else return [createTextVNode("Edit")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(ssrRenderComponent(unref(Link), {
								href: _ctx.route("internal.activities.show", a.id),
								class: "text-gray-500 hover:underline text-xs"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`View`);
									else return [createTextVNode("View")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.activities.data.length) _push(`<tr${_scopeId}><td colspan="4" class="px-4 py-8 text-center text-gray-400"${_scopeId}>No activities yet.</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						if (__props.activities.links && __props.activities.links.length > 3) {
							_push(`<div class="mt-4 flex justify-center gap-1"${_scopeId}><!--[-->`);
							ssrRenderList(__props.activities.links, (link) => {
								_push(ssrRenderComponent(unref(Link), {
									key: link.label,
									href: link.url ?? "#",
									class: ["px-3 py-1 rounded text-sm", {
										"bg-blue-600 text-white": link.active,
										"bg-white text-gray-600 hover:bg-gray-100": !link.active && link.url,
										"text-gray-300 cursor-default": !link.url
									}],
									"preserve-state": true
								}, null, _parent, _scopeId));
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
					} else return [
						createVNode("div", { class: "mb-4" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							type: "text",
							placeholder: "Search activities…",
							class: "border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]])]),
						createVNode("div", { class: "bg-white rounded-lg shadow overflow-x-auto" }, [createVNode("table", { class: "min-w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-left text-gray-500" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Title"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Status"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Meetings"),
							createVNode("th", { class: "px-4 py-3 font-medium" })
						])]), createVNode("tbody", { class: "divide-y divide-gray-100" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.activities.data, (a) => {
							return openBlock(), createBlock("tr", {
								key: a.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3 font-medium text-warm-900" }, toDisplayString(a.title), 1),
								createVNode("td", { class: "px-4 py-3" }, [createVNode("span", { class: ["px-2 py-0.5 rounded-full text-xs font-medium", statusBadge[a.status]] }, toDisplayString(a.status), 3)]),
								createVNode("td", { class: "px-4 py-3 text-gray-500" }, toDisplayString(a.meetings_count), 1),
								createVNode("td", { class: "px-4 py-3 text-right space-x-2" }, [createVNode(unref(Link), {
									href: _ctx.route("internal.activities.edit", a.id),
									class: "text-brand-600 hover:underline text-xs"
								}, {
									default: withCtx(() => [createTextVNode("Edit")]),
									_: 1
								}, 8, ["href"]), createVNode(unref(Link), {
									href: _ctx.route("internal.activities.show", a.id),
									class: "text-gray-500 hover:underline text-xs"
								}, {
									default: withCtx(() => [createTextVNode("View")]),
									_: 1
								}, 8, ["href"])])
							]);
						}), 128)), !__props.activities.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "4",
							class: "px-4 py-8 text-center text-gray-400"
						}, "No activities yet.")])) : createCommentVNode("", true)])])]),
						__props.activities.links && __props.activities.links.length > 3 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mt-4 flex justify-center gap-1"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.activities.links, (link) => {
							return openBlock(), createBlock(unref(Link), {
								key: link.label,
								href: link.url ?? "#",
								class: ["px-3 py-1 rounded text-sm", {
									"bg-blue-600 text-white": link.active,
									"bg-white text-gray-600 hover:bg-gray-100": !link.active && link.url,
									"text-gray-300 cursor-default": !link.url
								}],
								innerHTML: link.label,
								"preserve-state": true
							}, null, 8, [
								"href",
								"class",
								"innerHTML"
							]);
						}), 128))])) : createCommentVNode("", true)
					];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Activities/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
