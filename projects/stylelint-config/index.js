module.exports = {
    $schema:
        'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/stylelintrc.json',
    plugins: ['stylelint-order', 'stylelint-no-px', 'stylelint-use-logical'],
    allowEmptyInput: true,
    customSyntax: 'postcss-less',
    defaultSeverity: 'error',
    rules: {
        'alpha-value-notation': 'number',
        'annotation-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'blockless-after-same-name-blockless'],
                severity: 'error',
            },
        ],
        'at-rule-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        'at-rule-no-vendor-prefix': [
            true,
            {
                severity: 'error',
            },
        ],
        'block-no-empty': [
            true,
            {
                severity: 'error',
            },
        ],
        'color-function-notation': 'legacy',
        'color-hex-length': [
            'short',
            {
                severity: 'error',
            },
        ],
        'color-no-invalid-hex': [
            true,
            {
                severity: 'error',
            },
        ],
        'comment-no-empty': [
            true,
            {
                severity: 'error',
            },
        ],
        'comment-whitespace-inside': [
            'always',
            {
                severity: 'error',
            },
        ],
        'csstools/use-logical': [
            'always',
            {
                direction: 'ltr',
                except: [
                    /^margin/i,
                    /^padding/i,
                    /^border-/i,
                    'top',
                    'right',
                    'bottom',
                    'left',
                    'width',
                    'min-width',
                    'max-width',
                    'height',
                    'min-height',
                    'max-height',
                ],
            },
        ],
        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-custom-property', 'first-nested'],
                ignore: ['after-comment'],
                severity: 'error',
            },
        ],
        'custom-property-no-missing-var-function': [
            true,
            {
                severity: 'error',
            },
        ],
        'declaration-block-no-duplicate-custom-properties': [
            true,
            {
                severity: 'error',
            },
        ],
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates'],
                severity: 'error',
            },
        ],
        'declaration-block-no-redundant-longhand-properties': null,
        'declaration-block-no-shorthand-property-overrides': [
            true,
            {
                severity: 'error',
            },
        ],
        'declaration-empty-line-before': [
            'always',
            {
                except: ['first-nested', 'after-declaration'],
                ignore: ['after-comment'],
                severity: 'error',
            },
        ],
        'declaration-no-important': null,
        'declaration-property-value-disallowed-list': null,
        'font-family-name-quotes': null,
        'font-family-no-duplicate-names': [
            true,
            {
                severity: 'error',
            },
        ],
        'font-family-no-missing-generic-family-keyword': [
            true,
            {
                severity: 'error',
            },
        ],
        'function-calc-no-unspaced-operator': [
            true,
            {
                severity: 'error',
            },
        ],
        'function-linear-gradient-no-nonstandard-direction': [
            true,
            {
                severity: 'error',
            },
        ],
        'function-name-case': [
            'lower',
            {
                severity: 'error',
            },
        ],
        'function-no-unknown': null,
        'function-url-no-scheme-relative': [
            true,
            {
                severity: 'error',
            },
        ],
        'function-url-quotes': null,
        'keyframe-block-no-duplicate-selectors': [
            true,
            {
                severity: 'error',
            },
        ],
        'keyframe-declaration-no-important': [
            true,
            {
                severity: 'error',
            },
        ],
        'length-zero-no-unit': [
            true,
            {
                ignore: ['custom-properties'],
                severity: 'error',
            },
        ],
        'media-feature-name-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        'media-feature-name-no-vendor-prefix': null,
        'meowtec/no-px': [
            true,
            {
                ignore: [
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
                    '16px',
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
        'named-grid-areas-no-invalid': [
            true,
            {
                severity: 'error',
            },
        ],
        'no-descending-specificity': null,
        'no-duplicate-at-import-rules': [
            true,
            {
                severity: 'error',
            },
        ],
        'no-duplicate-selectors': null,
        'no-empty-source': [
            true,
            {
                severity: 'error',
            },
        ],
        'no-invalid-position-at-import-rule': null,
        'no-irregular-whitespace': [
            true,
            {
                severity: 'error',
            },
        ],
        'no-unknown-animations': null,
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
        'property-disallowed-list': ['border-inline', 'padding-inline', 'margin-inline'],
        'property-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        'property-no-vendor-prefix': null,
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
                severity: 'error',
            },
        ],
        'selector-attribute-quotes': [
            'always',
            {
                severity: 'error',
            },
        ],
        'selector-max-id': null,
        'selector-max-specificity': null,
        'selector-max-type': null,
        'selector-no-qualifying-type': null,
        'selector-no-vendor-prefix': [
            true,
            {
                severity: 'error',
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        'selector-pseudo-element-colon-notation': [
            'double',
            {
                severity: 'error',
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['ng-deep'],
            },
        ],
        'selector-type-case': [
            'lower',
            {
                severity: 'error',
            },
        ],
        'selector-type-no-unknown': [
            true,
            {
                ignore: ['custom-elements'],
                ignoreTypes: ['/^/deep/'],
            },
        ],
        'shorthand-property-no-redundant-values': [
            true,
            {
                severity: 'error',
            },
        ],
        'string-no-newline': [
            true,
            {
                severity: 'error',
            },
        ],
        'time-min-milliseconds': null,
        'unit-allowed-list': [
            'px',
            'rem',
            'em',
            'deg',
            's',
            'ms',
            'dpcm',
            'turn',
            'ch',
            '%',
            'vh',
            'vw',
            'fr',
        ],
        'unit-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        'value-keyword-case': [
            'lower',
            {
                ignoreKeywords: ['currentColor', 'backgroundColor', 'optimizeLegibility'],
                ignoreProperties: ['/^--/', String.raw`/^\$/`],
                severity: 'error',
            },
        ],
        'value-no-vendor-prefix': [
            true,
            {
                severity: 'error',
            },
        ],
    },
};
