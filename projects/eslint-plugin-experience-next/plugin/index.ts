import type {Linter} from 'eslint';

import noDeepImports from './no-deep-imports';

const plugin = {
    meta: {
        name: '@taiga-ui/experience',
    },
    configs: {} as unknown as {
        readonly recommended: {readonly rules: Readonly<Linter.RulesRecord>};
    },
    rules: {
        'no-deep-imports': noDeepImports,
    },
};

// https://eslint.org/docs/latest/extend/plugins
// assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
    recommended: [
        {
            plugins: {
                '@taiga-ui/experience': plugin,
            },
            rules: {
                '@taiga-ui/experience/no-deep-imports': [
                    'error',
                    {
                        currentProject: String.raw`(?<=projects/)([-\w]+)`,
                        ignoreImports: [
                            String.raw`\?raw`,
                            '@taiga-ui/testing/cypress',
                            '@taiga-ui/testing/setup-jest',
                        ],
                    },
                ],
            },
        },
    ],
} as Linter.Config);

export default plugin;
