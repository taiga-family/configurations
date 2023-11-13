const base =
    projectJsonExist('tsconfig.eslint.json') || projectJsonExist('tsconfig.json') || '';

module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                project: base ? [base] : [],
                sourceType: 'module',
            },
            plugins: ['@typescript-eslint'],
            rules: {
                '@angular-eslint/sort-lifecycle-methods': 'error',
                '@typescript-eslint/ban-types': [
                    'error',
                    {
                        extendDefaults: true,
                        types: {
                            '{}': {
                                message:
                                    '`{}` actually means `any non-nullish value`.\n- If you want a type meaning `any object`, you probably want `object` instead.\n- If you want a type meaning `any value`, you probably want `unknown` instead.\n- If you want a type meaning `empty object`, you probably want `Record<string, never>` instead.',
                            },
                            BigInt: {
                                fixWith: 'bigint',
                                message: 'Use bigint instead',
                            },
                            Boolean: {
                                fixWith: 'boolean',
                                message: 'Use boolean instead',
                            },
                            Function: {
                                message:
                                    'The `Function` type accepts any function-like value.\nIt provides no type safety when calling the function, which can be a common source of bugs.\nIt also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.\nIf you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
                            },
                            Number: {
                                fixWith: 'number',
                                message: 'Use number instead',
                            },
                            Object: {
                                message:
                                    'The `Object` type actually means `any non-nullish value`, so it is marginally better than `unknown`.\n- If you want a type meaning `any object`, you probably want `object` instead.\n- If you want a type meaning `any value`, you probably want `unknown` instead.',
                            },
                            String: {
                                fixWith: 'string',
                                message: 'Use string instead',
                            },
                            Symbol: {
                                fixWith: 'symbol',
                                message: 'Use symbol instead',
                            },
                        },
                    },
                ],
                '@typescript-eslint/consistent-generic-constructors': 'error',
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'allow-as-parameter',
                    },
                ],
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/func-call-spacing': 'error',
                '@typescript-eslint/member-delimiter-style': 'error',
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/no-duplicate-enum-values': 'error',
                '@typescript-eslint/no-extra-non-null-assertion': 'error',
                '@typescript-eslint/no-implied-eval': 'error',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
                '@typescript-eslint/no-unnecessary-qualifier': 'error',
                '@typescript-eslint/no-unnecessary-type-arguments': 'error',
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                '@typescript-eslint/no-unnecessary-type-constraint': 'error',
                '@typescript-eslint/no-unsafe-declaration-merging': 'error',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-use-before-define': 'error',
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/prefer-as-const': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-includes': 'error',
                '@typescript-eslint/prefer-string-starts-ends-with': 'error',
                '@typescript-eslint/quotes': ['error', 'backtick'],
                '@typescript-eslint/require-array-sort-compare': 'error',
                '@typescript-eslint/restrict-plus-operands': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
                '@typescript-eslint/triple-slash-reference': [
                    'error',
                    {
                        lib: 'always',
                        path: 'always',
                        types: 'always',
                    },
                ],
                '@typescript-eslint/type-annotation-spacing': 'error',
                'no-irregular-whitespace': 'error',
                'unicorn/prefer-logical-operator-over-ternary': 'error',
            },
        },
        {
            files: ['*.component.ts', '*.directive.ts', '**/examples/**/index.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/quotes': ['error', 'single'],
                'import/extensions': 'off',
            },
        },
    ],
};

function projectJsonExist(filename) {
    try {
        const path = require('path').resolve(filename);
        return require('fs').existsSync(path) ? filename : undefined;
    } catch {
        return undefined;
    }
}
