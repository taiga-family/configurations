/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    meta: {
        type: 'problem',
        schema: [],
    },
    create(context) {
        return {
            /**
             * @type {import('eslint').Rule.Node}
             * @return {*}
             */
            ForOfStatement(node) {
                const isSimpleForOf = !findExpressions(node, [
                    'AwaitExpression',
                    'BreakStatement',
                    'ContinueStatement',
                    'ReturnStatement',
                ]);

                if (isSimpleForOf) {
                    context.report({
                        node: node,
                        message: `Don't use simple "for-of" instead of "forEach"`,
                    });
                }
            },
        };
    },
};

function findExpressions(node, keys) {
    if (keys.includes(node?.type) || keys.includes(node?.expression?.type)) {
        return true;
    }

    if (Array.isArray(node?.body)) {
        return node?.body?.some?.(item => findExpressions(item, keys));
    } else if (!!node?.body) {
        return findExpressions(node?.body, keys);
    }

    return (
        (node?.expression && findExpressions(node?.expression, keys)) ||
        (node?.consequent && findExpressions(node?.consequent, keys)) ||
        (node?.alternate && findExpressions(node?.alternate, keys)) ||
        (node?.left && findExpressions(node?.left, keys)) ||
        (node?.right && findExpressions(node?.right, keys)) ||
        false
    );
}
