module.exports = {
  extends: ['plugin:hydrogen/recommended', 'plugin:hydrogen/typescript', 'plugin:storybook/recommended'],
  rules: {
    'node/no-missing-import': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off'
  }
};