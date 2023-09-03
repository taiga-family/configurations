module.exports = {
    plugins: ['import', 'simple-import-sort'],
    rules: {
        'import/exports-last': 'off',
        'import/no-default-export': 'off',
        'import/no-webpack-loader-syntax': 'off',
        'import/no-duplicates': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        /**
         * @note: you must disable some base rule
         * as it can report incorrect errors with @typescript-eslint
         */
        'import/first': 'error',
        'import/newline-after-import': ['error', {count: 1}],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
};
