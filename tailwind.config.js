/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                geist: ["Geist Sans", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};