
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
    'space-before-function-paren': ['error', 'always']
  }
};
