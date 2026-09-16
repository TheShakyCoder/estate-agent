import { t as _sfc_main$1 } from "./GuestLayout-CtyvNWck.js";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { computed, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, toDisplayString, unref, useSSRContext, withCtx, withModifiers } from "vue";
//#region resources/js/Pages/Auth/VerifyEmail.vue
var _sfc_main = {
	__name: "VerifyEmail",
	__ssrInlineRender: true,
	props: { status: { type: String } },
	setup(__props) {
		const props = __props;
		const form = useForm({});
		const submit = () => {
			form.post(route("verification.send"));
		};
		const verificationLinkSent = computed(() => props.status === "verification-link-sent");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, mergeProps({
				title: "Verify your email",
				subtitle: "One last step before you get started"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent, _scopeId));
						_push(`<div class="mb-6 p-4 rounded-xl bg-warm-100 border border-warm-200 text-sm text-warm-600 leading-relaxed"${_scopeId}> Thanks for signing up. Please verify your email address by clicking the link we sent you. If it hasn&#39;t arrived, you can request a new one below. </div>`);
						if (verificationLinkSent.value) _push(`<div class="mb-6 flex items-center gap-2 rounded-xl bg-brand-50 border border-brand-200 px-4 py-3 text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> A new verification link has been sent to your email address. </div>`);
						else _push(`<!---->`);
						_push(`<form${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"${_scopeId}>`);
						if (unref(form).processing) _push(`<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"${_scopeId}></path></svg>`);
						else _push(`<!---->`);
						_push(` ${ssrInterpolate(unref(form).processing ? "Sending…" : "Resend verification email")}</button></form><p class="mt-6 text-center text-sm text-warm-500"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "text-warm-400 hover:text-warm-600 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Sign out `);
								else return [createTextVNode(" Sign out ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</p>`);
					} else return [
						createVNode(unref(Head), { title: "Email Verification" }),
						createVNode("div", { class: "mb-6 p-4 rounded-xl bg-warm-100 border border-warm-200 text-sm text-warm-600 leading-relaxed" }, " Thanks for signing up. Please verify your email address by clicking the link we sent you. If it hasn't arrived, you can request a new one below. "),
						verificationLinkSent.value ? (openBlock(), createBlock("div", {
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
						})])), createTextVNode(" A new verification link has been sent to your email address. ")])) : createCommentVNode("", true),
						createVNode("form", { onSubmit: withModifiers(submit, ["prevent"]) }, [createVNode("button", {
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
						})])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(form).processing ? "Sending…" : "Resend verification email"), 1)], 8, ["disabled"])], 32),
						createVNode("p", { class: "mt-6 text-center text-sm text-warm-500" }, [createVNode(unref(Link), {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "text-warm-400 hover:text-warm-600 transition-colors"
						}, {
							default: withCtx(() => [createTextVNode(" Sign out ")]),
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
