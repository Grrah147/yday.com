import { defineConfig } from 'eslint-define-config';
import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  // JavaScript/TypeScript files
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    ...js.configs.recommended,
  },
  // Vue files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@babel/eslint-parser', // Required for Vue SFC parsing
        sourceType: 'module',
      },
      globals: { ...globals.browser },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...pluginVue.configs['flat/vue3-recommended'].rules, // Vue 3 recommended rules
      'vue/multi-word-component-names': 'off', // Optional: disable if you don’t want this
    },
  },
  // Prettier integration (turns off conflicting rules)
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    rules: {
      ...prettier.rules,
    },
  },
]);