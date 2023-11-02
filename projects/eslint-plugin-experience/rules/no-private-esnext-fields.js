/**
 * @type {import(`eslint`).Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: 'problem',
        fixable: 'code',
    },
    create(context) {
        return {
            ClassDeclaration: function reportUnwantedName(node) {
                const members = Array.from(node?.body?.body ?? []);

                members.forEach(member => {
                    console.log(member);

                    if (member?.key?.type === `PrivateIdentifier`) {
                        context.report({
                            node: node,
                            message: `Please don't use "#${member?.key?.name}" instead of "private ${member?.key?.name}"`,
                        });
                    }
                });
            },
        };
    },
};
