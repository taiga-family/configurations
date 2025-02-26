import type {Linter} from 'eslint';
import {readFileSync} from 'fs';
import type {ConfigArray} from 'typescript-eslint';

import recommended from './configs/recommended';
import taigaSpecific from './configs/taiga-specific';
import decoratorKeySort from './rules/decorator-key-sort';
import injectionTokenDescription from './rules/injection-token-description';
import noDeepImports from './rules/no-deep-imports';
import noImplicitPublic from './rules/no-implicit-public';
import noPrivateEsnextFields from './rules/no-private-esnext-fields';
import preferDeepImports from './rules/prefer-deep-imports';
import standaloneImportsSort from './rules/standalone-imports-sort';
import strictTuiDocExample from './rules/strict-tui-doc-example';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

const plugin = {
    configs: {} as unknown as {
        readonly recommended: ConfigArray;
        readonly ['taiga-specific']: ConfigArray;
    },
    meta: {
        name: pkg.name,
        version: pkg.version,
    },
    rules: {
        'decorator-key-sort': decoratorKeySort,
        'injection-token-description': injectionTokenDescription,
        'no-deep-imports': noDeepImports,
        'no-implicit-public': noImplicitPublic,
        'no-private-esnext-fields': noPrivateEsnextFields,
        'prefer-deep-imports': preferDeepImports,
        'standalone-imports-sort': standaloneImportsSort,
        'strict-tui-doc-example': strictTuiDocExample,
    },
};

// https://eslint.org/docs/latest/extend/plugins
// assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
    recommended: [
        {
            files: ['**/*.ts', '**/*.js'],
            plugins: {'@taiga-ui/experience-next': plugin},
        },
        ...recommended,
    ],
    ['taiga-specific']: [
        {
            files: ['**/*.ts', '**/*.js'],
            plugins: {'@taiga-ui/experience-next': plugin},
        },
        ...taigaSpecific,
    ],
} as Linter.Config);

export default plugin;
