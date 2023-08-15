module.exports = {
    $schema:
        'https://raw.githubusercontent.com/streetsidesoftware/master/cspell.schema.json',
    language: 'en,ru,ar,lorem',
    caseSensitive: false,
    useGitignore: true,
    files: ['*/*.*'],
    import: [
        './configs/locales/latin.json',
        './configs/locales/dutch.json',
        './configs/locales/arabic.json',
        './configs/locales/ru.json',
        './configs/common.json',
        './configs/names.json',
        './configs/countries.json',
        './configs/web-keywords.json',
        './configs/software.json',
        './configs/taiga-ui.json',
        './configs/angular.json',
        './configs/resources.json',
        './configs/star-wars.json',
        './configs/ci-cd.json',
    ],
};
