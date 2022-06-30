import '@testing-library/jest-dom';
import { PayWithFlexbase } from '../src/PayWithFlexbase';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
//@ts-ignore
global.TextDecoder = TextDecoder;

import { JSDOM } from 'jsdom';

customElements.define('pay-with-flexbase', PayWithFlexbase);

beforeAll(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>')

    globalThis.document = dom.window.document;
    // @ts-ignore
    globalThis.window = dom.window;
    globalThis.customElements = window.customElements
    globalThis.HTMLElement = window.HTMLElement
});

beforeEach(()=>{
    const document = globalThis.document;
    document.body.replaceChildren();
});