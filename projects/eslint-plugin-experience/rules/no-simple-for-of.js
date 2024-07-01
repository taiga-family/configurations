const ESLintUtils = require('@typescript-eslint/utils').ESLintUtils;

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
                const isSimpleForOf =
                    !node?.await &&
                    !isGenerator(context, node) &&
                    !findExpressions(
                        node,
                        new Set([
                            'AwaitExpression',
                            'YieldExpression',
                            'BreakStatement',
                            'ContinueStatement',
                            'ReturnStatement',
                        ]),
                    );

                if (isSimpleForOf) {
                    context.report({
                        message: 'Don\'t use simple "for-of" instead of "forEach"',
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
    if (keys.has(node?.type) || keys.has(node?.expression?.type)) {
        return true;
    }

    if (Array.isArray(node?.body)) {
        return node?.body?.some?.((item) => findExpressions(item, keys));
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

function isGenerator(context, node) {
    const right = ESLintUtils.getParserServices(context)?.getTypeAtLocation(node.right);
    const declaredProperties = right?.declaredProperties ?? [];
    const customClassWithNextAndIterator =
        !!declaredProperties.find((member) => member.escapedName === 'next') &&
        !!declaredProperties.find((member) =>
            member.escapedName.startsWith('__@iterator'),
        );

    return (
        right?.symbol?.escapedName === 'Generator' ||
        right?.symbol?.escapedName === 'AsyncGenerator' ||
        customClassWithNextAndIterator ||
        right?.members?.keys()?.[Symbol.toStringTag] === 'Map Iterator'
    );
}
