module.exports = {
    overrides: [
        {
            files: ['*.spec.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:jest/all'],
            rules: {
                'jest/expect-expect': 'off',
                'jest/no-disabled-tests': 'off',
                'jest/no-done-callback': 'off',
                'jest/no-test-prefixes': 'off',
                'jest/prefer-strict-equal': 'off',
                'jest/prefer-each': 'off',
                'jest/prefer-expect-assertions': 'off',
                'jest/no-hooks': 'off',
                'jest/require-hook': 'off',
                'jest/no-conditional-in-test': 'off',
                'jest/max-expects': 'off',
                'jest/prefer-called-with': 'off',
                'jest/unbound-method': 'off',
                'jest/prefer-hooks-on-top': 'off',
                'jest/require-to-throw-message': 'off',
                'jest/max-nested-describe': 'off',
                'jest/prefer-expect-resolves': 'off',
                'jest/prefer-lowercase-title': 'off',
                'jest/prefer-to-have-length': 'off',
                'jest/prefer-to-be-null': 'off',
                'jest/require-top-level-describe': [
                    'error',
                    {
                        maxNumberOfTopLevelDescribes: 1,
                    },
                ],
            },
        },
    ],
};
