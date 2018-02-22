
module.exports = {
  extends: 'google',
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true
  },
  rules: {
    'padded-blocks': 'off',
    'space-before-function-paren': ['error', 'always'],
    'max-len': ['error', 120],
    'arrow-parens': ['error', 'as-needed'],
    'no-multi-spaces': 'off',
    'comma-dangle': ['error', 'never']
  }
};
