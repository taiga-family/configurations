# @taiga-ui/stylelint-config

Common Stylelint configuration for taiga-ui projects

## Usage

1. Install from npm

```bash
npm i --save-dev @taiga-ui/stylelint-config
```

1. Create `stylelint.config.js` at project root

```json5
{
  extends: ['@taiga-ui/stylelint-config'],
}
```

More information about available at
[stylelint documentation](https://github.com/stylelint/stylelint/blob/main/docs/user-guide/configure.md)

### Available presets

- **less** - includes prettier config

```json5
{
  extends: ['@taiga-ui/stylelint-config/less'],
}
```

- **angular** - includes prettier config

```json5
{
  extends: ['@taiga-ui/stylelint-config/angular'],
}
```

- **angular-less** - combine angular and less configs

```json5
{
  extends: ['@taiga-ui/stylelint-config/angular-less'],
}
```

- **taiga** - combine angular, less, taiga configs

```json5
{
  extends: ['@taiga-ui/stylelint-config/taiga'],
}
```
