export default Button;
declare function Button(props: any): JSX.Element;
declare namespace Button {
    namespace propTypes {
        const asTextLink: any;
        const fullWidth: any;
        const className: any;
        const iconRight: any;
        const iconLeft: any;
        const children: any;
        const disabled: any;
        const dataset: any;
        const onClick: any;
        const bgColor: any;
        const inverse: any;
        const color: any;
        const width: any;
    }
    namespace defaultProps {
        export function onClick(): void;
        export function onClick(): void;
        const asTextLink_1: boolean;
        export { asTextLink_1 as asTextLink };
        const fullWidth_1: boolean;
        export { fullWidth_1 as fullWidth };
        const className_1: string;
        export { className_1 as className };
        const iconRight_1: any;
        export { iconRight_1 as iconRight };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        export const datasets: any;
        const iconLeft_1: any;
        export { iconLeft_1 as iconLeft };
        const bgColor_1: string;
        export { bgColor_1 as bgColor };
        const inverse_1: boolean;
        export { inverse_1 as inverse };
        const width_1: number;
        export { width_1 as width };
        const color_1: string;
        export { color_1 as color };
    }
}
