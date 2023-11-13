/**
 * @type {import(`eslint`).Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: 'problem',
        fixable: 'code',
        schema: [
            {
                type: `object`,
                description: `Decorators names and their keys order`,
                additionalProperties: true,
            },
        ],
    },
    create(context) {
        const ORDER = context.options[0] || {};

        return {
            ClassDeclaration(node) {
                const decorators = Array.from(node.decorators ?? []);

                for (const decorator of decorators) {
                    const expression = decorator.expression;

                    const decoratorName = expression.callee?.name ?? ``;

                    if (decoratorName in (ORDER || {})) {
                        const orderList = ORDER[decoratorName];
                        const args = Array.from(expression.arguments ?? []);

                        for (const argument of args) {
                            const properties = Array.from(argument.properties ?? []);
                            const current = properties.map(prop => prop.key.name);
                            const correct = getCorrectOrderRelative(orderList, current);

                            if (!isCorrectSortedAccording(correct, current)) {
                                context.report({
                                    node: expression,
                                    message: `Incorrect order keys in @${decoratorName} decorator, please sort by [${correct.join(
                                        ' -> ',
                                    )}]`,
                                });
                            }
                        }
                    }
                }
            },
        };
    },
};

function isCorrectSortedAccording(correctOrder, currentOrder) {
    return (
        JSON.stringify(correctOrder) ===
        JSON.stringify(currentOrder.filter(item => correctOrder.includes(item)))
    );
}

function getCorrectOrderRelative(correctOrder, currentOrder) {
    return correctOrder.filter(item => currentOrder.includes(item));
}
