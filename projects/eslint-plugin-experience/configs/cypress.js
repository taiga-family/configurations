module.exports = {
    overrides: [
        {
            files: ['**/*.cy.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'cypress'],
            extends: ['plugin:cypress/recommended'],
            rules: {
                'cypress/no-unnecessary-waiting': 'off',
                'cypress/unsafe-to-chain-command': 'off',
                'no-implicit-globals': 'error',
                'no-restricted-properties': [
                    'error',
                    {
                        property: 'screenshot',
                        message: 'Please use matchImageSnapshot instead.',
                    },
                    {
                        property: 'visit',
                        message: 'Please use tuiVisit instead.',
                    },
                ],
            },
        },
    ],
};
