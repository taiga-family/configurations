import {readFileSync, writeFileSync} from 'node:fs';

import {glob} from 'glob';

const INDENTATION = 4;

interface BumpDepsOptions {
    deps: Record<string, Record<string, unknown> | string>;
    isPeerDependency?: boolean;
    newVersion: string;
    prevVersion: string;
    matchPackageNames: readonly string[];
    ignorePackageNames: readonly string[];
}

interface Options {
    newVersion: string;
    includePaths: readonly string[];
    matchPackageNames: readonly string[];
    ignorePackageNames: readonly string[];
}

export function tuiSyncVersions(options: Options): void {
    const {includePaths, newVersion, ignorePackageNames, matchPackageNames} = options;

    const patterns = includePaths.map((pattern) =>
        pattern.endsWith('.json')
            ? pattern
            : `${pattern}/**/*(package.json|package-lock.json)`,
    );

    const files = patterns
        .map((pattern) => glob.sync(pattern, {ignore: '**/node_modules/**'}))
        .flatMap((files) => files)
        .filter((file) => !file.includes('node_modules'));

    for (const file of files) {
        const originalJSON = JSON.stringify(
            JSON.parse(readFileSync(file).toString()),
            null,
            INDENTATION,
        );
        const packageJson = JSON.parse(originalJSON);
        const prevVersion = packageJson.version;

        if (!prevVersion) {
            continue;
        }

        tuiUpdatePackageJsonStructure({
            isPackageLockFile: file.endsWith('-lock.json'),
            packageJson,
            prevVersion,
            newVersion,
            ignorePackageNames,
            matchPackageNames,
        });

        const updatedJSON = JSON.stringify(packageJson, null, 4);

        if (originalJSON !== updatedJSON) {
            writeFileSync(file, `${updatedJSON}\n`);
            console.info(`[synchronized]: ${file}`);
        } else {
            console.info(`[no changes]: ${file}`);
        }
    }
}

export function tuiBumpDeps(options: BumpDepsOptions): void {
    const {
        deps,
        prevVersion,
        newVersion,
        isPeerDependency,
        ignorePackageNames,
        matchPackageNames,
    } = options;

    Object.keys(deps)
        .filter((key) =>
            tuiIsMatchedPackageName({name: key, ignorePackageNames, matchPackageNames}),
        )
        .forEach((key) => {
            if (typeof deps[key] === 'string') {
                deps[key] = isPeerDependency
                    ? deps[key]?.replace(prevVersion, newVersion)
                    : `^${newVersion}`;
            } else if (deps[key]?.hasOwnProperty('requires')) {
                tuiBumpDeps({
                    deps:
                        (deps[key] as Record<string, Record<string, string>>)?.requires ??
                        {},
                    isPeerDependency,
                    ignorePackageNames,
                    prevVersion,
                    newVersion,
                    matchPackageNames,
                });
            }
        });
}

interface MatchedOptions {
    name: string | undefined;
    matchPackageNames: readonly string[];
    ignorePackageNames: readonly string[];
}

export function tuiIsMatchedPackageName(options: MatchedOptions): boolean {
    const {name, ignorePackageNames, matchPackageNames} = options;

    if (name && ignorePackageNames.includes(name)) {
        return false;
    }

    return !!matchPackageNames.find((match) => !!name?.match(new RegExp(match)));
}

interface UpdatePackageJsonOptions {
    isPackageLockFile: boolean;
    newVersion: string;
    prevVersion: string;
    packageJson: Record<string, Record<string, any> | string>;
    matchPackageNames: readonly string[];
    ignorePackageNames: readonly string[];
}

export function tuiUpdatePackageJsonStructure({
    packageJson,
    isPackageLockFile,
    ignorePackageNames,
    prevVersion,
    newVersion,
    matchPackageNames,
}: UpdatePackageJsonOptions): void {
    const {name, dependencies, peerDependencies, devDependencies, packages} = packageJson;

    if (
        typeof name === 'string' &&
        tuiIsMatchedPackageName({name, ignorePackageNames, matchPackageNames})
    ) {
        if ('version' in packageJson && typeof packageJson['version'] === 'string') {
            packageJson['version'] = newVersion;
        }
    }

    if (isObject(dependencies)) {
        tuiBumpDeps({
            deps: dependencies,
            prevVersion,
            newVersion,
            matchPackageNames,
            ignorePackageNames,
        });
    }

    if (isObject(peerDependencies)) {
        tuiBumpDeps({
            deps: peerDependencies,
            prevVersion,
            newVersion,
            isPeerDependency: true,
            matchPackageNames,
            ignorePackageNames,
        });
    }

    if (isObject(devDependencies)) {
        tuiBumpDeps({
            deps: devDependencies,
            prevVersion,
            newVersion,
            ignorePackageNames,
            matchPackageNames,
        });
    }

    if (isPackageLockFile && isObject(packages)) {
        for (const packageLockJson of Object.values(packages)) {
            if (
                !tuiIsMatchedPackageName({
                    name: packageLockJson?.name,
                    ignorePackageNames,
                    matchPackageNames,
                })
            ) {
                continue;
            }

            tuiUpdatePackageJsonStructure({
                packageJson: packageLockJson,
                prevVersion,
                newVersion,
                isPackageLockFile: true,
                ignorePackageNames,
                matchPackageNames,
            });
        }
    }
}

function isObject<T extends Record<string, any>>(
    value: unknown,
): value is NonNullable<T> {
    return typeof value === 'object' && !!value;
}
