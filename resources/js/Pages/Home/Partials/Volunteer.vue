<script setup>
</script>

<template>
    <section class="relative py-24 overflow-hidden"
        style="background: linear-gradient(135deg, #102e46 0%, #1d4f73 55%, #2a6a93 100%);">
        <!-- Decorative blobs -->
        <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent-400/20 blur-3xl"></div>

        <!-- Subtle background grid -->
        <div class="absolute inset-0 opacity-[0.05]"
             style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 40px 40px;"></div>

        <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white/90 mb-6 border border-white/20 uppercase tracking-widest">
                Book Your Eye Test
            </span>
            <h2 class="font-display text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                When did you last <span class="text-accent-300">have your eyes tested?</span>
            </h2>
            <p class="text-white/80 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                The NHS recommends an eye test every two years — more often for children, over-70s and people
                with diabetes. Book online or give us a call and we'll find a time that suits you.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="#contact"
                    class="group px-8 py-4 bg-accent-400 text-brand-900 font-bold rounded-2xl hover:bg-accent-300 transition-all duration-200 shadow-xl shadow-black/20 text-sm inline-flex items-center gap-2">
                    Book an Appointment
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
                <a href="tel:01772378415"
                    class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-200 border border-white/25 text-sm">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call 01772 378 415
                </a>
            </div>
        </div>
    </section>
</template>
