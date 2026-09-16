import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, watch, withCtx, withDirectives } from "vue";
//#region resources/js/Pages/Internal/PageViews/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		pageViews: {
			type: Object,
			required: true
		},
		stats: {
			type: Object,
			required: true
		},
		topPages: {
			type: Array,
			required: true
		},
		filters: {
			type: Object,
			default: () => ({})
		}
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters.search ?? "");
		const dateFrom = ref(props.filters.date_from ?? "");
		const dateTo = ref(props.filters.date_to ?? "");
		let debounce = null;
		function applyFilters() {
			clearTimeout(debounce);
			debounce = setTimeout(() => {
				router.get(route("internal.page-views.index"), {
					search: search.value || void 0,
					date_from: dateFrom.value || void 0,
					date_to: dateTo.value || void 0
				}, {
					preserveState: true,
					replace: true
				});
			}, 300);
		}
		watch([
			search,
			dateFrom,
			dateTo
		], applyFilters);
		function truncate(str, len = 80) {
			if (!str) return "—";
			return str.length > len ? str.slice(0, len) + "…" : str;
		}
		function formatDate(d) {
			if (!d) return "—";
			return new Date(d).toLocaleString();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Page Views" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"${_scopeId}><h1 class="text-2xl font-bold mb-6"${_scopeId}>Page Views</h1><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"${_scopeId}><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>Today</div><div class="text-2xl font-semibold"${_scopeId}>${ssrInterpolate(__props.stats.today.toLocaleString())}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>This Week</div><div class="text-2xl font-semibold"${_scopeId}>${ssrInterpolate(__props.stats.this_week.toLocaleString())}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>This Month</div><div class="text-2xl font-semibold"${_scopeId}>${ssrInterpolate(__props.stats.this_month.toLocaleString())}</div></div><div class="bg-white rounded-lg shadow p-4"${_scopeId}><div class="text-sm text-gray-500"${_scopeId}>All Time</div><div class="text-2xl font-semibold"${_scopeId}>${ssrInterpolate(__props.stats.total.toLocaleString())}</div></div></div><div class="bg-white rounded-lg shadow p-4 mb-8"${_scopeId}><h2 class="text-lg font-semibold mb-3"${_scopeId}>Top Pages (Last 30 Days)</h2><div class="space-y-2"${_scopeId}><!--[-->`);
						ssrRenderList(__props.topPages, (page) => {
							_push(`<div class="flex justify-between items-center text-sm"${_scopeId}><span class="text-gray-700 truncate mr-4"${ssrRenderAttr("title", page.url)}${_scopeId}>${ssrInterpolate(truncate(page.url, 60))}</span><span class="text-gray-500 whitespace-nowrap font-medium"${_scopeId}>${ssrInterpolate(Number(page.views).toLocaleString())}</span></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.topPages.length) _push(`<div class="text-gray-400 text-sm"${_scopeId}>No data yet.</div>`);
						else _push(`<!---->`);
						_push(`</div></div><div class="flex flex-wrap gap-3 mb-4"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Search URL, IP, or user agent…" class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"${_scopeId}><input${ssrRenderAttr("value", dateFrom.value)} type="date" class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}><input${ssrRenderAttr("value", dateTo.value)} type="date" class="border border-gray-300 rounded-md px-3 py-2 text-sm"${_scopeId}></div><div class="bg-white rounded-lg shadow overflow-x-auto"${_scopeId}><table class="min-w-full text-sm"${_scopeId}><thead class="bg-gray-50 text-left text-gray-500"${_scopeId}><tr${_scopeId}><th class="px-4 py-3 font-medium"${_scopeId}>URL</th><th class="px-4 py-3 font-medium"${_scopeId}>IP</th><th class="px-4 py-3 font-medium"${_scopeId}>Status</th><th class="px-4 py-3 font-medium"${_scopeId}>User</th><th class="px-4 py-3 font-medium"${_scopeId}>Viewed At</th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
						ssrRenderList(__props.pageViews.data, (view) => {
							_push(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-4 py-3 max-w-xs truncate"${ssrRenderAttr("title", view.url)}${_scopeId}>${ssrInterpolate(truncate(view.url, 60))}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${ssrInterpolate(view.ip ?? "—")}</td><td class="px-4 py-3 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass({
								"text-green-600": view.status_code >= 200 && view.status_code < 300,
								"text-yellow-600": view.status_code >= 300 && view.status_code < 400,
								"text-red-600": view.status_code >= 400
							})}"${_scopeId}>${ssrInterpolate(view.status_code ?? "—")}</span></td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${ssrInterpolate(view.user_id ?? "—")}</td><td class="px-4 py-3 text-gray-500 whitespace-nowrap"${_scopeId}>${ssrInterpolate(formatDate(view.viewed_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.pageViews.data.length) _push(`<tr${_scopeId}><td colspan="5" class="px-4 py-8 text-center text-gray-400"${_scopeId}>No page views recorded yet.</td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						if (__props.pageViews.links && __props.pageViews.links.length > 3) {
							_push(`<div class="mt-4 flex justify-center gap-1"${_scopeId}><!--[-->`);
							ssrRenderList(__props.pageViews.links, (link) => {
								_push(ssrRenderComponent(unref(Link), {
									key: link.label,
									href: link.url ?? "#",
									class: ["px-3 py-1 rounded text-sm", {
										"bg-blue-600 text-white": link.active,
										"bg-white text-gray-600 hover:bg-gray-100": !link.active && link.url,
										"text-gray-300 cursor-default": !link.url
									}],
									"preserve-state": true
								}, null, _parent, _scopeId));
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, [
						createVNode("h1", { class: "text-2xl font-bold mb-6" }, "Page Views"),
						createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" }, [
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "Today"), createVNode("div", { class: "text-2xl font-semibold" }, toDisplayString(__props.stats.today.toLocaleString()), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "This Week"), createVNode("div", { class: "text-2xl font-semibold" }, toDisplayString(__props.stats.this_week.toLocaleString()), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "This Month"), createVNode("div", { class: "text-2xl font-semibold" }, toDisplayString(__props.stats.this_month.toLocaleString()), 1)]),
							createVNode("div", { class: "bg-white rounded-lg shadow p-4" }, [createVNode("div", { class: "text-sm text-gray-500" }, "All Time"), createVNode("div", { class: "text-2xl font-semibold" }, toDisplayString(__props.stats.total.toLocaleString()), 1)])
						]),
						createVNode("div", { class: "bg-white rounded-lg shadow p-4 mb-8" }, [createVNode("h2", { class: "text-lg font-semibold mb-3" }, "Top Pages (Last 30 Days)"), createVNode("div", { class: "space-y-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.topPages, (page) => {
							return openBlock(), createBlock("div", {
								key: page.url,
								class: "flex justify-between items-center text-sm"
							}, [createVNode("span", {
								class: "text-gray-700 truncate mr-4",
								title: page.url
							}, toDisplayString(truncate(page.url, 60)), 9, ["title"]), createVNode("span", { class: "text-gray-500 whitespace-nowrap font-medium" }, toDisplayString(Number(page.views).toLocaleString()), 1)]);
						}), 128)), !__props.topPages.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "text-gray-400 text-sm"
						}, "No data yet.")) : createCommentVNode("", true)])]),
						createVNode("div", { class: "flex flex-wrap gap-3 mb-4" }, [
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								type: "text",
								placeholder: "Search URL, IP, or user agent…",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, search.value]]),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => dateFrom.value = $event,
								type: "date",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, dateFrom.value]]),
							withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => dateTo.value = $event,
								type: "date",
								class: "border border-gray-300 rounded-md px-3 py-2 text-sm"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, dateTo.value]])
						]),
						createVNode("div", { class: "bg-white rounded-lg shadow overflow-x-auto" }, [createVNode("table", { class: "min-w-full text-sm" }, [createVNode("thead", { class: "bg-gray-50 text-left text-gray-500" }, [createVNode("tr", null, [
							createVNode("th", { class: "px-4 py-3 font-medium" }, "URL"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "IP"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Status"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "User"),
							createVNode("th", { class: "px-4 py-3 font-medium" }, "Viewed At")
						])]), createVNode("tbody", { class: "divide-y divide-gray-100" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.pageViews.data, (view) => {
							return openBlock(), createBlock("tr", {
								key: view.id,
								class: "hover:bg-gray-50"
							}, [
								createVNode("td", {
									class: "px-4 py-3 max-w-xs truncate",
									title: view.url
								}, toDisplayString(truncate(view.url, 60)), 9, ["title"]),
								createVNode("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, toDisplayString(view.ip ?? "—"), 1),
								createVNode("td", { class: "px-4 py-3 whitespace-nowrap" }, [createVNode("span", { class: {
									"text-green-600": view.status_code >= 200 && view.status_code < 300,
									"text-yellow-600": view.status_code >= 300 && view.status_code < 400,
									"text-red-600": view.status_code >= 400
								} }, toDisplayString(view.status_code ?? "—"), 3)]),
								createVNode("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, toDisplayString(view.user_id ?? "—"), 1),
								createVNode("td", { class: "px-4 py-3 text-gray-500 whitespace-nowrap" }, toDisplayString(formatDate(view.viewed_at)), 1)
							]);
						}), 128)), !__props.pageViews.data.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "5",
							class: "px-4 py-8 text-center text-gray-400"
						}, "No page views recorded yet.")])) : createCommentVNode("", true)])])]),
						__props.pageViews.links && __props.pageViews.links.length > 3 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "mt-4 flex justify-center gap-1"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.pageViews.links, (link) => {
							return openBlock(), createBlock(unref(Link), {
								key: link.label,
								href: link.url ?? "#",
								class: ["px-3 py-1 rounded text-sm", {
									"bg-blue-600 text-white": link.active,
									"bg-white text-gray-600 hover:bg-gray-100": !link.active && link.url,
									"text-gray-300 cursor-default": !link.url
								}],
								innerHTML: link.label,
								"preserve-state": true
							}, null, 8, [
								"href",
								"class",
								"innerHTML"
							]);
						}), 128))])) : createCommentVNode("", true)
					])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/PageViews/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
