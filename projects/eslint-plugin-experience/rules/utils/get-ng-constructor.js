const getConstructorFromClassDeclaration = require('./get-constructor-from-class-declaration');
const isSupportedClass = require('./is-decorated-ng-class');

/**
 * @param node {import('eslint').Rule.Node}
 * @returns {*}
 */
module.exports = function getNgConstructor(node) {
    if (!isSupportedClass(node)) {
        return null;
    }

    const constructor = getConstructorFromClassDeclaration(node);

    if (!constructor) {
        return null;
    }

    return constructor;
};
