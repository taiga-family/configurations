module.exports = {
    $schema:
        'https://raw.githubusercontent.com/streetsidesoftware/master/cspell.schema.json',
    caseSensitive: false,
    files: ['*/*.*'],
    ignorePaths: [
        '.git',
        'CHANGELOG.md',
        '.cspell.json',
        '**/dist/**',
        '**/cspell/**',
        '**/assets/**',
        '**/node_modules/**',
        '*.{log,svg,snap,png,ogv,yml}',
    ],
    ignoreRegExpList: [
        '\\(https?://.*?\\)',
        '\\/{1}.+\\/{1}',
        '\\%2F.+',
        '\\%2C.+',
        '\\ɵ.+',
        '\\ыва.+',
    ],
    import: [
        './configs/locales/latin.json',
        './configs/locales/dutch.json',
        './configs/locales/arabic.json',
        './configs/locales/ru.json',
        './configs/all.json',
    ],
    language: 'en,ru,ar,lorem',
    useGitignore: true,
};
