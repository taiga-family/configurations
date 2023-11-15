module.exports = {
    plugins: ['stylelint-order', 'stylelint-no-px'],
    extends: ['./stylelint.config.js'],
    rules: {
        'alpha-value-notation': 'number',
        'color-function-notation': 'legacy',
        'meowtec/no-px': [
            true,
            {
                ignore: [
                    // for cases with borders,
                    // box-shadows and other special cases
                    '-5px',
                    '-4px',
                    '-3px',
                    '-2px',
                    '-1px',
                    '0px',
                    '1px',
                    '2px',
                    '3px',
                    '4px',
                    '5px',
                    // for css hacks
                    '0.1px',
                    '0.2px',
                    '0.3px',
                    '0.4px',
                    '0.5px',
                    '0.6px',
                    '0.7px',
                    '0.8px',
                    '0.9px',
                ],
            },
        ],
        'order/order': [
            'less-mixins',
            'custom-properties',
            'dollar-variables',
            'declarations',
            'rules',
            'at-rules',
        ],
        'order/properties-order': [
            [
                'all',
                'content',
                'position',
                {
                    order: 'flexible',
                    properties: ['top', 'left', 'right', 'bottom'],
                },
                'z-index',
                'display',
            ],
            {
                unspecified: 'bottom',
            },
        ],
        'selector-max-specificity': [
            '0,5,0',
            {
                ignoreSelectors: [':host-context', ':first-child'],
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['ng-deep'],
            },
        ],
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements'],
                ignoreTypes: ['/^/deep/'],
            },
        ],
    },
};
