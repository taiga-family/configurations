const path = require('node:path').resolve(
    process.cwd(),
    'node_modules/@taiga-ui/auto-changelog-config',
);

const changelog = `npx auto-changelog -c ${path}/index.json --handlebars-setup ${path}/setup.js`;

/* eslint-disable no-template-curly-in-string */
module.exports = {
    git: {
        addUntrackedFiles: true,
        changelog: false,
        commitMessage: 'chore(release): v${version}',
        pushArgs: ['--follow-tags'],
        requireBranch: 'main',
        requireCleanWorkingDir: false,
        tagName: 'v${version}',
    },
    github: {
        comments: {
            issue: ':rocket: _This issue has been resolved in v${version}. See [${releaseName}](${releaseUrl}) for release notes._',
            pr: ':rocket: _This pull request is included in v${version}. See [${releaseName}](${releaseUrl}) for release notes._',
            submit: false,
        },
        release: true,
        releaseNotes: `${changelog} --template ${path}/templates/note.hbs --unreleased-only --stdout`,
    },
    hooks: {
        'after:bump': [
            'git tag v${version} > /dev/null', // for include last tag inside CHANGELOG
            'echo "new version is v${version}"',
            `${changelog} --template ${path}/templates/changelog.hbs -p > /dev/null`,
            'npx prettier CHANGELOG.md --write > /dev/null',
            'git fetch --prune --prune-tags origin', // cleanup git workspace
            'git add CHANGELOG.md',
            'npx syncer > /dev/null || echo "Nothing syncing"',
        ],
        'after:release':
            'echo Successfully released ${name} v${version} to ${repo.repository}.',
        'before:init': 'git fetch --prune --prune-tags origin',
        release: 'npm run release',
    },
    npm: {
        allowSameVersion: true,
        publish: false,
        skipChecks: true,
    },
    verbose: true,
};
