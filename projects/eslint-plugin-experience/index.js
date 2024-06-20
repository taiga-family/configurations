/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    configs: {
        all: require('./all.js'),
        'taiga-naming': require('./configs/taiga-naming.js'),
    },
    rules: {
        'decorator-key-sort': require('./rules/decorator-key-sort'),
        'injection-token-description': require('./rules/injection-token-description'),
        'no-deep-imports': require('./rules/no-deep-imports'),
        'no-implicit-public': require('./rules/no-implicit-public'),
        'no-postfix-class': require('./rules/no-postfix-class'),
        'no-private-esnext-fields': require('./rules/no-private-esnext-fields'),
        'no-simple-for-of': require('./rules/no-simple-for-of'),
        'prefer-deep-imports': require('./rules/prefer-deep-imports'),
        'strict-tui-doc-example': require('./rules/strict-tui-doc-example'),
    },
};
