/*
 * Buildbelt - Modern JavaScript development toolchain.
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/buildbelt/
 *
 * Released under the MIT license
 * https://github.com/asmblah/buildbelt/raw/main/MIT-LICENSE.txt
 */

import { beforeEach, describe, expect, it } from 'vitest';

describe('.loadScript(...)', () => {
    let loadScript: LoadScriptFunction;

    beforeEach(async () => {
        // Dynamically load Buildbelt library itself in the test runner document,
        // so that we test the actual built bundle.
        const bundlePath = '/dist/buildbelt.mjs';
        ({ loadScript } = await import(bundlePath));
    });

    it('should load the given script src', async () => {
        await loadScript('data:application/javascript;,window.myResult = 21;');

        expect((window as unknown as WritableObject).myResult).to.equal(21);
    });

    it('should resolve with the script element used to execute it', async () => {
        const script = await loadScript(
            'data:application/javascript;,document.currentScript.myResult = 21;',
        );

        expect(script).to.be.an.instanceOf(HTMLScriptElement);
        expect((script as unknown as WritableObject).myResult).to.equal(21);
    });

    it('should reject the returned promise on failure', async () => {
        await expect(loadScript('/nonexistent.js')).rejects.toThrow(
            new Error('Script "/nonexistent.js" failed to load'),
        );
    });
});
