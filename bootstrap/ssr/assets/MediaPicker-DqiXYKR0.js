import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderTeleport } from "vue/server-renderer";
import { mergeProps, onBeforeUnmount, onMounted, ref, useSSRContext, watch } from "vue";
import EasyMDE from "easymde";
import "axios";
//#region resources/js/Components/MarkdownEditor.vue
var _sfc_main$1 = {
	__name: "MarkdownEditor",
	__ssrInlineRender: true,
	props: { modelValue: {
		type: String,
		default: ""
	} },
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const textarea = ref(null);
		let editor = null;
		onMounted(() => {
			editor = new EasyMDE({
				element: textarea.value,
				initialValue: props.modelValue,
				spellChecker: false,
				autofocus: false,
				status: false,
				toolbar: [
					"bold",
					"italic",
					"heading",
					"|",
					"quote",
					"unordered-list",
					"ordered-list",
					"|",
					"link",
					"|",
					"preview",
					"side-by-side",
					"fullscreen",
					"|",
					"guide"
				],
				previewClass: [
					"editor-preview",
					"prose",
					"prose-warm",
					"max-w-none"
				]
			});
			editor.codemirror.on("change", () => {
				emit("update:modelValue", editor.value());
			});
		});
		watch(() => props.modelValue, (val) => {
			if (editor && editor.value() !== val) editor.value(val);
		});
		onBeforeUnmount(() => {
			if (editor) {
				editor.toTextArea();
				editor = null;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
				ref_key: "textarea",
				ref: textarea
			}, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MarkdownEditor.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/MediaPicker.vue
var _sfc_main = {
	__name: "MediaPicker",
	__ssrInlineRender: true,
	props: {
		modelValue: { default: null },
		url: { default: null }
	},
	emits: ["update:modelValue", "update:url"],
	setup(__props, { emit: __emit }) {
		/**
		* MediaPicker — modal that lets you pick from the media library or upload new files.
		*
		* Usage:
		*   <MediaPicker v-model="form.thumbnail" v-model:url="thumbnailUrl" />
		*
		*   v-model        → the media ID (stored in DB as post.thumbnail_id)
		*   v-model:url    → the public URL (for preview, not persisted)
		*/
		const props = __props;
		const open = ref(false);
		const media = ref([]);
		const loading = ref(false);
		const page = ref(1);
		const lastPage = ref(1);
		const search = ref("");
		const uploading = ref(false);
		const selected = ref(props.modelValue);
		watch(() => props.modelValue, (v) => selected.value = v);
		function isImage(mime) {
			return mime?.startsWith("image/");
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><div>`);
			if (__props.url) _push(`<div class="relative rounded-xl overflow-hidden aspect-video bg-warm-100 mb-3"><img${ssrRenderAttr("src", __props.url)} class="w-full h-full object-cover" alt="Selected media"><button type="button" class="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
			else _push(`<!---->`);
			_push(`<button type="button" class="w-full flex flex-col items-center gap-2 p-4 border-2 border-dashed border-warm-200 rounded-xl cursor-pointer hover:border-brand-300 hover:bg-brand-50/50 transition-colors"><svg class="w-6 h-6 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-xs text-warm-500">${ssrInterpolate(__props.url ? "Change image" : "Select from media library")}</span></button></div>`);
			ssrRenderTeleport(_push, (_push) => {
				if (open.value) {
					_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"><div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden"><div class="flex items-center justify-between px-6 py-4 border-b border-warm-100"><h2 class="font-semibold text-warm-900 text-sm">Media Library</h2><div class="flex items-center gap-3"><label class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors cursor-pointer"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg> ${ssrInterpolate(uploading.value ? "Uploading…" : "Upload")} <input type="file" multiple accept="image/*" class="sr-only"${ssrIncludeBooleanAttr(uploading.value) ? " disabled" : ""}></label><input${ssrRenderAttr("value", search.value)} type="search" placeholder="Search…" class="px-3 py-1.5 text-xs border border-warm-200 rounded-lg bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition w-40"><button type="button" class="p-1.5 rounded-lg text-warm-400 hover:bg-warm-100 hover:text-warm-700 transition-colors"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div><div class="flex-1 overflow-y-auto p-6">`);
					if (loading.value && !media.value.length) {
						_push(`<div class="grid grid-cols-4 sm:grid-cols-6 gap-3"><!--[-->`);
						ssrRenderList(12, (n) => {
							_push(`<div class="aspect-square rounded-xl bg-warm-100 animate-pulse"></div>`);
						});
						_push(`<!--]--></div>`);
					} else if (!media.value.length) _push(`<div class="flex flex-col items-center justify-center py-16 text-center"><svg class="w-10 h-10 text-warm-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p class="text-sm text-warm-500">No media found.</p></div>`);
					else {
						_push(`<div class="grid grid-cols-4 sm:grid-cols-6 gap-3"><!--[-->`);
						ssrRenderList(media.value, (item) => {
							_push(`<button type="button" class="${ssrRenderClass([selected.value === item.id ? "border-brand-500 shadow-md" : "border-warm-200 hover:border-brand-300", "group relative aspect-square rounded-xl overflow-hidden border-2 transition-all"])}">`);
							if (isImage(item.mime_type)) _push(`<img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.alt ?? item.filename)} class="w-full h-full object-cover" loading="lazy">`);
							else _push(`<div class="w-full h-full bg-warm-50 flex items-center justify-center"><svg class="w-6 h-6 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>`);
							if (selected.value === item.id) _push(`<div class="absolute top-1 right-1 w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center"><svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>`);
							else _push(`<!---->`);
							_push(`<div class="absolute inset-x-0 bottom-0 bg-black/50 px-1.5 py-1 translate-y-full group-hover:translate-y-0 transition-transform"><p class="text-white text-[10px] truncate">${ssrInterpolate(item.filename)}</p></div></button>`);
						});
						_push(`<!--]--></div>`);
					}
					if (page.value < lastPage.value) _push(`<div class="mt-6 flex justify-center"><button type="button"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="px-5 py-2 text-sm font-medium border border-warm-200 text-warm-600 rounded-xl hover:bg-warm-50 transition-colors disabled:opacity-50">${ssrInterpolate(loading.value ? "Loading…" : "Load more")}</button></div>`);
					else _push(`<!---->`);
					_push(`</div></div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MediaPicker.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main$1 as n, _sfc_main as t };
