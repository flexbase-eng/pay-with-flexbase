import { PayWithFlexbaseStyle } from './PayWithFlexbase.styles';
import { PayWithFlexbaseTemplate } from './PayWithFlexbase.template';

export class PayWithFlexbase extends HTMLElement {
    static get observedAttributes() {
        return ['apikey', 'amount', 'callback', 'session', 'flexbaseDomain'];
    }

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.textContent = PayWithFlexbaseStyle;
        shadowRoot.appendChild(style);

        const template = PayWithFlexbaseTemplate();
        shadowRoot.appendChild(template);

        const anchor = shadowRoot.querySelector('a');
        if (anchor) {
            anchor.href = this.buildUrl();
        }
    }

    private updateHref() {
        const shadowRoot = this.shadowRoot;

        if (!shadowRoot) {
            return;
        }

        const anchor = shadowRoot.querySelector('a');
        if (anchor) {
            anchor.href = this.buildUrl();
        }
    }

    get apikey() {
        return this.getAttribute('apikey');
    }

    set apikey(value) {
        value ? this.setAttribute('apikey', value) : this.removeAttribute('apikey');
    }

    get amount(): number | null {
        return Number(this.getAttribute('amount'));
    }

    set amount(value) {
        value ? this.setAttribute('amount', value.toString()) : this.removeAttribute('amount');
    }

    get callback() {
        return this.getAttribute('callback');
    }

    set callback(value) {
        value ? this.setAttribute('callback', value) : this.removeAttribute('callback');
    }

    get session() {
        return this.getAttribute('session');
    }

    set session(value) {
        value ? this.setAttribute('session', value) : this.removeAttribute('session');
    }

    get flexbaseDomain() {
        return this.getAttribute('flexbaseDomain');
    }

    set flexbaseDomain(value) {
        value ? this.setAttribute('flexbaseDomain', value) : this.removeAttribute('flexbaseDomain');
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    private attributeChangedCallback(_name: any, _oldValue: any, _newValue: any) {
        this.updateHref();
    }

    protected buildUrl(): string {
        const apikey = this.apikey || '';
        const amount = this.amount || 0;
        const callback = this.callback || '';
        const session = this.session || '';

        const q = this.buildQuery({
            apikey,
            amount,
            callback,
            session,
        });

        const url = new URL('credit/pay', this.flexbaseDomain || 'https://dashboard.flexbase.app');

        url.search = q;

        return url.toString();
    }

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    protected buildQuery(params: any): string {
        return Object.keys(params)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
            .join('&');
    }    
}
