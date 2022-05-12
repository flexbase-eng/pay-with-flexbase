# pay-with-flexbase
Reuseable 'Buy Now Pay Later' web component for distribution to partners

How to use:

step 1: 

Import 'PayWithFlexbase'

step 2:

window.customElements.define("pay-with-flexbase", PayWithFlexbase);

step 3:

Use the <pay-with-flexbase></pay-with-flexbase> element in your html/jsx.


<pay-with-flexbase></pay-with-flexbase> attributes :

    apikey - The APIKey provided to the partnering vendor
    amount - The amount of money in the transaction
    callback - The relative url path to be redirected to after a failure/success

