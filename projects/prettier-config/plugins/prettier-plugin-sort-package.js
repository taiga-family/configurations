const prettier = import('prettier');
const sortPackageJson = import('sort-package-json');
const {parsers} = require('prettier/parser-babel');

const parser = parsers['json-stringify'];

exports.parsers = {
    'json-stringify': {
        ...parser,
        async parse(text, options) {
            const isPackageJson =
                options.filepath &&
                /package\.json$|ng-package\.json$/.test(options.filepath);

            if (!isPackageJson) {
                return parser.parse(text, options);
            }

            // To avoid parsing errors
            text = await (await prettier).format(text, {filepath: options.filepath});

            if (parser.preprocess) {
                text = parser.preprocess(text, options);
            }

            const json = JSON.parse(text);
            const unsortedScripts = deepClone(json?.scripts || {});
            const sorted = (await sortPackageJson).default(json);

            /**
             * @note: add the scripts field if it's provided
             * the scripts must be unsorted
             */
            // eslint-disable-next-line no-prototype-builtins
            if (json?.hasOwnProperty('scripts')) {
                sorted.scripts = unsortedScripts;
            }

            text = JSON.stringify(sorted);

            return parser.parse(text, options);
        },
    },
};

function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
}
