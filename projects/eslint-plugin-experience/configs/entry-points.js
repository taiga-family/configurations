const {globSync} = require('glob');
const {readFileSync} = require('node:fs');

const allPackageJSONs = globSync('**/package.json', {
    ignore: ['node_modules/**', 'dist/**'],
}).filter((path) => !readJSON(path).private);
const packageNames = allPackageJSONs.map((path) => readJSON(path).name).filter(Boolean);

module.exports = {
    overrides: [
        {
            files: allPackageJSONs.map((path) => path.replace('package.json', '**/*.ts')),
            parser: '@typescript-eslint/parser',
            excludedFiles: ['**/*.spec.ts', '**/*.cy.ts'],
            rules: {
                '@taiga-ui/experience/no-deep-imports': 'off',
                '@taiga-ui/experience/prefer-deep-imports': [
                    'error',
                    {
                        importFilter: packageNames,
                    },
                ],
            },
        },
    ],
};

/**
 * @param {import("fs").PathOrFileDescriptor} path
 */
function readJSON(path) {
    try {
        return JSON.parse(readFileSync(path, 'utf8'));
    } catch {
        return '';
    }
}
