<script setup>
import { usePage } from '@inertiajs/vue3';
import CookieConsent from '@/Components/CookieConsent.vue';
import DemoDisclaimer from '@/Components/DemoDisclaimer.vue';

defineProps({
    navLinks: { type: Array },
});

const page = usePage();

function reopenCookieConsent() {
    try { localStorage.removeItem('cookie_consent'); } catch (e) {}
    window.location.reload();
}
</script>

<template>
    <footer class="bg-brand-900 text-white/70">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid md:grid-cols-4 gap-10 mb-12">

                <!-- Brand block -->
                <div class="md:col-span-2">
                    <div class="flex items-center gap-3 mb-5">
                        <div class="w-10 h-10 bg-white/10 flex items-center justify-center">
                            <svg class="w-5 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 55 L50 25 L82 55" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28 50 L28 78 L72 78 L72 50" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M44 78 L44 60 L56 60 L56 78" stroke="#2dcab8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-white tracking-display leading-none">Acme Estate Agents</p>
                            <p class="text-[10px] uppercase tracking-[0.25em] text-white/50 mt-1.5">Sales &middot; Lettings &middot; Valuations</p>
                        </div>
                    </div>
                    <p class="text-white/55 text-sm leading-relaxed max-w-sm mb-6">
                        Proud to be the area&rsquo;s longest-established independent estate agent &mdash; selling and letting homes across South Ribble and the Ribble Valley since {{ page.props.site.established }}.
                    </p>

                    <!-- Socials -->
                    <div class="flex gap-3">
                        <a :href="page.props.site.social?.instagram" target="_blank" rel="noopener"
                            class="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-accent-400 hover:text-accent-300 transition-colors"
                            aria-label="Instagram">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a :href="page.props.site.social?.facebook" target="_blank" rel="noopener"
                            class="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-accent-400 hover:text-accent-300 transition-colors"
                            aria-label="Facebook">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                    </div>
                </div>

                <div>
                    <p class="eyebrow text-white/40 mb-5">Site</p>
                    <ul class="space-y-2.5">
                        <li v-for="link in navLinks" :key="link.label">
                            <a :href="link.href" class="text-white/65 text-sm hover:text-accent-300 transition-colors">{{
                                link.label }}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <p class="eyebrow text-white/40 mb-5">Get in touch</p>
                    <ul class="space-y-2.5 text-sm text-white/65 mb-7">
                        <li>
                            <a :href="'tel:' + page.props.site.telephone" class="hover:text-accent-300 transition-colors">
                                {{ page.props.site.telephone }}
                            </a>
                        </li>
                        <li>
                            <a :href="'mailto:' + page.props.site.email" class="hover:text-accent-300 transition-colors">
                                {{ page.props.site.email }}
                            </a>
                        </li>
                        <li class="text-white/40 text-xs pt-1.5 leading-relaxed" v-html="page.props.site.opening_times"></li>
                    </ul>
                </div>
            </div>

            <div
                class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
                <p>&copy; Acme Estate Agents {{ new Date().getFullYear() }}. Penwortham, Preston.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-accent-300 transition-colors">Privacy</a>
                    <a href="#" class="hover:text-accent-300 transition-colors">Terms</a>
                    <a href="#" class="hover:text-accent-300 transition-colors">Complaints Procedure</a>
                    <button type="button" @click="reopenCookieConsent" class="hover:text-accent-300 transition-colors">Cookies</button>
                </div>
            </div>
        </div>

        <CookieConsent />
        <DemoDisclaimer />
    </footer>
</template>
