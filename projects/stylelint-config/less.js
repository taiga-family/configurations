// cspell:disable
module.exports = {
    customSyntax: 'postcss-less', // support less parser out-of-the-box
    extends: ['./stylelint.config.js'],
    rules: {
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: [
                    // all less functions
                    'if',
                    'boolean',
                    'escape',
                    'e',
                    '%',
                    'replace',
                    'length',
                    'extract',
                    'range',
                    'each',
                    'ceil',
                    'floor',
                    'percentage',
                    'round',
                    'sqrt',
                    'abs',
                    'sin',
                    'asin',
                    'cos',
                    'acos',
                    'tan',
                    'atan',
                    'pi',
                    'pow',
                    'mod',
                    'min',
                    'max',
                    'isnumber',
                    'isstring',
                    'iscolor',
                    'iskeyword',
                    'isurl',
                    'ispixel',
                    'isem',
                    'ispercentage',
                    'isunit',
                    'isruleset',
                    'isdefined',
                    'color',
                    'image-size',
                    'image-width',
                    'image-height',
                    'convert',
                    'data-uri',
                    'default',
                    'unit',
                    'get-unit',
                    'svg-gradient',
                    'fade',
                ],
            },
        ],
    },
};
