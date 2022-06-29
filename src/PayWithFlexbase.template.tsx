import { createFlexbaseElement } from './createFlexbaseElement';

export const PayWithFlexbaseTemplate = () => {
    return (
        <div id="flexbase-pay">
            <a href="https://flexbase.app" id="flexbase-pay-btn">
                <div id="flexbase-pay-btn-text">Pay in 60 days with</div>
                <div id="flexbase-pay-btn-logo"> flexbase</div>
            </a>
        </div>
    );
};
