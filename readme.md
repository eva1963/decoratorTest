### 如何为装饰器搭建一套能跑的环境

> 这里我们配合webpack来搭建一套开发环境

#### npm init -y 生成package文件，并安装需要的插件

- `npm i -D webpack webpack-cli babel-core babel-preset-env babel-loader@7 @babel/core`
- `npm i babel-plugin-transform-decorators-legacy  babel-plugin-transform-class-properties -D`

#### 创建webpack.config.js文件

> 编写webpack配置文件，使其支持装饰器模式

```javascript
const path = require("path");

const config = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [{
            // 匹配后缀为.js的文件，使其经过babel的转义输出为ES5
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env'],
                    // 使得装饰器模式生效
                    plugins: ["transform-decorators-legacy", "transform-class-properties"]
                }
            }
        }]
    },
    // 方便debugger
    devtool: "inline-source-map"
}

module.exports = config;
```

### package.json中编写运行脚本

```
 "scripts": {
    "start": "webpack -w"
  }
```

### 执行`npm start`即可


## 可能出现的问题：

这里我直接将babel-loader的版本定死在7版本，如果你没有固定在这个版本，而是选择了更高的版本的话可能会运行失败！
