module.exports = {
    overrides: [
        {
            extends: ['plugin:@typescript-eslint/eslint-recommended'],
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 6,
                errorOnTypeScriptSyntacticAndSemanticIssues: true,
                errorOnUnknownASTType: true,
                sourceType: 'module',
                warnOnUnsupportedTypeScriptVersion: false,
            },
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/array-type': [
                    'error',
                    {default: 'array-simple', readonly: 'array-simple'},
                ],
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {accessibility: 'no-public'},
                ],
                '@typescript-eslint/no-inferrable-types': [
                    'error',
                    {ignoreParameters: true},
                ],
                '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
                '@typescript-eslint/no-useless-constructor': ['error'],
                '@typescript-eslint/prefer-readonly': ['error'],
                'no-unused-vars': 'off',
                /**
                 * @note: you must disable the base rule
                 * as it can report incorrect errors in @typescript-eslint
                 */
                'no-useless-constructor': 'off',
                'prefer-destructuring': 'off',
            },
        },
    ],
};
