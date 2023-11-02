module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', '@taiga-ui/experience'],
            rules: {
                '@taiga-ui/experience/injection-token-description': 'error',
                '@taiga-ui/experience/prefer-inject-decorator': 'error',
                '@taiga-ui/experience/prefer-self-destroy-service': 'error',
                '@taiga-ui/experience/no-typeof': 'error',
                '@taiga-ui/experience/no-private-esnext-fields': 'error',
                '@taiga-ui/experience/no-deep-imports': [
                    'error',
                    {
                        currentProject: '(?<=projects/)([-\\w]+)',
                        ignoreImports: [
                            '\\?raw',
                            '@taiga-ui/testing/cypress',
                            '@taiga-ui/testing/setup-jest',
                        ],
                    },
                ],
                '@taiga-ui/experience/strict-tui-doc-example': 'error',
                '@taiga-ui/experience/no-assert-without-ng-dev-mode': 'error',
            },
        },
    ],
};
