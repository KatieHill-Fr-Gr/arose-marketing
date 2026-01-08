/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./styles/index.html",
        "./src/**/*.{js, ts, jsx, tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': '#cde0e6',
                'brand-secondary': '#f0cbbd',
                'brand-accent': '#f0cbbd',
            }
        }
    },
    plugins: [],
}