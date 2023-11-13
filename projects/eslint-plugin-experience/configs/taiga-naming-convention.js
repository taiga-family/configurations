const IGNORE = 'CVC|axisX|axisY|API|HTML|DOM|URI|URL|JSON|CSS|HTML';

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
                        prefix: ['Tui'],
                        selector: 'class',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported', 'abstract'],
                        prefix: ['AbstractTui'],
                        selector: 'class',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported'],
                        prefix: ['tui'],
                        selector: 'function',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported'],
                        prefix: ['Tui'],
                        selector: 'interface',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported'],
                        prefix: ['Tui'],
                        selector: 'typeAlias',
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
                        prefix: ['AbstractTui'],
                        selector: 'class',
                    },
                    {
                        format: ['StrictPascalCase'],
                        modifiers: ['exported'],
                        prefix: ['Tui'],
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
                        filter: IGNORE,
                        format: null,
                        selector: 'classMethod',
                    },
                    {
                        format: ['strictCamelCase'],
                        selector: 'classProperty',
                    },
                    {
                        filter: IGNORE,
                        format: null,
                        selector: 'classProperty',
                    },
                ],
            },
        },
        {
            files: [
                '**/projects/*demo*/**/*.ts',
                '**/scripts/**/*.ts',
                '**/schematics/**/*.ts',
                '**/apps/**/*.ts',
            ],
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
                        selector: 'typeAlias',
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
                        prefix: ['Abstract', 'Example'],
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
                ],
            },
        },
    ],
};
