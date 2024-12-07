import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers({path}: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [path.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}