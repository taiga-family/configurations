const ESLintUtils = require('@typescript-eslint/utils').ESLintUtils;

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
    create(context) {
        return {
            MethodDefinition: node => checkImplicitPublic(context, node),
            PropertyDefinition: node => checkImplicitPublic(context, node),
            TSParameterProperty: node => checkImplicitPublic(context, node),
        };
    },
    meta: {
        fixable: 'code',
        schema: [],
        type: 'problem',
    },
};

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('eslint').Rule.Node} node
 */
function checkImplicitPublic(context, node) {
    const classRef = getClass(node);

    if (!classRef || node.kind === 'constructor' || !!node?.accessibility) {
        return;
    }

    const name = node?.key?.name || node?.parameter?.name;
    const services = ESLintUtils.getParserServices(context);
    const superClass = classRef?.superClass ?? null;
    const implements = classRef?.implements ?? [];

    let keyInheretedClass = false;
    let keyImplementedInsideOtherInterface = false;

    if (superClass) {
        const type = services.getTypeAtLocation(superClass);

        keyInheretedClass = type.symbol?.members.has(name) ?? false;
    }

    for (const implement of implements) {
        const type = services.getTypeAtLocation(implement);

        if (type.symbol?.members.has(name)) {
            keyImplementedInsideOtherInterface = true;
            break;
        }
    }

    let range = node?.parameter?.range ?? node.key.range ?? node.range;

    const hasPublicDecorators = getDecorators(node?.decorators ?? []).find(decorator =>
        ['Inject', 'Input', 'Output'].includes(decorator),
    );

    if (node.kind === 'set' || node.kind === 'get') {
        const [start, end] = node.key.range;

        range = [start - node.kind.length - 1, end - node.kind.length - 1];
    } else if (node.kind === 'method' && node.key?.object?.name === 'Symbol') {
        const [start, end] = range;

        range = [range[0] - 1, range[1] - 1];
    }

    if (node.type === 'PropertyDefinition' && node.decorators.length > 0) {
        const [, end] = node.decorators[node.decorators.length - 1]?.range;

        range = [end + 1, end + 2];
    }

    const marked =
        hasPublicDecorators || keyImplementedInsideOtherInterface || keyInheretedClass
            ? ` public `
            : ` protected `;

    context.report({
        fix: fixer => fixer.insertTextBeforeRange(range, marked),
        message: `${node.kind || 'property'} ${name} should be marked as ${marked.trim()}`,
        node,
    });
}

function getDecorators(decorators) {
    return decorators
        ?.map(decorator => decorator?.expression?.callee?.name)
        .filter(Boolean);
}

/**
 * @param {import('eslint').Rule.Node} node
 */
function getClass(node) {
    if (!!node.parent && node.parent?.type === 'ClassDeclaration') {
        return node.parent;
    } else if (!!node.parent) {
        return getClass(node.parent);
    }

    return null;
}
