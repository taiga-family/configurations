module.exports = {
    overrides: [
        {
            files: ['**/**.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'perfectionist'],
            rules: {
                'perfectionist/sort-enums': [
                    'error',
                    {
                        type: 'natural',
                        order: 'asc',
                    },
                ],
                'perfectionist/sort-interfaces': [
                    'error',
                    {
                        type: 'natural',
                        order: 'asc',
                    },
                ],
                'perfectionist/sort-map-elements': [
                    'error',
                    {
                        type: 'natural',
                        order: 'asc',
                    },
                ],
                'perfectionist/sort-object-types': [
                    'error',
                    {
                        'ignore-case': false,
                        type: 'natural',
                        order: 'asc',
                    },
                ],
            },
        },
    ],
};
