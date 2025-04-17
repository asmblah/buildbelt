/*
 * Buildbelt - Modern JavaScript development toolchain.
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/buildbelt/
 *
 * Released under the MIT license
 * https://github.com/asmblah/buildbelt/raw/main/MIT-LICENSE.txt
 */

/* eslint-disable @typescript-eslint/no-require-imports */
/* global module, require */

const eslint = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const tsEslint = require('typescript-eslint');

module.exports = tsEslint.config(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
);
