import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
//#region resources/js/Pages/Internal/Competitions/Show.vue
var _sfc_main = {
	__name: "Show",
	__ssrInlineRender: true,
	props: {
		competition: {
			type: Object,
			required: true
		},
		submissions: {
			type: Array,
			required: true
		}
	},
	setup(__props) {
		const page = usePage();
		const props = __props;
		const statusLabel = {
			open: {
				text: "Open",
				cls: "bg-emerald-100 text-emerald-700"
			},
			closed: {
				text: "Closed",
				cls: "bg-warm-100 text-warm-500"
			},
			results: {
				text: "Results",
				cls: "bg-brand-100 text-brand-700"
			}
		};
		function declareWinner(submissionId, name) {
			if (confirm(`Declare "${name}" as the winner? This will set the competition to Results.`)) router.post(`/internal/competitions/${props.competition.id}/submissions/${submissionId}/winner`);
		}
		function deleteSubmission(submissionId, name) {
			if (confirm(`Delete entry "${name}"? This cannot be undone.`)) router.delete(`/internal/competitions/${props.competition.id}/submissions/${submissionId}`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: `Entries — ${__props.competition.title}` }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/internal/competitions",
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
						_push(`<div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display truncate"${_scopeId}>${ssrInterpolate(__props.competition.title)}</h1><span class="${ssrRenderClass([statusLabel[__props.competition.status].cls, "shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold"])}"${_scopeId}>${ssrInterpolate(statusLabel[__props.competition.status].text)}</span></div><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>${ssrInterpolate(__props.competition.submissions_count)} entr${ssrInterpolate(__props.competition.submissions_count === 1 ? "y" : "ies")}</p></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: `/internal/competitions/${__props.competition.id}/edit`,
							class: "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg> Edit competition `);
								else return [(openBlock(), createBlock("svg", {
									class: "w-3.5 h-3.5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
								})])), createTextVNode(" Edit competition ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "flex items-center gap-3" }, [
						createVNode(unref(Link), {
							href: "/internal/competitions",
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
						}),
						createVNode("div", { class: "flex-1 min-w-0" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display truncate" }, toDisplayString(__props.competition.title), 1), createVNode("span", { class: ["shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold", statusLabel[__props.competition.status].cls] }, toDisplayString(statusLabel[__props.competition.status].text), 3)]), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, toDisplayString(__props.competition.submissions_count) + " entr" + toDisplayString(__props.competition.submissions_count === 1 ? "y" : "ies"), 1)]),
						createVNode(unref(Link), {
							href: `/internal/competitions/${__props.competition.id}/edit`,
							class: "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-warm-600 border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors"
						}, {
							default: withCtx(() => [(openBlock(), createBlock("svg", {
								class: "w-3.5 h-3.5",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								"stroke-width": "2",
								d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							})])), createTextVNode(" Edit competition ")]),
							_: 1
						}, 8, ["href"])
					])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(unref(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						if (!__props.submissions.length) _push(`<div class="text-center py-20 bg-warm-50 rounded-2xl border border-warm-200"${_scopeId}><span class="text-4xl block mb-3"${_scopeId}>📭</span><p class="font-semibold text-warm-800 mb-1"${_scopeId}>No entries yet</p><p class="text-sm text-warm-500"${_scopeId}>Entries will appear here once members submit.</p></div>`);
						else {
							_push(`<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
							ssrRenderList(__props.submissions, (submission) => {
								_push(`<div class="${ssrRenderClass([submission.is_winner ? "border-amber-300 ring-2 ring-amber-200" : "border-warm-200", "bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col"])}"${_scopeId}>`);
								if (submission.is_winner) _push(`<div class="flex items-center gap-1.5 px-4 py-2 bg-amber-50 border-b border-amber-200 text-xs font-semibold text-amber-700"${_scopeId}><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"${_scopeId}></path></svg> Winner </div>`);
								else _push(`<!---->`);
								if (submission.image_url) _push(`<img${ssrRenderAttr("src", submission.image_url)}${ssrRenderAttr("alt", submission.name)} class="w-full h-auto block"${_scopeId}>`);
								else _push(`<div class="aspect-video bg-warm-100 flex items-center justify-center text-3xl text-warm-300"${_scopeId}> 🖼 </div>`);
								_push(`<div class="p-4 flex-1 flex flex-col gap-3"${_scopeId}><div${_scopeId}><p class="text-sm font-semibold text-warm-900"${_scopeId}>${ssrInterpolate(submission.name)}</p>`);
								if (submission.description) _push(`<p class="text-xs text-warm-500 mt-1"${_scopeId}>${ssrInterpolate(submission.description)}</p>`);
								else _push(`<!---->`);
								_push(`</div><div class="flex items-center justify-between mt-auto pt-2 border-t border-warm-100"${_scopeId}><span class="text-xs text-warm-400"${_scopeId}>${ssrInterpolate(submission.user.name)} · ${ssrInterpolate(submission.created_at)}</span></div><div class="flex gap-2"${_scopeId}>`);
								if (!submission.is_winner) _push(`<button class="flex-1 px-3 py-1.5 text-xs font-semibold text-amber-700 border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors"${_scopeId}> Declare winner </button>`);
								else _push(`<!---->`);
								_push(`<button class="px-3 py-1.5 text-xs font-medium text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></div></div>`);
							});
							_push(`<!--]--></div>`);
						}
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
					})])), createTextVNode(" " + toDisplayString(unref(page).props.flash.success), 1)])) : createCommentVNode("", true), !__props.submissions.length ? (openBlock(), createBlock("div", {
						key: 1,
						class: "text-center py-20 bg-warm-50 rounded-2xl border border-warm-200"
					}, [
						createVNode("span", { class: "text-4xl block mb-3" }, "📭"),
						createVNode("p", { class: "font-semibold text-warm-800 mb-1" }, "No entries yet"),
						createVNode("p", { class: "text-sm text-warm-500" }, "Entries will appear here once members submit.")
					])) : (openBlock(), createBlock("div", {
						key: 2,
						class: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.submissions, (submission) => {
						return openBlock(), createBlock("div", {
							key: submission.id,
							class: ["bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col", submission.is_winner ? "border-amber-300 ring-2 ring-amber-200" : "border-warm-200"]
						}, [
							submission.is_winner ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex items-center gap-1.5 px-4 py-2 bg-amber-50 border-b border-amber-200 text-xs font-semibold text-amber-700"
							}, [(openBlock(), createBlock("svg", {
								class: "w-3.5 h-3.5",
								fill: "currentColor",
								viewBox: "0 0 24 24"
							}, [createVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })])), createTextVNode(" Winner ")])) : createCommentVNode("", true),
							submission.image_url ? (openBlock(), createBlock("img", {
								key: 1,
								src: submission.image_url,
								alt: submission.name,
								class: "w-full h-auto block"
							}, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
								key: 2,
								class: "aspect-video bg-warm-100 flex items-center justify-center text-3xl text-warm-300"
							}, " 🖼 ")),
							createVNode("div", { class: "p-4 flex-1 flex flex-col gap-3" }, [
								createVNode("div", null, [createVNode("p", { class: "text-sm font-semibold text-warm-900" }, toDisplayString(submission.name), 1), submission.description ? (openBlock(), createBlock("p", {
									key: 0,
									class: "text-xs text-warm-500 mt-1"
								}, toDisplayString(submission.description), 1)) : createCommentVNode("", true)]),
								createVNode("div", { class: "flex items-center justify-between mt-auto pt-2 border-t border-warm-100" }, [createVNode("span", { class: "text-xs text-warm-400" }, toDisplayString(submission.user.name) + " · " + toDisplayString(submission.created_at), 1)]),
								createVNode("div", { class: "flex gap-2" }, [!submission.is_winner ? (openBlock(), createBlock("button", {
									key: 0,
									onClick: ($event) => declareWinner(submission.id, submission.name),
									class: "flex-1 px-3 py-1.5 text-xs font-semibold text-amber-700 border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors"
								}, " Declare winner ", 8, ["onClick"])) : createCommentVNode("", true), createVNode("button", {
									onClick: ($event) => deleteSubmission(submission.id, submission.name),
									class: "px-3 py-1.5 text-xs font-medium text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
								}, [(openBlock(), createBlock("svg", {
									class: "w-3.5 h-3.5",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								})]))], 8, ["onClick"])])
							])
						], 2);
					}), 128))]))];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Competitions/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
