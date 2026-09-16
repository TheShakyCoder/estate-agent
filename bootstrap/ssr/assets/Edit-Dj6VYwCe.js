import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { n as _sfc_main$2, t as _sfc_main$3 } from "./MediaPicker-DqiXYKR0.js";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
//#region resources/js/Pages/Internal/Competitions/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: { competition: {
		type: Object,
		required: true
	} },
	setup(__props) {
		const props = __props;
		const form = useForm({
			title: props.competition.title,
			slug: props.competition.slug,
			description: props.competition.description ?? "",
			content: props.competition.content ?? "",
			thumbnail_id: props.competition.thumbnail_id ?? null,
			status: props.competition.status
		});
		const thumbnailUrl = ref(props.competition.thumbnail_url ?? null);
		function submit() {
			form.put(`/internal/competitions/${props.competition.id}`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: `Edit — ${__props.competition.title}` }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/internal/competitions",
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
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Edit Competition</h1><p class="text-sm text-warm-500 mt-0.5 truncate max-w-xs"${_scopeId}>${ssrInterpolate(__props.competition.title)}</p></div></div>`);
					} else return [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
						href: "/internal/competitions",
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
					}), createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Edit Competition"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5 truncate max-w-xs" }, toDisplayString(__props.competition.title), 1)])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="flex flex-col lg:flex-row gap-6 items-start"${_scopeId}><div class="flex-1 min-w-0 bg-white border border-warm-200 rounded-2xl p-7 shadow-sm space-y-5"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).title)} type="text" required class="${ssrRenderClass([unref(form).errors.title ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if (unref(form).errors.title) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.title)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Slug</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" required class="${ssrRenderClass([unref(form).errors.slug ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 font-mono focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}>`);
						if (unref(form).errors.slug) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.slug)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Rules &amp; Details</label>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							modelValue: unref(form).content,
							"onUpdate:modelValue": ($event) => unref(form).content = $event
						}, null, _parent, _scopeId));
						if (unref(form).errors.content) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.content)}</p>`);
						else _push(`<!---->`);
						_push(`</div></div><div class="w-full lg:w-72 shrink-0 space-y-4"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Saving…" : "Save changes")}</button>`);
						_push(ssrRenderComponent(unref(Link), {
							href: `/internal/competitions/${__props.competition.id}`,
							class: "block w-full px-4 py-2.5 text-center text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` View entries `);
								else return [createTextVNode(" View entries ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3"${_scopeId}><h3 class="text-xs font-semibold text-warm-700 uppercase tracking-wide"${_scopeId}>Status</h3><select class="${ssrRenderClass([unref(form).errors.status ? "border-rose-300" : "border-warm-200", "w-full px-3 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"])}"${_scopeId}><option value="open"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "open") : ssrLooseEqual(unref(form).status, "open")) ? " selected" : ""}${_scopeId}>Open — accepting entries</option><option value="closed"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "closed") : ssrLooseEqual(unref(form).status, "closed")) ? " selected" : ""}${_scopeId}>Closed — no new entries</option><option value="results"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "results") : ssrLooseEqual(unref(form).status, "results")) ? " selected" : ""}${_scopeId}>Results — winner announced</option></select>`);
						if (unref(form).errors.status) _push(`<p class="text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.status)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div class="bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3"${_scopeId}><h3 class="text-xs font-semibold text-warm-700 uppercase tracking-wide"${_scopeId}>Short description</h3><textarea rows="3" placeholder="Brief summary shown on the competitions list…" class="${ssrRenderClass([unref(form).errors.description ? "border-rose-300" : "border-warm-200", "w-full px-3 py-2 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"])}"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
						if (unref(form).errors.description) _push(`<p class="text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.description)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div class="bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3"${_scopeId}><h3 class="text-xs font-semibold text-warm-700 uppercase tracking-wide"${_scopeId}>Thumbnail</h3>`);
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
							createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1.5" }, "Rules & Details"),
							createVNode(_sfc_main$2, {
								modelValue: unref(form).content,
								"onUpdate:modelValue": ($event) => unref(form).content = $event
							}, null, 8, ["modelValue", "onUpdate:modelValue"]),
							unref(form).errors.content ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.content), 1)) : createCommentVNode("", true)
						])
					]), createVNode("div", { class: "w-full lg:w-72 shrink-0 space-y-4" }, [
						createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3" }, [createVNode("button", {
							type: "submit",
							disabled: unref(form).processing,
							class: "w-full px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"
						}, toDisplayString(unref(form).processing ? "Saving…" : "Save changes"), 9, ["disabled"]), createVNode(unref(Link), {
							href: `/internal/competitions/${__props.competition.id}`,
							class: "block w-full px-4 py-2.5 text-center text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" View entries ")]),
							_: 1
						}, 8, ["href"])]),
						createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3" }, [
							createVNode("h3", { class: "text-xs font-semibold text-warm-700 uppercase tracking-wide" }, "Status"),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).status = $event,
								class: ["w-full px-3 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition", unref(form).errors.status ? "border-rose-300" : "border-warm-200"]
							}, [
								createVNode("option", { value: "open" }, "Open — accepting entries"),
								createVNode("option", { value: "closed" }, "Closed — no new entries"),
								createVNode("option", { value: "results" }, "Results — winner announced")
							], 10, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).status]]),
							unref(form).errors.status ? (openBlock(), createBlock("p", {
								key: 0,
								class: "text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.status), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3" }, [
							createVNode("h3", { class: "text-xs font-semibold text-warm-700 uppercase tracking-wide" }, "Short description"),
							withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).description = $event,
								rows: "3",
								placeholder: "Brief summary shown on the competitions list…",
								class: ["w-full px-3 py-2 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300", unref(form).errors.description ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).description]]),
							unref(form).errors.description ? (openBlock(), createBlock("p", {
								key: 0,
								class: "text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-5 shadow-sm space-y-3" }, [
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
						])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Competitions/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
