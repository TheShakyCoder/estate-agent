import { t as _sfc_main$1 } from "./GuestLayout-CtyvNWck.js";
import { t as _sfc_main$2 } from "./InputError-CNCRBhqx.js";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
//#region resources/js/Pages/Auth/ForgotPassword.vue
var _sfc_main = {
	__name: "ForgotPassword",
	__ssrInlineRender: true,
	props: { status: { type: String } },
	setup(__props) {
		const form = useForm({ email: "" });
		const submit = () => {
			form.post(route("password.email"));
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, mergeProps({
				title: "Reset your password",
				subtitle: "We'll send a reset link to your email address"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent, _scopeId));
						if (__props.status) _push(`<div class="mb-6 flex items-center gap-2 rounded-xl bg-brand-50 border border-brand-200 px-4 py-3 text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(__props.status)}</div>`);
						else _push(`<!---->`);
						_push(`<form class="space-y-5"${_scopeId}><div${_scopeId}><label for="email" class="block text-xs font-semibold text-warm-700 mb-1.5"${_scopeId}>Email address</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" required autofocus autocomplete="username" placeholder="you@example.com" class="${ssrRenderClass([unref(form).errors.email ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white", "w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900"])}"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							class: "mt-1.5",
							message: unref(form).errors.email
						}, null, _parent, _scopeId));
						_push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"${_scopeId}>`);
						if (unref(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<!---->`);
						_push(` ${ssrInterpolate(unref(form).processing ? "Sending…" : "Send reset link")}</button></form><p class="mt-6 text-center text-sm text-warm-500"${_scopeId}> Remembered it? `);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("login"),
							class: "text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Back to sign in `);
								else return [createTextVNode(" Back to sign in ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</p>`);
					} else return [
						createVNode(unref(Head), { title: "Forgot Password" }),
						__props.status ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mb-6 flex items-center gap-2 rounded-xl bg-brand-50 border border-brand-200 px-4 py-3 text-sm text-brand-700"
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
						})])), createTextVNode(" " + toDisplayString(__props.status), 1)])) : createCommentVNode("", true),
						createVNode("form", {
							onSubmit: withModifiers(submit, ["prevent"]),
							class: "space-y-5"
						}, [createVNode("div", null, [
							createVNode("label", {
								for: "email",
								class: "block text-xs font-semibold text-warm-700 mb-1.5"
							}, "Email address"),
							withDirectives(createVNode("input", {
								id: "email",
								"onUpdate:modelValue": ($event) => unref(form).email = $event,
								type: "email",
								required: "",
								autofocus: "",
								autocomplete: "username",
								placeholder: "you@example.com",
								class: ["w-full px-4 py-2.5 text-sm border rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder-warm-300 text-warm-900", unref(form).errors.email ? "border-rose-400 bg-rose-50" : "border-warm-200 bg-white"]
							}, null, 10, ["onUpdate:modelValue"]), [[vModelText, unref(form).email]]),
							createVNode(_sfc_main$2, {
								class: "mt-1.5",
								message: unref(form).errors.email
							}, null, 8, ["message"])
						]), createVNode("button", {
							type: "submit",
							disabled: unref(form).processing,
							class: "w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
						})])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(form).processing ? "Sending…" : "Send reset link"), 1)], 8, ["disabled"])], 32),
						createVNode("p", { class: "mt-6 text-center text-sm text-warm-500" }, [createTextVNode(" Remembered it? "), createVNode(unref(Link), {
							href: _ctx.route("login"),
							class: "text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Back to sign in ")]),
							_: 1
						}, 8, ["href"])])
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
