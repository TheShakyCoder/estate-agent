<script setup>
const team = [
    {
        name: 'Eleanor Marsh',
        role: 'Director · Senior Valuer',
        notes: 'Period homes · Penwortham · Hutton · Longton',
        years: '18 yrs',
        photo: '/images/team-1.jpg',
    },
    {
        name: 'Iris Whittaker',
        role: 'Sales Manager',
        notes: 'Family homes · First-time buyers · Chain progression',
        years: '11 yrs',
        photo: '/images/team-2.jpg',
    },
    {
        name: 'Saoirse Doyle',
        role: 'Lettings Manager',
        notes: 'Managed portfolios · Compliance · Tenant referencing',
        years: '9 yrs',
        photo: '/images/team-3.jpg',
    },
    {
        name: 'Theo Ainsworth',
        role: 'Senior Negotiator',
        notes: 'New build · Investments · Land & commercial',
        years: '7 yrs',
        photo: '/images/team-4.jpg',
    },
];
</script>

<template>
    <section id="team" class="py-20 lg:py-28 bg-white">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
                <div>
                    <p class="eyebrow text-accent-600 mb-3">The team</p>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-display leading-[1.1]">
                        Local agents who <span class="accent-italic">listen</span> first.
                    </h2>
                </div>
                <a href="#contact"
                    class="inline-flex items-center gap-2 self-start text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors">
                    Speak to an agent
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <article v-for="member in team" :key="member.name"
                    class="group">

                    <!-- Portrait -->
                    <div class="relative aspect-square overflow-hidden bg-cream-200 mb-5">
                        <img :src="member.photo" :alt="member.name"
                             class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                        <span class="absolute top-3 right-3 px-2.5 py-1 bg-white text-brand-900 text-[10px] tracking-[0.2em] uppercase font-semibold">
                            {{ member.years }}
                        </span>
                    </div>

                    <h3 class="text-lg font-bold text-brand-900 tracking-display leading-snug">{{ member.name }}</h3>
                    <p class="text-sm text-brand-700 mt-0.5">{{ member.role }}</p>
                    <p class="text-xs text-warm-500 mt-2 leading-relaxed">{{ member.notes }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
