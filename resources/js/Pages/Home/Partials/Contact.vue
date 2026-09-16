<script setup>
defineProps({
    site: Object
})
</script>

<template>
    <section id="contact" class="py-20 lg:py-28 bg-cream-100 border-t border-warm-100">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                <!-- Left: copy + details -->
                <div>
                    <p class="eyebrow text-accent-600 mb-3">Visit us</p>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 tracking-display leading-[1.1] mb-6">
                        Pop in for a <span class="accent-italic">chat</span>.
                    </h2>
                    <p class="text-warm-600 leading-relaxed mb-10 max-w-md">
                        The office is on Penwortham high street, just off the Liverpool Road. Pop in to talk through a sale or a let, browse the window, or book a valuation &mdash; kettle&rsquo;s always on.
                    </p>

                    <dl class="space-y-6 max-w-md">
                        <div class="flex items-start gap-5 pb-6 border-b border-warm-200">
                            <svg class="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div>
                                <dt class="eyebrow text-warm-400 mb-1">The office</dt>
                                <dd class="text-brand-900 leading-relaxed" v-html="site.address"></dd>
                            </div>
                        </div>
                        <div class="flex items-start gap-5 pb-6 border-b border-warm-200">
                            <svg class="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div>
                                <dt class="eyebrow text-warm-400 mb-1">Telephone</dt>
                                <dd><a :href="'tel:' + site.telephone" class="text-brand-900 hover:text-accent-600 transition-colors">{{ site.telephone }}</a></dd>
                            </div>
                        </div>
                        <div class="flex items-start gap-5 pb-6 border-b border-warm-200">
                            <svg class="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8l2-2h14l2 2"/>
                            </svg>
                            <div>
                                <dt class="eyebrow text-warm-400 mb-1">Email</dt>
                                <dd><a :href="'mailto:' + site.email" class="text-brand-900 hover:text-accent-600 transition-colors">{{ site.email }}</a></dd>
                            </div>
                        </div>
                        <div class="flex items-start gap-5">
                            <svg class="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <div>
                                <dt class="eyebrow text-warm-400 mb-1">Opening hours</dt>
                                <dd class="text-brand-900 leading-relaxed" v-html="site.opening_times"></dd>
                            </div>
                        </div>
                    </dl>
                </div>

                <!-- Right: contact form -->
                <form class="bg-white border border-warm-200 p-8 sm:p-10 space-y-6">
                    <div>
                        <p class="text-xl font-bold text-brand-900 tracking-display">Send us a message</p>
                        <p class="text-sm text-warm-500 mt-1">We reply within one working day.</p>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-5">
                        <div>
                            <label class="eyebrow text-warm-500 mb-2 block">First name</label>
                            <input type="text" placeholder="Eleanor"
                                class="w-full px-4 py-3 text-sm bg-white border border-warm-200 focus:outline-none focus:border-accent-400 text-brand-900 transition" />
                        </div>
                        <div>
                            <label class="eyebrow text-warm-500 mb-2 block">Last name</label>
                            <input type="text" placeholder="Marsh"
                                class="w-full px-4 py-3 text-sm bg-white border border-warm-200 focus:outline-none focus:border-accent-400 text-brand-900 transition" />
                        </div>
                    </div>
                    <div>
                        <label class="eyebrow text-warm-500 mb-2 block">Email</label>
                        <input type="email" placeholder="you@example.com"
                            class="w-full px-4 py-3 text-sm bg-white border border-warm-200 focus:outline-none focus:border-accent-400 text-brand-900 transition" />
                    </div>
                    <div>
                        <label class="eyebrow text-warm-500 mb-2 block">What can we help with?</label>
                        <select
                            class="w-full px-4 py-3 text-sm bg-white border border-warm-200 focus:outline-none focus:border-accent-400 text-brand-900 transition">
                            <option>Free valuation</option>
                            <option>Selling my home</option>
                            <option>Looking to buy</option>
                            <option>Renting / lettings</option>
                            <option>Commercial &amp; land</option>
                            <option>Just saying hello</option>
                        </select>
                    </div>
                    <div>
                        <label class="eyebrow text-warm-500 mb-2 block">Message</label>
                        <textarea rows="5" placeholder="Tell us about your property, your timescale, and anything else we should know…"
                            class="w-full px-4 py-3 text-sm bg-white border border-warm-200 focus:outline-none focus:border-accent-400 text-brand-900 transition resize-none"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full py-4 bg-accent-500 text-white text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-accent-600 transition-colors shadow-sm">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
