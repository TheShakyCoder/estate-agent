import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrRenderAttrs, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { useSSRContext } from "vue";
//#region resources/js/Pages/Admin/Role/Right/Partials/Groups.vue
var _sfc_main = {
	__name: "Groups",
	__ssrInlineRender: true,
	props: {
		title: String,
		routes: Object,
		form: Object,
		methodMeta: Object,
		submit: Function
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<form${ssrRenderAttrs(_attrs)}><h2 class="text-2xl py-4 font-semibold text-warm-900">${ssrInterpolate(__props.title)}</h2><ul class="flex flex-col gap-4"><!--[-->`);
			ssrRenderList(__props.routes, (routes, groupName) => {
				_push(`<li><h3 class="text-lg font-semibold text-warm-900">${ssrInterpolate(groupName.toUpperCase().replaceAll("_", " "))}</h3><ul class="flex flex-row gap-6"><!--[-->`);
				ssrRenderList(routes, (r) => {
					_push(`<li class=""><div class="flex items-center justify-between"><label id="" class=""><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(__props.form.controller_method_names[r.route]) ? ssrLooseContain(__props.form.controller_method_names[r.route], null) : __props.form.controller_method_names[r.route]) ? " checked" : ""} class="${ssrRenderClass(__props.methodMeta[r.method]?.colour)}"> ${ssrInterpolate(r.method)}</label></div></li>`);
				});
				_push(`<!--]--></ul></li>`);
			});
			_push(`<!--]--></ul></form>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Role/Right/Partials/Groups.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
