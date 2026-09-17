<script setup>
import { ref, onMounted } from 'vue';

const STORAGE_KEY = 'demo_disclaimer_dismissed';
const visible = ref(false);

onMounted(() => {
    try {
        if (!localStorage.getItem(STORAGE_KEY)) {
            visible.value = true;
        }
    } catch (e) {
        visible.value = true;
    }
});

function open() {
    visible.value = true;
}

function dismiss() {
    try {
        localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch (e) {}
    visible.value = false;
}
</script>

<template>
    <!-- Floating trigger -->
    <button
        v-if="!visible"
        type="button"
        @click="open"
        aria-label="Show demo notice"
        class="fixed bottom-5 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-accent-500 text-white shadow-lg hover:bg-accent-600 transition-colors"
    >
        <span class="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-75"></span>
        <svg class="relative w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
    </button>

    <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-if="visible"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-disclaimer-title"
            class="fixed inset-0 z-[60] flex items-center justify-center px-4"
        >
            <div
                class="absolute inset-0 bg-brand-900/70 backdrop-blur-sm"
                @click="dismiss"
            ></div>

            <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-4 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
            >
                <div
                    v-if="visible"
                    class="relative w-full max-w-md rounded-2xl bg-white text-brand-900 shadow-2xl ring-1 ring-brand-900/10"
                >
                    <button
                        type="button"
                        @click="dismiss"
                        aria-label="Dismiss"
                        class="absolute top-3 right-3 rounded-full p-1.5 text-warm-500 hover:bg-brand-900/5 hover:text-brand-900 transition-colors"
                    >
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 6l12 12M18 6L6 18"/>
                        </svg>
                    </button>

                    <div class="p-6 sm:p-8">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-500/15 text-accent-600">
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="12" y1="8" x2="12" y2="12"/>
                                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                                </svg>
                            </span>
                            <p class="text-xs font-semibold tracking-[0.22em] uppercase text-accent-600">
                                Notice
                            </p>
                        </div>

                        <h2 id="demo-disclaimer-title" class="font-display text-2xl font-semibold text-brand-900 mb-3">
                            For demonstration purposes only
                        </h2>
                        <p class="text-sm leading-relaxed text-warm-600">
                            This website is a demo. It does not represent a real estate
                            agent or real services. Any names, contact details or content
                            shown here are illustrative only.
                        </p>

                        <p class="mt-3 text-sm leading-relaxed text-warm-600 flex items-center gap-2">
                            For more information click here
                            <a
                                href="https://fig.ltd.uk/#pricing"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="More information (opens in a new tab)"
                                class="relative inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent-500 text-white shrink-0"
                            >
                                <span class="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-75"></span>
                                <svg class="relative w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="12" y1="8" x2="12" y2="12"/>
                                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                                </svg>
                            </a>
                        </p>

                        <button
                            type="button"
                            @click="dismiss"
                            class="mt-6 w-full rounded-lg bg-brand-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                        >
                            I understand
                        </button>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>
