import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

import baseConfig from '../eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooksPlugin.configs['recommended-latest'],
  jsxA11yPlugin.flatConfigs.strict,
  ...storybookPlugin.configs['flat/recommended'],
  ...baseConfig,
  {
    files: ['*.test.{ts,tsx}'],
    ...testingLibraryPlugin.configs['flat/react'],
  },
  {
    ignores: ['!.storybook', '*.js', 'dist', 'node_modules'],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-sort-props': 'error',
      'react/no-unknown-property': ['error', { ignore: ['inert', 'fetchPriority'] }],
      'react/prop-types': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'warn',
      'storybook/use-storybook-testing-library': 'off',
    },
  },
];
