<script setup>
const properties = [
    {
        price: '£325,000',
        address: '14 Liverpool Road',
        area: 'Penwortham',
        beds: 4, baths: 2, recep: 2,
        tag: 'New',
        tagColor: 'bg-accent-500 text-white',
        image: '/images/property-1.jpg',
    },
    {
        price: '£245,000',
        address: 'Cob Castle Lane',
        area: 'Longton',
        beds: 3, baths: 1, recep: 2,
        tag: 'For sale',
        tagColor: 'bg-brand-800 text-white',
        image: '/images/property-2.jpg',
    },
    {
        price: '£189,950',
        address: '7 Howick Park Avenue',
        area: 'Penwortham',
        beds: 2, baths: 1, recep: 1,
        tag: 'New',
        tagColor: 'bg-accent-500 text-white',
        image: '/images/property-3.jpg',
    },
    {
        price: '£495,000',
        address: 'Whittingham Road',
        area: 'Hutton',
        beds: 5, baths: 3, recep: 3,
        tag: 'Sold STC',
        tagColor: 'bg-warm-200 text-warm-700',
        image: '/images/property-4.jpg',
    },
];
</script>

<template>
    <section id="properties" class="py-20 lg:py-24 bg-cream-100 border-y border-warm-100">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
                <div>
                    <p class="eyebrow text-accent-600 mb-3">New to market</p>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-display leading-[1.1]">
                        Our latest <span class="accent-italic">properties</span>.
                    </h2>
                </div>
                <a href="#properties"
                    class="inline-flex items-center gap-2 self-start text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors">
                    View all listings
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a v-for="property in properties" :key="property.address"
                    href="#"
                    class="group block bg-white border border-warm-100 hover:border-accent-300 hover:shadow-md transition-all">

                    <!-- Image -->
                    <div class="relative aspect-[4/3] overflow-hidden">
                        <img :src="property.image" :alt="`${property.address}, ${property.area}`"
                             class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                        <!-- Tag -->
                        <span class="absolute top-3 left-3 px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold shadow-sm"
                              :class="property.tagColor">
                            {{ property.tag }}
                        </span>
                    </div>

                    <!-- Body -->
                    <div class="p-5">
                        <p class="text-xl font-bold text-brand-900 tracking-display">{{ property.price }}</p>
                        <p class="text-sm text-brand-800 mt-1 font-medium">{{ property.address }}</p>
                        <p class="text-xs text-warm-500 mt-0.5">{{ property.area }}</p>

                        <!-- Icons row -->
                        <div class="mt-4 pt-4 border-t border-warm-100 flex items-center gap-4 text-xs text-warm-600">
                            <span class="flex items-center gap-1.5" :title="`${property.beds} bedrooms`">
                                <svg class="w-4 h-4 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4M3 12v6a1 1 0 001 1h1a1 1 0 001-1v-2h12v2a1 1 0 001 1h1a1 1 0 001-1v-6M3 12h18M7 12V9h4v3"/>
                                </svg>
                                {{ property.beds }}
                            </span>
                            <span class="flex items-center gap-1.5" :title="`${property.baths} bathrooms`">
                                <svg class="w-4 h-4 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 14h16M5 14v3a3 3 0 003 3h8a3 3 0 003-3v-3M7 14V7a2 2 0 012-2h1a2 2 0 012 2v1"/>
                                </svg>
                                {{ property.baths }}
                            </span>
                            <span class="flex items-center gap-1.5" :title="`${property.recep} reception rooms`">
                                <svg class="w-4 h-4 text-warm-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 18v-7a2 2 0 012-2h12a2 2 0 012 2v7M4 18h16M7 18v-3h10v3"/>
                                </svg>
                                {{ property.recep }}
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <p class="mt-10 text-center text-sm text-warm-500">
                Register with us to be the first to hear about
                <a href="#" class="text-accent-600 font-semibold hover:underline">off-market listings</a>
                across South Ribble.
            </p>
        </div>
    </section>
</template>
