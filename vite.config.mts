/*
 * Buildbelt - Modern JavaScript development toolchain.
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/buildbelt/
 *
 * Released under the MIT license
 * https://github.com/asmblah/buildbelt/raw/main/MIT-LICENSE.txt
 */

import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import typescript from '@rollup/plugin-typescript';

export default defineConfig(({ mode }) => ({
    build: {
        lib: {
            entry: resolve('./src/buildbelt.ts'),
            formats: ['es'],
        },
        minify: mode === 'development' ? false : 'terser',
        rollupOptions: {
            plugins: [typescript()],
        },
        sourcemap: true,
    },

    test: {
        workspace: 'vitest.workspace.mts',
    },
}));
