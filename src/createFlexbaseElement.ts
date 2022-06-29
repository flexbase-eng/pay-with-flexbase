/* eslint-disable  @typescript-eslint/ban-types */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const createFlexbaseElement = (tagName: string | Function, props?: { [key: string]: any }, ...children: (HTMLElement | string)[]): HTMLElement | HTMLElement[] => {
    props = props || {};

    if (typeof tagName === 'function') {
        return tagName(props, children);
    }

    const element = document.createElement(tagName);

    Object.entries(props).forEach(([name, value]) => {
        if (name.startsWith('on') && name.toLowerCase() in window) {
            element.addEventListener(name.toLowerCase().substring(2), value);
        } else {
            element.setAttribute(name, value);
        }
    });

    children.forEach(child => appendChild(element, child));
    return element;
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const createFlexbaseFragment = (_: any, ...children: HTMLElement[]) => {
    return children;
};

const appendChild = (parent: HTMLElement, child: Node | string) => {
    if (Array.isArray(child)) {
        child.forEach(nestedChild => appendChild(parent, nestedChild));
    } else if (child instanceof Node) {
        parent.appendChild(child);
    } else {
        parent.appendChild(document.createTextNode(child));
    }
};
