const isMethodDefinition = require('./is-method');

/**
 * Returns a constructor from a provided node if it exists.
 * @param node {any}
 * @returns {*}
 */
module.exports = function getConstructorFromClassDeclaration(node) {
    const body = node.body;

    if (!body) {
        return;
    }

    const classElements = body.body;

    if (!classElements.length) {
        return;
    }

    const constructorMethodDefinition = classElements
        .filter((/** @type {import("eslint").Rule.Node} */ classElement) =>
            isMethodDefinition(classElement),
        )
        .find(
            (/** @type {{ kind: string; }} */ methodDefinition) =>
                methodDefinition.kind === 'constructor',
        );

    if (
        !constructorMethodDefinition ||
        !isMethodDefinition(constructorMethodDefinition)
    ) {
        return;
    }

    return constructorMethodDefinition;
};
