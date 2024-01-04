/** @type {import('tailwindcss').Config} */
export default {
    purge: ["./**/*.{vue,js,ts,jsx,tsx}"],
    content: ["./**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: "#363853",
                primary: "#0012FF",
                green: "#67D4CA",
                red: "#F28080",
                "overall-color": "#F8FAF8",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
