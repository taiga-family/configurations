import config from '@taiga-ui/eslint-plugin-experience-next';

export default [
    ...config,
    {
        files: ['./projects/**/*.js'],
        rules: {
            'perfectionist/sort-objects': [
                'error',
                {
                    type: 'natural',
                    order: 'asc',
                    partitionByComment: true,
                    groups: [
                        '$schema',
                        'id',
                        'env',
                        'files',
                        'parser',
                        'plugins',
                        'extends',
                        'unknown',
                        'rules',
                        'overrides',
                    ],
                    customGroups: {
                        $schema: '$schema',
                        id: 'id',
                        env: 'env',
                        files: 'files',
                        parser: 'parser',
                        plugins: 'plugins',
                        extends: 'extends',
                        rules: 'rules',
                        overrides: 'overrides',
                    },
                },
            ],
        },
    },
];
