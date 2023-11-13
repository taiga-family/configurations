module.exports = {
    extends: ['eslint-config-airbnb-base', 'plugin:eslint-comments/recommended'],
    overrides: [
        {
            extends: ['eslint-config-airbnb-base/rules/errors'],
            files: ['*.js', '*.ts'],
            parser: '@typescript-eslint/parser',
            rules: {
                'no-await-in-loop': 'off',
                // eslint-config-airbnb-base/errors
                'no-empty': ['error', {allowEmptyCatch: true}],
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
        },
        requireConfigFile: false,
    },
    plugins: ['@babel'],
    rules: {
        camelcase: [
            'warn',
            {
                allow: ['^UNSAFE_'],
                ignoreDestructuring: false,
                properties: 'never',
            },
        ],
        'class-methods-use-this': 'off',
        complexity: 'off',
        'consistent-return': 'warn',
        'default-case': 'off',
        'func-name-matching': 'off',
        'func-names': 'off',
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true,
            },
        ],
        'global-require': 'off',
        'guard-for-in': 'off',
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
        'max-classes-per-file': ['error', 4],
        'max-depth': 'off',
        'max-nested-callbacks': ['error', 4],
        'max-params': 'off',
        'no-bitwise': 'warn',
        'no-continue': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': ['error', 'except-parens'],
        'no-underscore-dangle': 'off',
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'no-use-before-define': [
            'error',
            {
                classes: false,
                functions: false,
                variables: true,
            },
        ],
        'no-useless-escape': 'warn',
        'no-var': 'warn',
        'spaced-comment': ['error', 'always', {exceptions: ['*']}],
        'vars-on-top': 'warn',
    },
};
