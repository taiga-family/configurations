module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'functional'],
            extends: ['plugin:functional/all'],
            rules: {},
        },
    ],
};
