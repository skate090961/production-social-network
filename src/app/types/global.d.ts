declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"