import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Internal/Dashboard.vue
var _sfc_main = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const allSections = {
			"posts": {
				label: "Posts",
				icon: "📰"
			},
			"pages": {
				label: "Pages",
				icon: "📄"
			},
			"media": {
				label: "Media",
				icon: "🖼️"
			},
			"menu-items": {
				label: "Menu Items",
				icon: "🔗"
			},
			"competitions": {
				label: "Competitions",
				icon: "🏆"
			},
			"activities": {
				label: "Activities",
				icon: "📅"
			},
			"meetings": {
				label: "Meetings",
				icon: "🗓️"
			},
			"page-views": {
				label: "Page Views",
				icon: "👁️"
			},
			"field-changes": {
				label: "Field Changes",
				icon: "🔀"
			}
		};
		const isAdmin = computed(() => page.props.auth?.user?.is_admin);
		const indexLinks = computed(() => {
			if (isAdmin.value) return Object.entries(allSections).map(([resource, section]) => ({
				label: section.label,
				href: `/internal/${resource}`,
				icon: section.icon
			}));
			return (page.props.can ?? []).filter((p) => typeof p === "string" && p.endsWith(".index")).map((p) => {
				const resource = p.split(".").slice(1, -1).join("-");
				const section = allSections[resource];
				return section ? {
					label: section.label,
					href: `/internal/${resource}`,
					icon: section.icon
				} : null;
			}).filter(Boolean);
		});
		const stats = [
			{
				label: "Live Listings",
				value: "42",
				icon: "🏠",
				change: "+3 this week",
				trend: "up",
				color: "bg-brand-50 border-brand-200",
				iconBg: "bg-brand-100",
				valueColor: "text-brand-700"
			},
			{
				label: "Registered Applicants",
				value: "1,248",
				icon: "👥",
				change: "+12 this month",
				trend: "up",
				color: "bg-sky-50 border-sky-200",
				iconBg: "bg-sky-100",
				valueColor: "text-sky-700"
			},
			{
				label: "Viewings This Week",
				value: "37",
				icon: "🔑",
				change: "8 booked today",
				trend: "up",
				color: "bg-purple-50 border-purple-200",
				iconBg: "bg-purple-100",
				valueColor: "text-purple-700"
			},
			{
				label: "Valuations Booked",
				value: "11",
				icon: "📐",
				change: "+4 new requests",
				trend: "up",
				color: "bg-accent-50 border-orange-200",
				iconBg: "bg-orange-100",
				valueColor: "text-orange-700"
			}
		];
		const recentActivity = [
			{
				action: "Offer received",
				detail: "£245,000 on 14 Liverpool Road, Penwortham",
				time: "2 mins ago",
				icon: "💷",
				color: "bg-brand-100 text-brand-700"
			},
			{
				action: "New instruction",
				detail: "4-bed semi added — Hutton, photos Tuesday",
				time: "1 hour ago",
				icon: "🏠",
				color: "bg-sky-100 text-sky-700"
			},
			{
				action: "Listing went live",
				detail: "Cob Castle Lane published to Rightmove &amp; Zoopla",
				time: "3 hours ago",
				icon: "📣",
				color: "bg-purple-100 text-purple-700"
			},
			{
				action: "Tenancy completed",
				detail: "Move-in signed at 7 Howick Park Avenue",
				time: "Yesterday",
				icon: "✅",
				color: "bg-green-100 text-green-700"
			},
			{
				action: "Valuation booked",
				detail: "Saturday 10:00 — Longton, 3-bed detached",
				time: "Yesterday",
				icon: "📐",
				color: "bg-amber-100 text-amber-700"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Dashboard — Acme Estate Agents Office" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, { title: "Internal Dashboard" }, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Dashboard</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>Welcome back, ${ssrInterpolate(_ctx.$page.props.auth.user.name)}</p></div><div class="flex items-center gap-2"${_scopeId}><a href="/" class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"${_scopeId}> View Public Site </a></div></div>`);
					else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Dashboard"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, "Welcome back, " + toDisplayString(_ctx.$page.props.auth.user.name), 1)]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode("a", {
						href: "/",
						class: "inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-warm-600 border border-warm-200 rounded-lg hover:bg-warm-50 transition-colors"
					}, " View Public Site ")])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (indexLinks.value.length) {
							_push(`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8"${_scopeId}><!--[-->`);
							ssrRenderList(indexLinks.value, (link) => {
								_push(`<a${ssrRenderAttr("href", link.href)} class="flex items-center gap-3 px-4 py-3 bg-white border border-warm-200 rounded-xl text-sm font-medium text-warm-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors shadow-sm"${_scopeId}><span class="text-base"${_scopeId}>${ssrInterpolate(link.icon)}</span> ${ssrInterpolate(link.label)}</a>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"${_scopeId}><!--[-->`);
						ssrRenderList(stats, (stat) => {
							_push(`<div class="${ssrRenderClass([stat.color, "p-5 rounded-2xl border-2 transition-shadow hover:shadow-md"])}"${_scopeId}><div class="flex items-start justify-between mb-3"${_scopeId}><div class="${ssrRenderClass([stat.iconBg, "w-10 h-10 rounded-xl flex items-center justify-center text-xl"])}"${_scopeId}>${ssrInterpolate(stat.icon)}</div></div><p class="${ssrRenderClass([stat.valueColor, "text-2xl font-bold font-display"])}"${_scopeId}>${ssrInterpolate(stat.value)}</p><p class="text-xs font-medium text-warm-600 mt-0.5"${_scopeId}>${ssrInterpolate(stat.label)}</p><p class="text-xs text-warm-400 mt-1"${_scopeId}>${ssrInterpolate(stat.change)}</p></div>`);
						});
						_push(`<!--]--></div><div class="grid lg:grid-cols-3 gap-6"${_scopeId}><div class="lg:col-span-2 bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden"${_scopeId}><div class="px-6 py-4 border-b border-warm-100 flex items-center justify-between"${_scopeId}><h2 class="font-semibold text-warm-900 text-sm"${_scopeId}>Recent Activity</h2><a href="#" class="text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors"${_scopeId}>View all</a></div><div class="divide-y divide-warm-50"${_scopeId}><!--[-->`);
						ssrRenderList(recentActivity, (item) => {
							_push(`<div class="flex items-start gap-3 px-6 py-4 hover:bg-warm-50 transition-colors"${_scopeId}><div class="${ssrRenderClass([item.color, "w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 mt-0.5"])}"${_scopeId}>${ssrInterpolate(item.icon)}</div><div class="flex-1 min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-900"${_scopeId}>${ssrInterpolate(item.action)}</p><p class="text-xs text-warm-500 mt-0.5 truncate"${_scopeId}>${ssrInterpolate(item.detail)}</p></div><span class="text-xs text-warm-400 shrink-0 ml-2 mt-0.5"${_scopeId}>${ssrInterpolate(item.time)}</span></div>`);
						});
						_push(`<!--]--></div></div><div class="space-y-5"${_scopeId}><div class="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-5 text-white"${_scopeId}><div class="flex items-center gap-3 mb-4"${_scopeId}><div class="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center"${_scopeId}><svg class="w-7 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M18 55 L50 25 L82 55" stroke="#fbf9f5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M28 50 L28 78 L72 78 L72 50" stroke="#fbf9f5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path><path d="M44 78 L44 60 L56 60 L56 78" stroke="#c2953d" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div><div${_scopeId}><p class="font-semibold text-base font-display tracking-display"${_scopeId}>Acme Estate Agents</p></div></div><div class="grid grid-cols-2 gap-3 text-center"${_scopeId}><div class="bg-white/15 rounded-xl p-3"${_scopeId}><p class="text-lg font-bold font-display"${_scopeId}>42</p><p class="text-white/70 text-xs"${_scopeId}>Live listings</p></div><div class="bg-white/15 rounded-xl p-3"${_scopeId}><p class="text-lg font-bold font-display"${_scopeId}>1,248</p><p class="text-white/70 text-xs"${_scopeId}>Applicants</p></div></div></div><div class="bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden"${_scopeId}><div class="px-5 py-4 border-b border-warm-100"${_scopeId}><h2 class="font-semibold text-warm-900 text-sm"${_scopeId}>Next Viewings</h2></div><div class="divide-y divide-warm-50"${_scopeId}><div class="flex items-center gap-3 px-5 py-3"${_scopeId}><div class="text-center shrink-0"${_scopeId}><p class="text-xs font-bold text-brand-600"${_scopeId}>APR</p><p class="text-lg font-bold text-warm-900 leading-none"${_scopeId}>12</p></div><div class="min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-800 truncate"${_scopeId}>14 Liverpool Road</p><p class="text-xs text-warm-400"${_scopeId}>10:00 — Mr &amp; Mrs Hughes</p></div></div><div class="flex items-center gap-3 px-5 py-3"${_scopeId}><div class="text-center shrink-0"${_scopeId}><p class="text-xs font-bold text-sky-600"${_scopeId}>APR</p><p class="text-lg font-bold text-warm-900 leading-none"${_scopeId}>16</p></div><div class="min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-800 truncate"${_scopeId}>7 Howick Park Avenue</p><p class="text-xs text-warm-400"${_scopeId}>09:30 — Open house</p></div></div><div class="flex items-center gap-3 px-5 py-3"${_scopeId}><div class="text-center shrink-0"${_scopeId}><p class="text-xs font-bold text-purple-600"${_scopeId}>APR</p><p class="text-lg font-bold text-warm-900 leading-none"${_scopeId}>25</p></div><div class="min-w-0"${_scopeId}><p class="text-sm font-medium text-warm-800 truncate"${_scopeId}>Cob Castle Lane, Longton</p><p class="text-xs text-warm-400"${_scopeId}>18:00 — Second viewing</p></div></div></div><div class="px-5 py-3 border-t border-warm-100"${_scopeId}><a href="#" class="text-xs font-medium text-brand-600 hover:text-brand-800 transition-colors"${_scopeId}>Manage diary →</a></div></div></div></div>`);
					} else return [
						indexLinks.value.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(indexLinks.value, (link) => {
							return openBlock(), createBlock("a", {
								key: link.href,
								href: link.href,
								class: "flex items-center gap-3 px-4 py-3 bg-white border border-warm-200 rounded-xl text-sm font-medium text-warm-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors shadow-sm"
							}, [createVNode("span", { class: "text-base" }, toDisplayString(link.icon), 1), createTextVNode(" " + toDisplayString(link.label), 1)], 8, ["href"]);
						}), 128))])) : createCommentVNode("", true),
						createVNode("div", { class: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8" }, [(openBlock(), createBlock(Fragment, null, renderList(stats, (stat) => {
							return createVNode("div", {
								key: stat.label,
								class: ["p-5 rounded-2xl border-2 transition-shadow hover:shadow-md", stat.color]
							}, [
								createVNode("div", { class: "flex items-start justify-between mb-3" }, [createVNode("div", { class: ["w-10 h-10 rounded-xl flex items-center justify-center text-xl", stat.iconBg] }, toDisplayString(stat.icon), 3)]),
								createVNode("p", { class: ["text-2xl font-bold font-display", stat.valueColor] }, toDisplayString(stat.value), 3),
								createVNode("p", { class: "text-xs font-medium text-warm-600 mt-0.5" }, toDisplayString(stat.label), 1),
								createVNode("p", { class: "text-xs text-warm-400 mt-1" }, toDisplayString(stat.change), 1)
							], 2);
						}), 64))]),
						createVNode("div", { class: "grid lg:grid-cols-3 gap-6" }, [createVNode("div", { class: "lg:col-span-2 bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden" }, [createVNode("div", { class: "px-6 py-4 border-b border-warm-100 flex items-center justify-between" }, [createVNode("h2", { class: "font-semibold text-warm-900 text-sm" }, "Recent Activity"), createVNode("a", {
							href: "#",
							class: "text-xs text-brand-600 hover:text-brand-800 font-medium transition-colors"
						}, "View all")]), createVNode("div", { class: "divide-y divide-warm-50" }, [(openBlock(), createBlock(Fragment, null, renderList(recentActivity, (item) => {
							return createVNode("div", {
								key: item.action,
								class: "flex items-start gap-3 px-6 py-4 hover:bg-warm-50 transition-colors"
							}, [
								createVNode("div", { class: ["w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 mt-0.5", item.color] }, toDisplayString(item.icon), 3),
								createVNode("div", { class: "flex-1 min-w-0" }, [createVNode("p", { class: "text-sm font-medium text-warm-900" }, toDisplayString(item.action), 1), createVNode("p", { class: "text-xs text-warm-500 mt-0.5 truncate" }, toDisplayString(item.detail), 1)]),
								createVNode("span", { class: "text-xs text-warm-400 shrink-0 ml-2 mt-0.5" }, toDisplayString(item.time), 1)
							]);
						}), 64))])]), createVNode("div", { class: "space-y-5" }, [createVNode("div", { class: "bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-5 text-white" }, [createVNode("div", { class: "flex items-center gap-3 mb-4" }, [createVNode("div", { class: "w-12 h-12 rounded-md bg-white/10 flex items-center justify-center" }, [(openBlock(), createBlock("svg", {
							class: "w-7 h-auto",
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
						]))]), createVNode("div", null, [createVNode("p", { class: "font-semibold text-base font-display tracking-display" }, "Acme Estate Agents")])]), createVNode("div", { class: "grid grid-cols-2 gap-3 text-center" }, [createVNode("div", { class: "bg-white/15 rounded-xl p-3" }, [createVNode("p", { class: "text-lg font-bold font-display" }, "42"), createVNode("p", { class: "text-white/70 text-xs" }, "Live listings")]), createVNode("div", { class: "bg-white/15 rounded-xl p-3" }, [createVNode("p", { class: "text-lg font-bold font-display" }, "1,248"), createVNode("p", { class: "text-white/70 text-xs" }, "Applicants")])])]), createVNode("div", { class: "bg-white rounded-2xl border border-warm-200 shadow-sm overflow-hidden" }, [
							createVNode("div", { class: "px-5 py-4 border-b border-warm-100" }, [createVNode("h2", { class: "font-semibold text-warm-900 text-sm" }, "Next Viewings")]),
							createVNode("div", { class: "divide-y divide-warm-50" }, [
								createVNode("div", { class: "flex items-center gap-3 px-5 py-3" }, [createVNode("div", { class: "text-center shrink-0" }, [createVNode("p", { class: "text-xs font-bold text-brand-600" }, "APR"), createVNode("p", { class: "text-lg font-bold text-warm-900 leading-none" }, "12")]), createVNode("div", { class: "min-w-0" }, [createVNode("p", { class: "text-sm font-medium text-warm-800 truncate" }, "14 Liverpool Road"), createVNode("p", { class: "text-xs text-warm-400" }, "10:00 — Mr & Mrs Hughes")])]),
								createVNode("div", { class: "flex items-center gap-3 px-5 py-3" }, [createVNode("div", { class: "text-center shrink-0" }, [createVNode("p", { class: "text-xs font-bold text-sky-600" }, "APR"), createVNode("p", { class: "text-lg font-bold text-warm-900 leading-none" }, "16")]), createVNode("div", { class: "min-w-0" }, [createVNode("p", { class: "text-sm font-medium text-warm-800 truncate" }, "7 Howick Park Avenue"), createVNode("p", { class: "text-xs text-warm-400" }, "09:30 — Open house")])]),
								createVNode("div", { class: "flex items-center gap-3 px-5 py-3" }, [createVNode("div", { class: "text-center shrink-0" }, [createVNode("p", { class: "text-xs font-bold text-purple-600" }, "APR"), createVNode("p", { class: "text-lg font-bold text-warm-900 leading-none" }, "25")]), createVNode("div", { class: "min-w-0" }, [createVNode("p", { class: "text-sm font-medium text-warm-800 truncate" }, "Cob Castle Lane, Longton"), createVNode("p", { class: "text-xs text-warm-400" }, "18:00 — Second viewing")])])
							]),
							createVNode("div", { class: "px-5 py-3 border-t border-warm-100" }, [createVNode("a", {
								href: "#",
								class: "text-xs font-medium text-brand-600 hover:text-brand-800 transition-colors"
							}, "Manage diary →")])
						])])])
					];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
