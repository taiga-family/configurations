module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['unicorn', '@typescript-eslint'],
            rules: {
                'unicorn/escape-case': 'error',
                'unicorn/filename-case': [
                    'error',
                    {
                        case: 'kebabCase',
                    },
                ],
                'unicorn/new-for-builtins': 'error',
                'unicorn/no-array-push-push': 'error',
                'unicorn/no-empty-file': 'error',
                'unicorn/no-unsafe-regex': 'error',
                'unicorn/no-useless-spread': 'error',
                'unicorn/prefer-string-slice': 'error',
                'unicorn/require-number-to-fixed-digits-argument': 'error',
            },
        },
    ],
};
