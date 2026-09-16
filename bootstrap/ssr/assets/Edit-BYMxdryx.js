import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./MediaPicker-DqiXYKR0.js";
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
//#region resources/js/Pages/Internal/Activities/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: { activity: {
		type: Object,
		required: true
	} },
	setup(__props) {
		const props = __props;
		const form = useForm({
			title: props.activity.title,
			slug: props.activity.slug,
			description: props.activity.description ?? "",
			content: props.activity.content ?? "",
			thumbnail_id: props.activity.thumbnail_id,
			status: props.activity.status
		});
		const thumbnailUrl = ref(props.activity.thumbnail_url ?? null);
		function submit() {
			form.put(route("internal.activities.update", props.activity.id));
		}
		function destroy() {
			if (confirm("Delete this activity?")) router.delete(route("internal.activities.destroy", props.activity.id));
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: `Edit: ${__props.activity.title}` }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.activities.index"),
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
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Edit Activity</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>${ssrInterpolate(__props.activity.title)}</p></div></div>`);
					} else return [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
						href: _ctx.route("internal.activities.index"),
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
					}, 8, ["href"]), createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Edit Activity"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, toDisplayString(__props.activity.title), 1)])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="flex flex-col lg:flex-row gap-6 items-start"${_scopeId}><div class="flex-1 min-w-0 bg-white border border-warm-200 rounded-2xl p-7 shadow-sm space-y-5"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).title)} type="text" required class="${ssrRenderClass([unref(form).errors.title ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if (unref(form).errors.title) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.title)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Slug</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" required class="${ssrRenderClass([unref(form).errors.slug ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 font-mono focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if (unref(form).errors.slug) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.slug)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Description</label><textarea rows="3" class="${ssrRenderClass([unref(form).errors.description ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
						if (unref(form).errors.description) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Content</label>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							modelValue: unref(form).content,
							"onUpdate:modelValue": ($event) => unref(form).content = $event
						}, null, _parent, _scopeId));
						if (unref(form).errors.content) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.content)}</p>`);
						else _push(`<!---->`);
						_push(`</div></div><div class="w-full lg:w-72 shrink-0 space-y-4"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Status</label><select class="w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"${_scopeId}><option value="active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "active") : ssrLooseEqual(unref(form).status, "active")) ? " selected" : ""}${_scopeId}>Active</option><option value="inactive"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "inactive") : ssrLooseEqual(unref(form).status, "inactive")) ? " selected" : ""}${_scopeId}>Inactive</option></select></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Saving…" : "Save Changes")}</button>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.activities.index"),
							class: "block w-full px-4 py-2.5 text-center text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<button type="button" class="w-full px-4 py-2.5 text-sm font-medium text-rose-600 border border-rose-200 rounded-xl hover:bg-rose-50 transition-colors"${_scopeId}> Delete Activity </button></div><div class="bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3"${_scopeId}><h3 class="text-xs font-semibold text-warm-700 uppercase tracking-wide"${_scopeId}>Thumbnail</h3>`);
						_push(ssrRenderComponent(_sfc_main$3, {
							modelValue: unref(form).thumbnail_id,
							"onUpdate:modelValue": ($event) => unref(form).thumbnail_id = $event,
							url: thumbnailUrl.value,
							"onUpdate:url": ($event) => thumbnailUrl.value = $event
						}, null, _parent, _scopeId));
						if (unref(form).errors.thumbnail_id) _push(`<p class="text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.thumbnail_id)}</p>`);
						else _push(`<!---->`);
						_push(`</div></div></form>`);
					} else return [createVNode("form", {
						onSubmit: withModifiers(submit, ["prevent"]),
						class: "flex flex-col lg:flex-row gap-6 items-start"
					}, [createVNode("div", { class: "flex-1 min-w-0 bg-white border border-warm-200 rounded-2xl p-7 shadow-sm space-y-5" }, [
						createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Title"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								required: "",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", unref(form).errors.title ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]]),
							unref(form).errors.title ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Slug"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).slug = $event,
								type: "text",
								required: "",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 font-mono focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", unref(form).errors.slug ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).slug]]),
							unref(form).errors.slug ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.slug), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Description"),
							withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).description = $event,
								rows: "3",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", unref(form).errors.description ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).description]]),
							unref(form).errors.description ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Content"),
							createVNode(_sfc_main$2, {
								modelValue: unref(form).content,
								"onUpdate:modelValue": ($event) => unref(form).content = $event
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							unref(form).errors.content ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.content), 1)) : createCommentVNode("", true)
						])
					]), createVNode("div", { class: "w-full lg:w-72 shrink-0 space-y-4" }, [createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3" }, [
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Status"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => unref(form).status = $event,
							class: "w-full px-3 py-2.5 text-sm border border-warm-200 rounded-xl bg-white text-warm-900"
						}, [createVNode("option", { value: "active" }, "Active"), createVNode("option", { value: "inactive" }, "Inactive")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).status]])]),
						createVNode("button", {
							type: "submit",
							disabled: unref(form).processing,
							class: "w-full px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"
						}, toDisplayString(unref(form).processing ? "Saving…" : "Save Changes"), 9, ["disabled"]),
						createVNode(unref(Link), {
							href: _ctx.route("internal.activities.index"),
							class: "block w-full px-4 py-2.5 text-center text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Cancel ")]),
							_: 1
						}, 8, ["href"]),
						createVNode("button", {
							type: "button",
							onClick: destroy,
							class: "w-full px-4 py-2.5 text-sm font-medium text-rose-600 border border-rose-200 rounded-xl hover:bg-rose-50 transition-colors"
						}, " Delete Activity ")
					]), createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3" }, [
						createVNode("h3", { class: "text-xs font-semibold text-warm-700 uppercase tracking-wide" }, "Thumbnail"),
						createVNode(_sfc_main$3, {
							modelValue: unref(form).thumbnail_id,
							"onUpdate:modelValue": ($event) => unref(form).thumbnail_id = $event,
							url: thumbnailUrl.value,
							"onUpdate:url": ($event) => thumbnailUrl.value = $event
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"url",
							"onUpdate:url"
						]),
						unref(form).errors.thumbnail_id ? (openBlock(), createBlock("p", {
							key: 0,
							class: "text-xs text-rose-600"
						}, toDisplayString(unref(form).errors.thumbnail_id), 1)) : createCommentVNode("", true)
					])])], 32)];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Activities/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
