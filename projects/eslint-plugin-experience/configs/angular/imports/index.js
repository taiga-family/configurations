module.exports = {
    plugins: ['import', 'simple-import-sort'],
    rules: {
        '@typescript-eslint/consistent-type-imports': 'off',
        'import/exports-last': 'off',
        'import/extensions': 'off',
        /**
         * @note: you must disable some base rule
         * as it can report incorrect errors with @typescript-eslint
         */
        'import/first': 'error',
        'import/newline-after-import': ['error', {count: 1}],
        'import/no-default-export': 'off',
        'import/no-duplicates': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/no-webpack-loader-syntax': 'off',
        'import/prefer-default-export': 'off',
        'no-duplicate-imports': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
    },
};
