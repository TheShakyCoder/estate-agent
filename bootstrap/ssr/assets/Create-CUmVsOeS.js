import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
//#region resources/js/Pages/Admin/Role/Create.vue
var _sfc_main = {
	__name: "Create",
	__ssrInlineRender: true,
	setup(__props) {
		const form = useForm({
			name: "",
			slug: ""
		});
		function autoSlug() {
			if (!form.slug) form.slug = form.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
		}
		function submit() {
			form.post("/admin/roles");
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Create Role" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/admin/roles",
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
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Create Role</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>Add a new role to the system</p></div></div>`);
					} else return [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
						href: "/admin/roles",
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
					}), createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Create Role"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, "Add a new role to the system")])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-lg"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl p-7 shadow-sm"${_scopeId}><form class="space-y-5"${_scopeId}><div${_scopeId}><label for="name" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Role name</label><input${ssrRenderAttr("value", unref(form).name)} id="name" type="text" required placeholder="e.g. Editor" class="${ssrRenderClass([unref(form).errors.name ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"])}"${_scopeId}>`);
						if (unref(form).errors.name) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label for="slug" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Slug</label><input${ssrRenderAttr("value", unref(form).slug)} id="slug" type="text" required placeholder="e.g. editor" class="${ssrRenderClass([unref(form).errors.slug ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300 font-mono"])}"${_scopeId}>`);
						if (unref(form).errors.slug) _push(`<p class="mt-1.5 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.slug)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div class="flex items-center gap-3 pt-2"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"${_scopeId}>${ssrInterpolate(unref(form).processing ? "Creating…" : "Create role")}</button>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/admin/roles",
							class: "px-6 py-2.5 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form></div></div>`);
					} else return [createVNode("div", { class: "max-w-lg" }, [createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-7 shadow-sm" }, [createVNode("form", {
						onSubmit: withModifiers(submit, ["prevent"]),
						class: "space-y-5"
					}, [
						createVNode("div", null, [
							createVNode("label", {
								for: "name",
								class: "block text-xs font-semibold text-warm-700 mb-1.5"
							}, "Role name"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).name = $event,
								onBlur: autoSlug,
								id: "name",
								type: "text",
								required: "",
								placeholder: "e.g. Editor",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300", unref(form).errors.name ? "border-rose-300" : "border-warm-200"]
							}, null, 42, ["onUpdate:modelValue"]), [[vModelText, unref(form).name]]),
							unref(form).errors.name ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", null, [
							createVNode("label", {
								for: "slug",
								class: "block text-xs font-semibold text-warm-700 mb-1.5"
							}, "Slug"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).slug = $event,
								id: "slug",
								type: "text",
								required: "",
								placeholder: "e.g. editor",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300 font-mono", unref(form).errors.slug ? "border-rose-300" : "border-warm-200"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).slug]]),
							unref(form).errors.slug ? (openBlock(), createBlock("p", {
								key: 0,
								class: "mt-1.5 text-xs text-rose-600"
							}, toDisplayString(unref(form).errors.slug), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", { class: "flex items-center gap-3 pt-2" }, [createVNode("button", {
							type: "submit",
							disabled: unref(form).processing,
							class: "px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"
						}, toDisplayString(unref(form).processing ? "Creating…" : "Create role"), 9, ["disabled"]), createVNode(unref(Link), {
							href: "/admin/roles",
							class: "px-6 py-2.5 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Cancel ")]),
							_: 1
						})])
					], 32)])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Role/Create.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
