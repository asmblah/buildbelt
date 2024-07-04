/*
 * Buildbelt - Modern JavaScript development toolchain.
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/buildbelt/
 *
 * Released under the MIT license
 * https://github.com/asmblah/buildbelt/raw/main/MIT-LICENSE.txt
 */

import { beforeEach, describe, expect, it } from 'vitest';

describe('.loadJsAsScript(...)', () => {
    let loadJsAsScript: LoadJsAsScriptFunction;

    beforeEach(async () => {
        // Dynamically load Buildbelt library itself in the test runner document,
        // so that we test the actual built bundle.
        const bundlePath = '/dist/buildbelt.mjs';
        ({ loadJsAsScript } = await import(bundlePath));
    });

    it('should execute the given script', async () => {
        await loadJsAsScript('window.myResult = 21;');

        expect((window as unknown as WritableObject).myResult).to.equal(21);
    });

    it('should resolve with the script element used to execute it', async () => {
        const script = await loadJsAsScript(
            'document.currentScript.myResult = 21;',
        );

        expect(script).to.be.an.instanceOf(HTMLScriptElement);
        expect((script as unknown as WritableObject).myResult).to.equal(21);
    });
});
