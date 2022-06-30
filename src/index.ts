import { PayWithFlexbase } from './PayWithFlexbase';
import { PayWithFlexbaseProps } from './PayWithFlexbaseProps';

export { PayWithFlexbase, PayWithFlexbaseProps };
export { PayWithFlexbaseStyle } from './PayWithFlexbase.styles';

customElements.define('pay-with-flexbase', PayWithFlexbase);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'pay-with-flexbase': PayWithFlexbaseProps;
        }
    }
}
