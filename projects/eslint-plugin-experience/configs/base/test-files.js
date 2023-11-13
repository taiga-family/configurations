module.exports = {
    overrides: [
        {
            files: ['*.spec.*', '*.cy.*', '*.test.*', '*.unit.*', '*/__tests__/*'],
            rules: {
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-shadow': 'off',
                'import/extensions': 'off',
                'import/no-unresolved': 'off',
                'max-classes-per-file': 'off',
                'max-nested-callbacks': ['warn', 10],
                'prefer-promise-reject-errors': 'warn',
            },
        },
    ],
};
