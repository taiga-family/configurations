module.exports = {
    overrides: [
        {
            extends: ['plugin:playwright/recommended'],
            files: ['**/*playwright;/*.spec.ts'],
            parser: '@typescript-eslint/parser',
        },
    ],
};
