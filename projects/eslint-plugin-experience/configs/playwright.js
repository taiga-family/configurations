module.exports = {
    overrides: [
        {
            files: ['**/*playwright;/*.spec.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:playwright/recommended'],
        },
    ],
};
