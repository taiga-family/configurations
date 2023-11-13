module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/await-thenable': 'error',
                '@typescript-eslint/no-floating-promises': [
                    'error',
                    {ignoreIIFE: true, ignoreVoid: true},
                ],
                '@typescript-eslint/promise-function-async': [
                    'error',
                    {
                        allowedPromiseNames: ['Thenable'],
                        checkArrowFunctions: true,
                        checkFunctionDeclarations: true,
                        checkFunctionExpressions: true,
                        checkMethodDeclarations: true,
                    },
                ],
                '@typescript-eslint/require-await': 'error',
                'no-void': ['error', {allowAsStatement: true}],
                'require-await': 'off', // note you must disable the base rule as it can report incorrect errors
            },
        },
    ],
};
