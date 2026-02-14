import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'cyber-black': '#050505',
                'cyber-gray': '#121212',
                'core-red': '#FF4D4D',
                'system-green': '#00FF9F',
                'cyber-text': '#E0E0E0',
                primary: {
                    ...colors.red,
                    DEFAULT: '#FF4D4D',
                    glow: '#FF4D4D',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'], // Suggest Fira Code if available, or fallback
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
            },
        },
    },
    plugins: [],
}
