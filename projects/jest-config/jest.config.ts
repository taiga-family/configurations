/// <reference lib="es2021" />
import {resolve} from 'node:path';

import type {JestConfigWithTsJest} from 'ts-jest';
import {pathsToModuleNameMapper} from 'ts-jest';

process.env.TZ = 'Europe/Moscow';
process.env.FORCE_COLOR = 'true';
process.env.TS_JEST_DISABLE_VER_CHECKER = 'true';

const {compilerOptions} = require(resolve(process.cwd(), 'tsconfig.json'));
const maxParallel = require('node:os').cpus().length / 2;

export default {
    rootDir: process.cwd(),
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        resolve(process.cwd(), './node_modules/@taiga-ui/testing/setup-jest/index.ts'),
    ],
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.(ts|js|mjs|html|svg)$': [
            'jest-preset-angular',
            {
                tsconfig: resolve(process.cwd(), 'tsconfig.spec.json'),
                stringifyContentPathRegex: String.raw`\.html$`,
                isolatedModules: true,
                diagnostics: true,
            },
        ],
    },
    transformIgnorePatterns: [
        String.raw`node_modules/(?!@angular|rxjs|ngx-highlightjs|@maskito|@ng-web-apis|@taiga-ui\/event-plugins|@taiga-ui\/polymorpheus)`,
    ],
    testMatch: ['<rootDir>/projects/**/*.spec.ts'],
    testPathIgnorePatterns: ['/cypress/', '/playwright/', '/node_modules/'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['<rootDir>/**/*.ts'],
    coveragePathIgnorePatterns: ['node_modules', 'schematics', '.spec.ts', '.cy.ts'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: `<rootDir>/${compilerOptions.baseUrl}/`
            .replaceAll('./', '/')
            .replaceAll(/\/\/+/g, '/'),
    }),
    modulePathIgnorePatterns: ['.cache', 'dist', '<rootDir>/dist/'],
    coverageReporters: ['lcov', 'clover'],
    cacheDirectory: '<rootDir>/node_modules/.cache/jest',
    maxConcurrency: maxParallel,
    maxWorkers: maxParallel,
    verbose: !process.env.CI,
    bail: 1,
    reporters: ['default'],
    passWithNoTests: true,
    collectCoverage: true,
} satisfies JestConfigWithTsJest;
