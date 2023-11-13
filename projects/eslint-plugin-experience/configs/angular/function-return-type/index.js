module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                        allowDirectConstAssertionInArrowFunctions: true,
                        allowExpressions: true,
                        allowHigherOrderFunctions: true,
                        allowTypedFunctionExpressions: true,
                    },
                ],
            },
        },
    ],
};
