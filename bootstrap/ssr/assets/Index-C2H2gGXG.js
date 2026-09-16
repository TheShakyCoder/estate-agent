import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, watch, withCtx, withDirectives } from "vue";
//#region resources/js/Pages/Internal/FieldChanges/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		changes: {
			type: Object,
			required: true
		},
		modelTypes: {
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
		const model = ref(props.filters.model ?? "");
		const event = ref(props.filters.event ?? "");
		const dateFrom = ref(props.filters.date_from ?? "");
		const dateTo = ref(props.filters.date_to ?? "");
		let debounce = null;
		function applyFilters() {
			clearTimeout(debounce);
			debounce = setTimeout(() => {
				router.get(route("internal.field-changes.index"), {
					search: search.value || void 0,
					model: model.value || void 0,
					event: event.value || void 0,
					date_from: dateFrom.value || void 0,
					date_to: dateTo.value || void 0
				}, {
					preserveState: true,
					replace: true
				});
			}, 300);
		}
		watch([
			search,
			model,
			event,
			dateFrom,
			dateTo
		], applyFilters);
		function modelName(fqcn) {
			if (!fqcn) return "—";
			return fqcn.split("\\").pop();
		}
		function truncate(str, len = 60) {
			if (str === null || str === void 0) return "—";
			str = String(str);
			return str.length > len ? str.slice(0, len) + "…" : str;
		}
		function formatDate(d) {
			if (!d) return "—";
			return new Date(d).toLocaleString();
		}
		const eventColors = {
			created: "bg-green-100 text-green-700",
			updated: "bg-blue-100 text-blue-700",
			deleted: "bg-red-100 text-red-700"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Field Changes" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"${_scopeId}><h1 class="text-2xl font-bold mb-6"${_scopeId}>Field Changes</h1><div class="flex flex-wrap gap-3 mb-4"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Search field, value, or ID…" class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"${_scopeId}><select class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(model.value) ? ssrLooseContain(model.value, "") : ssrLooseEqual(model.value, "")) ? " selected" : ""}${_scopeId}>All models</option><!--[-->`);
						ssrRenderList(__props.modelTypes, (t) => {
							_push(`<option${ssrRenderAttr("value", t.value)}${ssrIncludeBooleanAttr(Array.isArray(model.value) ? ssrLooseContain(model.value, t.value) : ssrLooseEqual(model.value, t.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(t.label)}</option>`);
						});
						_push(`<!--]--></select><select class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(event.value) ? ssrLooseContain(event.value, "") : ssrLooseEqual(event.value, "")) ? " selected" : ""}${_scopeId}>All events</option><option value="created"${ssrIncludeBooleanAttr(Array.isArray(event.value) ? ssrLooseContain(event.value, "created") : ssrLooseEqual(event.value, "created")) ? " selected" : ""}${_scopeId}>Created</option><option value="updated"${ssrIncludeBooleanAttr(Array.isArray(event.value) ? ssrLooseContain(event.value, "updated") : ssrLooseEqual(event.value, "updated")) ? " selected" : ""}${_scopeId}>Updated</option><option value="deleted"${ssrIncludeBooleanAttr(Array.isArray(event.value) ? ssrLooseContain(event.value, "deleted") : ssrLooseEqual(event.value, "deleted")) ? " selected" : ""}${_scopeId}>Deleted</option></select><input${ssrRenderAttr("value", dateFrom.value)} type="date" class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><input${ssrRenderAttr("value", dateTo.value)} type="date" class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}></div><div class="bg-white rounded-lg shadow overflow-x-auto"${_scopeId}><table class="min-w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-left text-gray-500"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 font-medium"${_scopeId}>Model</th><th class="px-4 py-3 font-medium"${_scopeId}>ID</th><th class="px-4 py-3 font-medium"${_scopeId}>Event</th><th class="px-4 py-3 font-medium"${_scopeId}>Field</th><th class="px-4 py-3 font-medium"${_scopeId}>Old Value</th><th class="px-4 py-3 font-medium"${_scopeId}>New Value</th><th class="px-4 py-3 font-medium"${_scopeId}>User</th><th class="px-4 py-3 font-medium"${_scopeId}>When</th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						ssrRenderList(__props.changes.data, (c) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 whitespace-nowrap font-medium"${_scopeId}>${ssrInterpolate(modelName(c.auditable_type))}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap font-mono text-xs"${ssrRenderAttr("title", c.auditable_id)}${_scopeId}>${ssrInterpolate(c.auditable_id?.slice(0, 8))}… </td><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass([eventColors[c.event] ?? "bg-gray-100 text-gray-600", "px-2 py-0.5 rounded-full text-xs font-medium"])}"${_scopeId}>${ssrInterpolate(c.event)}</span></td><td class="px-4 py-3 text-gray-700 whitespace-nowrap font-mono text-xs"${_scopeId}>${ssrInterpolate(c.field ?? "—")}</td><td class="px-4 py-3 text-red-700 max-w-xs truncate"${ssrRenderAttr("title", c.old_value)}${_scopeId}>${ssrInterpolate(truncate(c.old_value))}</td><td class="px-4 py-3 text-green-700 max-w-xs truncate"${ssrRenderAttr("title", c.new_value)}${_scopeId}>${ssrInterpolate(truncate(c.new_value))}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${ssrInterpolate(c.user?.name ?? "—")}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${ssrInterpolate(formatDate(c.changed_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.changes.data.length) _push(`<tr${_scopeId}><td colspan="8" class="px-4 py-8 text-center text-gray-400"${_scopeId}>No field changes recorded yet.</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						if (__props.changes.links && __props.changes.links.length > 3) {
							_push(`<div class="mt-4 flex justify-center gap-1"${_scopeId}><!--[-->`);
							ssrRenderList(__props.changes.links, (link) => {
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
						_push(`</div>`);
					} else return [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, [
						createVNode("h1", { class: "text-2xl font-bold mb-6" }, "Field Changes"),
						createVNode("div", { class: "flex flex-wrap gap-3 mb-4" }, [
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								type: "text",
								placeholder: "Search field, value, or ID…",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => model.value = $event,
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, [createVNode("option", { value: "" }, "All models"), (openBlock(true), createBlock(Fragment, null, renderList(__props.modelTypes, (t) => {
								return openBlock(), createBlock("option", {
									key: t.value,
									value: t.value
								}, toDisplayString(t.label), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, model.value]]),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => event.value = $event,
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, [
								createVNode("option", { value: "" }, "All events"),
								createVNode("option", { value: "created" }, "Created"),
								createVNode("option", { value: "updated" }, "Updated"),
								createVNode("option", { value: "deleted" }, "Deleted")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, event.value]]),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => dateFrom.value = $event,
								type: "date",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, dateFrom.value]]),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => dateTo.value = $event,
								type: "date",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, dateTo.value]])
						]),
						createVNode("div", { class: "bg-white rounded-lg shadow overflow-x-auto" }, [createVNode("table", { class: "min-w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-left text-gray-500" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Model"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "ID"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Event"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Field"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Old Value"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "New Value"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "User"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "When")
						])]), createVNode("tbody", { class: "divide-y divide-gray-100" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.changes.data, (c) => {
							return openBlock(), createBlock("tr", {
								key: c.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", { class: "px-4 py-3 whitespace-nowrap font-medium" }, toDisplayString(modelName(c.auditable_type)), 1),
								createVNode("td", {
									class: "px-4 py-3 text-gray-500 whitespace-nowrap font-mono text-xs",
									title: c.auditable_id
								}, toDisplayString(c.auditable_id?.slice(0, 8)) + "… ", 9, ["title"]),
								createVNode("td", { class: "px-4 py-3 whitespace-nowrap" }, [createVNode("span", { class: ["px-2 py-0.5 rounded-full text-xs font-medium", eventColors[c.event] ?? "bg-gray-100 text-gray-600"] }, toDisplayString(c.event), 3)]),
								createVNode("td", { class: "px-4 py-3 text-gray-700 whitespace-nowrap font-mono text-xs" }, toDisplayString(c.field ?? "—"), 1),
								createVNode("td", {
									class: "px-4 py-3 text-red-700 max-w-xs truncate",
									title: c.old_value
								}, toDisplayString(truncate(c.old_value)), 9, ["title"]),
								createVNode("td", {
									class: "px-4 py-3 text-green-700 max-w-xs truncate",
									title: c.new_value
								}, toDisplayString(truncate(c.new_value)), 9, ["title"]),
								createVNode("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, toDisplayString(c.user?.name ?? "—"), 1),
								createVNode("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, toDisplayString(formatDate(c.changed_at)), 1)
							]);
						}), 128)), !__props.changes.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "8",
							class: "px-4 py-8 text-center text-gray-400"
						}, "No field changes recorded yet.")])) : createCommentVNode("", true)])])]),
						__props.changes.links && __props.changes.links.length > 3 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mt-4 flex justify-center gap-1"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.changes.links, (link) => {
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
					])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/FieldChanges/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
