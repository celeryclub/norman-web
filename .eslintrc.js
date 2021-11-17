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
    'import/no-cycle': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' },
    ],
    'react/require-default-props': 'off',
  },
};
