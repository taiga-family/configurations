const preset = require(require('node:path').resolve(__dirname, './jest.config.js'));

export default preset;

/**
 * Should be here because
 * SyntaxError: Unexpected token 'export'
 * Jest encountered an unexpected token
 */
module.exports = preset;
