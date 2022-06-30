declare namespace JSX {
    type Element = HTMLElement;
    interface IntrinsicElements {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        [eleName: string]: any;
    }
}
