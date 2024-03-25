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
            ForOfStatement(node) {
                const isSimpleForOf = !findExpressions(node, [
                    'AwaitExpression',
                    'YieldExpression',
                    'BreakStatement',
                    'ContinueStatement',
                    'ReturnStatement',
                ]);

                if (isSimpleForOf) {
                    context.report({
                        message: `Don't use simple "for-of" instead of "forEach"`,
                        node,
                    });
                }
            },
        };
    },
    meta: {
        schema: [],
        type: 'problem',
    },
};

function findExpressions(node, keys) {
    if (keys.includes(node?.type) || keys.includes(node?.expression?.type)) {
        return true;
    }

    if (Array.isArray(node?.body)) {
        return node?.body?.some?.(item => findExpressions(item, keys));
    }

    if (node?.body) {
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
