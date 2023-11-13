module.exports = {
    overrides: [
        {
            extends: ['plugin:cypress/recommended'],
            files: ['**/*.cy.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'cypress'],
            rules: {
                'cypress/no-unnecessary-waiting': 'off',
                'cypress/unsafe-to-chain-command': 'off',
                'no-implicit-globals': 'error',
                'no-restricted-properties': [
                    'error',
                    {
                        message: 'Please use matchImageSnapshot instead.',
                        property: 'screenshot',
                    },
                    {
                        message: 'Please use tuiVisit instead.',
                        property: 'visit',
                    },
                ],
            },
        },
    ],
};
