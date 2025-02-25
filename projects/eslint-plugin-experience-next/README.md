### `@taiga-ui/eslint-plugin-experience-next`

```bash
npm i -D eslint @taiga-ui/eslint-plugin-experience-next
```

`eslint.config.ts`

```js
import taiga from 'projects/eslint-plugin-experience-next';

export default [
  ...taiga.configs.recommended,
  // custom rules
  {
    files: ['**/legacy/**/*.ts'],
    rules: {
      '@angular-eslint/prefer-standalone': 'off',
    },
  },
  {
    files: ['**/*'],
    rules: {
      '@angular-eslint/template/button-has-type': 'off',
      '@angular-eslint/template/elements-content': 'off',
      '@typescript-eslint/max-params': 'off',
      'jest/prefer-importing-jest-globals': 'off',
      'sonarjs/prefer-nullish-coalescing': 'off',
    },
  },
];
```

**Attention**: package does not support commonjs, use `eslint.config.{ts,mjs,js}` instead of `eslint.config.cjs`
