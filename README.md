# Webpack2

# Example 5: Babel Loader

```bash
$ npm install --save-dev babel-core babel-loader babel-preset-es2015
$ npm install --save-dev style-loader css-loader
```

* Sử dụng babel-loader và preset `es2015` để chuyển ES6 sang ES5
* Sử dụng css-loader để chuyển css file sang JS module trong webpack dependencies graph và style-loader để apply css vào DOM

* Sửa `npm run dev` chỉ gọi `webpack-dev-server`, `webpack-dev-server` sẽ tư động đọc `webpack.config.js` để chạy, nhưng nó không hiểu phần `path` trong `output` nên cần thêm 1 thuộc tính `p`

```js
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "webpack-dev-server",
"build": "webpack --config webpack.config.js"
},
```
```js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
```

* Sử dụng babel-loader để chuyển các file `.js` sang ES5, với config này sẽ chuyển cả các file trong 'node_modules'
* Có thể dùng `exclude` để bỏ qua 'node_modules' khi babel-loader chạy
```js
  module: {
    rules: [
      {
        test:  /\.js$/, 
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ],
        exclude: /(node_modules)/
      },
      // css-loader
    ]
  }
```

* Sử dụng css-loader và style-loader cho file `.css`. Thứ tự áp dụng các loader theo chiều ngược từ dưới lên trên, css-loader đc chạy trước chuyển css files sang JS modules để webpack bundle, style-loader sẽ áp dụng các css này trong bundle file vào DOM
```js
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
```

* File entry là `./src/js/app.js` nên các file css cũng phải đc import vào trong `app.js`

```js
import '../css/main.css';
import '../css/color.css';
```
