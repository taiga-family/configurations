module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        './configs/base/base',
        './configs/base/sort-class-members',
        './configs/base/promise',
        './configs/base/test-files',
        './configs/base/typescript',
        './configs/base/prettier',
    ],
};
