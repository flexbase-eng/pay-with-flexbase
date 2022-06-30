import { PayWithFlexbase } from "../src/PayWithFlexbase";
import { createFlexbaseElement, createFlexbaseFragment } from '../src/createFlexbaseElement';

test("createFlexbaseElement fragment", () => {

    const testEl = (): HTMLElement[] => {
        return (
            <>
                <pay-with-flexbase />
            </>
        )
    };

    const rendered = testEl();

    expect(rendered).toHaveLength(1);

    const el = rendered[0][0];

    expect(el).not.toBeNull();
    expect(el).toBeInstanceOf(PayWithFlexbase);
});

test("createFlexbaseElement nested", () => {

    const testEl = () => {
        return (
            <div id='1'>
                <div id='2'>Test</div>
            </div>

        )
    };

    document.body.appendChild(testEl());

    const div1 = document.getElementById('1');
    const div2 = document.getElementById('2');   

    expect(div1).not.toBeNull();
    expect(div2).not.toBeNull();
});