# Shareable TypeScript config for Angular projects

[![image](https://badge.fury.io/js/%40taiga-ui%2Ftsconfig.svg)](https://badge.fury.io/js/%40taiga-ui%2Ftsconfig)
[![image](https://img.shields.io/npm/dw/@taiga-ui/tsconfig)](https://badge.fury.io/js/%40taiga-ui%2Ftsconfig)

### Quick start

```bash
$ npm install @taiga-ui/tsconfig -D
```

Add to your `tsconfig.json`:

```json5
{
  extends: '@taiga-ui/tsconfig',
  angularCompilerOptions: {
    // override shared angularCompilerOptions
    strictTemplates: true,
    disableTypeScriptVersionCheck: true,
  },
  compilerOptions: {
    // override shared compilerOptions
    outDir: 'dist',
    target: 'es2018',
    lib: ['es2018'],
    types: ['ng-dev-mode'],
    typeRoots: ['./node_modules/@types', './node_modules/@taiga-ui/tsconfig'],
  },
}
```

or:

```ts
/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

ngDevMode && console.log('My log');
```
