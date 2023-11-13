module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'decorator-position'],
            rules: {
                'decorator-position/decorator-position': [
                    'error',
                    {
                        methods: 'above',
                        printWidth: 120,
                        properties: 'above',
                    },
                ],
            },
        },
    ],
};
