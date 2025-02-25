import type {Linter} from 'eslint';
import {readFileSync} from 'fs';
import type {ConfigArray} from 'typescript-eslint';

import entryPoints from './configs/entry-points';
import recommended from './configs/recommended';
import taigaNaming from './configs/taiga-naming';
import noDeepImports from './rules/no-deep-imports';
import preferDeepImports from './rules/prefer-deep-imports';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

const plugin = {
    configs: {} as unknown as {
        readonly recommended: ConfigArray;
        readonly ['entry-points']: ConfigArray;
        readonly ['taiga-naming']: ConfigArray;
    },
    meta: {
        name: pkg.name,
        version: pkg.version,
    },
    rules: {
        'no-deep-imports': noDeepImports,
        'prefer-deep-imports': preferDeepImports,
    },
};

// https://eslint.org/docs/latest/extend/plugins
// assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
    ['entry-points']: [
        {
            files: ['**/*.ts', '**/*.js'],
            plugins: {'@taiga-ui/experience-next': plugin},
        },
        ...entryPoints,
    ],
    recommended: [
        {
            files: ['**/*.ts', '**/*.js'],
            plugins: {'@taiga-ui/experience-next': plugin},
        },
        ...recommended,
    ],
    ['taiga-naming']: [
        {
            files: ['**/*.ts', '**/*.js'],
            plugins: {'@taiga-ui/experience-next': plugin},
        },
        ...taigaNaming,
    ],
} as Linter.Config);

export default plugin;
