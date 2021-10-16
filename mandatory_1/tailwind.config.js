const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    purge: { 
        content: [
            './client/**/*.svelte',
            './client/**/*.js'
        ],
        enable: prod,
        options: {
            defaultExtractor: content => [ 
                // Disable purgin of svelte 'class:' directive
                ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
                ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
            ]
        }
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
