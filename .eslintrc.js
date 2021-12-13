module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'prettier/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/member-ordering': ['error'],
    'import/no-cycle': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' },
    ],
    'react/require-default-props': 'off',
  },
  overrides: [
    {
      files: ['src/utils/**/*'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
