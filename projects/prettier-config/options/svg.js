module.exports = {
    attributeGroups: ['^(id|name)$', '^x$', '^y$', '^xmlns$', '$DEFAULT'],
    parser: 'html',
    plugins: [require.resolve('prettier-plugin-organize-attributes')],
    printWidth: 120,
    singleAttributePerLine: false,
};
