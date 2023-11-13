module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/dot-notation': [
                    'error',
                    {
                        allowIndexSignaturePropertyAccess: true,
                        allowPrivateClassPropertyAccess: true,
                        allowProtectedClassPropertyAccess: true,
                    },
                ],
                '@typescript-eslint/no-base-to-string': 'error',
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                '@typescript-eslint/no-unnecessary-type-constraint': 'error',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        classes: false,
                        enums: true,
                        functions: false,
                        typedefs: true,
                        variables: true,
                    },
                ],
                '@typescript-eslint/prefer-includes': 'error',
                '@typescript-eslint/prefer-nullish-coalescing': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/sort-type-constituents': 'error',
                'dot-notation': 'off',
            },
        },
    ],
};
