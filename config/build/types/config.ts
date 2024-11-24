export enum BuildModeEnum {
    PROD = 'production',
    DEV = 'development'
}

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildModeEnum;
    path: BuildPath;
    isDev: boolean;
}