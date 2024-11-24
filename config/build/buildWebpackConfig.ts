import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";
import webpack from "webpack";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, path} = options;

    return {
        mode,
        entry: path.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: path.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    }
}