import { t as _sfc_main$1 } from "./Index-C3bBYnfs.js";
import { Head, Link, router, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { Fragment, Transition, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import axios from "axios";
//#region resources/js/Pages/Internal/Media/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		media: {
			type: Object,
			required: true
		},
		search: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const page = usePage();
		const props = __props;
		const uploading = ref(false);
		const uploadQueue = ref([]);
		const dropActive = ref(false);
		function onFilePick(e) {
			uploadFiles([...e.target.files]);
			e.target.value = "";
		}
		function onDrop(e) {
			dropActive.value = false;
			uploadFiles([...e.dataTransfer.files]);
		}
		async function uploadFiles(files) {
			uploading.value = true;
			uploadQueue.value = files.map((f) => ({
				name: f.name,
				progress: 0,
				error: null
			}));
			const formData = new FormData();
			files.forEach((f) => formData.append("files[]", f));
			try {
				await axios.post("/internal/media", formData, {
					headers: { "Content-Type": "multipart/form-data" },
					onUploadProgress: (e) => {
						const pct = Math.round(e.loaded / e.total * 100);
						uploadQueue.value.forEach((q) => q.progress = pct);
					}
				});
				router.reload({ only: ["media"] });
			} catch (err) {
				console.error("Upload failed:", err);
				const errors = err.response?.data?.errors?.["files.0"] ?? ["Upload failed"];
				uploadQueue.value.forEach((q) => q.error = errors[0]);
			} finally {
				uploading.value = false;
				setTimeout(() => uploadQueue.value = [], 2e3);
			}
		}
		const selected = ref(null);
		const altDraft = ref("");
		function select(item) {
			selected.value = item;
			altDraft.value = item.alt ?? "";
		}
		function deselect() {
			selected.value = null;
		}
		async function saveAlt() {
			await axios.patch(`/internal/media/${selected.value.id}`, { alt: altDraft.value });
			selected.value.alt = altDraft.value;
		}
		function confirmDelete(item) {
			if (!confirm(`Delete "${item.filename}"? This cannot be undone.`)) return;
			router.delete(`/internal/media/${item.id}`, { onSuccess: () => {
				selected.value = null;
			} });
		}
		const searchQuery = ref(props.search);
		function doSearch() {
			router.get("/internal/media", { search: searchQuery.value }, {
				preserveState: true,
				replace: true
			});
		}
		function isImage(mime) {
			return mime?.startsWith("image/");
		}
		function fileSize(bytes) {
			if (bytes < 1024) return bytes + " B";
			if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
			return (bytes / 1048576).toFixed(1) + " MB";
		}
		function copyUrl(url) {
			navigator.clipboard.writeText(url);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "Media Library" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, { title: "Media Library" }, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl font-semibold text-warm-900 font-display"${_scopeId}>Media Library</h1><p class="text-sm text-warm-500 mt-0.5"${_scopeId}>${ssrInterpolate(__props.media.total)} file${ssrInterpolate(__props.media.total !== 1 ? "s" : "")}</p></div><label class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm cursor-pointer"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"${_scopeId}></path></svg> Upload <input type="file" multiple accept="image/*,.pdf" class="sr-only"${_scopeId}></label></div>`);
					else return [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl font-semibold text-warm-900 font-display" }, "Media Library"), createVNode("p", { class: "text-sm text-warm-500 mt-0.5" }, toDisplayString(__props.media.total) + " file" + toDisplayString(__props.media.total !== 1 ? "s" : ""), 1)]), createVNode("label", { class: "inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm cursor-pointer" }, [
						(openBlock(), createBlock("svg", {
							class: "w-4 h-4",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
						})])),
						createTextVNode(" Upload "),
						createVNode("input", {
							type: "file",
							multiple: "",
							accept: "image/*,.pdf",
							class: "sr-only",
							onChange: onFilePick
						}, null, 32)
					])])];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(page).props.flash.success) _push(`<div class="mb-6 flex items-center gap-2 px-4 py-3 bg-brand-50 border border-brand-200 rounded-xl text-sm text-brand-700"${_scopeId}><svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(unref(page).props.flash.success)}</div>`);
						else _push(`<!---->`);
						if (uploadQueue.value.length) {
							_push(`<div class="mb-6 space-y-2"${_scopeId}><!--[-->`);
							ssrRenderList(uploadQueue.value, (q) => {
								_push(`<div class="flex items-center gap-3 px-4 py-3 bg-white border border-warm-200 rounded-xl text-sm"${_scopeId}><svg class="w-4 h-4 text-warm-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg><span class="flex-1 truncate text-warm-700"${_scopeId}>${ssrInterpolate(q.name)}</span>`);
								if (q.error) _push(`<span class="text-rose-600 text-xs"${_scopeId}>${ssrInterpolate(q.error)}</span>`);
								else _push(`<div class="w-32 h-1.5 bg-warm-100 rounded-full overflow-hidden"${_scopeId}><div class="h-full bg-brand-500 transition-all duration-300" style="${ssrRenderStyle({ width: q.progress + "%" })}"${_scopeId}></div></div>`);
								_push(`</div>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`<div class="flex gap-6 items-start"${_scopeId}><div class="flex-1 min-w-0"${_scopeId}><div class="mb-4 flex gap-2"${_scopeId}><input${ssrRenderAttr("value", searchQuery.value)} type="search" placeholder="Search by filename…" class="flex-1 px-4 py-2 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"${_scopeId}><button class="px-4 py-2 text-sm font-medium bg-white border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors text-warm-600"${_scopeId}> Search </button></div><div class="relative"${_scopeId}>`);
						if (dropActive.value) _push(`<div class="absolute inset-0 z-10 flex items-center justify-center bg-brand-50/90 border-2 border-dashed border-brand-400 rounded-2xl"${_scopeId}><p class="text-brand-600 font-semibold text-sm"${_scopeId}>Drop files to upload</p></div>`);
						else _push(`<!---->`);
						if (!__props.media.data.length) _push(`<div class="flex flex-col items-center justify-center py-24 bg-warm-50 rounded-2xl border border-warm-200 text-center"${_scopeId}><svg class="w-12 h-12 text-warm-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg><p class="text-sm text-warm-500"${_scopeId}>No files yet. Upload or drag &amp; drop.</p></div>`);
						else {
							_push(`<div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"${_scopeId}><!--[-->`);
							ssrRenderList(__props.media.data, (item) => {
								_push(`<button type="button" class="${ssrRenderClass([selected.value?.id === item.id ? "border-brand-500 shadow-md" : "border-warm-200 hover:border-brand-300", "group relative aspect-square rounded-xl overflow-hidden border-2 transition-all"])}"${_scopeId}>`);
								if (isImage(item.mime_type)) _push(`<img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.alt ?? item.filename)} class="w-full h-full object-cover" loading="lazy"${_scopeId}>`);
								else _push(`<div class="w-full h-full bg-warm-100 flex flex-col items-center justify-center gap-1 p-2"${_scopeId}><svg class="w-8 h-8 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg><span class="text-xs text-warm-500 truncate w-full text-center"${_scopeId}>${ssrInterpolate(item.filename)}</span></div>`);
								if (selected.value?.id === item.id) _push(`<div class="absolute top-1.5 right-1.5 w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center"${_scopeId}><svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"${_scopeId}></path></svg></div>`);
								else _push(`<!---->`);
								_push(`</button>`);
							});
							_push(`<!--]--></div>`);
						}
						_push(`</div>`);
						if (__props.media.last_page > 1) {
							_push(`<div class="mt-6 flex items-center justify-center gap-2"${_scopeId}><!--[-->`);
							ssrRenderList(__props.media.links, (link) => {
								_push(ssrRenderComponent(unref(Link), {
									key: link.label,
									href: link.url ?? "#",
									class: ["px-3 py-1.5 text-xs rounded-lg border transition-colors", link.active ? "bg-brand-600 text-white border-brand-600" : link.url ? "border-warm-200 text-warm-600 hover:bg-warm-100" : "border-warm-100 text-warm-300 pointer-events-none"]
								}, null, _parent, _scopeId));
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (selected.value) {
							_push(`<aside class="w-64 shrink-0 space-y-4"${_scopeId}><div class="bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm"${_scopeId}><div class="aspect-video bg-warm-100 flex items-center justify-center"${_scopeId}>`);
							if (isImage(selected.value.mime_type)) _push(`<img${ssrRenderAttr("src", selected.value.url)}${ssrRenderAttr("alt", selected.value.alt ?? selected.value.filename)} class="max-w-full max-h-full object-contain"${_scopeId}>`);
							else _push(`<svg class="w-12 h-12 text-warm-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg>`);
							_push(`</div><div class="p-4 space-y-3"${_scopeId}><p class="text-xs font-medium text-warm-900 break-all"${_scopeId}>${ssrInterpolate(selected.value.filename)}</p><div class="text-xs text-warm-500 space-y-1"${_scopeId}><p${_scopeId}>${ssrInterpolate(fileSize(selected.value.size))}</p><p${_scopeId}>${ssrInterpolate(selected.value.mime_type)}</p></div><div${_scopeId}><label class="block text-xs font-semibold text-warm-700 mb-1"${_scopeId}>Alt text</label><input${ssrRenderAttr("value", altDraft.value)} type="text" placeholder="Describe this image…" class="w-full px-3 py-1.5 text-xs border border-warm-200 rounded-lg bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"${_scopeId}></div><button class="w-full px-3 py-1.5 text-xs font-semibold bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"${_scopeId}> Save alt text </button><button class="w-full px-3 py-1.5 text-xs font-medium border border-warm-200 text-warm-600 rounded-lg hover:bg-warm-50 transition-colors"${_scopeId}> Copy URL </button><button class="w-full px-3 py-1.5 text-xs font-medium border border-rose-200 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"${_scopeId}> Delete file </button></div></div><button class="text-xs text-warm-400 hover:text-warm-600 transition-colors"${_scopeId}> ← Deselect </button></aside>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [
						unref(page).props.flash.success ? (openBlock(), createBlock("div", {
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
						})])), createTextVNode(" " + toDisplayString(unref(page).props.flash.success), 1)])) : createCommentVNode("", true),
						uploadQueue.value.length ? (openBlock(), createBlock("div", {
							key: 1,
							class: "mb-6 space-y-2"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(uploadQueue.value, (q) => {
							return openBlock(), createBlock("div", {
								key: q.name,
								class: "flex items-center gap-3 px-4 py-3 bg-white border border-warm-200 rounded-xl text-sm"
							}, [
								(openBlock(), createBlock("svg", {
									class: "w-4 h-4 text-warm-400 shrink-0",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "2",
									d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								})])),
								createVNode("span", { class: "flex-1 truncate text-warm-700" }, toDisplayString(q.name), 1),
								q.error ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-rose-600 text-xs"
								}, toDisplayString(q.error), 1)) : (openBlock(), createBlock("div", {
									key: 1,
									class: "w-32 h-1.5 bg-warm-100 rounded-full overflow-hidden"
								}, [createVNode("div", {
									class: "h-full bg-brand-500 transition-all duration-300",
									style: { width: q.progress + "%" }
								}, null, 4)]))
							]);
						}), 128))])) : createCommentVNode("", true),
						createVNode("div", { class: "flex gap-6 items-start" }, [createVNode("div", { class: "flex-1 min-w-0" }, [
							createVNode("div", { class: "mb-4 flex gap-2" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => searchQuery.value = $event,
								onKeydown: withKeys(doSearch, ["enter"]),
								type: "search",
								placeholder: "Search by filename…",
								class: "flex-1 px-4 py-2 text-sm border border-warm-200 rounded-xl bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition placeholder-warm-300"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, searchQuery.value]]), createVNode("button", {
								onClick: doSearch,
								class: "px-4 py-2 text-sm font-medium bg-white border border-warm-200 rounded-xl hover:bg-warm-50 transition-colors text-warm-600"
							}, " Search ")]),
							createVNode("div", {
								class: "relative",
								onDragover: withModifiers(($event) => dropActive.value = true, ["prevent"]),
								onDragleave: withModifiers(($event) => dropActive.value = false, ["prevent"]),
								onDrop: withModifiers(onDrop, ["prevent"])
							}, [dropActive.value ? (openBlock(), createBlock("div", {
								key: 0,
								class: "absolute inset-0 z-10 flex items-center justify-center bg-brand-50/90 border-2 border-dashed border-brand-400 rounded-2xl"
							}, [createVNode("p", { class: "text-brand-600 font-semibold text-sm" }, "Drop files to upload")])) : createCommentVNode("", true), !__props.media.data.length ? (openBlock(), createBlock("div", {
								key: 1,
								class: "flex flex-col items-center justify-center py-24 bg-warm-50 rounded-2xl border border-warm-200 text-center"
							}, [(openBlock(), createBlock("svg", {
								class: "w-12 h-12 text-warm-300 mb-3",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								"stroke-width": "1.5",
								d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							})])), createVNode("p", { class: "text-sm text-warm-500" }, "No files yet. Upload or drag & drop.")])) : (openBlock(), createBlock("div", {
								key: 2,
								class: "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.media.data, (item) => {
								return openBlock(), createBlock("button", {
									key: item.id,
									type: "button",
									onClick: ($event) => select(item),
									class: ["group relative aspect-square rounded-xl overflow-hidden border-2 transition-all", selected.value?.id === item.id ? "border-brand-500 shadow-md" : "border-warm-200 hover:border-brand-300"]
								}, [isImage(item.mime_type) ? (openBlock(), createBlock("img", {
									key: 0,
									src: item.url,
									alt: item.alt ?? item.filename,
									class: "w-full h-full object-cover",
									loading: "lazy"
								}, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
									key: 1,
									class: "w-full h-full bg-warm-100 flex flex-col items-center justify-center gap-1 p-2"
								}, [(openBlock(), createBlock("svg", {
									class: "w-8 h-8 text-warm-400",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "1.5",
									d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								})])), createVNode("span", { class: "text-xs text-warm-500 truncate w-full text-center" }, toDisplayString(item.filename), 1)])), selected.value?.id === item.id ? (openBlock(), createBlock("div", {
									key: 2,
									class: "absolute top-1.5 right-1.5 w-5 h-5 bg-brand-600 rounded-full flex items-center justify-center"
								}, [(openBlock(), createBlock("svg", {
									class: "w-3 h-3 text-white",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor"
								}, [createVNode("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									"stroke-width": "3",
									d: "M5 13l4 4L19 7"
								})]))])) : createCommentVNode("", true)], 10, ["onClick"]);
							}), 128))]))], 40, ["onDragover", "onDragleave"]),
							__props.media.last_page > 1 ? (openBlock(), createBlock("div", {
								key: 0,
								class: "mt-6 flex items-center justify-center gap-2"
							}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.media.links, (link) => {
								return openBlock(), createBlock(unref(Link), {
									key: link.label,
									href: link.url ?? "#",
									innerHTML: link.label,
									class: ["px-3 py-1.5 text-xs rounded-lg border transition-colors", link.active ? "bg-brand-600 text-white border-brand-600" : link.url ? "border-warm-200 text-warm-600 hover:bg-warm-100" : "border-warm-100 text-warm-300 pointer-events-none"]
								}, null, 8, [
									"href",
									"innerHTML",
									"class"
								]);
							}), 128))])) : createCommentVNode("", true)
						]), createVNode(Transition, {
							"enter-from-class": "opacity-0 translate-x-4",
							"enter-active-class": "transition duration-150",
							"leave-to-class": "opacity-0 translate-x-4",
							"leave-active-class": "transition duration-150"
						}, {
							default: withCtx(() => [selected.value ? (openBlock(), createBlock("aside", {
								key: 0,
								class: "w-64 shrink-0 space-y-4"
							}, [createVNode("div", { class: "bg-white border border-warm-200 rounded-2xl overflow-hidden shadow-sm" }, [createVNode("div", { class: "aspect-video bg-warm-100 flex items-center justify-center" }, [isImage(selected.value.mime_type) ? (openBlock(), createBlock("img", {
								key: 0,
								src: selected.value.url,
								alt: selected.value.alt ?? selected.value.filename,
								class: "max-w-full max-h-full object-contain"
							}, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
								key: 1,
								class: "w-12 h-12 text-warm-300",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor"
							}, [createVNode("path", {
								"stroke-linecap": "round",
								"stroke-linejoin": "round",
								"stroke-width": "1.5",
								d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							})]))]), createVNode("div", { class: "p-4 space-y-3" }, [
								createVNode("p", { class: "text-xs font-medium text-warm-900 break-all" }, toDisplayString(selected.value.filename), 1),
								createVNode("div", { class: "text-xs text-warm-500 space-y-1" }, [createVNode("p", null, toDisplayString(fileSize(selected.value.size)), 1), createVNode("p", null, toDisplayString(selected.value.mime_type), 1)]),
								createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-warm-700 mb-1" }, "Alt text"), withDirectives(createVNode("input", {
									"onUpdate:modelValue": ($event) => altDraft.value = $event,
									type: "text",
									placeholder: "Describe this image…",
									class: "w-full px-3 py-1.5 text-xs border border-warm-200 rounded-lg bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, altDraft.value]])]),
								createVNode("button", {
									onClick: saveAlt,
									class: "w-full px-3 py-1.5 text-xs font-semibold bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
								}, " Save alt text "),
								createVNode("button", {
									onClick: ($event) => copyUrl(selected.value.url),
									class: "w-full px-3 py-1.5 text-xs font-medium border border-warm-200 text-warm-600 rounded-lg hover:bg-warm-50 transition-colors"
								}, " Copy URL ", 8, ["onClick"]),
								createVNode("button", {
									onClick: ($event) => confirmDelete(selected.value),
									class: "w-full px-3 py-1.5 text-xs font-medium border border-rose-200 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
								}, " Delete file ", 8, ["onClick"])
							])]), createVNode("button", {
								onClick: deselect,
								class: "text-xs text-warm-400 hover:text-warm-600 transition-colors"
							}, " ← Deselect ")])) : createCommentVNode("", true)]),
							_: 1
						})])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Internal/Media/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
