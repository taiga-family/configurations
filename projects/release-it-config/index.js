/* eslint-disable no-template-curly-in-string */
const rootPackage = require(require('node:path').resolve(process.cwd(), 'package.json'));
const path = require('node:path').resolve(
    process.cwd(),
    'node_modules/@taiga-ui/auto-changelog-config',
);

const changelog = `npx auto-changelog -c ${path}/index.json --handlebars-setup ${path}/setup.js`;
const prependEnabled = rootPackage['auto-changelog']?.prepend ?? false;
const template = rootPackage['auto-changelog']?.template ?? 'templates/changelog.hbs';
const prepend = prependEnabled ? '--prepend --starting-version v${version}' : '';

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
            `${changelog} ${prepend} --template ${path}/${template} -p > /dev/null`,
            'npx prettier CHANGELOG.md --write > /dev/null',
            'git fetch --prune --prune-tags origin', // cleanup git workspace
            'git add CHANGELOG.md',
            'npx syncer || echo ""',
            'npm run after:bump -s || echo ""',
        ],
        'after:release':
            'echo Successfully released ${name} v${version} to ${repo.repository}.',
        'before:init': 'git fetch --prune --prune-tags origin',
        'before:release': 'npm run release',
    },
    npm: {
        allowSameVersion: true,
        publish: false,
        skipChecks: true,
    },
    verbose: true,
};
