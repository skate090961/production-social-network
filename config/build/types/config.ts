export enum BuildModeEnum {
    PROD = 'production',
    DEV = 'development'
}

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildModeEnum;
    port: number;
}

export interface BuildOptions {
    mode: BuildModeEnum;
    path: BuildPath;
    isDev: boolean;
    port: number;
}