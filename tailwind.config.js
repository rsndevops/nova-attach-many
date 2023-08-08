module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            spacing: {
                5: '1.25rem',
                9: '2.25rem',
                11: '2.75rem',
            },
            width: theme => theme('spacing'),
        },

    },
    plugins: [],
    prefix: '',
    // important: '.nova-attach-many'
}
