/**
 * @type {import(`eslint`).Rule.RuleModule}
 */
module.exports = {
    create(context) {
        return {
            ClassDeclaration: function reportUnwantedName(node) {
                const members = Array.from(node?.body?.body ?? []);

                members.forEach(member => {
                    if (member?.key?.type === 'PrivateIdentifier') {
                        context.report({
                            message: `Please don't use "#${member?.key?.name}" instead of "private ${member?.key?.name}"`,
                            node,
                        });
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
