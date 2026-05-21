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
                display: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50:  '#eef5f9',
                    100: '#d6e6ef',
                    200: '#aecddf',
                    300: '#7eaecb',
                    400: '#4d8ab0',
                    500: '#2a6a93',
                    600: '#1d4f73',
                    700: '#153d5c',
                    800: '#102e46',
                    900: '#0a1f30',
                },
                accent: {
                    50:  '#fdf8ec',
                    100: '#faedcc',
                    200: '#f4d98c',
                    300: '#edc053',
                    400: '#e3a72b',
                    500: '#c98a16',
                    600: '#a36c0f',
                    700: '#7d510b',
                },
                lens: {
                    teal:   '#0d9488',
                    sky:    '#0284c7',
                    indigo: '#4f46e5',
                    rose:   '#be185d',
                    amber:  '#d97706',
                    slate:  '#475569',
                },
                warm: {
                    50:  '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
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
            },
            animation: {
                float: 'float 5s ease-in-out infinite',
                'float-slow': 'float-slow 7s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 1s infinite',
                wiggle: 'wiggle 3s ease-in-out infinite',
                'scale-pulse': 'scale-pulse 4s ease-in-out infinite',
            },
        },
    },

    plugins: [forms, typography],
};
