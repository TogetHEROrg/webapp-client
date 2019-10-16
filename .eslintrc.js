module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'react/prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/order': 0,
    'no-undef': 0,
    'arrow-parens': 0,
    'jsx-a11y/alt-text': 0,
    'react/button-has-type': 0,
    'no-console': 0,
    'react/jsx-fragments': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-has-content': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
