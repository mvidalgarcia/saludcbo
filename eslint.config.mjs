import eslintPluginAstro from 'eslint-plugin-astro';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.{ts,mjs}'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },
];
