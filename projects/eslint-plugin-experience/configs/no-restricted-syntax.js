module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                'no-restricted-syntax': [
                    'error',
                    {
                        message:
                            'Don\'t declare enums, please use "const MyEnumType = { ... } as const;"',
                        selector: 'TSEnumDeclaration',
                    },
                    {
                        message:
                            'Use `map(() => value)` instead of `mapTo(value)`, the operator is deprecated',
                        selector: "CallExpression[callee.name='mapTo']",
                    },
                    {
                        message:
                            'Use `ALWAYS_FALSE_HANDLER` please instead of `() => false`',
                        selector:
                            "ArrowFunctionExpression[params.length=0][body.raw='false'][body.value='false']",
                    },
                    {
                        message:
                            'Use `ALWAYS_TRUE_HANDLER` please instead of `() => true`',
                        selector:
                            "ArrowFunctionExpression[params.length=0][body.raw='true'][body.value='true']",
                    },
                    {
                        message:
                            'Use `switchMap(() => stream$)` instead of `switchMapTo(stream$)`, the operator is deprecated',
                        selector: "CallExpression[callee.name='switchMapTo']",
                    },
                    {
                        message:
                            'Use `mergeMap` instead of `flatMap`, the operator is deprecated',
                        selector: "CallExpression[callee.name='flatMap']",
                    },
                    {
                        message:
                            "Use `map(x => x?.foo?.bar)` instead of `pluck('foo', 'bar')`",
                        selector: "CallExpression[callee.name='pluck']",
                    },
                ],
            },
        },
    ],
};
