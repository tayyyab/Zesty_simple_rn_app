module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  semi: true,
  endOfLine: 'auto',
  rules: {
    'react-native/no-inline-styles': 1,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
        singleQuote: true,
        parser: 'flow',
      },
    ],
  },
};
