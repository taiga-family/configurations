import {readFileSync} from 'node:fs';

import {globSync} from 'glob';
import tseslint from 'typescript-eslint';

const allPackageJSONs = globSync('**/package.json', {
    ignore: ['node_modules/**', 'dist/**'],
}).filter((path) => !readJSON(path).private);
const packageNames = allPackageJSONs.map((path) => readJSON(path).name).filter(Boolean);

export default tseslint.config([
    {
        files: allPackageJSONs.map((path) => path.replace('package.json', '**/*.ts')),
        ignores: ['**/*.spec.ts', '**/*.cy.ts'],
        rules: {
            '@taiga-ui/experience-next/no-deep-imports': 'off',
            '@taiga-ui/experience-next/prefer-deep-imports': [
                'error',
                {
                    importFilter: packageNames,
                },
            ],
        },
    },
]);

function readJSON(path: string): Record<string, unknown> {
    try {
        return JSON.parse(readFileSync(path, 'utf8'));
    } catch {
        return {};
    }
}
