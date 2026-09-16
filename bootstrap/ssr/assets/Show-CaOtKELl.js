import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Internal/Activities/Show.vue
var _sfc_main = {
	__name: "Show",
	__ssrInlineRender: true,
	props: { activity: {
		type: Object,
		required: true
	} },
	setup(__props) {
		function formatDate(d) {
			if (!d) return "—";
			return new Date(d).toLocaleString();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: __props.activity.title }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.activities.index"),
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
						_push(`<h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>${ssrInterpolate(__props.activity.title)}</h1></div><div class="flex gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.meetings.create") + "?activity_id=" + __props.activity.id,
							class: "px-3 py-2 bg-brand-600 text-white text-xs font-semibold rounded-lg hover:bg-brand-700 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Add Meeting `);
								else return [createTextVNode(" Add Meeting ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: _ctx.route("internal.activities.edit", __props.activity.id),
							class: "px-3 py-2 border border-warm-200 text-xs font-medium text-warm-600 rounded-lg hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Edit `);
								else return [createTextVNode(" Edit ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
						href: _ctx.route("internal.activities.index"),
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
					}, 8, ["href"]), createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, toDisplayString(__props.activity.title), 1)]), createVNode("div", { class: "flex gap-2" }, [createVNode(unref(Link), {
						href: _ctx.route("internal.meetings.create") + "?activity_id=" + __props.activity.id,
						class: "px-3 py-2 bg-brand-600 text-white text-xs font-semibold rounded-lg hover:bg-brand-700 transition-colors"
					}, {
						default: withCtx(() => [createTextVNode(" Add Meeting ")]),
						_: 1
					}, 8, ["href"]), createVNode(unref(Link), {
						href: _ctx.route("internal.activities.edit", __props.activity.id),
						class: "px-3 py-2 border border-warm-200 text-xs font-medium text-warm-600 rounded-lg hover:bg-warm-50 transition-colors"
					}, {
						default: withCtx(() => [createTextVNode(" Edit ")]),
						_: 1
					}, 8, ["href"])])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-6"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl p-6 shadow-sm"${_scopeId}>`);
						if (__props.activity.description) _push(`<p class="text-warm-600 mb-4"${_scopeId}>${ssrInterpolate(__props.activity.description)}</p>`);
						else _push(`<!---->`);
						if (__props.activity.content) _push(`<div class="prose max-w-none"${_scopeId}>${__props.activity.content ?? ""}</div>`);
						else _push(`<!---->`);
						if (!__props.activity.description && !__props.activity.content) _push(`<p class="text-gray-400"${_scopeId}>No description or content yet.</p>`);
						else _push(`<!---->`);
						_push(`</div><div class="bg-white border border-warm-200 rounded-2xl shadow-sm overflow-hidden"${_scopeId}><div class="px-6 py-4 border-b border-warm-100 flex items-center justify-between"${_scopeId}><h2 class="font-semibold text-warm-900 text-sm"${_scopeId}>Meetings</h2></div>`);
						if (__props.activity.meetings?.length) {
							_push(`<div class="divide-y divide-warm-50"${_scopeId}><!--[-->`);
							ssrRenderList(__props.activity.meetings, (m) => {
								_push(`<div class="px-6 py-4 flex items-center justify-between hover:bg-warm-50"${_scopeId}><div${_scopeId}><p class="text-sm font-medium text-warm-900"${_scopeId}>${ssrInterpolate(m.title)}</p><p class="text-xs text-warm-500 mt-0.5"${_scopeId}>${ssrInterpolate(formatDate(m.starts_at))} `);
								if (m.location) _push(`<span${_scopeId}> · ${ssrInterpolate(m.location)}</span>`);
								else _push(`<!---->`);
								if (m.recurrence) _push(`<span class="ml-1 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs"${_scopeId}>${ssrInterpolate(m.recurrence)}</span>`);
								else _push(`<!---->`);
								_push(`</p></div>`);
								_push(ssrRenderComponent(unref(Link), {
									href: _ctx.route("internal.meetings.edit", m.id),
									class: "text-brand-600 hover:underline text-xs"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`Edit`);
										else return [createTextVNode("Edit")];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`</div>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<div class="px-6 py-8 text-center text-gray-400 text-sm"${_scopeId}> No meetings scheduled for this activity. </div>`);
						_push(`</div></div>`);
					} else return [createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl p-6 shadow-sm" }, [
						__props.activity.description ? (openBlock(), createBlock("p", {
							key: 0,
							class: "text-warm-600 mb-4"
						}, toDisplayString(__props.activity.description), 1)) : createCommentVNode("", true),
						__props.activity.content ? (openBlock(), createBlock("div", {
							key: 1,
							class: "prose max-w-none",
							innerHTML: __props.activity.content
						}, null, 8, ["innerHTML"])) : createCommentVNode("", true),
						!__props.activity.description && !__props.activity.content ? (openBlock(), createBlock("p", {
							key: 2,
							class: "text-gray-400"
						}, "No description or content yet.")) : createCommentVNode("", true)
					]), createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl shadow-sm overflow-hidden" }, [createVNode("div", { class: "px-6 py-4 border-b border-warm-100 flex items-center justify-between" }, [createVNode("h2", { class: "font-semibold text-warm-900 text-sm" }, "Meetings")]), __props.activity.meetings?.length ? (openBlock(), createBlock("div", {
						key: 0,
						class: "divide-y divide-warm-50"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.activity.meetings, (m) => {
						return openBlock(), createBlock("div", {
							key: m.id,
							class: "px-6 py-4 flex items-center justify-between hover:bg-warm-50"
						}, [createVNode("div", null, [createVNode("p", { class: "text-sm font-medium text-warm-900" }, toDisplayString(m.title), 1), createVNode("p", { class: "text-xs text-warm-500 mt-0.5" }, [
							createTextVNode(toDisplayString(formatDate(m.starts_at)) + " ", 1),
							m.location ? (openBlock(), createBlock("span", { key: 0 }, " · " + toDisplayString(m.location), 1)) : createCommentVNode("", true),
							m.recurrence ? (openBlock(), createBlock("span", {
								key: 1,
								class: "ml-1 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs"
							}, toDisplayString(m.recurrence), 1)) : createCommentVNode("", true)
						])]), createVNode(unref(Link), {
							href: _ctx.route("internal.meetings.edit", m.id),
							class: "text-brand-600 hover:underline text-xs"
						}, {
							default: withCtx(() => [createTextVNode("Edit")]),
							_: 1
						}, 8, ["href"])]);
					}), 128))])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "px-6 py-8 text-center text-gray-400 text-sm"
					}, " No meetings scheduled for this activity. "))])])];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Activities/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
