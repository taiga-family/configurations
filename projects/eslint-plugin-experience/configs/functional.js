module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['functional'],
            rules: {
                'functional/functional-parameters': 'off',
                'functional/immutable-data': 'off',
                'functional/no-classes': 'off',
                'functional/no-conditional-statements': 'off',
                'functional/no-expression-statements': 'off',
                'functional/no-let': 'off',
                'functional/no-loop-statements': 'off',
                'functional/no-mixed-types': 'off',
                'functional/no-promise-reject': 'off',
                'functional/no-return-void': 'off',
                'functional/no-this-expressions': 'off',
                'functional/no-throw-statements': 'off',
                'functional/no-try-statements': 'off',
                'functional/prefer-immutable-types': 'off',
                'functional/prefer-property-signatures': 'off',
                'functional/prefer-tacit': 'error',
                'functional/readonly-type': 'off',
                'functional/type-declaration-immutability': 'off',
            },
        },
    ],
};
