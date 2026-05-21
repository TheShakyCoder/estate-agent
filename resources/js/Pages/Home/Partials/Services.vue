<script setup>
const services = [
    {
        icon: '&#128065;',
        title: 'Comprehensive Eye Tests',
        desc: 'A thorough 30-minute examination including OCT retinal scan, glaucoma check, and prescription update. NHS-funded tests available.',
        color: 'bg-brand-50 border-brand-200',
        iconBg: 'bg-brand-100',
    },
    {
        icon: '&#128083;',
        title: 'Designer Frames',
        desc: 'Over 200 frames from Ray-Ban, Tom Ford, Persol, Lindberg and more — plus a curated own-label range with two-year warranties.',
        color: 'bg-sky-50 border-sky-200',
        iconBg: 'bg-sky-100',
    },
    {
        icon: '&#129405;',
        title: 'Contact Lenses',
        desc: 'Free trial fittings for daily, monthly, and multifocal lenses. We also fit specialist toric and rigid gas-permeable lenses.',
        color: 'bg-indigo-50 border-indigo-200',
        iconBg: 'bg-indigo-100',
    },
    {
        icon: '&#9728;&#65039;',
        title: 'Prescription Sunglasses',
        desc: 'Polarised, photochromic and tinted lenses in a wide range of designer sunglass frames — perfect for driving and sport.',
        color: 'bg-accent-50 border-accent-200',
        iconBg: 'bg-accent-100',
    },
    {
        icon: '&#127909;',
        title: 'Children\'s Eye Care',
        desc: 'Friendly, patient eye tests for children of all ages. Free NHS tests for under-16s, and a fun range of robust kids\' frames.',
        color: 'bg-rose-50 border-rose-200',
        iconBg: 'bg-rose-100',
    },
    {
        icon: '&#128300;',
        title: 'OCT & Dry Eye Clinic',
        desc: 'In-depth OCT scans for macular and glaucoma monitoring, plus a dedicated dry eye clinic with IPL treatment.',
        color: 'bg-emerald-50 border-emerald-200',
        iconBg: 'bg-emerald-100',
    },
];
</script>

<template>
    <section id="services" class="py-20 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-xs font-bold uppercase tracking-widest text-brand-500 mb-3 block">Our Services</span>
                <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-warm-900">
                    Complete care for <span class="text-gradient-brand">every pair of eyes</span>
                </h2>
                <p class="text-warm-500 mt-4 max-w-xl mx-auto">
                    From routine eye tests to specialist contact lens fittings — everything you need under one roof.
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="service in services" :key="service.title"
                    class="group p-6 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 cursor-default"
                    :class="service.color">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                        :class="service.iconBg" v-html="service.icon">
                    </div>
                    <h3 class="font-semibold text-warm-900 text-base mb-2">{{ service.title }}</h3>
                    <p class="text-sm text-warm-600 leading-relaxed">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
