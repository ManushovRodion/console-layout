export default {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'prettier'],

  parserOptions: {
    project: './tsconfig.eslint.json',
  },

  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    'prettier/prettier': ['error'],
    'no-console': 1,
  },
};
