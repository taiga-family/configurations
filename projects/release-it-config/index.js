const path = require('node:path').resolve(
    process.cwd(),
    'node_modules/@taiga-ui/auto-changelog-config',
);

const changelog = `npx auto-changelog -c ${path}/index.json --handlebars-setup ${path}/setup.js`;

/* eslint-disable no-template-curly-in-string */
module.exports = {
    git: {
        commitMessage: 'chore(release): v${version}',
        requireBranch: 'main',
        tagName: 'v${version}',
    },
    github: {
        comments: {
            issue: ':rocket: _This issue has been resolved in v${version}. See [${releaseName}](${releaseUrl}) for release notes._',
            pr: ':rocket: _This pull request is included in v${version}. See [${releaseName}](${releaseUrl}) for release notes._',
            submit: true,
        },
        release: true,
        releaseNotes: `${changelog} --template ${path}/templates/note.hbs --unreleased-only --stdout --starting-version $\{version}`,
    },
    hooks: {
        'after:bump': [
            `${changelog} --template ${path}/templates/changelog.hbs -p`,
            'npx prettier CHANGELOG.md --write',
            'git add CHANGELOG.md',
            'npm run bump || echo "Missing script"',
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
