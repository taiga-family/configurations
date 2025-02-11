module.exports = {
    printWidth: 120,
    parser: 'html',
    plugins: [require.resolve('prettier-plugin-organize-attributes')],
    attributeGroups: ['^(id|name)$', '^x$', '^y$', '^xmlns$', '$DEFAULT'],
    singleAttributePerLine: false,
};
