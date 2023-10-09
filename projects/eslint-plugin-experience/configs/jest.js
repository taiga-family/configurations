module.exports = {
    overrides: [
        {
            files: ['*.spec.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:jest/recommended'],
            rules: {
                'jest/expect-expect': 'off',
                'jest/no-disabled-tests': 'off',
                'jest/no-done-callback': 'off',
                'jest/no-test-prefixes': 'off',
            },
        },
    ],
};
