/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'text': {
                    light: '#07171D',
                    DEFAULT: '#FBFDFE',
                    dark: '#FBFDFE',
                },
                'background': {
                    light: '#FBFDFE',
                    DEFAULT: '#07171D',
                    dark: '#07171D',
                },
                'primary': { // 'charcoal'
                    100: '#5C8799',
                    300: '#4D7080',
                    DEFAULT: '#37515C',
                    700: '#2E434D',
                    900: '#1F2D33',
                },
                'secondary': { // 'vivid sky blue'
                    100: '#88DDFB',
                    300: '#74D7FB',
                    DEFAULT: '#60D0FA',
                    700: '#4DCBF9',
                    900: '#39C6F9',
                },
                'accent': { // 'cherry blossom pink'
                    100: '#FBDAE1',
                    300: '#F9C8D2',
                    DEFAULT: '#F5ABBA',
                    700: '#F4A4B4',
                    900: '#F291A5',
                },
            },
            keyframes: {
                'pulse-switch': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
            animation: {
                'pulse-switch': 'pulse-switch 1.25s steps(1) infinite',
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
