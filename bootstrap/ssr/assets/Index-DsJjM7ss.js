import { n as _sfc_main$1, t as _sfc_main$2 } from "./Footer-B0QZbCHf.js";
import { Head, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { computed, unref, useSSRContext } from "vue";
//#region resources/js/Pages/Calendar/Index.vue
var _sfc_main = {
	__name: "Index",
	__ssrInlineRender: true,
	props: {
		occurrences: {
			type: Array,
			required: true
		},
		activities: {
			type: Array,
			required: true
		},
		month: {
			type: Number,
			required: true
		},
		year: {
			type: Number,
			required: true
		}
	},
	setup(__props) {
		const navLinks = usePage().props.site.nav_links;
		const props = __props;
		const monthName = computed(() => {
			return new Date(props.year, props.month - 1).toLocaleString("default", {
				month: "long",
				year: "numeric"
			});
		});
		const groupedByDate = computed(() => {
			const groups = {};
			for (const occ of props.occurrences) {
				const dateKey = new Date(occ.starts_at).toLocaleDateString("en-GB", {
					weekday: "long",
					day: "numeric",
					month: "long"
				});
				if (!groups[dateKey]) groups[dateKey] = [];
				groups[dateKey].push(occ);
			}
			return groups;
		});
		const calendarDays = computed(() => {
			const firstOfMonth = new Date(props.year, props.month - 1, 1);
			const lastOfMonth = new Date(props.year, props.month, 0);
			const startDay = firstOfMonth.getDay() === 0 ? 6 : firstOfMonth.getDay() - 1;
			const totalDays = lastOfMonth.getDate();
			const days = [];
			for (let i = 0; i < startDay; i++) days.push({
				day: null,
				events: []
			});
			for (let d = 1; d <= totalDays; d++) {
				const dateStr = `${props.year}-${String(props.month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
				const dayEvents = props.occurrences.filter((occ) => occ.starts_at.slice(0, 10) === dateStr);
				days.push({
					day: d,
					events: dayEvents,
					isToday: isToday(d)
				});
			}
			return days;
		});
		function isToday(day) {
			const now = /* @__PURE__ */ new Date();
			return now.getFullYear() === props.year && now.getMonth() + 1 === props.month && now.getDate() === day;
		}
		function formatTime(iso) {
			if (!iso) return "";
			return new Date(iso).toLocaleTimeString("en-GB", {
				hour: "2-digit",
				minute: "2-digit"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: `Calendar — ${monthName.value}` }, null, _parent));
			_push(`<div class="font-sans antialiased text-warm-800 bg-white">`);
			_push(ssrRenderComponent(_sfc_main$1, { navLinks: unref(navLinks) }, null, _parent));
			_push(`<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="flex items-center justify-between mb-6"><button class="p-2 rounded-lg hover:bg-warm-100 transition-colors text-warm-500"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><h1 class="text-2xl font-bold text-warm-900 font-display">${ssrInterpolate(monthName.value)}</h1><button class="p-2 rounded-lg hover:bg-warm-100 transition-colors text-warm-500"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div><div class="bg-white border border-warm-200 rounded-2xl shadow-sm overflow-hidden"><div class="grid grid-cols-7 bg-warm-50 border-b border-warm-200"><!--[-->`);
			ssrRenderList([
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
				"Sun"
			], (day) => {
				_push(`<div class="px-2 py-2 text-xs font-semibold text-warm-500 text-center">${ssrInterpolate(day)}</div>`);
			});
			_push(`<!--]--></div><div class="grid grid-cols-7"><!--[-->`);
			ssrRenderList(calendarDays.value, (cell, i) => {
				_push(`<div class="${ssrRenderClass([{ "bg-warm-50/50": !cell.day }, "min-h-[5rem] border-b border-r border-warm-100 p-1.5 last:border-r-0"])}">`);
				if (cell.day) {
					_push(`<div class="h-full"><span class="${ssrRenderClass([cell.isToday ? "bg-brand-600 text-white" : "text-warm-600", "inline-flex items-center justify-center w-6 h-6 text-xs font-medium rounded-full mb-1"])}">${ssrInterpolate(cell.day)}</span><div class="space-y-0.5"><!--[-->`);
					ssrRenderList(cell.events.slice(0, 3), (event) => {
						_push(`<div class="text-xs px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 truncate cursor-default"${ssrRenderAttr("title", `${formatTime(event.starts_at)} ${event.title}${event.location ? " · " + event.location : ""}`)}><span class="font-medium">${ssrInterpolate(formatTime(event.starts_at))}</span> ${ssrInterpolate(event.title)}</div>`);
					});
					_push(`<!--]-->`);
					if (cell.events.length > 3) _push(`<div class="text-xs text-warm-400 px-1.5"> +${ssrInterpolate(cell.events.length - 3)} more </div>`);
					else _push(`<!---->`);
					_push(`</div></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></div></div>`);
			if (Object.keys(groupedByDate.value).length) {
				_push(`<div class="mt-8 space-y-6"><h2 class="text-lg font-semibold text-warm-900 font-display">All Events This Month</h2><!--[-->`);
				ssrRenderList(groupedByDate.value, (events, dateLabel) => {
					_push(`<div><h3 class="text-sm font-semibold text-warm-500 uppercase tracking-wide mb-3">${ssrInterpolate(dateLabel)}</h3><div class="space-y-3"><!--[-->`);
					ssrRenderList(events, (event) => {
						_push(`<div class="bg-white border border-warm-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"><div class="flex items-start justify-between"><div><h4 class="font-semibold text-warm-900">${ssrInterpolate(event.title)}</h4><p class="text-sm text-warm-500 mt-1">${ssrInterpolate(formatTime(event.starts_at))} `);
						if (event.ends_at) _push(`<span> – ${ssrInterpolate(formatTime(event.ends_at))}</span>`);
						else _push(`<!---->`);
						if (event.location) _push(`<span> · ${ssrInterpolate(event.location)}</span>`);
						else _push(`<!---->`);
						_push(`</p>`);
						if (event.activity) _push(`<p class="text-xs text-brand-600 mt-1">${ssrInterpolate(event.activity.title)}</p>`);
						else _push(`<!---->`);
						_push(`</div>`);
						if (event.recurrence) _push(`<span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium shrink-0">${ssrInterpolate(event.recurrence)}</span>`);
						else _push(`<!---->`);
						_push(`</div>`);
						if (event.description) _push(`<p class="text-sm text-warm-600 mt-2">${ssrInterpolate(event.description)}</p>`);
						else _push(`<!---->`);
						_push(`</div>`);
					});
					_push(`<!--]--></div></div>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<div class="mt-8 text-center py-12 text-warm-400"><p class="text-lg">No events scheduled this month.</p></div>`);
			_push(`</div>`);
			_push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
			_push(`</div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Calendar/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
