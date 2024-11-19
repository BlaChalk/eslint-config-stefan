/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

module.exports = {
  rules: {
    // provided by typescript, disable to fix global type declaration
    'no-undef': 'off',
    'no-redeclare': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',

    'import/first': 'off',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',

    // The core 'import/named' rules
    // does not work with type definitions
    'import/named': 'off',

    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],

    '@typescript-eslint/consistent-type-imports': ['error', {
      fixStyle: 'inline-type-imports'
    }],

    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',

    '@typescript-eslint/no-unused-vars': 'error',

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    'vue/comma-spacing': 'error',
    'vue/key-spacing': 'error',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multi-spaces': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION', // is, v-is
        'LIST_RENDERING', // v-for
        'CONDITIONALS', // v-if v-else-if v-else v-show v-cloak
        'RENDER_MODIFIERS', // v-once v-pre
        'TWO_WAY_BINDING', // v-model
        'OTHER_DIRECTIVES', // v-custom-directive
        'SLOT', // v-slot
        'GLOBAL', // id
        'UNIQUE', // key, ref

        'ATTR_SHORTHAND_BOOL', // boolean-prop
        'ATTR_STATIC', // prop=""
        'ATTR_DYNAMIC', // :prop=""

        'EVENTS', // v-on, @
        'CONTENT' // v-text, v-html
      ],
      alphabetical: false
    }],

    'import/order': ['warn', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      },
      groups: [
        'index',
        'builtin',
        'external',
        'internal',
        ['sibling', 'parent']
      ]
    }]
  }
}
