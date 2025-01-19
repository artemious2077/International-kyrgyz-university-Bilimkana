import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginPrettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import { fixupConfigRules } from '@eslint/compat'

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  { plugins: { prettier: pluginPrettier } },
  {
    rules: {
      'no-var': 'error',
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'react/prop-types': 'off',
      'no-undef': 'off',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },
  prettierConfig,
]
