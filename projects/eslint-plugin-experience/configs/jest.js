module.exports = {
    overrides: [
        {
            extends: ['plugin:jest/all'],
            files: ['*.spec.ts'],
            parser: '@typescript-eslint/parser',
            rules: {
                'jest/expect-expect': 'off',
                'jest/max-expects': 'off',
                'jest/max-nested-describe': 'off',
                'jest/no-conditional-in-test': 'off',
                'jest/no-disabled-tests': 'off',
                'jest/no-done-callback': 'off',
                'jest/no-hooks': 'off',
                'jest/no-test-prefixes': 'off',
                'jest/prefer-called-with': 'off',
                'jest/prefer-each': 'off',
                'jest/prefer-expect-assertions': 'off',
                'jest/prefer-expect-resolves': 'off',
                'jest/prefer-hooks-on-top': 'off',
                'jest/prefer-lowercase-title': 'off',
                'jest/prefer-strict-equal': 'off',
                'jest/prefer-to-be-null': 'off',
                'jest/prefer-to-have-length': 'off',
                'jest/require-hook': 'off',
                'jest/require-to-throw-message': 'off',
                'jest/require-top-level-describe': [
                    'error',
                    {
                        maxNumberOfTopLevelDescribes: 1,
                    },
                ],
                'jest/unbound-method': 'off',
            },
        },
    ],
};
