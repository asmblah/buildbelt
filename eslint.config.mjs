/*
 * Buildbelt - Modern JavaScript development toolchain.
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/buildbelt/
 *
 * Released under the MIT license
 * https://github.com/asmblah/buildbelt/raw/main/MIT-LICENSE.txt
 */

import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
);
