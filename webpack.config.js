const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

const isDevelopment = process.env.NODE_ENV !== "production";
const sourceDir = path.join(__dirname, "src");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
          // {
          //   test: /\.(js|mjs|jsx|ts|tsx)$/,
          //   exclude: /node_modules/,
          //   use: {
          //     loader: "babel-loader",
          //     options: {
          //       presets: [
          //         [
          //           "@babel/preset-env",
          //           {
          //             targets: {
          //               esmodules: true,
          //             },
          //           },
          //         ],
          //         "@babel/preset-react",
          //         "@babel/preset-typescript",
          //       ],
          //     },
          //   },
          // },
    
            // {
            //   test: /\.tsx?$/,
            //   loader: "awesome-typescript-loader",
            //   options: {
            //     getCustomTransformers: () => ({before: [styledComponentsTransformer]})
            //   }
            // },
            {
              test: /\.tsx?$/,
              loader: "ts-loader",
              options: {
                getCustomTransformers: () => ({before: [styledComponentsTransformer]})
              }
            },
            {
              test: /\.svg$/i,
              issuer: /\.[jt]sx?$/,
              use: [{loader: '@svgr/webpack', options: {icon: true}}]
            }
          ],
      
    },
    resolve: {
        extensions: [".mdx", ".tsx", ".ts", ".js", ".css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(sourceDir, "index.html")
        })
    ],
    devServer: {
        compress: true,
        port: 3001,
        hot: true
    }
}