const getTypeName = require('./utils/get-type-name');
const getDecorators = require('./utils/get-decorators');
const hasDecorator = require('./utils/has-decorator');
const getNgConstructor = require('./utils/get-ng-constructor');

const MESSAGE_ID = `prefer-inject-self-destroy-service`;
const ERROR_MESSAGE = `Use Self() decorator for TuiDestroyService`;

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    create(context) {
        return {
            /**
             * @type {import('eslint').Rule.Node}
             * @return {*}
             */
            ClassDeclaration(node) {
                const constructor = getNgConstructor(node);

                if (!constructor) {
                    return;
                }

                constructor.value.params.forEach(param => {
                    if (hasDecorator(param, 'Self')) {
                        return;
                    }

                    const isDestroyServiceWithoutSelf =
                        getDecorators(param).some(
                            ({pretty}) => pretty === `@Inject(TuiDestroyService)`,
                        ) ?? getTypeName(param) === `TuiDestroyService`;

                    if (isDestroyServiceWithoutSelf) {
                        context.report({
                            fix: fixer => {
                                const [start, end] = param.range;

                                return fixer.insertTextBeforeRange(
                                    [start, end],
                                    `@Self() `,
                                );
                            },
                            messageId: MESSAGE_ID,
                            node: param,
                        });
                    }
                });
            },
        };
    },
    meta: {
        docs: {description: ERROR_MESSAGE},
        fixable: 'code',
        messages: {
            [MESSAGE_ID]: ERROR_MESSAGE,
        },
        type: 'problem',
    },
};
