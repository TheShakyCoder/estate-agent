import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Deep navy — body text, nav, and the dark CTA surface
                brand: {
                    50:  '#eef2f7',
                    100: '#d6dfeb',
                    200: '#adbfd6',
                    300: '#7a96b8',
                    400: '#4d6e93',
                    500: '#2f5278',
                    600: '#234062',
                    700: '#1b324f',
                    800: '#13243a',
                    900: '#0c1827',
                },
                // Teal — the signature CTA / link / accent colour. Saturated to pop.
                accent: {
                    50:  '#e0fff9',
                    100: '#a8fbeb',
                    200: '#5cf2d6',
                    300: '#1fe5be',
                    400: '#08d1a8',  // bright pop teal — feature highlights
                    500: '#06b89a',  // PRIMARY CTA — vibrant + still legible on white
                    600: '#089689',  // hover state for solid CTAs
                    700: '#0d7872',  // inline text accent (italicised words)
                    800: '#0d5e5a',
                    900: '#0c4544',
                },
                // Soft off-white tones — used sparingly to break up plain white
                cream: {
                    50:  '#ffffff',
                    100: '#fafaf7',
                    200: '#f2f1ec',
                    300: '#e6e4dd',
                },
                // Estate palette pops — used for property tags & category swatches
                scent: {
                    sage:    '#7d8e7a',
                    rose:    '#a76258',
                    amber:   '#c2953d',
                    smoke:   '#6f7480',
                    cedar:   '#7b5a3d',
                    eucal:   '#5f7a78',
                },
                // Legacy alias retained so existing dashboard / admin pages don't break
                lens: {
                    teal:   '#16a99a',
                    sky:    '#7a96b8',
                    indigo: '#1b324f',
                    rose:   '#a76258',
                    amber:  '#c2953d',
                    slate:  '#6f7480',
                },
                // Warm neutrals — slate / stone tones for body copy and dividers
                warm: {
                    50:  '#f7f7f6',
                    100: '#ededeb',
                    200: '#dcdbd6',
                    300: '#bbb9b1',
                    400: '#8c8a82',
                    500: '#666560',
                    600: '#4a4945',
                    700: '#33322f',
                    800: '#22211f',
                    900: '#141312',
                },
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
                    '50%': { transform: 'translateY(-20px) rotate(var(--tw-rotate, 0deg))' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
                    '50%': { transform: 'translateY(-30px) rotate(var(--tw-rotate, 0deg))' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'scale-pulse': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                shimmer: {
                    '0%, 100%': { opacity: '0.7' },
                    '50%':      { opacity: '1' },
                },
                snip: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '50%':      { transform: 'rotate(-12deg)' },
                },
            },
            animation: {
                float: 'float 5s ease-in-out infinite',
                'float-slow': 'float-slow 7s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 1s infinite',
                wiggle: 'wiggle 3s ease-in-out infinite',
                'scale-pulse': 'scale-pulse 4s ease-in-out infinite',
                shimmer: 'shimmer 3.5s ease-in-out infinite',
                snip: 'snip 2.4s ease-in-out infinite',
            },
        },
    },

    plugins: [forms, typography],
};
