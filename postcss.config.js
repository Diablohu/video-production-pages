module.exports = {
    plugins: {
        'postcss-easing-gradients': {},
        autoprefixer: {},
        cssnano: {
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                    camelCase: true,
                    normalizeWhitespace: false,
                    zindex: false,
                },
            ],
        },
    },
};
