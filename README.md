# Webpack2

# Example 7: HTML & IMAGE Loaders

## Install
```bash
$ npm install --save-dev html-loader html-webpack-plugin file-loader clean-webpack-plugin
```

## Sử dụng html-loader và file-loader để tải file ảnh
* Trong `index.html` thêm 1 file ảnh 
```html
  <div>
    <img src="img/coding.jpg" alt="coding photo">
  </div>
```
* Trong `webpack.config.js` phần rules, thêm
```js
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          }
        }]
      }
```

* `html-loader` sẽ đọc file html, xác định `<img src="img/coding.jpg..."` là 1 file local, sau đó thay đường dẫn ảnh bằng đường dẫn đến ảnh đó trong output folder `dist`
* `file-loader` tải file từ entry folder `src` sang output folder `dist` và vẫn giữ nguyên tên và đuôi file, ảnh trong `dist` đc lưu trong folder con `img`

## Sử dụng html-webpack-plugin để tạo html files và tự động link các assets files cần dùng
* Trong `webpack.config.js`
```js
// require thêm module mới
const HtmlWebpackPlugin = require('html-webpack-plugin');
//.....
// trong phần plugin thêm
    new HtmlWebpackPlugin({
      filename: 'index.html', // tên file html trả về
      template: 'src/index.html', // template đầu vào
      chunks: ['commons', 'index'] // sử dụng những chunks nào, ứng với entry 'index' và phần code chung 'commons'
    }),
    new HtmlWebpackPlugin({
      filename: 'todos.html',
      template: 'src/todos.html',
      chunks: ['commons', 'todos']
    }),
```
* `html-webpack-plugin` xuất ra file html và tự động thêm các assets files cần thiết, mỗi 1 instance HtmlWebpackPlugin ứng vs 1 trang html
* **Lưu ý** cần chuyển các html files vào trong folder `src` và trong các html files này không cần sử dụng `<script>` hay `<link>` để gắn cứng các assets files nữa vì Webpack sẽ tự động thêm vào

## Dọn dẹp `dist` folder mỗi lần chạy `npm run build`
* Trong `webpack.config.js` phần plugins thêm clean-webpack-plugin

```js
const CleanWebpackPlugin = require('clean-webpack-plugin');
//......
// trong phần plugins
new CleanWebpackPlugin(['dist'])
```

* Mỗi lần chạy `npm run build`, plugin này sẽ dọn folder `dist` và tạo các files cần thiết