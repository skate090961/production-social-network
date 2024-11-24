import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildModeEnum, BuildPath} from "./config/build/types/config";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = BuildModeEnum.DEV;
const isDev = mode === BuildModeEnum.DEV;

const config: webpack.Configuration = buildWebpackConfig({
    mode: BuildModeEnum.DEV,
    path: paths,
    isDev
})

export default config;