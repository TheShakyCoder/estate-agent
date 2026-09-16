import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, watch, withCtx, withDirectives } from "vue";
//#region resources/js/Pages/Internal/Meetings/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		meetings: {
			type: Object,
			required: true
		},
		activities: {
			type: Array,
			required: true
		},
		filters: {
			type: Object,
			default: () => ({})
		}
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters.search ?? "");
		const activityId = ref(props.filters.activity_id ?? "");
		let debounce = null;
		function applyFilters() {
			clearTimeout(debounce);
			debounce = setTimeout(() => {
				router.get(route("internal.meetings.index"), {
					search: search.value || void 0,
					activity_id: activityId.value || void 0
				}, {
					preserveState: true,
					replace: true
				});
			}, 300);
		}
		watch([search, activityId], applyFilters);
		function formatDate(d) {
			if (!d) return "—";
			return new Date(d).toLocaleString();
		}
		const recurrenceBadge = {
			weekly: "bg-blue-100 text-blue-700",
			fortnightly: "bg-purple-100 text-purple-700",
			monthly: "bg-amber-100 text-amber-700"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Meetings" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Meetings</h1>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.meetings.create"),
							class: "px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` New Meeting `);
								else return [createTextVNode(" New Meeting ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Meetings"), createVNode(unref(Link), {
						href: _ctx.route("internal.meetings.create"),
						class: "px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm"
					}, {
						default: withCtx(() => [createTextVNode(" New Meeting ")]),
						_: 1
					}, 8, ["href"])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex flex-wrap gap-3 mb-4"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Search meetings…" class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"${_scopeId}><select class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(activityId.value) ? ssrLooseContain(activityId.value, "") : ssrLooseEqual(activityId.value, "")) ? " selected" : ""}${_scopeId}>All activities</option><!--[-->`);
						ssrRenderList(__props.activities, (a) => {
							_push(`<option${ssrRenderAttr("value", a.id)}${ssrIncludeBooleanAttr(Array.isArray(activityId.value) ? ssrLooseContain(activityId.value, a.id) : ssrLooseEqual(activityId.value, a.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(a.title)}</option>`);
						});
						_push(`<!--]--></select></div><div class="bg-white rounded-lg shadow overflow-x-auto"${_scopeId}><table class="min-w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-left text-gray-500"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 font-medium"${_scopeId}>Title</th><th class="px-4 py-3 font-medium"${_scopeId}>Activity</th><th class="px-4 py-3 font-medium"${_scopeId}>Starts</th><th class="px-4 py-3 font-medium"${_scopeId}>Location</th><th class="px-4 py-3 font-medium"${_scopeId}>Recurrence</th><th class="px-4 py-3 font-medium"${_scopeId}></th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						ssrRenderList(__props.meetings.data, (m) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 font-medium text-warm-900"${_scopeId}>${ssrInterpolate(m.title)}</td><td class="px-4 py-3 text-gray-500"${_scopeId}>${ssrInterpolate(m.activity?.title ?? "—")}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${ssrInterpolate(formatDate(m.starts_at))}</td><td class="px-4 py-3 text-gray-500"${_scopeId}>${ssrInterpolate(m.location ?? "—")}</td><td class="px-4 py-3"${_scopeId}>`);
							if (m.recurrence) _push(`<span class="${ssrRenderClass([recurrenceBadge[m.recurrence] ?? "bg-gray-100 text-gray-600", "px-2 py-0.5 rounded-full text-xs font-medium"])}"${_scopeId}>${ssrInterpolate(m.recurrence)}</span>`);
							else _push(`<span class="text-gray-400"${_scopeId}>—</span>`);
							_push(`</td><td class="px-4 py-3 text-right"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: _ctx.route("internal.meetings.edit", m.id),
								class: "text-brand-600 hover:underline text-xs"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Edit`);
									else return [createTextVNode("Edit")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.meetings.data.length) _push(`<tr${_scopeId}><td colspan="6" class="px-4 py-8 text-center text-gray-400"${_scopeId}>No meetings yet.</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						if (__props.meetings.links && __props.meetings.links.length > 3) {
							_push(`<div class="mt-4 flex justify-center gap-1"${_scopeId}><!--[-->`);
							ssrRenderList(__props.meetings.links, (link) => {
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
						createVNode("div", { class: "flex flex-wrap gap-3 mb-4" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							type: "text",
							placeholder: "Search meetings…",
							class: "border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]]), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => activityId.value = $event,
							class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
						}, [createVNode("option", { value: "" }, "All activities"), (openBlock(true), createBlock(Fragment, null, renderList(__props.activities, (a) => {
							return openBlock(), createBlock("option", {
								key: a.id,
								value: a.id
							}, toDisplayString(a.title), 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, activityId.value]])]),
						createVNode("div", { class: "bg-white rounded-lg shadow overflow-x-auto" }, [createVNode("table", { class: "min-w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-left text-gray-500" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Title"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Activity"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Starts"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Location"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Recurrence"),
							createVNode("th", { class: "px-4 py-3 font-medium" })
						])]), createVNode("tbody", { class: "divide-y divide-gray-100" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.meetings.data, (m) => {
							return openBlock(), createBlock("tr", {
								key: m.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3 font-medium text-warm-900" }, toDisplayString(m.title), 1),
								createVNode("td", { class: "px-4 py-3 text-gray-500" }, toDisplayString(m.activity?.title ?? "—"), 1),
								createVNode("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, toDisplayString(formatDate(m.starts_at)), 1),
								createVNode("td", { class: "px-4 py-3 text-gray-500" }, toDisplayString(m.location ?? "—"), 1),
								createVNode("td", { class: "px-4 py-3" }, [m.recurrence ? (openBlock(), createBlock("span", {
									key: 0,
									class: ["px-2 py-0.5 rounded-full text-xs font-medium", recurrenceBadge[m.recurrence] ?? "bg-gray-100 text-gray-600"]
								}, toDisplayString(m.recurrence), 3)) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-gray-400"
								}, "—"))]),
								createVNode("td", { class: "px-4 py-3 text-right" }, [createVNode(unref(Link), {
									href: _ctx.route("internal.meetings.edit", m.id),
									class: "text-brand-600 hover:underline text-xs"
								}, {
									default: withCtx(() => [createTextVNode("Edit")]),
									_: 1
								}, 8, ["href"])])
							]);
						}), 128)), !__props.meetings.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "px-4 py-8 text-center text-gray-400"
						}, "No meetings yet.")])) : createCommentVNode("", true)])])]),
						__props.meetings.links && __props.meetings.links.length > 3 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mt-4 flex justify-center gap-1"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.meetings.links, (link) => {
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Meetings/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
