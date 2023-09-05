const angularLess = require('./angular-less');
const offConfig = require('./off');

module.exports = {
    ...angularLess,
    customSyntax: angularLess.customSyntax,
    rules: {
        ...angularLess.rules,
        ...offConfig.rules,
        'selector-class-pattern':
            '^(_.*)|(t-.*)|(ProseMirror.*)|(tui-.*)|(ng-.*)|(hljs.*)$',
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
            // 'vw/vh' have a big problem in Safari, when developers set viewport=width~1280px in Application
        ],
    },
};
