/**
 * @type {import(`eslint`).Rule.RuleModule}
 */
module.exports = {
    create(context) {
        return {
            ClassDeclaration(node) {
                const decorators = Array.from(node.decorators ?? []);

                decorators.forEach((decorator) => {
                    const expression = decorator.expression;
                    const decoratorArguments = Array.from(expression.arguments ?? []);

                    for (const argument of decoratorArguments) {
                        const properties = Array.from(argument.properties ?? []).reduce(
                            (mappings, item) => {
                                mappings[item.key.name] = item;

                                return mappings;
                            },
                            {},
                        );

                        if (properties.standalone && properties.imports) {
                            const currentOrder = properties.imports.value.elements.map(
                                (prop) => prop.name,
                            );

                            const newOrder = currentOrder
                                .slice()
                                .sort((a, b) => a.localeCompare(b));

                            if (
                                JSON.stringify(currentOrder) !== JSON.stringify(newOrder)
                            ) {
                                const source = JSON.stringify(newOrder)
                                    .replaceAll('"', '')
                                    .replaceAll(',', ', ');

                                context.report({
                                    fix: (fixer) =>
                                        fixer.replaceTextRange(
                                            properties.imports.value.range,
                                            source,
                                        ),
                                    message: `Order in imports should be ${source}`,
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
        type: 'problem',
    },
};
