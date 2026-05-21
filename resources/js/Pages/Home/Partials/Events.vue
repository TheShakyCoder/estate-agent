<script setup>
const collections = [
    {
        date: 'CLASSIC',
        title: 'Ray-Ban Originals',
        time: 'From £125',
        location: 'In Store',
        tag: 'Iconic',
        tagColor: 'bg-brand-100 text-brand-700',
        accent: 'bg-brand-600',
    },
    {
        date: 'LUXURY',
        title: 'Tom Ford Eyewear',
        time: 'From £285',
        location: 'In Store',
        tag: 'Premium',
        tagColor: 'bg-warm-200 text-warm-800',
        accent: 'bg-warm-800',
    },
    {
        date: 'LIGHTWEIGHT',
        title: 'Lindberg Titanium',
        time: 'From £395',
        location: 'Made to order',
        tag: 'Bespoke',
        tagColor: 'bg-accent-100 text-accent-700',
        accent: 'bg-accent-500',
    },
    {
        date: 'EVERYDAY',
        title: 'Acme House Collection',
        time: 'From £79',
        location: 'In Store',
        tag: '2yr Warranty',
        tagColor: 'bg-emerald-100 text-emerald-700',
        accent: 'bg-lens-teal',
    },
];
</script>

<template>
    <section id="eyewear" class="py-20 bg-gradient-to-b from-brand-50 to-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex items-end justify-between mb-14">
                <div>
                    <span class="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">Eyewear &amp; Brands</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-warm-900">
                        Frames to <span class="text-gradient-brand">love</span>
                    </h2>
                </div>
                <a href="#contact"
                    class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-700 transition-colors">
                    Browse in store
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-for="collection in collections" :key="collection.title"
                    class="bg-white rounded-2xl overflow-hidden border border-warm-200 shadow-sm hover:shadow-md transition-shadow">
                    <div class="h-2 w-full" :class="collection.accent"></div>
                    <div class="p-5">
                        <p class="text-xs font-bold tracking-wider text-warm-400 mb-3">{{ collection.date }}</p>
                        <h3 class="font-semibold text-warm-900 mb-2 leading-snug">{{ collection.title }}</h3>
                        <div class="flex items-center gap-1.5 text-xs text-warm-500 mb-1">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ collection.time }}
                        </div>
                        <div class="flex items-center gap-1.5 text-xs text-warm-500 mb-4">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {{ collection.location }}
                        </div>
                        <span class="inline-block px-2.5 py-1 rounded-full text-xs font-semibold"
                            :class="collection.tagColor">
                            {{ collection.tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
