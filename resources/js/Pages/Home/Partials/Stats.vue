<script setup>
const stats = [
    { value: '47', label: 'Years in Penwortham' },
    { value: '180+', label: 'Five-star reviews' },
    { value: '101', label: 'Sales in 2025' },
    { value: '98%', label: 'Of asking price achieved' },
];
</script>

<template>
    <section class="bg-brand-900 text-white py-14">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
                <div v-for="(stat, i) in stats" :key="i"
                     class="px-2 lg:px-6"
                     :class="i > 0 ? 'lg:border-l lg:border-white/10' : ''">
                    <p class="text-4xl sm:text-5xl font-bold tracking-display">
                        <span class="accent-italic !text-accent-300">{{ stat.value }}</span>
                    </p>
                    <p class="eyebrow text-white/50 mt-3">{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
