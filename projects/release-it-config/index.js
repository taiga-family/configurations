const path = require('node:path').resolve(
    process.cwd(),
    'node_modules/@taiga-ui/auto-changelog-config',
);

const changelog = `npx auto-changelog -c ${path}/index.json --template ${path}/changelog-template.hbs --handlebars-setup ${path}/setup.js`;

/* eslint-disable no-template-curly-in-string */
module.exports = {
    git: {
        commitMessage: 'chore(release): v${version}',
        requireBranch: 'main',
        tagName: 'v${version}',
    },
    github: {
        release: true,
        releaseNotes: `${changelog} --unreleased-only --stdout`,
    },
    hooks: {
        'after:bump': [
            `${changelog} -p`,
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
