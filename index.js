const template = document.createElement("template");
template.innerHTML = `<div id="flexbase-pay"><a href="https://www.our-site.com" id="btn-bnpl">
  <div style="font-size: 17px;">Pay in 60 days with</div> 
  <div style="font-size: 23px;">flexbase</div>
  </a>
</div>`;

const style = document.createElement("style");

style.textContent = `#btn-bnpl {
   width: 366px;
   height: 52.18px;
   background: linear-gradient(124.59deg, #FF5745 29.59%, #FF8B7E 100.08%);
   display: flex;
   color: white;
   align-items: center;
   justify-content: space-between;
   font-weight: 700;
   border-radius: 8px;
   border-color: transparent;
   padding-left: 20px;
   padding-right: 20px;
   font-family: sans-serif;
   text-decoration: none;
}`;

class PayWithFlexbase extends HTMLElement {
    static get observedAttributes() {
        return ["apikey", "amount", "callback", 'session'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(style);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector(
            "a"
        ).href = `https://www.our-site.com/credit/pay?apiKey=${encodeURIComponent(
            this.getAttribute("apikey")
        )}&amount=${encodeURIComponent(
            this.getAttribute("amount")
        )}&callback=${encodeURIComponent(
            this.getAttribute("callback")
        )}&session=${encodeURIComponent(
            this.getAttribute("session"))}`;
    }

    updateHref() {
        this.shadowRoot.querySelector(
            "a"
        ).href = `https://www.our-site.com/credit/pay?apiKey=${this.getAttribute(
            "apikey"
        )}&amount=${this.getAttribute(
            "amount"
        )}&callback=${this.getAttribute(
            "callback"
        )}&session=${this.getAttribute(
            "session"
        )}`;
    }

    get apikey() {
        return this.getAttribute("apikey");
    }

    set apikey(apikey) {
        this.setAttribute("apikey", apikey);
        this.updateHref();
    }

    get amount() {
        return this.getAttribute("amount");
    }

    set amount(amount) {
        this.setAttribute("amount", amount);
        this.updateHref();
    }

    get callback() {
        return this.getAttribute("callback");
    }

    set callback(callback) {
        this.setAttribute("callback", callback);
        this.updateHref();
    }

    get session() {
        return this.getAttribute("session");
    }

    set session(session) {
        this.setAttribute("session", session);
        this.updateHref();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateHref();
    }
}

export default PayWithFlexbase;
