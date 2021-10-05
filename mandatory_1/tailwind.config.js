const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    purge: { 
        content: [
            './client/**/*.svelte'
        ],
        enable: prod
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
    ],
}
