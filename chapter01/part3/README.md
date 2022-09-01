# 通过命令生成package.json文件
npm init -y

# 下载依赖
npm i -D webpack webpack-cli typescript ts-loader

# 增加插件, 自定生成html文件
npm i -D html-webpack-plugin

# 安装Babel解决兼容性问题
npm i -D @babel/core @babel/preset-env babel-loader core-js