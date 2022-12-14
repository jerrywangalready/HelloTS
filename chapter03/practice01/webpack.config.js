// 引入一个包
const path = require('path');
// 引入HTML插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 每次build会清空上次编译文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在的目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: "bundle.js",
        // 配置打包环境, 告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    mode: 'development',
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
                                            "chrome": "68",
                                            "ie": "11"
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs的方式"usage" 表示按需加载
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
            },

            // 设置less文件处理
            //loader执行顺序从下往上
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }

        ]
    },
    // 配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '贪吃蛇'
            template: "./src/index.html"
        })
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}
