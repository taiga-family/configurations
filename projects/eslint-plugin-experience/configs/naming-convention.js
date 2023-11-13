module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        format: ['PascalCase', 'UPPER_CASE'],
                        selector: 'typeLike',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported'],
                        selector: 'class',
                    },
                    {
                        format: ['camelCase'],
                        modifiers: ['exported'],
                        selector: 'function',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported'],
                        selector: 'interface',
                    },
                    {
                        format: null,
                        modifiers: ['destructured'],
                        selector: 'variable',
                    },
                    {
                        format: ['camelCase'],
                        selector: 'variable',
                    },
                    {
                        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
                        modifiers: ['global'],
                        selector: 'variable',
                    },
                    {
                        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
                        modifiers: ['exported'],
                        selector: 'variable',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['abstract'],
                        prefix: ['Abstract'],
                        selector: 'class',
                    },
                    {
                        format: ['StrictPascalCase'],
                        modifiers: ['exported'],
                        selector: 'enum',
                    },
                    {
                        format: ['PascalCase'],
                        selector: 'enumMember',
                    },
                    {
                        format: ['strictCamelCase'],
                        selector: 'classMethod',
                    },
                    {
                        format: ['strictCamelCase'],
                        selector: 'classProperty',
                    },
                ],
            },
        },
    ],
};
