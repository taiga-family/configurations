/**
 * @description:
 * https://yeonjuan.github.io/html-eslint/docs/rules/no-inline-styles/
 */
module.exports = {
    overrides: [
        {
            files: ['*.html'],
            parser: '@html-eslint/parser',
            plugins: ['@html-eslint'],
            rules: {
                '@html-eslint/element-newline': [
                    'error',
                    {
                        skip: ['pre', 'code'],
                    },
                ],
                // Style
                '@html-eslint/id-naming-convention': ['error', 'kebab-case'],
                '@html-eslint/indent': 'error',
                // Accessibility
                '@html-eslint/no-abstract-roles': 'error',
                '@html-eslint/no-accesskey-attrs': 'error',
                '@html-eslint/no-aria-hidden-body': 'error',
                // Best Practice
                '@html-eslint/no-duplicate-attrs': 'error',
                '@html-eslint/no-duplicate-id': 'error',
                '@html-eslint/no-extra-spacing-attrs': [
                    'error',
                    {enforceBeforeSelfClose: true},
                ],
                '@html-eslint/no-inline-styles': 'error',
                '@html-eslint/no-multiple-empty-lines': 'error',
                // SEO
                '@html-eslint/no-multiple-h1': 'error',
                '@html-eslint/no-non-scalable-viewport': 'error',
                '@html-eslint/no-obsolete-tags': 'error',
                '@html-eslint/no-positive-tabindex': 'error',
                '@html-eslint/no-target-blank': 'error',
                '@html-eslint/no-trailing-spaces': 'error',
                '@html-eslint/quotes': 'error',
                '@html-eslint/require-button-type': 'off',
                '@html-eslint/require-closing-tags': [
                    'error',
                    {allowSelfClosingCustom: false, selfClosing: 'always'},
                ],
                '@html-eslint/require-frame-title': 'error',
                '@html-eslint/require-img-alt': [
                    'error',
                    {
                        substitute: ['[alt]', '[attr.alt]'],
                    },
                ],
                '@html-eslint/require-lang': 'error',
                '@html-eslint/require-li-container': 'error',
                '@html-eslint/require-meta-viewport': 'error',
                '@html-eslint/require-title': 'error',
                'eslint-comments/disable-enable-pair': 'off',
                'spaced-comment': 'off',
            },
        },
    ],
};
