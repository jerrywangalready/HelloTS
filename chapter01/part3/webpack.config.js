// 引入一个包
const path = require('path');
// 引入HTML插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在的目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: "bundle.js"
    },
    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 兼容的浏览器及版本
                                        targets: {
                                            "chrome": "88"
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs的方式
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],// 从后往前直行, 先把ts转成js,再生成兼容代码
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    // 配置Webpack插件
    plugins: [
        new HTMLWebpackPlugin()
    ]
}