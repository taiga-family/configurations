module.exports = {
    /**
     * @param {{ options: {}[]; report: (arg0: { fix: (fixer: any) => any; message: string; node: any; }) => void; sourceCode: { text: any; }; }} context
     */
    create(context) {
        const ORDER = context.options[0] || {};

        return {
            /**
             * @param {{ decorators: any; }} node
             */
            ClassDeclaration(node) {
                const decorators = Array.from(node.decorators ?? []);

                decorators.forEach((decorator) => {
                    const expression = decorator.expression;

                    const decoratorName = expression.callee?.name ?? '';

                    if (decoratorName in (ORDER || {})) {
                        // @ts-ignore
                        const orderList = ORDER[decoratorName];
                        const decoratorArguments = Array.from(expression.arguments ?? []);

                        for (const argument of decoratorArguments) {
                            const properties = Array.from(argument.properties ?? []);
                            const current =
                                properties
                                    .map((prop) => prop.key?.name)
                                    .filter(Boolean) || [];

                            const correct = getCorrectOrderRelative(orderList, current);

                            if (!isCorrectSortedAccording(correct, current)) {
                                context.report({
                                    fix: (fixer) => {
                                        const fileContent = context.sourceCode.text;
                                        const forgottenProps = current.filter(
                                            (key) => !orderList.includes(key),
                                        );

                                        const sortedDecoratorProperties = [
                                            ...correct,
                                            ...forgottenProps,
                                        ].map((key) =>
                                            properties.find(
                                                (prop) => prop.key.name === key,
                                            ),
                                        );
                                        const newDecoratorArgument = `{${sortedDecoratorProperties.map(
                                            ({range}) => fileContent.slice(...range),
                                        )}}`;

                                        return fixer.replaceTextRange(
                                            argument.range,
                                            newDecoratorArgument,
                                        );
                                    },
                                    message: `Incorrect order keys in @${decoratorName} decorator, please sort by [${correct.join(
                                        ' -> ',
                                    )}]`,
                                    node: expression,
                                });
                            }
                        }
                    }
                });
            },
        };
    },
    meta: {
        fixable: 'code',
        schema: [
            {
                additionalProperties: true,
                description: 'Decorators names and their keys order',
                type: 'object',
            },
        ],
        type: 'problem',
    },
};

/**
 * @param {string | any[]} correctOrder
 * @param {any[]} currentOrder
 */
function isCorrectSortedAccording(correctOrder, currentOrder) {
    return (
        JSON.stringify(correctOrder) ===
        JSON.stringify(currentOrder.filter((item) => correctOrder.includes(item)))
    );
}

/**
 * @param {any[]} correctOrder
 * @param {string | any[]} currentOrder
 */
function getCorrectOrderRelative(correctOrder, currentOrder) {
    return correctOrder.filter((item) => currentOrder.includes(item));
}
