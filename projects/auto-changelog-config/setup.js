module.exports = function (
    /** @type {{ registerHelper: (arg0: string, arg1: { (context: any): any; (context: any): any; }) => void; }} */
    Handlebars,
) {
    Handlebars.registerHelper('replaceCommit', function (context) {
        const commit =
            /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\((.*?)\))?: (.*?)$/g;

        // @ts-ignore
        const string = context.fn(this);
        const parsed = Array.from(string.matchAll(commit) ?? [])[0] ?? [];
        const [, , , scope = '', title = ''] = parsed;

        return scope ? `**${scope.toLocaleLowerCase()}**: ${title}` : title;
    });

    Handlebars.registerHelper('replaceTitle', function (context) {
        // @ts-ignore
        const string = context.fn(this);

        return string.replace('v', '');
    });

    Handlebars.registerHelper(
        'ifeq',
        function (
            /** @type {any} */ a,
            /** @type {any} */ b,
            /** @type {{ fn: (arg0: any) => any; inverse: (arg0: any) => any; }} */ options,
        ) {
            if (a === b) {
                // @ts-ignore
                return options.fn(this);
            }

            // @ts-ignore
            return options.inverse(this);
        },
    );
};
