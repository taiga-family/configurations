const prettier = import('prettier');
const sortPackageJson = import('sort-package-json');
const {parsers} = require('prettier/parser-babel');

const parser = parsers['json-stringify'];

exports.parsers = {
    'json-stringify': {
        ...parser,
        async parse(text, options) {
            const isPackageJson = options.filepath?.endsWith('package.json');

            // To avoid parsing errors
            text = await (await prettier).format(text, {filepath: options.filepath});

            if (parser.preprocess) {
                text = parser.preprocess(text, options);
            }

            const json = JSON.parse(text);
            const unsortedScripts = JSON.parse(JSON.stringify(json?.scripts || {}));
            const sorted = (await sortPackageJson).default(json);

            /**
             * @note: add the scripts field if it's provided
             * the scripts must be unsorted
             */
            // eslint-disable-next-line no-prototype-builtins
            if (isPackageJson && json?.hasOwnProperty('scripts')) {
                sorted.scripts = unsortedScripts;
            }

            text = JSON.stringify(sorted);

            return parser.parse(text, options);
        },
    },
};
