module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    ignorePatterns: [
        'dist',
        'node_modules',
        '**/node_modules/**',
        '**/*@dasherize__/**',
        '**/coverage/**',
        'eslintrc.js',
        '.eslintrc.js',
        '**/*.d.ts',
        '**/dist/**',
        '**/docs/**',
        '.cache/**',
        '.git/**',
        '.idea/**',
    ],
    /**
     * @note: use @typescript-eslint/parser instead @babel/parser
     */
    parser: '@typescript-eslint/parser',
    rules: {
        curly: ['error', 'all'],
        eqeqeq: ['error', 'always'],
        'no-case-declarations': 'error',
        'no-console': ['error', {allow: ['info', 'assert', 'warn', 'error']}],
        'no-implicit-coercion': ['error', {allow: ['!!']}],
        /**
         * @note: [*.js, *.ts], exclude *.d.ts
         */
        'no-param-reassign': 'off',
        'no-return-assign': ['error', 'always'],
        'no-useless-concat': 'error',
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: true,
                ignoreExport: false,
                ignoreImport: false,
            },
        ],
        'prefer-destructuring': 'off',
        'prefer-template': 'error',
    },
};
