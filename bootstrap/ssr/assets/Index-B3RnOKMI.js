import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import _sfc_main$2 from "./Groups-DlEQjHJh.js";
import { Head, Link, router, useForm, usePage } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { computed, createBlock, createCommentVNode, createTextVNode, createVNode, onMounted, openBlock, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Admin/Role/Right/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		role: {
			type: Object,
			required: true
		},
		internal: {
			type: Object,
			required: true
		},
		admin: {
			type: Object,
			required: true
		}
	},
	setup(__props) {
		const page = usePage();
		const props = __props;
		const form = useForm({ controller_method_names: {} });
		onMounted(() => {
			for (const r of props.role.rights) form.controller_method_names[r.controller_method_name] = true;
		});
		const methodMeta = {
			index: {
				label: "View list",
				colour: "bg-sky-100 text-sky-700 border-sky-200"
			},
			show: {
				label: "View detail",
				colour: "bg-purple-100 text-purple-700 border-purple-200"
			},
			store: {
				label: "Create",
				colour: "bg-brand-100 text-brand-700 border-brand-200"
			},
			update: {
				label: "Edit",
				colour: "bg-amber-100 text-amber-700 border-amber-200"
			},
			destroy: {
				label: "Delete",
				colour: "bg-rose-100 text-rose-700 border-rose-200"
			}
		};
		const savedCount = computed(() => Object.values(form.controller_method_names).filter(Boolean).length);
		function submit() {
			router.put("/admin/roles/" + props.role.id + "/rights", form);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: `Rights — ${__props.role.name}` }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/admin/roles/" + __props.role.id,
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
						_push(`<div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Manage Rights</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}> Role: <span class="font-medium text-warm-700"${_scopeId}>${ssrInterpolate(__props.role.name)}</span></p></div></div><div class="flex items-center gap-3"${_scopeId}><span class="text-xs text-warm-400"${_scopeId}>${ssrInterpolate(savedCount.value)} permission${ssrInterpolate(savedCount.value !== 1 ? "s" : "")} enabled </span><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"${_scopeId}>`);
						if (unref(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg>`);
						_push(` ${ssrInterpolate(unref(form).processing ? "Saving…" : "Save changes")}</button></div></div>`);
					} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
						href: "/admin/roles/" + __props.role.id,
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
					}, 8, ["href"]), createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Manage Rights"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, [createTextVNode(" Role: "), createVNode("span", { class: "font-medium text-warm-700" }, toDisplayString(__props.role.name), 1)])])]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("span", { class: "text-xs text-warm-400" }, toDisplayString(savedCount.value) + " permission" + toDisplayString(savedCount.value !== 1 ? "s" : "") + " enabled ", 1), createVNode("button", {
						onClick: submit,
						disabled: unref(form).processing,
						class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
					}, [unref(form).processing ? (openBlock(), createBlock("svg", {
						key: 0,
						class: "w-4 h-4 animate-spin",
						fill: "none",
						viewBox: "0 0 24 24"
					}, [createVNode("circle", {
						class: "opacity-25",
						cx: "12",
						cy: "12",
						r: "10",
						stroke: "currentColor",
						"stroke-width": "4"
					}), createVNode("path", {
						class: "opacity-75",
						fill: "currentColor",
						d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
					})])) : (openBlock(), createBlock("svg", {
						key: 1,
						class: "w-4 h-4",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor"
					}, [createVNode("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						"stroke-width": "2",
						d: "M5 13l4 4L19 7"
					})])), createTextVNode(" " + toDisplayString(unref(form).processing ? "Saving…" : "Save changes"), 1)], 8, ["disabled"])])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(unref(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						_push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							title: "Internal Routes",
							routes: __props.internal,
							form: unref(form),
							methodMeta,
							submit
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							title: "Admin Routes",
							routes: __props.admin,
							form: unref(form),
							methodMeta,
							submit
						}, null, _parent, _scopeId));
						_push(`</div>`);
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
					})])), createTextVNode(" " + toDisplayString(unref(page).props.flash.success), 1)])) : createCommentVNode("", true), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [createVNode(_sfc_main$2, {
						title: "Internal Routes",
						routes: __props.internal,
						form: unref(form),
						methodMeta,
						submit
					}, null, 8, ["routes", "form"]), createVNode(_sfc_main$2, {
						title: "Admin Routes",
						routes: __props.admin,
						form: unref(form),
						methodMeta,
						submit
					}, null, 8, ["routes", "form"])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Role/Right/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
