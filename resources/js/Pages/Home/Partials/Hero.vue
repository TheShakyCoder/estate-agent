<script setup>
defineProps({
    site: { type: Object },
});
</script>

<template>
    <section id="home" class="relative overflow-hidden min-h-[90vh] flex items-center"
        style="background: linear-gradient(160deg, #0a1f30 0%, #153d5c 45%, #2a6a93 100%);">

        <!-- ── Background blobs & glow ── -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/5 hero-blob"></div>
            <div class="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-accent-400/10 blur-3xl"></div>
            <div class="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-lens-teal/10 blur-3xl"></div>
            <!-- Subtle grid -->
            <div class="absolute inset-0 opacity-[0.04]"
                 style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 40px 40px;"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                <!-- ── Left: Copy ── -->
                <div class="text-white">
                    <span class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-white mb-8 border border-white/20 shadow-lg shadow-black/5">
                        <span class="relative flex h-2.5 w-2.5">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-300 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-300"></span>
                        </span>
                        Independent Opticians since {{ site.established }}
                    </span>

                    <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tight">
                        See the world
                        <span class="relative inline-block">
                            <span class="relative z-10">clearly</span>
                            <span class="absolute -bottom-1 left-0 right-0 h-4 bg-accent-400/40 rounded-full -skew-x-3 z-0"></span>
                        </span>
                        <br />with <span class="text-accent-300 drop-shadow-lg">Acme</span>
                    </h1>

                    <p class="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-xl font-medium">
                        Comprehensive eye examinations, designer frames, and expert contact lens fittings —
                        delivered by a family-run team who put your vision first.
                    </p>

                    <div class="flex flex-wrap gap-4">
                        <a href="#contact"
                            class="group inline-flex items-center gap-2 px-8 py-4 bg-accent-400 text-brand-900 font-bold rounded-2xl hover:bg-accent-300 transition-all duration-200 shadow-xl shadow-black/20 text-sm">
                            Book an Eye Test
                            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#services"
                            class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-200 border border-white/25 text-sm">
                            Our Services
                        </a>
                    </div>

                    <!-- Social proof -->
                    <div class="flex items-center gap-6 mt-12 pt-8 border-t border-white/15">
                        <div>
                            <p class="font-display text-2xl font-extrabold text-accent-300">40+</p>
                            <p class="text-xs text-white/60 font-medium">Years of expertise</p>
                        </div>
                        <div class="w-px h-10 bg-white/20"></div>
                        <div>
                            <p class="font-display text-2xl font-extrabold text-accent-300">5 ⭐</p>
                            <p class="text-xs text-white/60 font-medium">Google rating</p>
                        </div>
                        <div class="w-px h-10 bg-white/20"></div>
                        <div>
                            <p class="font-display text-2xl font-extrabold text-accent-300">200+</p>
                            <p class="text-xs text-white/60 font-medium">Frames in store</p>
                        </div>
                    </div>
                </div>

                <!-- ── Right: Glasses illustration ── -->
                <div class="hidden lg:flex items-center justify-center relative">
                    <div class="absolute w-[420px] h-[420px] rounded-full bg-white/5 blur-2xl animate-scale-pulse"></div>

                    <div class="relative w-[460px] h-[460px]">
                        <!-- Central glasses SVG -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <svg class="w-[360px] h-auto drop-shadow-2xl animate-float" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- Bridge -->
                                <path d="M155 80 Q200 65 245 80" stroke="#e3a72b" stroke-width="6" stroke-linecap="round" fill="none"/>
                                <!-- Temples -->
                                <path d="M30 70 Q15 75 18 95" stroke="#e3a72b" stroke-width="6" stroke-linecap="round" fill="none"/>
                                <path d="M370 70 Q385 75 382 95" stroke="#e3a72b" stroke-width="6" stroke-linecap="round" fill="none"/>
                                <!-- Left lens -->
                                <ellipse cx="95" cy="85" rx="65" ry="50" stroke="#e3a72b" stroke-width="6" fill="rgba(255,255,255,0.08)"/>
                                <!-- Right lens -->
                                <ellipse cx="305" cy="85" rx="65" ry="50" stroke="#e3a72b" stroke-width="6" fill="rgba(255,255,255,0.08)"/>
                                <!-- Highlights -->
                                <ellipse cx="75" cy="65" rx="14" ry="9" fill="rgba(255,255,255,0.5)"/>
                                <ellipse cx="285" cy="65" rx="14" ry="9" fill="rgba(255,255,255,0.5)"/>
                            </svg>
                        </div>

                        <!-- Floating accent dots -->
                        <div class="absolute top-[15%] right-[20%] w-5 h-5 rounded-full bg-accent-300 animate-scale-pulse shadow-lg shadow-accent-300/50"></div>
                        <div class="absolute bottom-[20%] left-[15%] w-4 h-4 rounded-full bg-lens-teal animate-float shadow-lg shadow-lens-teal/50"></div>
                        <div class="absolute top-[65%] right-[5%] w-3 h-3 rounded-full bg-lens-sky animate-wiggle shadow-lg shadow-lens-sky/50"></div>
                        <div class="absolute top-[5%] left-[40%] w-4 h-4 rounded-full bg-accent-400 animate-float-delayed shadow-lg shadow-accent-400/50"></div>

                        <!-- Small label cards -->
                        <div class="absolute top-[8%] right-[2%] bg-white/95 backdrop-blur rounded-xl px-3 py-2 shadow-xl text-xs font-semibold text-brand-700 animate-float-delayed">
                            <span class="text-accent-500">✓</span> NHS Tests
                        </div>
                        <div class="absolute bottom-[8%] left-[2%] bg-white/95 backdrop-blur rounded-xl px-3 py-2 shadow-xl text-xs font-semibold text-brand-700 animate-float-slow">
                            <span class="text-accent-500">✓</span> Designer Frames
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Wave divider -->
        <div class="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full" preserveAspectRatio="none">
                <path d="M0 80L48 68C96 56 192 32 288 24C384 16 480 24 576 32C672 40 768 48 864 48C960 48 1056 40 1152 32C1248 24 1344 16 1392 12L1440 8V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
                    fill="white"/>
            </svg>
        </div>
    </section>
</template>
