/*
 * Buildbelt - Modern JavaScript development toolchain.
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/buildbelt/
 *
 * Released under the MIT license
 * https://github.com/asmblah/buildbelt/raw/main/MIT-LICENSE.txt
 */

type LoadJsAsScriptFunction = (js: string) => Promise<HTMLScriptElement>;

type LoadScriptFunction = (src: string) => Promise<HTMLScriptElement>;

type WritableObject = {
    [property: string]: unknown;
};
