import { Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { computed, createBlock, createTextVNode, createVNode, mergeProps, onMounted, onUnmounted, openBlock, ref, renderSlot, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Components/Dropdown.vue
var _sfc_main$4 = {
	__name: "Dropdown",
	__ssrInlineRender: true,
	props: {
		align: {
			type: String,
			default: "right"
		},
		width: {
			type: String,
			default: "48"
		},
		contentClasses: {
			type: String,
			default: "py-1 bg-white dark:bg-gray-700"
		}
	},
	setup(__props) {
		const props = __props;
		const closeOnEscape = (e) => {
			if (open.value && e.key === "Escape") open.value = false;
		};
		onMounted(() => document.addEventListener("keydown", closeOnEscape));
		onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
		const widthClass = computed(() => {
			return { 48: "w-48" }[props.width.toString()];
		});
		const alignmentClasses = computed(() => {
			if (props.align === "left") return "ltr:origin-top-left rtl:origin-top-right start-0";
			else if (props.align === "right") return "ltr:origin-top-right rtl:origin-top-left end-0";
			else return "origin-top";
		});
		const open = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
			ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
			_push(`</div><div class="fixed inset-0 z-40" style="${ssrRenderStyle(open.value ? null : { display: "none" })}"></div><div class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}" style="${ssrRenderStyle([{ "display": "none" }, open.value ? null : { display: "none" }])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
			ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/DropdownLink.vue
var _sfc_main$3 = {
	__name: "DropdownLink",
	__ssrInlineRender: true,
	props: { href: {
		type: String,
		required: true
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/ResponsiveNavLink.vue
var _sfc_main$2 = {
	__name: "ResponsiveNavLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		active: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const classes = computed(() => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: classes.value
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/AuthenticatedLayout/Partials/DesktopLink.vue
var _sfc_main$1 = {
	__name: "DesktopLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: _ctx.route(__props.href),
				class: ["px-3 py-2 text-sm font-medium rounded-lg transition-colors", _ctx.route().current(__props.href) ? "bg-brand-50 text-brand-700" : "text-warm-600 hover:bg-warm-100 hover:text-warm-900"]
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(__props.title)}`);
					else return [createTextVNode(toDisplayString(__props.title), 1)];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout/Partials/DesktopLink.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/AuthenticatedLayout/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: { title: String },
	setup(__props) {
		const page = usePage();
		const showingNavigationDropdown = ref(false);
		const navLinks = [
			{
				label: "Dashboard",
				href: "dashboard",
				permission: null
			},
			{
				label: "Admin",
				href: "admin.dashboard",
				permission: "admin.dashboard"
			},
			{
				label: "Posts",
				href: "internal.posts.index",
				permission: "internal.posts.index"
			},
			{
				label: "Pages",
				href: "internal.pages.index",
				permission: "internal.pages.index"
			},
			{
				label: "Media",
				href: "internal.media.index",
				permission: "internal.media.index"
			},
			{
				label: "Menu",
				href: "internal.menu-items.index",
				permission: "internal.menu-items.index"
			}
		];
		onMounted(() => {
			console.log("User permissions:", page.props.can);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-warm-50 font-sans antialiased" }, _attrs))}><nav class="bg-white border-b border-warm-200 shadow-sm sticky top-0 z-40"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 items-center justify-between"><div class="flex items-center gap-4">`);
			_push(ssrRenderComponent(unref(Link), {
				href: _ctx.route("home"),
				class: "flex items-center gap-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-10 h-10 rounded-md bg-brand-gradient flex items-center justify-center"${_scopeId}><svg class="w-6 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M18 55 L50 25 L82 55" stroke="#fbf9f5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M28 50 L28 78 L72 78 L72 50" stroke="#fbf9f5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M44 78 L44 60 L56 60 L56 78" stroke="#c2953d" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><div class="hidden sm:block"${_scopeId}><p class="text-base font-semibold text-brand-700 leading-tight font-display tracking-display"${_scopeId}> Acme Estate Agents </p><p class="text-xs text-warm-400 leading-tight"${_scopeId}>${ssrInterpolate(__props.title)}</p></div>`);
					else return [createVNode("div", { class: "w-10 h-10 rounded-md bg-brand-gradient flex items-center justify-center" }, [(openBlock(), createBlock("svg", {
						class: "w-6 h-auto",
						viewBox: "0 0 100 100",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [
						createVNode("path", {
							d: "M18 55 L50 25 L82 55",
							stroke: "#fbf9f5",
							"stroke-width": "7",
							"stroke-linecap": "round",
							"stroke-linejoin": "round"
						}),
						createVNode("path", {
							d: "M28 50 L28 78 L72 78 L72 50",
							stroke: "#fbf9f5",
							"stroke-width": "7",
							"stroke-linecap": "round",
							"stroke-linejoin": "round"
						}),
						createVNode("path", {
							d: "M44 78 L44 60 L56 60 L56 78",
							stroke: "#c2953d",
							"stroke-width": "6",
							"stroke-linecap": "round",
							"stroke-linejoin": "round"
						})
					]))]), createVNode("div", { class: "hidden sm:block" }, [createVNode("p", { class: "text-base font-semibold text-brand-700 leading-tight font-display tracking-display" }, " Acme Estate Agents "), createVNode("p", { class: "text-xs text-warm-400 leading-tight" }, toDisplayString(__props.title), 1)])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="hidden md:flex items-center gap-1 ml-6"><!--[-->`);
			ssrRenderList(navLinks, (link) => {
				_push(`<!--[-->`);
				if (link.permission && unref(page).props.can.includes(link.permission) || !link.permission || unref(page).props.auth.user.is_admin) _push(ssrRenderComponent(_sfc_main$1, {
					href: link.href,
					title: link.label
				}, null, _parent));
				else _push(`<!---->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]--></div></div><div class="hidden sm:flex items-center gap-3"><a href="/" class="text-xs text-warm-500 hover:text-brand-600 transition-colors flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> View site </a>`);
			_push(ssrRenderComponent(_sfc_main$4, {
				align: "right",
				width: "48"
			}, {
				trigger: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<button type="button" class="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-warm-100 transition-colors text-sm font-medium text-warm-700"${_scopeId}><div class="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name.charAt(0).toUpperCase())}</div><span class="max-w-[120px] truncate"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span><svg class="w-4 h-4 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId}></path></svg></button>`);
					else return [createVNode("button", {
						type: "button",
						class: "flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-warm-100 transition-colors text-sm font-medium text-warm-700"
					}, [
						createVNode("div", { class: "w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white text-xs font-bold" }, toDisplayString(_ctx.$page.props.auth.user.name.charAt(0).toUpperCase()), 1),
						createVNode("span", { class: "max-w-[120px] truncate" }, toDisplayString(_ctx.$page.props.auth.user.name), 1),
						(openBlock(), createBlock("svg", {
							class: "w-4 h-4 text-warm-400",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M19 9l-7 7-7-7"
						})]))
					])];
				}),
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="px-4 py-3 border-b border-warm-100"${_scopeId}><p class="text-xs text-warm-500"${_scopeId}> Signed in as </p><p class="text-sm font-medium text-warm-900 truncate"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.email)}</p></div>`);
						_push(ssrRenderComponent(_sfc_main$3, {
							href: _ctx.route("profile.edit"),
							class: "flex items-center gap-2 text-sm text-warm-700"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg> My Profile `);
								else return [(openBlock(), createBlock("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								})])), createTextVNode(" My Profile ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "flex items-center gap-2 text-sm text-rose-600 w-full"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"${_scopeId}></path></svg> Log Out `);
								else return [(openBlock(), createBlock("svg", {
									class: "w-4 h-4",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
								})])), createTextVNode(" Log Out ")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode("div", { class: "px-4 py-3 border-b border-warm-100" }, [createVNode("p", { class: "text-xs text-warm-500" }, " Signed in as "), createVNode("p", { class: "text-sm font-medium text-warm-900 truncate" }, toDisplayString(_ctx.$page.props.auth.user.email), 1)]),
						createVNode(_sfc_main$3, {
							href: _ctx.route("profile.edit"),
							class: "flex items-center gap-2 text-sm text-warm-700"
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
								d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							})])), createTextVNode(" My Profile ")]),
							_: 1
						}, 8, ["href"]),
						createVNode(_sfc_main$3, {
							href: _ctx.route("logout"),
							method: "post",
							as: "button",
							class: "flex items-center gap-2 text-sm text-rose-600 w-full"
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
								d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							})])), createTextVNode(" Log Out ")]),
							_: 1
						}, 8, ["href"])
					];
				}),
				_: 1
			}, _parent));
			_push(`</div><button class="sm:hidden p-2 rounded-lg text-warm-500 hover:bg-warm-100 transition-colors"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path class="${ssrRenderClass({
				hidden: showingNavigationDropdown.value,
				"inline-flex": !showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
				hidden: !showingNavigationDropdown.value,
				"inline-flex": showingNavigationDropdown.value
			})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div><div class="${ssrRenderClass([{
				block: showingNavigationDropdown.value,
				hidden: !showingNavigationDropdown.value
			}, "sm:hidden border-t border-warm-100"])}"><div class="px-4 py-3 space-y-1">`);
			_push(ssrRenderComponent(_sfc_main$2, {
				href: _ctx.route("dashboard"),
				active: _ctx.route().current("dashboard")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [createTextVNode(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				href: "/internal/media",
				active: _ctx.$page.url.startsWith("/internal/media")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Media `);
					else return [createTextVNode(" Media ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				href: "/internal/menu-items",
				active: _ctx.$page.url.startsWith("/internal/menu-items")
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Menu `);
					else return [createTextVNode(" Menu ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="border-t border-warm-100 px-4 py-3"><div class="flex items-center gap-3 mb-3"><div class="w-9 h-9 bg-brand-600 rounded-full flex items-center justify-center text-white text-sm font-bold">${ssrInterpolate(_ctx.$page.props.auth.user.name.charAt(0).toUpperCase())}</div><div><p class="text-sm font-medium text-warm-900">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</p><p class="text-xs text-warm-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</p></div></div><div class="space-y-1">`);
			_push(ssrRenderComponent(_sfc_main$2, { href: _ctx.route("profile.edit") }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Profile`);
					else return [createTextVNode("Profile")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				href: _ctx.route("logout"),
				method: "post",
				as: "button"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Log Out`);
					else return [createTextVNode("Log Out")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></nav>`);
			if (_ctx.$slots.header) {
				_push(`<header class="bg-white border-b border-warm-200"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">`);
				ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
				_push(`</div></header>`);
			} else _push(`<!---->`);
			_push(`<main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
