import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import * as mdxPlugin from 'eslint-plugin-mdx'

/* eslint-disable @typescript-eslint/naming-convention */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/* eslint-enable @typescript-eslint/naming-convention */
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,md,mdx,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
  },
  {
    ignores: ['*/**/assets', '*/**/dist', '*/**/node_modules', '*/**/public'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...compat.extends('plugin:prettier/recommended'),
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
  },
  {
    rules: {
      '@stylistic/js/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'block-like', next: 'block-like' },
        { blankLine: 'always', prev: 'const', next: 'return' },
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
            order: 'natural-case-insensitive',
          },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          // enforce variables/functions to camelCase
          selector: ['variable', 'function'],
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: ['parameter'],
          format: ['camelCase'],
        },
        {
          // Force destructured params to camel case
          selector: ['parameter'],
          modifiers: ['destructured'],
          format: ['camelCase'],
        },
        {
          // Allow certain params to pascal case
          selector: ['parameter', 'typeProperty', 'objectLiteralProperty'],
          format: ['PascalCase', 'camelCase'],
          filter: {
            regex: '(Icon|Component|Story)$',
            match: true,
          },
        },
        {
          // Allow certain destructured params to pascal case
          selector: ['parameter'],
          modifiers: ['destructured'],
          format: ['PascalCase', 'camelCase'],
          filter: {
            regex: '(Icon|Component|Story)$',
            match: true,
          },
        },
        {
          // Force unused params to have leading underscore
          selector: ['parameter', 'variable'],
          modifiers: ['unused'],
          leadingUnderscore: 'require',
          format: ['camelCase'],
        },
        {
          // Ignore properties that require quotes
          selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
          ],
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          // Enums
          selector: ['enum', 'enumMember'],
          format: ['PascalCase'],
        },
        {
          // Classes
          selector: ['class', 'interface', 'typeAlias'],
          format: ['PascalCase'],
        },
        {
          // Properties
          selector: ['property', 'accessor'],
          modifiers: ['public'],
          format: ['camelCase'],
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: false,
        },
      ],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-as-default': 'off',
      'import/no-cycle': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['object', 'type'],
            ['parent', 'sibling', 'index'],
          ],
          pathGroups: [
            {
              pattern: '@package-**',
              group: 'internal',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-console': 'error',
      'no-extra-boolean-cast': [
        'error',
        {
          enforceForLogicalOperands: true,
        },
      ],
      'no-plusplus': 'off',
      'no-prototype-builtins': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['src/*'],
              message: 'You should import using alias or with relative path',
            },
          ],
        },
      ],
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      quotes: [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
        },
      ],
      'sort-imports': 'off',
    },
  },
  {
    ...mdxPlugin.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
];
