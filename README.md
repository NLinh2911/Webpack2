# Webpack2: Example 3 - webpack.config.js

* Project phức tạp hơn ta nên sử dụng file config: `webpack.config.js`
* Trong file này ta có thể cấu hình entry, output, modules và plugins

```js
var path = require('path');
// webpack config là 1 object
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
* Trong `package.json`, sửa câu lệnh `build` thành

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack --config webpack.config.js"
},
```
