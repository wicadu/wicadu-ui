export default Button;
declare function Button(props: any): JSX.Element;
declare namespace Button {
    export { propTypes };
    export { defaultProps };
}
declare namespace propTypes {
    const asTextLink: any;
    const className: any;
    const children: any;
    const disabled: any;
    const dataset: any;
    const onClick: any;
    const bgColor: any;
    const inverse: any;
    const color: any;
    const width: any;
    const padding: any;
    const margin: any;
}
declare namespace defaultProps {
    export function onClick(): void;
    export function onClick(): void;
    const asTextLink_1: boolean;
    export { asTextLink_1 as asTextLink };
    const className_1: string;
    export { className_1 as className };
    const disabled_1: boolean;
    export { disabled_1 as disabled };
    export const datasets: any;
    const bgColor_1: string;
    export { bgColor_1 as bgColor };
    const inverse_1: boolean;
    export { inverse_1 as inverse };
    const width_1: string;
    export { width_1 as width };
    const color_1: string;
    export { color_1 as color };
    const padding_1: string;
    export { padding_1 as padding };
    const margin_1: string;
    export { margin_1 as margin };
}
