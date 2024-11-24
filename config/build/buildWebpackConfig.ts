import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import TerserPlugin from "terser-webpack-plugin";
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, path, isDev} = options;

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
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        optimization: {
            minimizer: [new TerserPlugin({
                extractComments: false,
            })],
        },
    }
}