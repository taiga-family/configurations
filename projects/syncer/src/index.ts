#!/usr/bin/env node

import path from 'node:path';

import {tuiSyncVersions} from './sync-versions';

interface SyncerOptions {
    includePaths: readonly string[];
    matchPackageNames: readonly string[];
    ignorePackageNames: readonly string[];
}

const packageJson: Record<string, any> = require(
    path.resolve(process.cwd(), './package.json'),
);

const syncerOptions: SyncerOptions | null = packageJson?.syncer ?? null;

if (syncerOptions) {
    tuiSyncVersions({
        newVersion: packageJson.version,
        includePaths: syncerOptions.includePaths,
        matchPackageNames: syncerOptions.matchPackageNames,
        ignorePackageNames: syncerOptions.ignorePackageNames,
    });
} else {
    throw new Error(`Syncer options not found: ${JSON.stringify(packageJson)}`);
}
