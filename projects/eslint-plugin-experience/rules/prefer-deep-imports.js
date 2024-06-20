const fs = require('fs');
const glob = require('glob');

const MESSAGE_ID = `prefer-deep-imports`;
const ERROR_MESSAGE = `Import via root level entry point are prohibited for this package`;

module.exports = {
    create(context) {
        const {importFilter} = context.options[0] || {};

        return {
            [`ImportDeclaration[source.value=${importFilter}]`](
                importDeclaration,
                ...rest
            ) {
                const importedEntities = importDeclaration.specifiers;
                const packageName = importDeclaration.source.value;

                context.report({
                    fix: fixer => {
                        const allTsFiles = glob.globSync(
                            `node_modules/${packageName}/**/*.ts`,
                            {
                                ignore: {
                                    ignored: p => /\.spec.ts$/.test(p.name),
                                },
                            },
                        );
                        const importedEntitiesSourceFiles = importedEntities.map(
                            ({imported}) =>
                                allTsFiles.find(path => {
                                    const fileContent = fs.readFileSync(path, 'utf8');

                                    return fileContent.match(
                                        new RegExp(
                                            `(?<=export\\s(default\\s)?(abstract\\s)?\\w+\\s)\\b${imported.name}\\b`,
                                        ),
                                    );
                                }),
                        );
                        const entryPoints =
                            importedEntitiesSourceFiles.map(findNearestEntryPoint);
                        const newImports = importedEntities.map(
                            ({imported, local}, i) => {
                                const importedEntity =
                                    imported.name === local.name
                                        ? imported.name
                                        : `${imported.name} as ${local.name}`; // import {TUI_TEXTFIELD_OPTIONS as OPTIONS} from '@taiga-ui/core';

                                return `import ${importDeclaration.importKind === 'type ' ? 'type' : ''}{${importedEntity}} from '${entryPoints[i]}';`;
                            },
                        );

                        return fixer.replaceTextRange(
                            importDeclaration.range,
                            newImports.join('\n'),
                        );
                    },
                    messageId: MESSAGE_ID,
                    node: importDeclaration,
                });
            },
        };
    },
    meta: {
        docs: {description: ERROR_MESSAGE},
        fixable: `code`,
        messages: {
            [MESSAGE_ID]: ERROR_MESSAGE,
        },
        schema: [
            {
                additionalProperties: false,
                properties: {
                    // i.e. "/^@taiga-ui\\u002F(core|cdk|kit)$/"
                    importFilter: {
                        description: `RegExp string to detect import declarations for which this rule should be applied`,
                        type: `string`,
                    },
                },
                type: `object`,
            },
        ],
        type: `problem`,
    },
};

function findNearestEntryPoint(filePath) {
    const pathSegments = filePath.split('/');

    for (let i = pathSegments.length - 1; i >= 0; i--) {
        const possibleEntryPoint = pathSegments.slice(0, i).join('/');

        if (fs.existsSync(possibleEntryPoint + '/ng-package.json')) {
            return possibleEntryPoint.replace(/^node_modules\//, '');
        }
    }
}
