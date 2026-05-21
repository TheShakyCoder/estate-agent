<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
});
</script>

<template>
    <div class="min-h-screen flex font-sans antialiased">

        <!-- ── Left brand panel ── -->
        <div class="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white relative overflow-hidden">

            <!-- Decorative blobs -->
            <div class="absolute -top-20 -left-20 w-72 h-72 bg-brand-500/30 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -right-16 w-80 h-80 bg-brand-800/40 rounded-full blur-3xl pointer-events-none"></div>

            <!-- Back to site -->
            <div class="relative px-10 pt-10">
                <Link href="/" class="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Back to website
                </Link>
            </div>

            <!-- Centre content -->
            <div class="relative flex-1 flex flex-col justify-center px-10 xl:px-14">
                <Link href="/" class="flex items-center gap-4 mb-10">
                    <div class="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                        <svg class="w-10 h-auto" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M155 80 Q200 65 245 80" stroke="#e3a72b" stroke-width="14" stroke-linecap="round" fill="none"/>
                            <path d="M30 70 Q15 75 18 95" stroke="#e3a72b" stroke-width="14" stroke-linecap="round" fill="none"/>
                            <path d="M370 70 Q385 75 382 95" stroke="#e3a72b" stroke-width="14" stroke-linecap="round" fill="none"/>
                            <ellipse cx="95" cy="85" rx="65" ry="50" stroke="#e3a72b" stroke-width="14" fill="none"/>
                            <ellipse cx="305" cy="85" rx="65" ry="50" stroke="#e3a72b" stroke-width="14" fill="none"/>
                        </svg>
                    </div>
                    <div>
                        <p class="font-display font-bold text-lg leading-tight">Acme Opticians</p>
                    </div>
                </Link>

                <h1 class="font-display text-3xl xl:text-4xl font-bold leading-tight mb-4">
                    Practice Portal
                </h1>
                <p class="text-white/75 text-base leading-relaxed mb-10 max-w-sm">
                    Manage appointments, patient records, news, and stock — all in one place.
                </p>

                <!-- Feature bullets -->
                <ul class="space-y-4">
                    <li v-for="item in [
                        { icon: '📅', text: 'Manage eye test bookings' },
                        { icon: '📰', text: 'Publish news and eye care articles' },
                        { icon: '👥', text: 'View patient records and history' },
                        { icon: '📊', text: 'Track stock and orders' },
                    ]" :key="item.text" class="flex items-center gap-3 text-white/80 text-sm">
                        <span class="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center text-base shrink-0">{{ item.icon }}</span>
                        {{ item.text }}
                    </li>
                </ul>
            </div>

            <!-- Footer -->
            <div class="relative px-10 pb-10">
                <p class="text-white/40 text-xs">&copy; {{ new Date().getFullYear() }} Acme Opticians</p>
            </div>
        </div>

        <!-- ── Right form panel ── -->
        <div class="flex-1 flex flex-col bg-warm-50">

            <!-- Mobile header -->
            <div class="lg:hidden flex items-center justify-between px-6 pt-6 pb-4">
                <Link href="/" class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center">
                        <svg class="w-6 h-auto" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M155 80 Q200 65 245 80" stroke="#e3a72b" stroke-width="14" stroke-linecap="round" fill="none"/>
                            <path d="M30 70 Q15 75 18 95" stroke="#e3a72b" stroke-width="14" stroke-linecap="round" fill="none"/>
                            <path d="M370 70 Q385 75 382 95" stroke="#e3a72b" stroke-width="14" stroke-linecap="round" fill="none"/>
                            <ellipse cx="95" cy="85" rx="65" ry="50" stroke="#e3a72b" stroke-width="14" fill="none"/>
                            <ellipse cx="305" cy="85" rx="65" ry="50" stroke="#e3a72b" stroke-width="14" fill="none"/>
                        </svg>
                    </div>
                    <div>
                        <p class="font-display font-semibold text-brand-600 text-sm leading-tight">Acme Opticians</p>
                    </div>
                </Link>
                <Link href="/" class="text-xs text-warm-500 hover:text-brand-600 transition-colors font-medium">
                    Back to site
                </Link>
            </div>

            <!-- Form area -->
            <div class="flex-1 flex items-center justify-center px-6 py-10 sm:px-10">
                <div class="w-full max-w-md">

                    <!-- Heading slot (title/subtitle set per page) -->
                    <div class="mb-8">
                        <h2 class="font-display text-2xl font-bold text-warm-900">{{ title }}</h2>
                        <p v-if="subtitle" class="text-warm-500 text-sm mt-1">{{ subtitle }}</p>
                    </div>

                    <slot />
                </div>
            </div>
        </div>

    </div>
</template>
