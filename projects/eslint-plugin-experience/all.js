/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    env: {
        es2024: true,
    },
    extends: [
        'plugin:@taiga-ui/experience/base',
        'plugin:@taiga-ui/experience/recommended',
        'plugin:@taiga-ui/experience/rxjs',
        'plugin:@taiga-ui/experience/imports',
        'plugin:@taiga-ui/experience/promise',
        'plugin:@taiga-ui/experience/unicorn',
        'plugin:@taiga-ui/experience/html-eslint',
        'plugin:@taiga-ui/experience/file-progress',
        'plugin:@taiga-ui/experience/line-statements',
        'plugin:@taiga-ui/experience/member-ordering',
        'plugin:@taiga-ui/experience/decorator-position',
        'plugin:@taiga-ui/experience/experimental',
        'plugin:@taiga-ui/experience/function-return-type',
        'plugin:@taiga-ui/experience/taiga',
        'plugin:@taiga-ui/experience/no-restricted-syntax',
        'plugin:@taiga-ui/experience/typescript',
        'plugin:@taiga-ui/experience/ng',
        'plugin:@taiga-ui/experience/naming-convention',
        'plugin:@taiga-ui/experience/sonar',
        'plugin:@taiga-ui/experience/off',
    ],
    ignorePatterns: require('@taiga-ui/eslint-plugin-experience/configs/ignore-patterns'),
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    root: true,
};
