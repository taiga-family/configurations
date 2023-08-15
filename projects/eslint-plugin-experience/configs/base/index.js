module.exports = {
    extends: [
        './configs/base/base',
        './configs/base/sort-class-members',
        './configs/base/import',
        './configs/base/promise',
        './configs/base/test-files',
        './configs/base/typescript',
        './configs/base/prettier',
    ],
    env: {
        browser: true,
        node: true,
    },
};
