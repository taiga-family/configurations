const changelogConfig = require.resolve('@taiga-ui/auto-changelog-config');

/* eslint-disable no-template-curly-in-string */
module.exports = {
    git: {
        commitMessage: 'chore(release): v${version}',
        requireBranch: 'main',
        tagName: 'v${version}',
    },
    github: {
        release: true,
        releaseNotes: `npx auto-changelog -c ${changelogConfig} --unreleased-only --stdout`,
    },
    hooks: {
        'after:bump': [
            `npx auto-changelog -c ${changelogConfig} -p`,
            'npx prettier CHANGELOG.md --write',
            'git add CHANGELOG.md',
            'npm run bump',
        ],
        'after:release':
            'echo Successfully released ${name} v${version} to ${repo.repository}.',
    },
    npm: {
        allowSameVersion: true,
        publish: false,
        skipChecks: true,
    },
    verbose: true,
};
