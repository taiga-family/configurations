module.exports = {
    extends: ['plugin:@typescript-eslint/eslint-recommended'],
    overrides: [
        {
            extends: ['prettier'],
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/ban-ts-comment': 'warn',
                '@typescript-eslint/ban-types': [
                    'error',
                    {
                        extendDefaults: false,
                        types: {
                            Boolean: {fixWith: 'boolean', message: 'Use boolean instead'},
                            Number: {fixWith: 'number', message: 'Use number instead'},
                            Object: {
                                fixWith: 'Record<string, any>',
                                message: 'Use Record<string, any> instead',
                            },
                            String: {fixWith: 'string', message: 'Use string instead'},
                            object: {
                                fixWith: 'Record<string, any>',
                                message: 'Use Record<string, any> instead',
                            },
                        },
                    },
                ],
                '@typescript-eslint/camelcase': 'off',
                '@typescript-eslint/consistent-type-imports': [
                    'warn',
                    {
                        disallowTypeAnnotations: true,
                        prefer: 'type-imports',
                    },
                ],
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/member-ordering': [
                    'off',
                    {
                        default: [
                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',
                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',
                            'public-instance-field',
                            'protected-instance-field',
                            'private-instance-field',
                            'constructor',
                            'public-instance-method',
                            'protected-instance-method',
                            'private-instance-method',
                        ],
                    },
                ],
                '@typescript-eslint/no-empty-function': 'warn',
                // '@typescript-eslint/no-unnecessary-qualifier': 'error', need ts config
                // '@typescript-eslint/restrict-plus-operands': 'error', need ts config
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-extraneous-class': [
                    'error',
                    {
                        allowStaticOnly: true,
                        allowWithDecorator: true,
                    },
                ],
                '@typescript-eslint/no-namespace': 'off',
                '@typescript-eslint/no-shadow': ['warn'],
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                    },
                ],
                '@typescript-eslint/no-unused-vars': [
                    'warn',
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                    },
                ],
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        classes: false,
                        enums: true,
                        functions: false,
                        typedefs: true,
                        variables: true,
                    },
                ],
                '@typescript-eslint/no-var-requires': 'warn',
                camelcase: 'off',
                'class-methods-use-this': 'off',
                'consistent-return': 'off',
                // https://github.com/import-js/eslint-plugin-import/issues/2114
                'import/no-duplicates': 'off',
                'no-shadow': 'off',
                // standard no-unused-expressions don't understand optional chaining from ts
                'no-unused-expressions': 'off',
                'no-unused-vars': 'off',
                'no-use-before-define': 'off',
                // conflict with import type statement, try to merge default and named imports
                // https://github.com/typescript-eslint/typescript-eslint/issues/2545#issuecomment-692842483
                // swears on cases like constructor(public c: C) {}
                'no-useless-constructor': 'off',
            },
        },
    ],
};
