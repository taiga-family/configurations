/**
 * @type {import(`eslint`).Rule.RuleModule}
 */
module.exports = {
    create(context) {
        return {
            ClassDeclaration: function reportUnwantedName(node) {
                const name = node?.id?.name;

                const hasPostfix = !!(
                    name?.endsWith('Component') || name?.endsWith('Directive')
                );

                if (!hasPostfix) {
                    return;
                }

                const isStandalone = !!(
                    node?.decorators?.find(
                        decorator => decorator?.expression?.callee?.name === 'Component',
                    )?.expression?.arguments?.[0]?.properties || []
                ).find(property => property?.key?.name === 'standalone');

                if (isStandalone) {
                    context.report({
                        message: ` ${name} is standalone component, please rename it to ${name.replace(/Component|Directive/, '')}`,
                        node,
                    });
                }
            },
        };
    },
};
