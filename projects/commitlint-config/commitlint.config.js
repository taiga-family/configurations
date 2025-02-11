import fs from 'node:fs';

import conventional from '@commitlint/config-conventional';

export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': () => {
            function getTypes(dir) {
                try {
                    const {readdirSync, statSync} = fs;

                    return readdirSync(dir).filter((entity) =>
                        statSync(`${dir}/${entity}`).isDirectory(),
                    );
                } catch {
                    return [];
                }
            }

            return [
                2,
                'always',
                [
                    'release',
                    'deprecate',
                    'schematics',
                    'all',
                    'deps',
                    ...getTypes('projects'),
                    ...getTypes('apps'),
                    ...getTypes('libs'),
                    ...getTypes('packages'),
                ],
            ];
        },
        'type-enum': () => {
            const [level, applicable, types] = conventional.rules['type-enum'];

            return [level, applicable, [...types, 'deprecate']];
        },
    },
};
