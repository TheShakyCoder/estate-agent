import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-B0QZbCHf.js";
import { Head, useForm, usePage } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { ref, unref, useSSRContext } from "vue";
import { marked } from "marked";
//#region resources/js/Pages/Competition/Show.vue
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
		},
		userSubmission: {
			type: Object,
			default: null
		},
		canLogin: { type: Boolean },
		canRegister: { type: Boolean }
	},
	setup(__props) {
		const page = usePage();
		const navLinks = page.props.site.nav_links;
		const auth = page.props.auth;
		const props = __props;
		const form = useForm({
			name: "",
			description: "",
			image: null
		});
		const imagePreview = ref(null);
		const statusLabel = {
			open: "Open — accepting entries",
			closed: "Closed — entries are no longer accepted",
			results: "Results announced"
		};
		const winner = props.submissions.find((s) => s.is_winner);
		const otherSubmissions = props.submissions.filter((s) => !s.is_winner);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), {
				title: `${__props.competition.title} — Acme Estate Agents`,
				description: __props.competition.description
			}, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white">`);
			_push(ssrRenderComponent(_sfc_main$1, {
				navLinks: unref(navLinks),
				canLogin: __props.canLogin,
				canRegister: __props.canRegister
			}, null, _parent));
			_push(`<section class="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white"><div class="absolute -top-16 -right-16 w-72 h-72 bg-brand-500/25 rounded-full blur-3xl pointer-events-none"></div><div class="absolute -bottom-20 -left-10 w-64 h-64 bg-brand-800/35 rounded-full blur-3xl pointer-events-none"></div><div class="absolute right-[-40px] top-1/2 w-72 h-72 pointer-events-none select-none flex items-center justify-center" style="${ssrRenderStyle({ "transform": "translateY(-50%) rotate(-8deg)" })}"><svg class="w-full h-auto opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 55 L50 25 L82 55" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 50 L28 78 L72 78 L72 50" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M44 78 L44 60 L56 60 L56 78" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"><nav class="flex items-center gap-2 text-white/50 text-xs mb-5"><a href="/" class="hover:text-white transition-colors">Home</a><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><a href="/competitions" class="hover:text-white transition-colors">Competitions</a><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="text-white/80 truncate max-w-xs">${ssrInterpolate(__props.competition.title)}</span></nav><h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">${ssrInterpolate(__props.competition.title)}</h1><p class="mt-3 text-white/70 text-sm">${ssrInterpolate(statusLabel[__props.competition.status])}</p></div><div class="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full"><path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z" fill="white"></path></svg></div></section><section class="py-16 lg:py-20 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="lg:grid lg:grid-cols-[1fr_360px] lg:gap-12 xl:gap-16 items-start"><div class="space-y-12">`);
			if (unref(page).props.flash.success) _push(`<div class="flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ${ssrInterpolate(unref(page).props.flash.success)}</div>`);
			else _push(`<!---->`);
			if (__props.competition.content) _push(`<div class="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-warm-900 prose-p:text-warm-700 prose-p:leading-relaxed prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-warm-900 prose-ul:text-warm-700 prose-ol:text-warm-700">${unref(marked).parse(__props.competition.content) ?? ""}</div>`);
			else _push(`<!---->`);
			if (__props.competition.status === "results" && unref(winner)) {
				_push(`<div><h2 class="font-display text-2xl font-bold text-warm-900 mb-6 flex items-center gap-2"><svg class="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> Winner </h2><div class="rounded-2xl border-2 border-amber-300 overflow-hidden shadow-lg bg-amber-50/30">`);
				if (unref(winner).image_url) _push(`<img${ssrRenderAttr("src", unref(winner).image_url)}${ssrRenderAttr("alt", unref(winner).name)} class="w-full h-auto block">`);
				else _push(`<!---->`);
				_push(`<div class="p-6"><p class="font-display text-xl font-bold text-warm-900">${ssrInterpolate(unref(winner).name)}</p>`);
				if (unref(winner).description) _push(`<p class="text-warm-600 mt-2 text-sm">${ssrInterpolate(unref(winner).description)}</p>`);
				else _push(`<!---->`);
				_push(`</div></div></div>`);
			} else _push(`<!---->`);
			if (__props.submissions.length && __props.competition.status !== "open") {
				_push(`<div><h2 class="font-display text-xl font-bold text-warm-900 mb-5">${ssrInterpolate(__props.competition.status === "results" ? "All entries" : "Entries")}</h2><div class="grid gap-4 sm:grid-cols-2"><!--[-->`);
				ssrRenderList(unref(otherSubmissions), (submission) => {
					_push(`<div class="rounded-xl border border-warm-200 overflow-hidden bg-white shadow-sm">`);
					if (submission.image_url) _push(`<img${ssrRenderAttr("src", submission.image_url)}${ssrRenderAttr("alt", submission.name)} class="w-full h-auto block">`);
					else _push(`<!---->`);
					_push(`<div class="p-4"><p class="font-semibold text-warm-900 text-sm">${ssrInterpolate(submission.name)}</p>`);
					if (submission.description) _push(`<p class="text-xs text-warm-500 mt-1">${ssrInterpolate(submission.description)}</p>`);
					else _push(`<!---->`);
					_push(`</div></div>`);
				});
				_push(`<!--]--></div></div>`);
			} else _push(`<!---->`);
			_push(`</div><div class="mt-12 lg:mt-0">`);
			if (__props.userSubmission) {
				_push(`<div class="${ssrRenderClass([__props.userSubmission.is_winner ? "border-amber-300 ring-2 ring-amber-200" : "", "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"])}">`);
				if (__props.userSubmission.is_winner) _push(`<div class="flex items-center gap-2 px-5 py-3 bg-amber-50 border-b border-amber-200 text-sm font-semibold text-amber-700"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> Your entry won! </div>`);
				else _push(`<!---->`);
				if (__props.userSubmission.image_url) _push(`<img${ssrRenderAttr("src", __props.userSubmission.image_url)}${ssrRenderAttr("alt", __props.userSubmission.name)} class="w-full h-auto block">`);
				else _push(`<!---->`);
				_push(`<div class="p-5 space-y-3"><div class="flex items-center gap-2 text-sm font-semibold text-brand-700"><svg class="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Your entry </div><p class="font-semibold text-warm-900">${ssrInterpolate(__props.userSubmission.name)}</p>`);
				if (__props.userSubmission.description) _push(`<p class="text-sm text-warm-500">${ssrInterpolate(__props.userSubmission.description)}</p>`);
				else _push(`<!---->`);
				if (!__props.userSubmission.is_winner) _push(`<p class="text-xs text-warm-400">Good luck!</p>`);
				else _push(`<!---->`);
				_push(`</div></div>`);
			} else if (__props.competition.status !== "open") _push(`<div class="bg-warm-50 border border-warm-200 rounded-2xl p-6 text-center"><p class="font-semibold text-warm-700 mb-1">${ssrInterpolate(__props.competition.status === "results" ? "Competition closed" : "No longer accepting entries")}</p><p class="text-sm text-warm-500">This competition is not currently open for entries.</p></div>`);
			else if (!unref(auth).user) _push(`<div class="bg-white border border-warm-200 rounded-2xl p-6 shadow-sm text-center space-y-3"><p class="font-semibold text-warm-800">Want to enter?</p><p class="text-sm text-warm-500">You need to be logged in to submit an entry.</p><a href="/login" class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"> Log in to enter </a></div>`);
			else {
				_push(`<div class="bg-white border border-warm-200 rounded-2xl p-6 shadow-sm"><h2 class="font-display text-lg font-semibold text-warm-900 mb-5">Submit your entry</h2><form class="space-y-4" enctype="multipart/form-data"><div><label class="block text-xs font-semibold text-warm-700 mb-1.5">Entry title</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="Give your entry a title" class="${ssrRenderClass([unref(form).errors.name ? "border-rose-300" : "border-warm-200", "w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"])}">`);
				if (unref(form).errors.name) _push(`<p class="mt-1.5 text-xs text-rose-600">${ssrInterpolate(unref(form).errors.name)}</p>`);
				else _push(`<!---->`);
				_push(`</div><div><label class="block text-xs font-semibold text-warm-700 mb-1.5">Description <span class="font-normal text-warm-400">(optional)</span></label><textarea rows="3" placeholder="Tell us about your entry…" class="${ssrRenderClass([unref(form).errors.description ? "border-rose-300" : "border-warm-200", "w-full px-3 py-2 text-sm border rounded-xl bg-white text-warm-900 resize-none focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"])}">${ssrInterpolate(unref(form).description)}</textarea>`);
				if (unref(form).errors.description) _push(`<p class="mt-1 text-xs text-rose-600">${ssrInterpolate(unref(form).errors.description)}</p>`);
				else _push(`<!---->`);
				_push(`</div><div><label class="block text-xs font-semibold text-warm-700 mb-1.5">Photo <span class="font-normal text-warm-400">(optional)</span></label><div class="space-y-2">`);
				if (imagePreview.value) _push(`<div class="rounded-xl overflow-hidden border border-warm-200 aspect-video"><img${ssrRenderAttr("src", imagePreview.value)} alt="Preview" class="w-full h-full object-cover"></div>`);
				else _push(`<!---->`);
				_push(`<label class="flex items-center gap-2 px-4 py-2.5 border border-dashed border-warm-300 rounded-xl cursor-pointer hover:border-brand-400 hover:bg-brand-50 transition-colors text-sm text-warm-500"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> ${ssrInterpolate(imagePreview.value ? "Change photo" : "Upload a photo")} <input type="file" accept="image/jpeg,image/png,image/webp" class="sr-only"></label></div>`);
				if (unref(form).errors.image) _push(`<p class="mt-1.5 text-xs text-rose-600">${ssrInterpolate(unref(form).errors.image)}</p>`);
				else _push(`<!---->`);
				_push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50">${ssrInterpolate(unref(form).processing ? "Submitting…" : "Submit entry")}</button></form></div>`);
			}
			_push(`</div></div></div></section>`);
			_push(ssrRenderComponent(_sfc_main$2, { navLinks: unref(navLinks) }, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Competition/Show.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
