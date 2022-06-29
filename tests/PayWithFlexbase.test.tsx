import { PayWithFlexbase } from '../src/PayWithFlexbase';
import { createFlexbaseElement } from '../src/createFlexbaseElement';

test("PayWithFlexbase null attributes", () => {

    const document = globalThis.document;

    const el = document.createElement('pay-with-flexbase');

    document.body.appendChild(el);

    const rendered = document.querySelector('pay-with-flexbase');

    expect(rendered).not.toBeNull();

    expect(rendered!.getAttribute('apikey')).toBeNull();
    expect(rendered!.getAttribute('amount')).toBeNull();
    expect(rendered!.getAttribute('callback')).toBeNull();
    expect(rendered!.getAttribute('session')).toBeNull();
    expect(rendered!.getAttribute('flexbaseDomain')).toBeNull();
});

test("PayWithFlexbase attributes", () => {

    const document = globalThis.document;

    const flexbaseDomain = "http://localhost"
    const apikey = "testApiKey";
    const amount = 1.2;
    const session = "testSession";
    const callback = "/callback";

    const testEl = () => {
        return (
            <pay-with-flexbase flexbaseDomain={flexbaseDomain} apikey={apikey} amount={amount} session={session} callback={callback} />
        )
    };

    document.body.appendChild(testEl());

    const el = document.querySelector('pay-with-flexbase');

    expect(el).not.toBeNull();
    expect(el).toBeInstanceOf(PayWithFlexbase);

    const rendered = el as PayWithFlexbase;

    expect(rendered.apikey).toBe(apikey);
    expect(rendered.amount).toBe(amount);
    expect(rendered.callback).toBe(callback);
    expect(rendered.session).toBe(session);
    expect(rendered.flexbaseDomain).toBe(flexbaseDomain);
});

test("PayWithFlexbase clear attributes", () => {

    const document = globalThis.document;

    const flexbaseDomain = "http://localhost"
    const apikey = "testApiKey";
    const amount = 1.2;
    const session = "testSession";
    const callback = "/callback";

    const testEl = () => {
        return (
            <pay-with-flexbase flexbaseDomain={flexbaseDomain} apikey={apikey} amount={amount} session={session} callback={callback} />
        )
    };

    document.body.appendChild(testEl());

    const el = document.querySelector('pay-with-flexbase');

    expect(el).not.toBeNull();
    expect(el).toBeInstanceOf(PayWithFlexbase);

    const rendered = el as PayWithFlexbase;

    rendered.apikey = null;
    rendered.amount = null;
    rendered.callback = null;
    rendered.session = null;
    rendered.flexbaseDomain = null;

    expect(rendered.hasAttribute('apikey')).toBe(false);
    expect(rendered.hasAttribute('amount')).toBe(false);
    expect(rendered.hasAttribute('callback')).toBe(false);
    expect(rendered.hasAttribute('session')).toBe(false);
    expect(rendered.hasAttribute('flexbaseDomain')).toBe(false);
});