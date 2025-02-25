import tseslint from 'typescript-eslint';

export default tseslint.config([
    {
        files: ['*.ts'],
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
                    prefix: ['AbstractTui', 'Tui'],
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
                    prefix: ['AbstractTui', 'Tui'],
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
                    format: ['camelCase'],
                    selector: 'classMethod',
                },
                {
                    format: ['camelCase'],
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
                    filter: 'updateTo',
                    format: null,
                    selector: 'function',
                },
                {
                    format: ['PascalCase'],
                    modifiers: ['exported'],
                    selector: 'interface',
                },
                {
                    filter: '__non_webpack_require__',
                    format: null,
                    selector: 'variable',
                },
                {
                    format: null,
                    modifiers: ['destructured'],
                    selector: 'variable',
                },
                {
                    format: ['camelCase', 'UPPER_CASE'],
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
]);
