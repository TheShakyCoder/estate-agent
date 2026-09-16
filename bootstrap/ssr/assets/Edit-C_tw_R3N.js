import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { computed, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, toDisplayString, unref, useSSRContext, vModelRadio, vModelText, withCtx, withDirectives, withModifiers } from "vue";
//#region resources/js/Pages/Internal/MenuItem/Edit.vue
var _sfc_main = {
	__name: "Edit",
	__ssrInlineRender: true,
	props: {
		menuItem: {
			type: Object,
			required: true
		},
		topLevelItems: {
			type: Array,
			required: true
		}
	},
	setup(__props) {
		const props = __props;
		const itemType = ref(props.menuItem.href ? "link" : "submenu");
		const form = useForm({
			label: props.menuItem.label,
			href: props.menuItem.href || "",
			parent_id: props.menuItem.parent_id || null,
			type: itemType.value
		});
		const showHref = computed(() => form.data().type === "link");
		function submit() {
			if (form.data().type === "submenu") form.href = null;
			form.patch(route("internal.menu-items.update", props.menuItem.id));
		}
		function deleteItem() {
			if (!confirm("Delete this menu item?")) return;
			router.delete(route("internal.menu-items.destroy", props.menuItem.id));
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Menu Builder" }, _attrs), {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h1 class="text-3xl font-bold text-warm-900"${_scopeId}>Edit Menu Item</h1>`);
					else return [createVNode("h1", { class: "text-3xl font-bold text-warm-900" }, "Edit Menu Item")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="max-w-2xl bg-white rounded-2xl border border-warm-200 p-8 space-y-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-semibold text-warm-900 mb-2"${_scopeId}>Label *</label><input${ssrRenderAttr("value", unref(form).label)} type="text" placeholder="e.g., Services" class="w-full px-4 py-2.5 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"${_scopeId}>`);
						if (unref(form).errors.label) _push(`<p class="text-red-600 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.label)}</p>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-sm font-semibold text-warm-900 mb-3"${_scopeId}>Type *</label><div class="flex gap-4"${_scopeId}><label class="flex items-center gap-2 cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "link")) ? " checked" : ""} type="radio" value="link" class="w-4 h-4"${_scopeId}><span class="text-sm text-warm-700"${_scopeId}>Link</span></label><label class="flex items-center gap-2 cursor-pointer"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "submenu")) ? " checked" : ""} type="radio" value="submenu" class="w-4 h-4"${_scopeId}><span class="text-sm text-warm-700"${_scopeId}>Submenu Container</span></label></div></div>`);
						if (showHref.value) {
							_push(`<div${_scopeId}><label class="block text-sm font-semibold text-warm-900 mb-2"${_scopeId}>URL *</label><input${ssrRenderAttr("value", unref(form).href)} type="text" placeholder="e.g., /services or https://example.com" class="w-full px-4 py-2.5 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"${_scopeId}>`);
							if (unref(form).errors.href) _push(`<p class="text-red-600 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.href)}</p>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div class="flex gap-3 pt-4"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-6 py-2.5 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50"${_scopeId}> Update Item </button><button type="button" class="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"${_scopeId}> Delete </button>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/internal/menu-items",
							class: "px-6 py-2.5 border-2 border-warm-200 text-warm-700 font-semibold rounded-xl hover:border-warm-300 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Cancel `);
								else return [createTextVNode(" Cancel ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [createVNode("form", {
						onSubmit: withModifiers(submit, ["prevent"]),
						class: "max-w-2xl bg-white rounded-2xl border border-warm-200 p-8 space-y-6"
					}, [
						createVNode("div", null, [
							createVNode("label", { class: "block text-sm font-semibold text-warm-900 mb-2" }, "Label *"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).label = $event,
								type: "text",
								placeholder: "e.g., Services",
								class: "w-full px-4 py-2.5 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).label]]),
							unref(form).errors.label ? (openBlock(), createBlock("p", {
								key: 0,
								class: "text-red-600 text-xs mt-1"
							}, toDisplayString(unref(form).errors.label), 1)) : createCommentVNode("", true)
						]),
						createVNode("div", null, [createVNode("label", { class: "block text-sm font-semibold text-warm-900 mb-3" }, "Type *"), createVNode("div", { class: "flex gap-4" }, [createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).type = $event,
							type: "radio",
							value: "link",
							class: "w-4 h-4"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, unref(form).type]]), createVNode("span", { class: "text-sm text-warm-700" }, "Link")]), createVNode("label", { class: "flex items-center gap-2 cursor-pointer" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).type = $event,
							type: "radio",
							value: "submenu",
							class: "w-4 h-4"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, unref(form).type]]), createVNode("span", { class: "text-sm text-warm-700" }, "Submenu Container")])])]),
						showHref.value ? (openBlock(), createBlock("div", { key: 0 }, [
							createVNode("label", { class: "block text-sm font-semibold text-warm-900 mb-2" }, "URL *"),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).href = $event,
								type: "text",
								placeholder: "e.g., /services or https://example.com",
								class: "w-full px-4 py-2.5 border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).href]]),
							unref(form).errors.href ? (openBlock(), createBlock("p", {
								key: 0,
								class: "text-red-600 text-xs mt-1"
							}, toDisplayString(unref(form).errors.href), 1)) : createCommentVNode("", true)
						])) : createCommentVNode("", true),
						createVNode("div", { class: "flex gap-3 pt-4" }, [
							createVNode("button", {
								type: "submit",
								disabled: unref(form).processing,
								class: "px-6 py-2.5 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50"
							}, " Update Item ", 8, ["disabled"]),
							createVNode("button", {
								type: "button",
								onClick: deleteItem,
								class: "px-6 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
							}, " Delete "),
							createVNode(unref(Link), {
								href: "/internal/menu-items",
								class: "px-6 py-2.5 border-2 border-warm-200 text-warm-700 font-semibold rounded-xl hover:border-warm-300 transition-colors"
							}, {
								default: withCtx(() => [createTextVNode(" Cancel ")]),
								_: 1
							})
						])
					], 32)];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/MenuItem/Edit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
