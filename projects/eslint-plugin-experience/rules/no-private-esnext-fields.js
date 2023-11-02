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
                    if (member?.key?.type === `PrivateIdentifier`) {
                        context.report({
                            node: node,
                            message: `Please don't use "#${member?.key?.name}" instead of "private ${member?.key?.name}"`,
                            fix: fixer => {
                                const [start] = member.range ?? [];

                                return fixer.replaceTextRange(
                                    [start, start + 1],
                                    'private ',
                                );
                            },
                        });
                    }
                });
            },
        };
    },
};
