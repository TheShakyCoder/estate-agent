<script setup>
import { usePage } from '@inertiajs/vue3';

const page = usePage();
</script>

<template>
    <section id="about" class="py-20 bg-warm-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span class="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3 block">About Us</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-warm-900 mb-6 leading-tight">
                        Independent eye care<br />you can <span class="text-gradient-brand">trust</span>
                    </h2>
                    <p class="text-warm-600 leading-relaxed mb-4">
                        Acme Opticians has been caring for the eyes of our community for over forty years.
                        As an independent practice, we have the freedom to take our time with every patient
                        and recommend only what's right for you — never what a head office tells us to sell.
                    </p>
                    <p class="text-warm-600 leading-relaxed mb-8">
                        Our experienced optometrists use the latest digital retinal imaging and OCT scanning
                        technology to detect changes in your vision and eye health early. From your first
                        eye test to fitting the perfect pair of frames, we're with you every step of the way.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <a href="#services"
                            class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm">
                            Our Services
                        </a>
                        <a href="#contact"
                            class="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-brand-200 text-brand-600 text-sm font-semibold rounded-xl hover:border-brand-400 transition-colors">
                            Find Us
                        </a>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="rounded-2xl p-6 text-white col-span-2" style="background: linear-gradient(135deg, #102e46 0%, #1d4f73 55%, #2a6a93 100%)">
                        <p class="text-2xl font-display font-bold mb-2">"Genuinely excellent care."</p>
                        <p class="text-white/80 text-sm leading-relaxed">
                            "The team took the time to explain every part of the eye test, and helped me
                            choose frames that actually suit my face. Friendly, thorough and never pushy
                            — I won't go anywhere else."
                        </p>
                        <p class="text-white/60 text-xs mt-3 font-medium">— Sarah B., Google review</p>
                    </div>
                    <div class="bg-white rounded-2xl p-5 border border-warm-200 flex flex-col items-start gap-2">
                        <span class="text-3xl">&#128065;</span>
                        <p class="text-sm font-semibold text-warm-800">OCT Scanning</p>
                        <p class="text-xs text-warm-500">Advanced retinal imaging in every test</p>
                    </div>
                    <div class="bg-white rounded-2xl p-5 border border-warm-200 flex flex-col items-start gap-2">
                        <span class="text-3xl">&#127891;</span>
                        <p class="text-sm font-semibold text-warm-800">GOC-Registered</p>
                        <p class="text-xs text-warm-500">Qualified optometrists & dispensers</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
