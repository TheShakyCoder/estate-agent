import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
//#region resources/js/Pages/Internal/Meetings/Create.vue
var _sfc_main = {
	__name: "Create",
	__ssrInlineRender: true,
	props: {
		activities: {
			type: Array,
			required: true
		},
		activity_id: {
			type: String,
			default: null
		}
	},
	setup(__props) {
		const form = useForm({
			title: "",
			activity_id: __props.activity_id ?? "",
			starts_at: "",
			ends_at: "",
			location: "",
			description: "",
			recurrence: "",
			recurrence_ends_at: ""
		});
		function submit() {
			form.transform((data) => ({
				...data,
				activity_id: data.activity_id || null,
				recurrence: data.recurrence || null,
				recurrence_ends_at: data.recurrence_ends_at || null,
				ends_at: data.ends_at || null
			})).post(route("internal.meetings.store"));
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "New Meeting" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.meetings.index"),
							class: "p-1.5 rounded-lg text-warm-400 hover:text-warm-700 hover:bg-warm-100 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg>`);
								else return [(openBlock(), createBlock("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M15 19l-7-7 7-7"
								})]))];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>New Meeting</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>Schedule a new meeting on the calendar</p></div></div>`);
					} else return [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
						href: _ctx.route("internal.meetings.index"),
						class: "p-1.5 rounded-lg text-warm-400 hover:text-warm-700 hover:bg-warm-100 transition-colors"
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
							d: "M15 19l-7-7 7-7"
						})]))]),
						_: 1
					}, 8, ["href"]), createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "New Meeting"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, "Schedule a new meeting on the calendar")])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="max-w-2xl"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl p-7 shadow-sm space-y-5"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).title)} type="text" required placeholder="e.g. Weekly committee meeting" class="${ssrRenderClass([unref(form).errors.title ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"])}"${_scopeId}>`);
						if (unref(form).errors.title) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.title)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Activity (optional)</label><select class="w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).activity_id) ? ssrLooseContain(unref(form).activity_id, "") : ssrLooseEqual(unref(form).activity_id, "")) ? " selected" : ""}${_scopeId}>None</option><!--[-->`);
						ssrRenderList(__props.activities, (a) => {
							_push(`<option${ssrRenderAttr("value", a.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).activity_id) ? ssrLooseContain(unref(form).activity_id, a.id) : ssrLooseEqual(unref(form).activity_id, a.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(a.title)}</option>`);
						});
						_push(`<!--]--></select>`);
						if (unref(form).errors.activity_id) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.activity_id)}</p>`);
						else _push(`<!---->`);
						_push(`</div><p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2"${_scopeId}>All times are in UTC, not British Summer Time (BST). During BST, subtract one hour from local time.</p><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Starts at (UTC)</label><input${ssrRenderAttr("value", unref(form).starts_at)} type="datetime-local" required class="${ssrRenderClass([unref(form).errors.starts_at ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if (unref(form).errors.starts_at) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.starts_at)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Ends at (UTC, optional)</label><input${ssrRenderAttr("value", unref(form).ends_at)} type="datetime-local" class="${ssrRenderClass([unref(form).errors.ends_at ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if (unref(form).errors.ends_at) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.ends_at)}</p>`);
						else _push(`<!---->`);
						_push(`</div></div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Location (optional)</label><input${ssrRenderAttr("value", unref(form).location)} type="text" placeholder="e.g. Main Hall" class="${ssrRenderClass([unref(form).errors.location ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"])}"${_scopeId}>`);
						if (unref(form).errors.location) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.location)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Description (optional)</label><textarea rows="3" placeholder="Notes about this meeting…" class="${ssrRenderClass([unref(form).errors.description ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"])}"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
						if (unref(form).errors.description) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Recurrence (optional)</label><select class="w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).recurrence) ? ssrLooseContain(unref(form).recurrence, "") : ssrLooseEqual(unref(form).recurrence, "")) ? " selected" : ""}${_scopeId}>None</option><option value="weekly"${ssrIncludeBooleanAttr(Array.isArray(unref(form).recurrence) ? ssrLooseContain(unref(form).recurrence, "weekly") : ssrLooseEqual(unref(form).recurrence, "weekly")) ? " selected" : ""}${_scopeId}>Weekly</option><option value="fortnightly"${ssrIncludeBooleanAttr(Array.isArray(unref(form).recurrence) ? ssrLooseContain(unref(form).recurrence, "fortnightly") : ssrLooseEqual(unref(form).recurrence, "fortnightly")) ? " selected" : ""}${_scopeId}>Fortnightly</option><option value="monthly"${ssrIncludeBooleanAttr(Array.isArray(unref(form).recurrence) ? ssrLooseContain(unref(form).recurrence, "monthly") : ssrLooseEqual(unref(form).recurrence, "monthly")) ? " selected" : ""}${_scopeId}>Monthly</option></select></div>`);
						if (unref(form).recurrence) _push(`<div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Recurrence ends</label><input${ssrRenderAttr("value", unref(form).recurrence_ends_at)} type="date" class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"${_scopeId}></div>`);
						else _push(`<!---->`);
						_push(`</div><div class="flex gap-3 pt-2"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Saving…" : "Create Meeting")}</button>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.meetings.index"),
							class: "px-6 py-2.5 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div></form>`);
					} else return [createVNode("form", {
						onSubmit: withModifiers(submit, ["prevent"]),
						class: "max-w-2xl"
					}, [createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-7 shadow-sm space-y-5" }, [
						createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Title"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								required: "",
								placeholder: "e.g. Weekly committee meeting",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300", unref(form).errors.title ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]]),
							unref(form).errors.title ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Activity (optional)"),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).activity_id = $event,
								class: "w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"
							}, [createVNode("option", { value: "" }, "None"), (openBlock(true), createBlock(Fragment, null, renderList(__props.activities, (a) => {
								return openBlock(), createBlock("option", {
									key: a.id,
									value: a.id
								}, toDisplayString(a.title), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).activity_id]]),
							unref(form).errors.activity_id ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.activity_id), 1)) : createCommentVNode("", true)
						]),
						createVNode("p", { class: "text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2" }, "All times are in UTC, not British Summer Time (BST). During BST, subtract one hour from local time."),
						createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Starts at (UTC)"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).starts_at = $event,
								type: "datetime-local",
								required: "",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", unref(form).errors.starts_at ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).starts_at]]),
							unref(form).errors.starts_at ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.starts_at), 1)) : createCommentVNode("", true)
						]), createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Ends at (UTC, optional)"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).ends_at = $event,
								type: "datetime-local",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", unref(form).errors.ends_at ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).ends_at]]),
							unref(form).errors.ends_at ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.ends_at), 1)) : createCommentVNode("", true)
						])]),
						createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Location (optional)"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).location = $event,
								type: "text",
								placeholder: "e.g. Main Hall",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300", unref(form).errors.location ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).location]]),
							unref(form).errors.location ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.location), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Description (optional)"),
							withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).description = $event,
								rows: "3",
								placeholder: "Notes about this meeting…",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300", unref(form).errors.description ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).description]]),
							unref(form).errors.description ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Recurrence (optional)"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => unref(form).recurrence = $event,
							class: "w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"
						}, [
							createVNode("option", { value: "" }, "None"),
							createVNode("option", { value: "weekly" }, "Weekly"),
							createVNode("option", { value: "fortnightly" }, "Fortnightly"),
							createVNode("option", { value: "monthly" }, "Monthly")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).recurrence]])]), unref(form).recurrence ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Recurrence ends"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).recurrence_ends_at = $event,
							type: "date",
							class: "w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).recurrence_ends_at]])])) : createCommentVNode("", true)]),
						createVNode("div", { class: "flex gap-3 pt-2" }, [createVNode("button", {
							type: "submit",
							disabled: unref(form).processing,
							class: "px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"
						}, toDisplayString(unref(form).processing ? "Saving…" : "Create Meeting"), 9, ["disabled"]), createVNode(unref(Link), {
							href: _ctx.route("internal.meetings.index"),
							class: "px-6 py-2.5 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Cancel ")]),
							_: 1
						}, 8, ["href"])])
					])], 32)];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Meetings/Create.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
