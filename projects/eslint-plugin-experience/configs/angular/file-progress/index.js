module.exports = {
    plugins: ['file-progress'],
    root: false,
    rules: {
        'file-progress/activate': 1,
    },
    settings: {
        progress: {
            hide: false,
            successMessage: 'Lint done...',
        },
    },
};
