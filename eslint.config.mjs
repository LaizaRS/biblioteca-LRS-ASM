// eslint.config.mjs
import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['node_modules', 'build'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: require.resolve('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      react: pluginReact,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  configPrettier,
];
