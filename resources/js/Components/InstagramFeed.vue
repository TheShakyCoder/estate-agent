<script setup>
// Trust badges — sector bodies and portal logos every UK agency surfaces.
// Rendered as text-only marks for now; swap in real SVGs when assets are ready.
const badges = [
    { label: 'Rightmove',            sub: 'Portal'   },
    { label: 'Zoopla',               sub: 'Portal'   },
    { label: 'OnTheMarket',          sub: 'Portal'   },
    { label: 'Property Redress',     sub: 'PRS'      },
    { label: 'Client Money Protect', sub: 'CMP'      },
    { label: 'ICO Registered',       sub: 'Data'     },
];
</script>

<template>
    <section class="py-16 lg:py-20 bg-white border-y border-warm-100">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <p class="eyebrow text-warm-400 text-center mb-10">Members &middot; Listed on &middot; Regulated by</p>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                <div v-for="badge in badges" :key="badge.label"
                     class="flex flex-col items-center text-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
                    <div class="h-12 flex items-center justify-center mb-2">
                        <p class="text-lg font-bold tracking-display text-brand-900">{{ badge.label }}</p>
                    </div>
                    <p class="eyebrow text-warm-400">{{ badge.sub }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
