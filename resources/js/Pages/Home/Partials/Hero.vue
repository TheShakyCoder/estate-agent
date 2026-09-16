<script setup>
import { ref } from 'vue';

defineProps({
    site: { type: Object },
});

const mode = ref('buy'); // 'buy' | 'rent'

const featured = {
    price: '£325,000',
    address: '14 Liverpool Road',
    area: 'Penwortham, Preston',
    beds: 4, baths: 2, recep: 2,
    tag: 'Just listed',
    blurb: 'A handsome four-bed semi on a sought-after Penwortham street — freshly redecorated, with a sunny south-facing garden and off-road parking for two.',
};
</script>

<template>
    <section id="home" class="relative bg-white">

        <!-- HOUSE OF THE DAY -->
        <div class="bg-white">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16">

                <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
                    <div>
                        <p class="eyebrow text-accent-600 mb-3">House of the day</p>
                        <h2 class="text-3xl sm:text-4xl font-bold text-brand-900 tracking-display leading-[1.1]">
                            Today&rsquo;s pick from <span class="accent-italic">the window</span>.
                        </h2>
                    </div>
                    <p class="text-xs text-warm-400 sm:text-right">
                        Updated <time>today</time> &middot; <span class="text-warm-500">Hand-picked by the team</span>
                    </p>
                </div>

                <article class="grid lg:grid-cols-12 bg-brand-900 text-white overflow-hidden shadow-lg">

                    <!-- Visual / photo -->
                    <div class="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] overflow-hidden">

                        <img src="/images/hero-house.jpg" alt="Exterior of today's featured property"
                             class="absolute inset-0 w-full h-full object-cover" />

                        <!-- Gradient scrim for tag/chip legibility -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

                        <!-- Tags -->
                        <span class="absolute top-5 left-5 px-3 py-1.5 bg-accent-500 text-white text-[10px] tracking-[0.25em] uppercase font-semibold shadow-sm">
                            House of the day
                        </span>
                        <span class="absolute top-5 right-5 px-3 py-1.5 bg-white text-brand-900 text-[10px] tracking-[0.25em] uppercase font-semibold">
                            {{ featured.tag }}
                        </span>

                        <!-- Photo count chip (decorative) -->
                        <span class="absolute bottom-5 left-5 flex items-center gap-1.5 px-2.5 py-1 bg-black/40 text-white text-[10px] tracking-[0.2em] uppercase font-semibold backdrop-blur-sm">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            24 photos
                        </span>
                    </div>

                    <!-- Copy / details -->
                    <div class="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col">
                        <p class="text-4xl sm:text-5xl font-bold tracking-display leading-none">
                            <span class="accent-italic !text-accent-300 !font-bold">{{ featured.price }}</span>
                        </p>
                        <p class="mt-4 text-xl font-semibold text-white tracking-display">{{ featured.address }}</p>
                        <p class="text-sm text-white/60 mt-1">{{ featured.area }}</p>

                        <!-- Icons row -->
                        <div class="mt-6 pt-6 border-t border-white/10 flex items-center gap-6 text-sm text-white/80">
                            <span class="flex items-center gap-2" :title="`${featured.beds} bedrooms`">
                                <svg class="w-5 h-5 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4M3 12v6a1 1 0 001 1h1a1 1 0 001-1v-2h12v2a1 1 0 001 1h1a1 1 0 001-1v-6M3 12h18M7 12V9h4v3"/>
                                </svg>
                                {{ featured.beds }} beds
                            </span>
                            <span class="flex items-center gap-2" :title="`${featured.baths} bathrooms`">
                                <svg class="w-5 h-5 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 14h16M5 14v3a3 3 0 003 3h8a3 3 0 003-3v-3M7 14V7a2 2 0 012-2h1a2 2 0 012 2v1"/>
                                </svg>
                                {{ featured.baths }} baths
                            </span>
                            <span class="flex items-center gap-2" :title="`${featured.recep} reception rooms`">
                                <svg class="w-5 h-5 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 18v-7a2 2 0 012-2h12a2 2 0 012 2v7M4 18h16M7 18v-3h10v3"/>
                                </svg>
                                {{ featured.recep }} recep
                            </span>
                        </div>

                        <p class="mt-6 text-white/70 leading-relaxed text-[15px] flex-1">
                            {{ featured.blurb }}
                        </p>

                        <div class="mt-8 flex flex-col sm:flex-row gap-3">
                            <a href="#"
                                class="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-accent-500 text-white text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-accent-600 transition-colors shadow-sm">
                                View this home
                                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="#contact"
                                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase font-semibold text-white border border-white/30 hover:border-white hover:bg-white/5 transition-colors">
                                Book a viewing
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Search band -->
        <div class="relative bg-cream-100 border-y border-warm-100">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

                <p class="eyebrow text-accent-600 mb-5">Independent · Penwortham · Since {{ site.established }}</p>

                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.05] tracking-display mb-10 max-w-3xl">
                    Find a home you&rsquo;ll <span class="accent-italic">love</span> in South Ribble &amp; the Ribble Valley.
                </h1>

                <!-- Search panel -->
                <div class="bg-white border border-warm-200 shadow-sm">

                    <!-- Buy/Rent toggle -->
                    <div class="flex border-b border-warm-200">
                        <button type="button" @click="mode = 'buy'"
                            class="flex-1 sm:flex-none px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold transition-colors"
                            :class="mode === 'buy'
                                ? 'bg-white text-brand-900 border-b-2 border-accent-500 -mb-px'
                                : 'text-warm-500 hover:text-brand-900'">
                            Buy
                        </button>
                        <button type="button" @click="mode = 'rent'"
                            class="flex-1 sm:flex-none px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold transition-colors"
                            :class="mode === 'rent'
                                ? 'bg-white text-brand-900 border-b-2 border-accent-500 -mb-px'
                                : 'text-warm-500 hover:text-brand-900'">
                            Rent
                        </button>
                    </div>

                    <!-- Search fields -->
                    <form class="grid grid-cols-1 md:grid-cols-12 gap-px bg-warm-100" @submit.prevent>
                        <label class="md:col-span-5 bg-white px-5 py-4 cursor-text block">
                            <span class="eyebrow text-warm-400 block mb-1.5">Location</span>
                            <input type="text" placeholder="Town, postcode or area"
                                class="w-full bg-transparent border-0 p-0 text-sm text-brand-900 placeholder:text-warm-400 focus:outline-none focus:ring-0" />
                        </label>
                        <label class="md:col-span-3 bg-white px-5 py-4 block">
                            <span class="eyebrow text-warm-400 block mb-1.5">Min price</span>
                            <select class="w-full bg-transparent border-0 p-0 text-sm text-brand-900 focus:outline-none focus:ring-0 appearance-none">
                                <option>No min</option>
                                <option>&pound;100,000</option>
                                <option>&pound;150,000</option>
                                <option>&pound;200,000</option>
                                <option>&pound;300,000</option>
                                <option>&pound;500,000</option>
                            </select>
                        </label>
                        <label class="md:col-span-2 bg-white px-5 py-4 block">
                            <span class="eyebrow text-warm-400 block mb-1.5">Beds</span>
                            <select class="w-full bg-transparent border-0 p-0 text-sm text-brand-900 focus:outline-none focus:ring-0 appearance-none">
                                <option>Any</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                            </select>
                        </label>
                        <button type="submit"
                            class="md:col-span-2 bg-accent-500 text-white text-[12px] tracking-[0.2em] uppercase font-semibold px-6 py-5 hover:bg-accent-600 transition-colors flex items-center justify-center gap-2">
                            Search
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                            </svg>
                        </button>
                    </form>
                </div>

                <!-- Quick links under search -->
                <div class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-500">
                    <a href="#valuation" class="hover:text-accent-600 transition-colors">Book a free valuation</a>
                    <span class="text-warm-200" aria-hidden="true">·</span>
                    <a href="#properties" class="hover:text-accent-600 transition-colors">View all properties</a>
                    <span class="text-warm-200" aria-hidden="true">·</span>
                    <a href="#contact" class="hover:text-accent-600 transition-colors">Talk to the team</a>
                </div>
            </div>
        </div>

        <!-- Tagline statement -->
        <div class="bg-white">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 leading-[1.1] tracking-display max-w-4xl mx-auto">
                    Matching <span class="accent-italic">people</span> and <span class="accent-italic">property</span> for over <span class="accent-italic">{{ 2026 - parseInt(site.established) }}</span> years.
                </h2>
                <p class="mt-6 text-warm-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Proud to be the area&rsquo;s longest-established independent estate agent. We&rsquo;ll do everything we can to help find you a property you can call home.
                </p>
            </div>
        </div>
    </section>
</template>
