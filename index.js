const template = document.createElement("template");
template.innerHTML = `<div id="flexbase-pay"><a href="https://www.our-site.com">Pay With Flexbase</a></div>`;

const style = document.createElement("style");

style.textContent = `#flexbase-pay {
  width: 325px;
  height: 50px;
  border-style: solid;
  border-color: #FF4234;
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, #FF4338, #FF7F75);
}`;

class PayWithFlexbase extends HTMLElement {
    static get observedAttributes() {
        return ["client", "amount", "callback"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" }).appendChild(style);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector(
            "a"
        ).href = `https://www.our-site.com/credit/pay?apiKey=${encodeURIComponent(
            this.getAttribute("client")
        )}&amount=${encodeURIComponent(
            this.getAttribute("amount")
        )}&callback=${encodeURIComponent(this.getAttribute("callback"))}`;
    }

    updateHref() {
        this.shadowRoot.querySelector(
            "a"
        ).href = `https://www.our-site.com/credit/pay?apiKey=${this.getAttribute(
            "client"
        )}&amount=${this.getAttribute("amount")}&callback=${this.getAttribute(
            "callback"
        )}`;
    }

    get client() {
        return this.getAttribute("client");
    }

    set client(client) {
        this.setAttribute("client", client);
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

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateHref();
    }
}

export default PayWithFlexbase;

// window.customElements.define("pay-with-flexbase", PayWithFlexbase);
