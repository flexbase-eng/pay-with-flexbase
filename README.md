# pay-with-flexbase
Reuseable 'Buy Now Pay Later' web component for distribution to partners

How to use:

step 1: 

yarn or npm install
If typescript, add this to a .d.ts module declaration file in your project

```
declare module '@flexbase-eng/pay-with-flexbase.git' {
    declare const PayWithFlexbase: CustomElementConstructor;
    export default PayWithFlexbase
}
```


step 2:
Import the class
```
import { default as PayWithFlexbase } from '@flexbase-eng/pay-with-flexbase'
```

If typescript/React, we'll need to declare the custom html component as an intrinsic element
```
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'pay-with-flexbase': PayWithFlexbaseProps
        }
    }
}

interface PayWithFlexbaseProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    apikey: string,
    amount: string,
    callback: string
}
```
Now we have to let our browser know that we have a custom element
```
customElements.get('pay-with-flexbase') || customElements.define('pay-with-flexbase', PayWithFlexbase);
```

step 3:
Now you can use the custom element
```
<pay-with-flexbase apikey="yourKey" amount="99.99" callback="/done" />
```

