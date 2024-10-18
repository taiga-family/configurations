/* eslint-disable no-template-curly-in-string */
const path = require('node:path').resolve(
    process.cwd(),
    'node_modules/@taiga-ui/auto-changelog-config',
);

const changelog = `npx auto-changelog -c ${path}/index.json --template ${path}/template.hbs --handlebars-setup ${path}/setup.js`;

module.exports = {
    plugins: {
        '@release-it/conventional-changelog': {
            gitRawCommitsOpts: {
                path: '.',
            },
            infile: false,
            path: '.',
            preset: 'conventionalcommits',
        },
    },
    git: {
        addUntrackedFiles: true,
        changelog: false,
        commitMessage: 'chore(release): v${version}',
        getLatestTagFromAllRefs: true,
        pushArgs: ['--follow-tags'],
        requireBranch: false,
        requireCleanWorkingDir: false,
        requireCommits: true,
        tagName: 'v${version}',
    },
    github: {
        comments: {
            issue: ':rocket: _This issue has been resolved in v${version}. See [${releaseName}](${releaseUrl}) for release notes._',
            pr: ':rocket: _This pull request is included in v${version}. See [${releaseName}](${releaseUrl}) for release notes._',
            submit: false,
        },
        release: true,
        releaseNotes: `${changelog} --unreleased-only --stdout`,
    },
    hooks: {
        'after:bump': [
            'git tag v${version} > /dev/null', // for include last tag inside CHANGELOG
            'echo "new version is v${version}"',
            `${changelog} --prepend --starting-version v$\{version} -p > /dev/null`,
            'npx prettier CHANGELOG.md --write > /dev/null',
            'git fetch --prune --prune-tags origin', // cleanup git workspace
            'git add CHANGELOG.md',
            'npx syncer || echo ""',
            'npm run after:bump -s || echo ""',
            'git add .',
        ],
        'after:release':
            'echo Successfully released ${name} v${version} to ${repo.repository}.',
        'before:init': 'git fetch --prune --prune-tags origin',
        'before:release': 'npm run release || echo ""',
    },
    npm: {
        allowSameVersion: true,
        publish: false,
        skipChecks: true,
    },
    verbose: true,
};
