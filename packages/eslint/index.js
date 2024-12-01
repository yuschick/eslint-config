export default {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', '@stylistic/ts'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  rules: {
    '@stylistic/ts/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['block', 'block-like', 'multiline-block-like', 'import', 'expression'],
        next: ['block', 'block-like', 'multiline-block-like', 'expression'],
      },
      { blankLine: 'always', prev: '*', next: ['export', 'return'] },
      { blankLine: 'always', prev: ['export', 'return'], next: '*' },
      {
        blankLine: 'always',
        prev: 'import',
        next: [
          'block-like',
          'block',
          'const',
          'export',
          'expression',
          'function',
          'if',
          'let',
          'return',
          'try',
          'var',
        ],
      },
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
        readonly: 'array',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: 'never',
          order: 'alphabetically-case-insensitive',
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: ['parameter'],
        format: ['camelCase'],
      },
      {
        selector: ['parameter'],
        modifiers: ['destructured'],
        format: ['camelCase'],
      },
      {
        selector: ['parameter', 'variable'],
        modifiers: ['unused'],
        leadingUnderscore: 'require',
        format: ['camelCase'],
      },
      {
        selector: ['enum', 'enumMember'],
        format: ['PascalCase'],
      },
      {
        selector: ['class', 'interface', 'typeAlias'],
        format: ['PascalCase'],
      },
      {
        selector: ['property', 'accessor'],
        modifiers: ['public'],
        format: ['camelCase'],
      },
      {
        selector: [
          'accessor',
          'classMethod',
          'classProperty',
          'enumMember',
          'objectLiteralMethod',
          'objectLiteralProperty',
          'typeMethod',
          'typeProperty',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    'class-methods-use-this': 'off',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    'max-len': 'off',
    'no-console': 'error',
    'no-extra-boolean-cast': [
      'error',
      {
        enforceForLogicalOperands: true,
      },
    ],
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    semi: ['error', 'always'],
    'sort-imports': 'off',
  },
};
