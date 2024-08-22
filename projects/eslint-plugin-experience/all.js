const tsconfig =
    projectJsonExist('tsconfig.eslint.json') || projectJsonExist('tsconfig.json');
const parserOptions = tsconfig
    ? {
          project: [tsconfig],
      }
    : {
          EXPERIMENTAL_useProjectService: {
              maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: Infinity,
          },
      };

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        'cypress/globals': true,
        es6: true,
        es2024: true,
        'jest/globals': true,
        jquery: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['file-progress', '@taiga-ui/experience'],
    ignorePatterns: [
        '*/icons/all.ts',
        '**/tests-report/**',
        '**/snapshots/**',
        '**/test-results/**',
        '404.html',
        '*.jpg',
        '*.svg',
        '*.less',
        '*.scss',
        '*.txt',
        '*.png',
        '*.jpg',
        '*.webmanifest',
        '*.pdf',
        '*.mp3',
        '*.ogv',
        '*.mp4',
        '*.ico',
        '*.xml',
        '*.md',
        'LICENSE',
        'jest.preset.js',
        '*.config.js',
        'node_modules',
        'dist',
        '**/node_modules/**',
        '**/*@dasherize__/**',
        '**/coverage/**',
        'eslintrc.js',
        '.eslintrc.js',
        '**/*.d.ts',
        '**/dist/**',
        '**/docs/**',
        '.cache/**',
        '.git/**',
        '.idea/**',
    ],
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    root: true,
    settings: {
        progress: {
            hide: false,
            successMessage: 'Lint done...',
        },
        react: {
            version: '18',
        },
    },
    rules: {
        'file-progress/activate':
            process.env.TUI_CI === 'true' ||
            !!process.env.CI || // Another CI
            !!process.env.GITHUB_ACTION || // Github CI
            !!process.env.GITLAB_CI || // Gitlab CI
            !!process.env.CIRCLECI || // Circle CI
            !!process.env.TF_BUILD || // Azure CI
            !!process.env.CIRRUS_CI || // Cirrus CI
            !!process.env.BUILDKITE || // Build Kite CI
            !!process.env.HEROKU_TEST_RUN_ID || // Heroku CI
            !!process.env.CODEBUILD_BUILD_ID || // CodeBuild CI
            !!process.env.TEAMCITY_VERSION || // TeamCity CI
            !!process.env.BUILD_ID // Jenkins/Hudson
                ? 0
                : 1,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js'],
            parser: '@typescript-eslint/parser',
            plugins: [
                '@babel',
                '@typescript-eslint',
                'rxjs',
                'import',
                'react',
                'simple-import-sort',
                'unicorn',
                'decorator-position',
                'prettier',
                'node-import',
                'unused-imports',
                'sonarjs',
                '@stylistic',
                '@stylistic/js',
                '@stylistic/ts',
                '@stylistic/plus',
            ],
            extends: [
                'eslint-config-airbnb-base',
                'plugin:eslint-comments/recommended',
                'plugin:promise/recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:rxjs/recommended',
                'plugin:sonarjs/recommended-legacy',
                'prettier',
            ],
            parserOptions: {
                ecmaVersion: 'latest',
                errorOnTypeScriptSyntacticAndSemanticIssues: false,
                errorOnUnknownASTType: true,
                sourceType: 'module',
                warnOnUnsupportedTypeScriptVersion: false,
                ...parserOptions,
            },
            rules: {
                '@angular-eslint/sort-lifecycle-methods': 'error',
                '@stylistic/padding-line-between-statements': [
                    'error',
                    {blankLine: 'always', next: 'block', prev: '*'},
                    {blankLine: 'always', next: '*', prev: 'block'},
                    {blankLine: 'always', next: 'block-like', prev: '*'},
                    {blankLine: 'always', next: '*', prev: 'block-like'},
                    {blankLine: 'always', next: 'return', prev: '*'},
                    {blankLine: 'always', next: '*', prev: 'directive'},
                    {blankLine: 'always', next: ['interface', 'type'], prev: '*'},
                    {blankLine: 'always', next: '*', prev: ['const', 'let', 'var']},
                    {blankLine: 'always', next: 'class', prev: '*'},
                    {blankLine: 'always', next: '*', prev: 'class'},
                    {
                        blankLine: 'any',
                        next: ['const', 'let', 'var', 'export'],
                        prev: ['const', 'let', 'var', 'export'],
                    },
                    {blankLine: 'any', next: ['case', 'default'], prev: '*'},
                    {blankLine: 'any', next: '*', prev: ['case', 'default']},
                    {blankLine: 'any', next: 'directive', prev: 'directive'},
                ],
                '@stylistic/ts/func-call-spacing': 'error',
                '@stylistic/ts/lines-between-class-members': [
                    'error',
                    'always',
                    {exceptAfterOverload: true, exceptAfterSingleLine: true},
                ],
                '@stylistic/ts/member-delimiter-style': 'error',
                '@stylistic/ts/quotes': [
                    'error',
                    'single',
                    {
                        avoidEscape: true,
                    },
                ],
                '@stylistic/ts/type-annotation-spacing': 'error',
                '@taiga-ui/experience/decorator-key-sort': [
                    'error',
                    {
                        Component: [
                            'moduleId',
                            'standalone',
                            'signal',
                            'selector',
                            'imports',
                            'template',
                            'templateUrl',
                            'styleUrls',
                            'styles',
                            'encapsulation',
                            'changeDetection',
                            'providers',
                            'viewProviders',
                            'animations',
                            'entryComponents',
                            'preserveWhitespaces',
                            'interpolation',
                            'hostDirectives',
                            'host',
                        ],
                        Directive: [
                            'standalone',
                            'selector',
                            'inputs',
                            'outputs',
                            'providers',
                            'exportAs',
                            'queries',
                            'hostDirectives',
                            'host',
                            'jit',
                        ],
                        Injectable: ['providedIn'],
                        NgModule: [
                            'id',
                            'jit',
                            'imports',
                            'declarations',
                            'providers',
                            'exports',
                            'entryComponents',
                            'bootstrap',
                            'schemas',
                        ],
                        Pipe: ['standalone', 'name', 'pure'],
                    },
                ],
                '@taiga-ui/experience/injection-token-description': 'error',
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
                '@taiga-ui/experience/no-implicit-public': 'error',
                '@taiga-ui/experience/no-private-esnext-fields': 'error',
                '@taiga-ui/experience/no-simple-for-of': 'error',
                '@taiga-ui/experience/standalone-imports-sort': 'error',
                '@taiga-ui/experience/strict-tui-doc-example': 'error',
                '@typescript-eslint/array-type': [
                    'error',
                    {default: 'array-simple', readonly: 'array-simple'},
                ],
                '@typescript-eslint/await-thenable': 'error',
                '@typescript-eslint/ban-ts-comment': 'error',
                '@typescript-eslint/consistent-generic-constructors': 'error',
                '@typescript-eslint/consistent-indexed-object-style': 'error',
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'allow-as-parameter',
                    },
                ],
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/consistent-type-imports': [
                    'error',
                    {
                        disallowTypeAnnotations: false,
                        /*
                           One important difference is that import { type x } from 'x'
                           will be compiled to import 'x', so x will be included in
                           a bundle and any side effects of the code will run.
                           Import type { x } from 'x' will not edit any import.
                         */
                        fixStyle: 'separate-type-imports',
                        prefer: 'type-imports',
                    },
                ],
                '@typescript-eslint/dot-notation': [
                    'error',
                    {
                        allowIndexSignaturePropertyAccess: true,
                        allowPrivateClassPropertyAccess: true,
                        allowProtectedClassPropertyAccess: true,
                    },
                ],
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                        allowDirectConstAssertionInArrowFunctions: true,
                        allowExpressions: true,
                        allowHigherOrderFunctions: true,
                        allowTypedFunctionExpressions: true,
                    },
                ],
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        overrides: {
                            accessors: 'explicit',
                            constructors: 'no-public',
                            methods: 'explicit',
                            parameterProperties: 'explicit',
                            properties: 'explicit',
                        },
                    },
                ],
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: [
                            'signature',
                            'readonly-signature',
                            'public-static-field',
                            'protected-static-field',
                            '#private-static-field',
                            'private-static-field',
                            'private-decorated-field',
                            'protected-abstract-field',
                            'public-abstract-field',
                            '#private-instance-field',
                            'private-decorated-field',
                            'private-instance-field',
                            'protected-decorated-field',
                            'protected-instance-field',
                            'public-decorated-field',
                            'public-instance-field',
                            'private-constructor',
                            'protected-constructor',
                            'public-constructor',
                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',
                            '#private-static-method',
                            'public-abstract-get',
                            'public-abstract-set',
                            'protected-abstract-get',
                            'protected-abstract-set',
                            'public-abstract-method',
                            'protected-abstract-method',
                            ['public-decorated-set', 'public-decorated-get'],
                            ['public-set', 'public-get'],
                            'public-decorated-method',
                            'public-instance-method',
                            ['protected-decorated-set', 'protected-decorated-get'],
                            ['protected-set', 'protected-get'],
                            'protected-decorated-method',
                            'protected-instance-method',
                            ['private-decorated-set', 'private-decorated-get'],
                            ['private-set', 'private-get'],
                            'private-decorated-method',
                            'private-instance-method',
                            '#private-instance-method',
                        ],
                    },
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        format: ['PascalCase', 'UPPER_CASE'],
                        selector: 'typeLike',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported'],
                        selector: 'class',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported', 'abstract'],
                        selector: 'class',
                    },
                    {
                        format: ['camelCase'],
                        modifiers: ['exported'],
                        selector: 'function',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported'],
                        selector: 'interface',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['exported'],
                        selector: 'typeAlias',
                    },
                    {
                        format: null,
                        modifiers: ['destructured'],
                        selector: 'variable',
                    },
                    {
                        filter: '__non_webpack_require__',
                        format: null,
                        selector: 'variable',
                    },
                    {
                        format: ['camelCase', 'UPPER_CASE'],
                        selector: 'variable',
                    },
                    {
                        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
                        modifiers: ['global'],
                        selector: 'variable',
                    },
                    {
                        format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
                        modifiers: ['exported'],
                        selector: 'variable',
                    },
                    {
                        format: ['PascalCase'],
                        modifiers: ['abstract'],
                        selector: 'class',
                    },
                    {
                        format: ['StrictPascalCase'],
                        modifiers: ['exported'],
                        selector: 'enum',
                    },
                    {
                        format: ['PascalCase'],
                        selector: 'enumMember',
                    },
                    {
                        format: ['camelCase'],
                        selector: 'classMethod',
                    },
                    {
                        format: ['camelCase', 'UPPER_CASE'],
                        selector: 'classProperty',
                    },
                ],
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/no-duplicate-enum-values': 'error',
                '@typescript-eslint/no-duplicate-type-constituents': 'error',
                '@typescript-eslint/no-empty-function': [
                    'error',
                    {
                        allow: [
                            'methods',
                            'arrowFunctions',
                            'private-constructors',
                            'protected-constructors',
                            'overrideMethods',
                            'decoratedFunctions',
                        ],
                    },
                ],
                '@typescript-eslint/no-extra-non-null-assertion': 'error',
                '@typescript-eslint/no-extraneous-class': [
                    'error',
                    {
                        allowConstructorOnly: true,
                        allowEmpty: false,
                        allowStaticOnly: true,
                        allowWithDecorator: true,
                    },
                ],
                '@typescript-eslint/no-for-in-array': 'error',
                '@typescript-eslint/no-implied-eval': 'error',
                '@typescript-eslint/no-import-type-side-effects': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/no-namespace': ['error', {allowDeclarations: true}],
                '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/no-restricted-types': [
                    'error',
                    {
                        types: {
                            '{}': {
                                message:
                                    '`{}` actually means `any non-nullish value`.\n- If you want a type meaning `any object`, you probably want `object` instead.\n- If you want a type meaning `any value`, you probably want `unknown` instead.\n- If you want a type meaning `empty object`, you probably want `Record<string, never>` instead.',
                            },
                            BigInt: {
                                fixWith: 'bigint',
                                message: 'Use bigint instead',
                            },
                            Boolean: {
                                fixWith: 'boolean',
                                message: 'Use boolean instead',
                            },
                            Function: {
                                message:
                                    'The `Function` type accepts any function-like value.\nIt provides no type safety when calling the function, which can be a common source of bugs.\nIt also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.\nIf you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
                            },
                            Number: {
                                fixWith: 'number',
                                message: 'Use number instead',
                            },
                            Object: {
                                message:
                                    'The `Object` type actually means `any non-nullish value`, so it is marginally better than `unknown`.\n- If you want a type meaning `any object`, you probably want `object` instead.\n- If you want a type meaning `any value`, you probably want `unknown` instead.',
                            },
                            String: {
                                fixWith: 'string',
                                message: 'Use string instead',
                            },
                            Symbol: {
                                fixWith: 'symbol',
                                message: 'Use symbol instead',
                            },
                        },
                    },
                ],
                '@typescript-eslint/no-shadow': 'error',
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
                '@typescript-eslint/no-unnecessary-condition': 'error',
                '@typescript-eslint/no-unnecessary-qualifier': 'error',
                '@typescript-eslint/no-unnecessary-type-arguments': 'error',
                '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                '@typescript-eslint/no-unnecessary-type-constraint': 'error',
                '@typescript-eslint/no-unsafe-declaration-merging': 'error',
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                    },
                ],
                '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    {
                        allowNamedExports: false,
                        classes: false,
                        enums: true,
                        functions: false,
                        ignoreTypeReferences: true,
                        typedefs: true,
                        variables: true,
                    },
                ],
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/only-throw-error': 'error',
                '@typescript-eslint/prefer-as-const': 'error',
                '@typescript-eslint/prefer-find': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-includes': 'error',
                '@typescript-eslint/prefer-nullish-coalescing': 'error',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/prefer-readonly': ['error'],
                '@typescript-eslint/prefer-string-starts-ends-with': 'error',
                '@typescript-eslint/promise-function-async': [
                    'error',
                    {
                        allowedPromiseNames: ['Thenable'],
                        checkArrowFunctions: true,
                        checkFunctionDeclarations: true,
                        checkFunctionExpressions: true,
                        checkMethodDeclarations: true,
                    },
                ],
                '@typescript-eslint/require-array-sort-compare': 'error',
                '@typescript-eslint/require-await': 'error',
                '@typescript-eslint/restrict-plus-operands': 'error',
                '@typescript-eslint/sort-type-constituents': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
                '@typescript-eslint/triple-slash-reference': [
                    'error',
                    {
                        lib: 'always',
                        path: 'always',
                        types: 'always',
                    },
                ],
                '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
                curly: ['error', 'all'],
                'decorator-position/decorator-position': [
                    'error',
                    {
                        methods: 'above',
                        printWidth: 120,
                        properties: 'above',
                    },
                ],
                eqeqeq: [
                    'error',
                    'always',
                    {
                        null: 'ignore',
                    },
                ],
                'func-style': [
                    'error',
                    'declaration',
                    {
                        allowArrowFunctions: true,
                    },
                ],
                'guard-for-in': 'error',
                'import/first': 'error',
                'import/newline-after-import': ['error', {count: 1}],
                'import/no-cycle': 'error',
                'import/no-deprecated': 'error',
                'import/no-duplicates': 'error',
                'import/no-webpack-loader-syntax': 'error',
                'lines-around-comment': [
                    'error',
                    {
                        afterBlockComment: false,
                        afterLineComment: false,
                        allowArrayEnd: true,
                        allowArrayStart: true,
                        allowBlockEnd: true,
                        allowBlockStart: true,
                        allowClassEnd: true,
                        allowClassStart: true,
                        allowObjectEnd: true,
                        allowObjectStart: true,
                        applyDefaultIgnorePatterns: true,
                        beforeBlockComment: false,
                        beforeLineComment: false,
                    },
                ],
                'max-classes-per-file': ['error', 3],
                'max-depth': 'error',
                'max-nested-callbacks': ['error', 4],
                'no-bitwise': 'error',
                'no-case-declarations': 'error',
                'no-console': [
                    'error',
                    {
                        allow: ['info', 'assert', 'warn', 'error'],
                    },
                ],
                'no-constant-condition': 'error',
                'no-empty': ['error', {allowEmptyCatch: true}],
                'no-implicit-coercion': ['error', {allow: ['!!']}],
                'no-irregular-whitespace': 'error',
                'no-loop-func': 'error',
                'no-restricted-imports': [
                    'error',
                    {
                        patterns: [
                            {
                                group: ['rxjs/operators'],
                                message: "Don't use 'rxjs/operators' instead of 'rxjs'",
                            },
                            {
                                group: ['@angular/**'],
                                importNames: ['Inject'],
                                message: 'Please use `inject(Type)` function instead.',
                            },
                        ],
                    },
                ],
                'no-restricted-syntax': [
                    'error',
                    {
                        message:
                            'Don\'t declare enums, please use "const MyEnumType = { ... } as const;"',
                        selector: 'TSEnumDeclaration',
                    },
                    {
                        message:
                            "Don't use TuiDestroyService, please use `takeUntilDestroyed()` function instead.",
                        selector: "Identifier[name='TuiDestroyService']",
                    },
                    {
                        message:
                            'Always prefer using the host property over @HostListener. That decorator exists exclusively for backwards compatibility',
                        selector: "Identifier[name='HostListener']",
                    },
                    {
                        message:
                            'Always prefer using the host property over @HostBinding. That decorator exists exclusively for backwards compatibility',
                        selector: "Identifier[name='HostBinding']",
                    },
                    {
                        message:
                            'Use `map(() => value)` instead of `mapTo(value)`, the operator is deprecated',
                        selector: "CallExpression[callee.name='mapTo']",
                    },
                    {
                        message:
                            'Use `TUI_FALSE_HANDLER` please instead of `() => false`',
                        selector:
                            "ArrowFunctionExpression[params.length=0][body.raw='false'][body.value='false']",
                    },
                    {
                        message: 'Use `TUI_TRUE_HANDLER` please instead of `() => true`',
                        selector:
                            "ArrowFunctionExpression[params.length=0][body.raw='true'][body.value='true']",
                    },
                    {
                        message:
                            'Use `switchMap(() => stream$)` instead of `switchMapTo(stream$)`, the operator is deprecated',
                        selector: "CallExpression[callee.name='switchMapTo']",
                    },
                    {
                        message:
                            'Use `mergeMap` instead of `flatMap`, the operator is deprecated',
                        selector: "CallExpression[callee.name='flatMap']",
                    },
                    {
                        message:
                            "Use `map(x => x?.foo?.bar)` instead of `pluck('foo', 'bar')`",
                        selector: "CallExpression[callee.name='pluck']",
                    },
                    {
                        message:
                            'Provide initial value to .reduce() method. Possible runtime error: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value',
                        selector:
                            "CallExpression[arguments.length=1] > MemberExpression.callee > Identifier.property[name='reduce']",
                    },
                    {
                        message: 'Please use `inject(Type)` function instead.',
                        selector: "Decorator[expression.callee.name='Inject']",
                    },
                    {
                        message:
                            'Please use `inject(Type, { self: true })` function instead.',
                        selector: "Decorator[expression.callee.name='Self']",
                    },
                    {
                        message:
                            'Please use `inject(Type, { skipSelf: true })` function instead.',
                        selector: "Decorator[expression.callee.name='SkipSelf']",
                    },
                    {
                        message:
                            'Please use `inject(Type, { optional: true })` function instead.',
                        selector: "Decorator[expression.callee.name='Optional']",
                    },
                    {
                        message:
                            'Please use `inject(Type, { host: true })` function instead.',
                        selector: "Decorator[expression.callee.name='Host']",
                    },
                    {
                        message: 'Please use `inject(INJECTOR)` instead',
                        selector:
                            "CallExpression[callee.name='inject'][arguments.0.name='Injector']",
                    },
                ],
                'no-return-assign': ['error', 'always'],
                'no-useless-concat': 'error',
                'no-useless-escape': 'error',
                'no-useless-rename': [
                    'error',
                    {
                        ignoreDestructuring: true,
                        ignoreExport: false,
                        ignoreImport: false,
                    },
                ],
                'no-var': 'error',
                'no-void': ['error', {allowAsStatement: true}],
                'node-import/prefer-node-protocol': 'error',
                'prefer-template': 'error',
                'prettier/prettier': [
                    'error',
                    {
                        endOfLine: 'auto',
                    },
                ],
                'promise/catch-or-return': 'error',
                'promise/param-names': 'error',
                'rxjs/no-compat': 'error',
                'rxjs/no-connectable': 'error',
                'rxjs/no-cyclic-action': 'error',
                'rxjs/no-ignored-observable': 'error',
                'rxjs/no-topromise': 'error',
                'rxjs/no-unsafe-catch': 'error',
                'rxjs/no-unsafe-first': 'error',
                'rxjs/no-unsafe-switchmap': 'error',
                'rxjs/throw-error': 'error',
                'simple-import-sort/exports': 'error',
                'simple-import-sort/imports': 'error',
                'sonarjs/no-identical-functions': 'error',
                'sonarjs/no-inverted-boolean-check': 'error',
                'spaced-comment': [
                    'error',
                    'always',
                    {
                        markers: ['/'],
                    },
                ],
                'unicorn/consistent-destructuring': 'error',
                'unicorn/consistent-empty-array-spread': 'error',
                'unicorn/escape-case': 'error',
                'unicorn/filename-case': [
                    'error',
                    {
                        case: 'kebabCase',
                    },
                ],
                'unicorn/new-for-builtins': 'error',
                'unicorn/no-array-push-push': 'error',
                'unicorn/no-await-in-promise-methods': 'error',
                'unicorn/no-empty-file': 'error',
                'unicorn/no-magic-array-flat-depth': 'error',
                'unicorn/no-negation-in-equality-check': 'error',
                'unicorn/no-single-promise-in-promise-methods': 'error',
                'unicorn/no-typeof-undefined': 'error',
                'unicorn/no-unnecessary-polyfills': 'error',
                'unicorn/no-useless-spread': 'error',
                'unicorn/prefer-logical-operator-over-ternary': 'error',
                'unicorn/prefer-set-size': 'error',
                'unicorn/prefer-string-raw': 'error',
                'unicorn/prefer-string-replace-all': 'error',
                'unicorn/prefer-string-slice': 'error',
                'unicorn/require-number-to-fixed-digits-argument': 'error',
                'unused-imports/no-unused-imports': 'error',
                'vars-on-top': 'error',
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@taiga-ui/experience/no-implicit-public': 'off',
                '@typescript-eslint/consistent-return': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-member-accessibility': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-extraneous-class': 'off',
                'max-classes-per-file': 'off',
            },
        },
        {
            files: [
                '*.component.ts',
                '*.service.ts',
                '*.directive.ts',
                '*.pipe.ts',
                '*.module.ts',
            ],
            parser: '@typescript-eslint/parser',
            plugins: ['@angular-eslint/eslint-plugin'],
            rules: {
                '@angular-eslint/contextual-decorator': 'error',
                '@angular-eslint/contextual-lifecycle': 'error',
                '@angular-eslint/directive-selector': 'error',
                '@angular-eslint/no-attribute-decorator': 'error',
                '@angular-eslint/no-conflicting-lifecycle': 'error',
                '@angular-eslint/no-empty-lifecycle-method': 'error',
                '@angular-eslint/no-input-prefix': 'error',
                '@angular-eslint/no-output-on-prefix': 'error',
                '@angular-eslint/no-queries-metadata-property': 'error',
                '@angular-eslint/prefer-on-push-component-change-detection': 'error',
                '@angular-eslint/prefer-output-readonly': 'error',
                '@angular-eslint/relative-url-prefix': 'error',
                '@angular-eslint/use-lifecycle-interface': 'error',
                '@angular-eslint/use-pipe-transform-interface': 'error',
            },
        },
        {
            files: [
                '*.spec.*',
                '*.cy.*',
                '*.test.*',
                '*.unit.*',
                '*/__tests__/*',
                '*.fixture.ts',
            ],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@taiga-ui/experience/no-deep-imports': 'off',
                '@typescript-eslint/no-extraneous-class': 'off',
                '@typescript-eslint/no-shadow': 'off',
                'import/extensions': 'off',
                'import/no-unresolved': 'off',
                'max-classes-per-file': 'off',
                'max-nested-callbacks': ['error', 10],
                'prefer-promise-reject-errors': 'error',
                'rxjs/no-topromise': 'off',
            },
        },
        {
            files: ['**/*.cy.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'cypress'],
            extends: ['plugin:cypress/recommended'],
            rules: {
                'cypress/no-unnecessary-waiting': 'off',
                'cypress/unsafe-to-chain-command': 'off',
                'no-implicit-globals': 'error',
            },
        },
        {
            files: ['**/*.spec.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:jest/all'],
            rules: {
                'jest/expect-expect': 'off',
                'jest/max-expects': 'off',
                'jest/max-nested-describe': 'off',
                'jest/no-conditional-in-test': 'off',
                'jest/no-deprecated-functions': 'off',
                'jest/no-disabled-tests': 'off',
                'jest/no-done-callback': 'off',
                'jest/no-hooks': 'off',
                'jest/no-test-prefixes': 'error',
                'jest/prefer-called-with': 'off',
                'jest/prefer-each': 'off',
                'jest/prefer-expect-assertions': 'off',
                'jest/prefer-expect-resolves': 'off',
                'jest/prefer-hooks-on-top': 'off',
                /**
                 * If enabled we have
                 * Expected to be running in 'ProxyZone', but it was not found
                 */
                'jest/prefer-importing-jest-globals': 'off',
                'jest/prefer-lowercase-title': [
                    'error',
                    {
                        allowedPrefixes: [
                            'Tui',
                            'NaN',
                            'UTC',
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December',
                        ],
                        ignore: ['describe', 'test'],
                    },
                ],
                'jest/prefer-strict-equal': 'off',
                'jest/prefer-to-be-null': 'off',
                'jest/prefer-to-have-length': 'off',
                'jest/require-hook': 'off',
                'jest/require-to-throw-message': 'off',
                'jest/require-top-level-describe': [
                    'error',
                    {
                        maxNumberOfTopLevelDescribes: 1,
                    },
                ],
                'jest/unbound-method': 'off',
                'jest/valid-title': 'error',
            },
        },
        {
            files: ['**/*playwright*/*.spec.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:playwright/recommended'],
            rules: {
                'jest/prefer-importing-jest-globals': 'off',
            },
        },
        {
            files: ['*.html'],
            parser: '@angular-eslint/template-parser',
            extends: ['plugin:@angular-eslint/template/process-inline-templates'],
            rules: {
                '@angular-eslint/template/banana-in-box': 'error',
                '@angular-eslint/template/no-distracting-elements': 'error',
                '@angular-eslint/template/no-duplicate-attributes': 'error',
                '@angular-eslint/template/prefer-self-closing-tags': 'error',
                '@angular-eslint/template/table-scope': 'error',
            },
        },
        {
            files: ['*'],
            rules: {
                '@angular-eslint/component-class-suffix': 'off',
                '@angular-eslint/component-max-inline-declarations': 'off',
                '@angular-eslint/component-selector': 'off',
                '@angular-eslint/directive-class-suffix': 'off',
                '@angular-eslint/no-forward-ref': 'off',
                '@angular-eslint/no-host-metadata-property': 'off',
                '@angular-eslint/no-input-rename': 'off',
                '@angular-eslint/no-inputs-metadata-property': 'off',
                '@angular-eslint/no-lifecycle-call': 'off',
                '@angular-eslint/no-output-native': 'off',
                '@angular-eslint/no-output-rename': 'off',
                '@angular-eslint/no-outputs-metadata-property': 'off',
                '@angular-eslint/no-pipe-impure': 'off',
                '@angular-eslint/sort-ngmodule-metadata-arrays': 'off',
                '@angular-eslint/use-component-selector': 'off',
                '@angular-eslint/use-component-view-encapsulation': 'off',
                '@angular-eslint/use-injectable-provided-in': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/consistent-return': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-base-to-string': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-shadow': 'off',
                '@typescript-eslint/no-unnecessary-condition': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/prefer-nullish-coalescing': 'off',
                '@typescript-eslint/prefer-readonly-parameter-types': 'off',
                '@typescript-eslint/strict-boolean-expressions': 'off',
                camelcase: 'off',
                'class-methods-use-this': 'off',
                complexity: 'off',
                'consistent-return': 'off',
                'default-case': 'off',
                'default-case-last': 'off',
                'default-param-last': 'off',
                'dot-notation': 'off',
                'eslint-comments/disable-enable-pair': 'off',
                'eslint-comments/no-unlimited-disable': 'off',
                'func-name-matching': 'off',
                'func-names': 'off',
                'global-require': 'off',
                'grouped-accessor-pairs': 'off',
                'import/exports-last': 'off',
                'import/extensions': 'off',
                'import/no-default-export': 'off',
                'import/no-dynamic-require': 'off',
                'import/no-extraneous-dependencies': 'off',
                'import/no-relative-packages': 'off',
                'import/no-unresolved': 'off',
                'import/prefer-default-export': 'off',
                'lines-between-class-members': 'off',
                'max-params': 'off',
                'max-statements': 'off',
                'no-await-in-loop': 'off',
                'no-bitwise': 'off',
                'no-constructor-return': 'off',
                'no-continue': 'off',
                'no-dupe-class-members': 'off',
                'no-duplicate-imports': 'off',
                'no-empty-function': 'off',
                'no-param-reassign': 'off',
                'no-plusplus': 'off',
                'no-prototype-builtins': 'off',
                'no-redeclare': 'off',
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-underscore-dangle': 'off',
                'no-unused-expressions': 'off',
                'no-unused-vars': 'off',
                'no-use-before-define': 'off',
                'no-useless-constructor': 'off',
                'padding-line-between-statements': 'off',
                'prefer-destructuring': 'off',
                'promise/always-return': 'off',
                'promise/catch-or-return': 'off',
                'promise/no-callback-in-promise': 'off',
                'promise/no-nesting': 'off',
                quotes: 'off',
                'require-await': 'off',
                'rxjs/no-ignored-takewhile-value': 'off',
                'rxjs/no-nested-subscribe': 'off',
                'rxjs/no-unsafe-takeuntil': 'off',
                'sonarjs/cognitive-complexity': 'off',
                'sonarjs/deprecation': 'off',
                'sonarjs/different-types-comparison': 'off',
                'sonarjs/max-switch-cases': 'off',
                'sonarjs/no-commented-code': 'off',
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/no-nested-functions': 'off',
                'sonarjs/no-nested-template-literals': 'off',
                'sonarjs/slow-regex': 'off',
                'unicorn/no-anonymous-default-export': 'off',
                'unicorn/no-unsafe-regex': 'off',
            },
        },
    ],
};

/**
 * @param {string} filename
 * @return {string}
 */
function projectJsonExist(filename) {
    try {
        const path = require('node:path').resolve(filename);

        return require('node:fs').existsSync(path) ? path : '';
    } catch {
        return '';
    }
}
