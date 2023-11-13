module.exports = {
    extends: ['plugin:promise/recommended'],
    rules: {
        'promise/always-return': 'off',
        'promise/catch-or-return': 'warn',
        'promise/no-callback-in-promise': 'off',
        'promise/param-names': 'warn',
    },
};
