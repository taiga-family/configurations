import eslint from '@eslint/js';
import rxjs from '@smarttools/eslint-plugin-rxjs';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import angular from 'angular-eslint';
import progress from 'eslint-plugin-file-progress';
import jest from 'eslint-plugin-jest';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import {createRequire} from 'module';
import tseslint from 'typescript-eslint';

const require = createRequire(import.meta.url);

let angularVersion = 16;

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

const modernAngularRules = {
    defaultStandalone: 19,
    modernStyles: 17,
    preferControlFlow: 17,
    preferSignals: 17,
};

try {
    const major = require('@angular/cli').VERSION.major;

    angularVersion = parseInt(major, 10);
} catch {}

export default tseslint.config(
    progress.configs['recommended-ci'],
    require('eslint-plugin-de-morgan').configs.recommended,
    require('eslint-plugin-import').flatConfigs.recommended,
    require('eslint-plugin-import').flatConfigs.typescript,
    require('eslint-plugin-promise').configs['flat/recommended'],
    {
        ignores: [
            '*/icons/all.ts',
            '**/tests-report/**',
            '**/snapshots/**',
            '**/test-results/**',
            '**/.nx/**',
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
            '**/bin/**',
            '.cache/**',
            '.git/**',
            '.idea/**',
        ],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    require('eslint-config-prettier'),
    {
        files: ['**/*.ts', '**/*.js'],
        plugins: {
            '@stylistic': stylistic,
            '@stylistic/ts': stylisticTs,
            'decorator-position': require('eslint-plugin-decorator-position'),
            perfectionist: require('eslint-plugin-perfectionist'),
            prettier,
            rxjs,
            'simple-import-sort': simpleImportSort,
            sonarjs,
            unicorn,
            'unused-imports': unusedImports,
        },
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                errorOnTypeScriptSyntacticAndSemanticIssues: false,
                errorOnUnknownASTType: true,
                sourceType: 'module',
                warnOnUnsupportedTypeScriptVersion: false,
                ...parserOptions,
            },
            globals: globals.builtin,
        },
        processor: angular.processInlineTemplates,
        rules: {
            '@typescript-eslint/no-import-type-side-effects': 'error',
            'no-void': ['error', {allowAsStatement: true}],
            'sonarjs/no-identical-functions': 'error',
            '@angular-eslint/contextual-decorator': 'error',
            '@angular-eslint/contextual-lifecycle': 'error',
            '@angular-eslint/directive-selector': 'error',
            '@angular-eslint/no-attribute-decorator': 'error',
            '@angular-eslint/no-conflicting-lifecycle': 'error',
            '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
            '@angular-eslint/no-empty-lifecycle-method': 'error',
            '@angular-eslint/no-input-prefix': 'error',
            '@angular-eslint/no-output-on-prefix': 'error',
            '@angular-eslint/no-queries-metadata-property': 'error',
            '@angular-eslint/prefer-on-push-component-change-detection': 'error',
            '@angular-eslint/prefer-output-readonly': 'error',
            '@angular-eslint/prefer-signals':
                angularVersion >= modernAngularRules.preferSignals ? 'error' : 'off',
            '@angular-eslint/prefer-standalone':
                angularVersion >= modernAngularRules.defaultStandalone ? 'off' : 'error',
            '@angular-eslint/relative-url-prefix': 'error',
            '@angular-eslint/sort-lifecycle-methods': 'error',
            '@angular-eslint/use-lifecycle-interface': 'error',
            '@angular-eslint/use-pipe-transform-interface': 'error',
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
            '@taiga-ui/experience-next/decorator-key-sort': [
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
                        'styleUrl',
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
            '@taiga-ui/experience-next/injection-token-description': 'error',
            '@taiga-ui/experience-next/no-deep-imports': [
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
            '@taiga-ui/experience-next/no-implicit-public': 'error',
            '@taiga-ui/experience-next/no-private-esnext-fields': 'error',
            '@taiga-ui/experience-next/standalone-imports-sort': 'error',
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
            '@typescript-eslint/max-params': ['error', {countVoidThis: true, max: 5}],
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
            '@typescript-eslint/no-empty-object-type': 'error',
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
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/no-namespace': ['error', {allowDeclarations: true}],
            '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
            '@typescript-eslint/no-restricted-types': [
                'error',
                {
                    types: {
                        BigInt: {
                            fixWith: 'bigint',
                            message: 'Use bigint instead',
                        },
                        Boolean: {
                            fixWith: 'boolean',
                            message: 'Use boolean instead',
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
                        '{}': {
                            message:
                                '`{}` actually means `any non-nullish value`.\n- If you want a type meaning `any object`, you probably want `object` instead.\n- If you want a type meaning `any value`, you probably want `unknown` instead.\n- If you want a type meaning `empty object`, you probably want `Record<string, never>` instead.',
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
                    allowTaggedTemplates: false,
                    allowTernary: false,
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
            '@typescript-eslint/prefer-regexp-exec': 'error',
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
            '@typescript-eslint/switch-exhaustiveness-check': [
                'error',
                {
                    considerDefaultExhaustiveForUnions: true,
                    allowDefaultCaseForExhaustiveSwitch: true,
                    requireDefaultForNonUnion: false,
                },
            ],
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
                    printWidth: 120,
                    methods: 'above',
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
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            'import/first': 'error',
            'import/newline-after-import': ['error', {count: 1}],
            'import/no-absolute-path': 'error',
            'import/no-cycle': 'error',
            'import/no-duplicates': 'error',
            'import/no-mutable-exports': 'error',
            'import/no-self-import': 'error',
            'import/no-useless-path-segments': [
                'error',
                {
                    noUselessIndex: true,
                },
            ],
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
            'max-depth': 'error',
            'max-nested-callbacks': ['error', 4],
            'max-params': ['error', 5],
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
            'no-loop-func': 'error',
            'no-nested-ternary': 'error',
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
                            message: 'Please use `inject(Type)` function instead',
                        },
                        {
                            group: ['@taiga-ui/polymorpheus'],
                            importNames: ['POLYMORPHEUS_CONTEXT'],
                            message: 'Please use `injectContext()` function instead',
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
                    message: 'Use `TUI_FALSE_HANDLER` please instead of `() => false`',
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
            'perfectionist/sort-array-includes': [
                'error',
                {
                    groupKind: 'literals-first',
                    ignoreCase: true,
                    order: 'asc',
                    type: 'alphabetical',
                },
            ],
            'perfectionist/sort-maps': [
                'error',
                {
                    ignoreCase: true,
                    order: 'asc',
                    type: 'alphabetical',
                },
            ],
            'perfectionist/sort-sets': [
                'error',
                {
                    groupKind: 'literals-first',
                    ignoreCase: true,
                    order: 'asc',
                    type: 'alphabetical',
                },
            ],
            'perfectionist/sort-switch-case': [
                'error',
                {
                    ignoreCase: true,
                    order: 'asc',
                    type: 'alphabetical',
                },
            ],
            'perfectionist/sort-variable-declarations': [
                'error',
                {
                    ignoreCase: true,
                    order: 'asc',
                    type: 'alphabetical',
                },
            ],
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
            'rxjs/no-nested-subscribe': 'error',
            'rxjs/no-topromise': 'error',
            'rxjs/no-unsafe-catch': 'error',
            'rxjs/no-unsafe-first': 'error',
            'rxjs/no-unsafe-switchmap': 'error',
            'rxjs/throw-error': 'error',
            'simple-import-sort/exports': 'error',
            'simple-import-sort/imports': 'error',
            'sonarjs/no-inverted-boolean-check': 'error',
            'spaced-comment': [
                'error',
                'always',
                {
                    markers: ['/'],
                },
            ],
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
        files: ['**/*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            '@angular-eslint/consistent-component-styles':
                angularVersion >= modernAngularRules.modernStyles ? 'error' : 'off',
            '@angular-eslint/template/interactive-supports-focus': 'off',
            '@angular-eslint/template/label-has-associated-control': 'off',
            '@angular-eslint/template/no-distracting-elements': 'error',
            '@angular-eslint/template/no-duplicate-attributes': 'error',
            '@angular-eslint/template/no-negated-async': 'off',
            '@angular-eslint/template/prefer-control-flow':
                angularVersion >= modernAngularRules.preferControlFlow ? 'error' : 'off',
            '@angular-eslint/template/prefer-self-closing-tags': 'error',
            '@typescript-eslint/ban-ts-comment': 'off',
            'import/namespace': 'off',
        },
    },
    {
        files: ['**/*.pw.spec.ts'],
        ...playwright.configs['flat/recommended'],
        rules: {
            ...playwright.configs['flat/recommended'].rules,
            'playwright/no-networkidle': 'off',
            'jest/prefer-importing-jest-globals': 'off',
            'playwright/no-force-option': 'error',
            'playwright/no-skipped-test': 'error',
            'playwright/no-wait-for-selector': 'off',
            'playwright/no-wait-for-timeout': 'off',
        },
    },
    {
        files: ['**/*.spec.ts'],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
            '@typescript-eslint/no-extraneous-class': 'off',
            '@typescript-eslint/no-shadow': 'off',
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
            'max-nested-callbacks': 'off',
            'sonarjs/no-clear-text-protocols': 'off',
            /**
             * If enabled we have
             * Expected to be running in 'ProxyZone', but it was not found
             */
            'jest/valid-title': 'error',
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
        },
    },
    {
        files: ['**/*.cy.ts'],
        rules: {
            'cypress/no-unnecessary-waiting': 'off',
            'cypress/unsafe-to-chain-command': 'off',
            'max-nested-callbacks': 'off',
            'no-implicit-globals': 'error',
        },
    },
    {
        files: ['**/*.js'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            'no-template-curly-in-string': 'off',
        },
    },
    {
        files: ['**/*'],
        rules: {
            '@angular-eslint/use-injectable-provided-in': 'off',
            'sonarjs/no-invalid-await': 'off',
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
            '@angular-eslint/template/click-events-have-key-events': 'off',
            '@angular-eslint/use-component-selector': 'off',
            '@angular-eslint/use-component-view-encapsulation': 'off',
            '@typescript-eslint/adjacent-overload-signatures': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/class-literal-property-style': 'off',
            '@typescript-eslint/consistent-return': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-base-to-string': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-require-imports': 'off',
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
            'import/export': 'off',
            'import/exports-last': 'off',
            'import/extensions': 'off',
            'import/no-default-export': 'off',
            'import/no-deprecated': 'off',
            'import/no-dynamic-require': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/no-relative-packages': 'off',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'lines-between-class-members': 'off',
            'max-classes-per-file': 'off',
            'max-statements': 'off',
            'no-await-in-loop': 'off',
            'no-bitwise': 'off',
            'no-constant-binary-expression': 'off',
            'no-constructor-return': 'off',
            'no-continue': 'off',
            'no-dupe-class-members': 'off',
            'no-duplicate-imports': 'off',
            'no-empty-function': 'off',
            'no-irregular-whitespace': 'off',
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
            'react/no-is-mounted': 'off',
            'require-await': 'off',
            'rxjs/no-ignored-takewhile-value': 'off',
            'rxjs/no-unsafe-takeuntil': 'off',
            'sonarjs/aws-apigateway-public-api': 'off',
            'sonarjs/aws-ec2-rds-dms-public': 'off',
            'sonarjs/aws-ec2-unencrypted-ebs-volume': 'off',
            'sonarjs/aws-efs-unencrypted': 'off',
            'sonarjs/aws-iam-all-privileges': 'off',
            'sonarjs/aws-iam-all-resources-accessible': 'off',
            'sonarjs/aws-iam-privilege-escalation': 'off',
            'sonarjs/aws-iam-public-access': 'off',
            'sonarjs/aws-opensearchservice-domain': 'off',
            'sonarjs/aws-rds-unencrypted-databases': 'off',
            'sonarjs/aws-restricted-ip-admin-access': 'off',
            'sonarjs/aws-s3-bucket-granted-access': 'off',
            'sonarjs/aws-s3-bucket-insecure-http': 'off',
            'sonarjs/aws-s3-bucket-public-access': 'off',
            'sonarjs/aws-s3-bucket-server-encryption': 'off',
            'sonarjs/aws-s3-bucket-versioning': 'off',
            'sonarjs/aws-sagemaker-unencrypted-notebook': 'off',
            'sonarjs/aws-sns-unencrypted-topics': 'off',
            'sonarjs/aws-sqs-unencrypted-queue': 'off',
            'sonarjs/cognitive-complexity': 'off',
            'sonarjs/deprecation': 'off',
            'sonarjs/different-types-comparison': 'off',
            'sonarjs/duplicates-in-character-class': 'off',
            'sonarjs/function-return-type': 'off',
            'sonarjs/max-switch-cases': 'off',
            'sonarjs/new-cap': 'off',
            'sonarjs/no-angular-bypass-sanitization': 'off',
            'sonarjs/no-async-constructor': 'off',
            'sonarjs/no-commented-code': 'off',
            'sonarjs/no-duplicate-string': 'off',
            'sonarjs/no-empty-function': 'off',
            'sonarjs/no-misleading-array-reverse': 'off',
            'sonarjs/no-misused-promises': 'off',
            'sonarjs/no-nested-conditional': 'off',
            'sonarjs/no-nested-functions': 'off',
            'sonarjs/no-nested-template-literals': 'off',
            'sonarjs/no-os-command-from-path': 'off',
            'sonarjs/no-selector-parameter': 'off',
            'sonarjs/no-skipped-test': 'off',
            'sonarjs/no-unused-expressions': 'off',
            'sonarjs/os-command': 'off',
            'sonarjs/prefer-function-type': 'off',
            'sonarjs/pseudo-random': 'off',
            'sonarjs/public-static-readonly': 'off',
            'sonarjs/slow-regex': 'off',
            'sonarjs/sonar-prefer-regexp-exec': 'off',
            'sonarjs/todo-tag': 'off',
            'sonarjs/use-type-alias': 'off',
            'sonarjs/x-powered-by': 'off',
            'unicorn/consistent-destructuring': 'off',
            'unicorn/no-anonymous-default-export': 'off',
            'unicorn/no-unsafe-regex': 'off',
        },
    },
);

function projectJsonExist(filename: string): string {
    try {
        const path = require('node:path').resolve(filename);

        return require('node:fs').existsSync(path) ? path : '';
    } catch {
        return '';
    }
}
