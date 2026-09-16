<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';

defineProps({
    navLinks: Array,
    canLogin: Boolean,
    canRegister: Boolean,
    auth: Object,
});

const mobileMenuOpen = ref(false);
const openDropdown = ref(null);

function closeDropdowns() {
    openDropdown.value = null;
}

function handleClickOutside(e) {
    if (e.target.closest('nav') === null) closeDropdowns();
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <header>
        <!-- Slim utility bar -->
        <div class="hidden sm:block bg-brand-900 text-white/70 text-xs">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
                <p>Independent estate agents in Penwortham &middot; Since {{ $page.props.site.established }}</p>
                <div class="flex items-center gap-5">
                    <a :href="'tel:' + $page.props.site.telephone" class="hover:text-white transition-colors">
                        {{ $page.props.site.telephone }}
                    </a>
                    <a :href="'mailto:' + $page.props.site.email" class="hover:text-white transition-colors hidden md:inline">
                        {{ $page.props.site.email }}
                    </a>
                </div>
            </div>
        </div>

        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warm-100">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between gap-4">

                    <!-- Logo -->
                    <Link href="/" class="flex items-center gap-3 shrink-0">
                        <div class="w-10 h-10 bg-brand-900 flex items-center justify-center">
                            <svg class="w-5 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 55 L50 25 L82 55" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28 50 L28 78 L72 78 L72 50" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M44 78 L44 60 L56 60 L56 78" stroke="#2dcab8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="block">
                            <p class="text-lg font-bold text-brand-900 leading-none tracking-display">Acme Estate Agents</p>
                            <p class="text-[10px] text-warm-500 tracking-[0.25em] uppercase leading-none mt-1.5 font-medium">Sales &middot; Lettings &middot; Valuations</p>
                        </div>
                    </Link>

                    <!-- Desktop nav -->
                    <div class="hidden lg:flex items-center gap-1">
                        <div v-for="(link, idx) in navLinks" :key="idx" class="relative group">
                            <Link v-if="!link.children || link.children.length === 0" :href="link.href"
                                class="px-3 py-2 text-sm font-semibold text-brand-800 hover:text-accent-600 transition-colors">
                                {{ link.label }}
                            </Link>
                            <button v-else type="button"
                                class="px-3 py-2 text-sm font-semibold text-brand-800 hover:text-accent-600 transition-colors flex items-center gap-1"
                                @click="openDropdown = openDropdown === idx ? null : idx">
                                {{ link.label }}
                                <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': openDropdown === idx }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div v-if="link.children && link.children.length > 0 && openDropdown === idx"
                                 class="absolute left-0 mt-2 w-56 bg-white border border-warm-200 shadow-lg">
                                <Link v-for="(child, cidx) in link.children" :key="cidx" :href="child.href"
                                   class="block px-5 py-3 text-sm text-brand-800 hover:bg-cream-100 hover:text-accent-600 transition-colors border-b border-warm-100 last:border-b-0">
                                    {{ child.label }}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <!-- CTA buttons -->
                    <div class="hidden lg:flex items-center gap-4">
                        <Link v-if="canLogin && !$page.props.auth?.user" :href="route('login')"
                            class="text-sm font-semibold text-warm-600 hover:text-accent-600 transition-colors">
                        Sign in
                        </Link>
                        <Link v-if="canLogin && $page.props.auth?.user" :href="route('dashboard')"
                            class="text-sm font-semibold text-warm-600 hover:text-accent-600 transition-colors">
                        Office
                        </Link>
                        <a href="#valuation"
                            class="px-5 py-3 bg-accent-500 text-white text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-accent-600 transition-colors">
                            Book a Valuation
                        </a>
                    </div>

                    <!-- Mobile hamburger -->
                    <button @click="mobileMenuOpen = !mobileMenuOpen"
                        class="lg:hidden p-2 text-brand-800 hover:text-accent-600 transition-colors">
                        <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="mobileMenuOpen" class="lg:hidden border-t border-warm-200 bg-white px-4 pb-6 pt-3 space-y-1">
                <template v-for="(link, idx) in navLinks" :key="idx">
                    <a v-if="!link.children || link.children.length === 0" :href="link.href" @click="mobileMenuOpen = false"
                        class="block px-4 py-3 text-sm font-semibold text-brand-800 hover:text-accent-600 transition-colors border-b border-warm-100">
                        {{ link.label }}
                    </a>
                    <div v-else>
                        <button @click="openDropdown = openDropdown === idx ? null : idx"
                            class="w-full text-left px-4 py-3 text-sm font-semibold text-brand-800 hover:text-accent-600 transition-colors flex items-center justify-between border-b border-warm-100">
                            {{ link.label }}
                            <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': openDropdown === idx }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-if="openDropdown === idx" class="ml-4 mt-1 space-y-1">
                            <a v-for="(child, cidx) in link.children" :key="cidx" :href="child.href" @click="mobileMenuOpen = false"
                               class="block px-4 py-2.5 text-sm text-warm-600 hover:text-accent-600 transition-colors">
                                {{ child.label }}
                            </a>
                        </div>
                    </div>
                </template>
                <div class="pt-4 flex flex-col gap-3">
                    <Link v-if="canLogin && !$page.props.auth?.user" :href="route('login')"
                        class="block px-4 py-2.5 text-sm font-semibold text-warm-600 hover:text-accent-600 transition-colors">
                    Sign in
                    </Link>
                    <a href="#valuation" @click="mobileMenuOpen = false"
                        class="block text-center px-4 py-3 bg-accent-500 text-white text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-accent-600 transition-colors">
                        Book a Valuation
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>
