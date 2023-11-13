module.exports = {
    overrides: [
        {
            extends: ['plugin:rxjs/recommended'],
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['rxjs'],
            rules: {
                'rxjs/no-compat': 'error',
                'rxjs/no-connectable': 'error',
                'rxjs/no-cyclic-action': 'error',
                'rxjs/no-ignored-observable': 'error',
                'rxjs/no-topromise': 'error',
                'rxjs/no-unsafe-catch': 'error',
                'rxjs/no-unsafe-first': 'error',
                'rxjs/no-unsafe-switchmap': 'error',
                'rxjs/throw-error': 'error',
            },
        },
        {
            extends: ['plugin:rxjs/recommended'],
            files: ['**/schematics/**/*.spec.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['rxjs'],
            rules: {
                'rxjs/no-topromise': 'off',
            },
        },
    ],
};
