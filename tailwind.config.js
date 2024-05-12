/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            screens: {
                print: {raw: 'print'},
                screen: {raw: 'screen'},
            },
        },
    },
    plugins: [],
}

