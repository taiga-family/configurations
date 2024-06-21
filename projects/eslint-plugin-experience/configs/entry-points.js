const {globSync} = require('glob');
const {readFileSync} = require('fs');

const allPackageJSONs = globSync(`**/package.json`, {
    ignore: ['node_modules/**', 'dist/**'],
}).filter(path => !readJSON(path).private);
const packageNames = allPackageJSONs.map(path => readJSON(path).name);

module.exports = {
    overrides: [
        {
            files: allPackageJSONs.map(path => path.replace('package.json', '**/*.ts')),
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

function readJSON(path) {
    try {
        return JSON.parse(readFileSync(path, 'utf8'));
    } catch {
        return '';
    }
}
