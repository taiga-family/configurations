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
        'no-assert-without-ng-dev-mode': require('./rules/no-assert-without-ng-dev-mode'),
        'no-deep-imports': require('./rules/no-deep-imports'),
        'no-private-esnext-fields': require('./rules/no-private-esnext-fields'),
        'no-simple-for-of': require('./rules/no-simple-for-of'),
        'no-typeof': require('./rules/no-typeof'),
        'prefer-inject-decorator': require('./rules/prefer-inject-decorator'),
        'prefer-self-destroy-service': require('./rules/prefer-self-destroy-service'),
        'strict-tui-doc-example': require('./rules/strict-tui-doc-example'),
    },
};
