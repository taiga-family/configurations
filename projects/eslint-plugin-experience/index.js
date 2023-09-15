/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    configs: {
        all: require('./all.js'),
        off: require('./configs/off.js'),
        ng: require('./configs/ng.js'),
        typescript: require('./configs/typescript.js'),
        cypress: require('./configs/cypress.js'),
        taiga: require('./configs/taiga.js'),
        'taiga-naming-convention': require('./configs/taiga-naming-convention.js'),
        'naming-convention': require('./configs/naming-convention.js'),
        'no-restricted-syntax': require('./configs/no-restricted-syntax.js'),
        base: require('./configs/base/index.js'),
        recommended: require('./configs/angular/recommended/index.js'),
        'decorator-position': require('./configs/angular/decorator-position/index.js'),
        experimental: require('./configs/angular/experimental/index.js'),
        'file-progress': require('./configs/angular/file-progress/index.js'),
        'function-return-type': require('./configs/angular/function-return-type/index.js'),
        html: require('./configs/angular/html/index.js'),
        'html-eslint': require('./configs/angular/html-eslint/index.js'),
        imports: require('./configs/angular/imports/index.js'),
        'line-statements': require('./configs/angular/line-statements/index.js'),
        'member-ordering': require('./configs/angular/member-ordering/index.js'),
        promise: require('./configs/angular/promise/index.js'),
        rxjs: require('./configs/angular/rxjs/index.js'),
        unicorn: require('./configs/angular/unicorn/index.js'),
    },
    rules: {
        'injection-token-description': require('./rules/injection-token-description'),
        'no-deep-imports': require('./rules/no-deep-imports'),
        'prefer-inject-decorator': require('./rules/prefer-inject-decorator'),
        'prefer-self-destroy-service': require('./rules/prefer-self-destroy-service'),
        'no-typeof': require('./rules/no-typeof'),
        'strict-tui-doc-example': require('./rules/strict-tui-doc-example'),
        'no-assert-without-ng-dev-mode': require('./rules/no-assert-without-ng-dev-mode'),
    },
};
