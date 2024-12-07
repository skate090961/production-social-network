import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildModeEnum, BuildPath} from "./config/build/types/config";

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || BuildModeEnum.DEV;
    const isDev = mode === BuildModeEnum.DEV;

    const PORT = env.port || 3000;

    return buildWebpackConfig({
        mode,
        path: paths,
        isDev,
        port: PORT
    })
};