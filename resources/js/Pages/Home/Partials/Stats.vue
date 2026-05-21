<script setup>
const stats = [
    { value: '40+', label: 'Years on the high street', color: 'from-brand-500 to-brand-700', shadow: 'shadow-brand-400/20' },
    { value: '200+', label: 'Designer frames in store', color: 'from-lens-teal to-lens-sky', shadow: 'shadow-lens-teal/20' },
    { value: '10k+', label: 'Eye tests completed', color: 'from-accent-400 to-accent-600', shadow: 'shadow-accent-400/20' },
    { value: '5⭐', label: 'Rated on Google', color: 'from-lens-indigo to-brand-600', shadow: 'shadow-lens-indigo/20' },
];
</script>

<template>
    <section class="bg-white py-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-for="stat in stats" :key="stat.label"
                    class="relative text-center p-7 rounded-2xl bg-white border border-warm-100 shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-200"
                    :class="stat.shadow">
                    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r" :class="stat.color"></div>
                    <p class="font-display text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent"
                       :class="stat.color"
                       v-html="stat.value"></p>
                    <p class="text-sm text-warm-500 mt-2 font-medium">{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
