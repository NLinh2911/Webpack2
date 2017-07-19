# Webpack2: basic demo examples
* Check out corresponding braches (Xem các branch ứng với từng ví dụ)

```bash
$ git checkout [branch-name]
```

1. Example 1: set up simple html page (no webpack yet) (html/js thuần chưa sử dụng webpack)
2. Example 2: use webpack command when running script `npm run build` (chạy câu lệnh webpack khi `npm run build`)
3. Example 3: set webpack config object in `webpack.config.js` (cấu hình webpack.config.js)
4. Example 4: use webpack-dev-server (webpack-dev-server cung cấp 1 development server chạy trên localhost)
5. Example 5: use babel-loader, css-loader, style-loader and extract-text-webpack-plugin (dùng các loaders để chuyển đổi và gói gọn các file assets (js, css), dùng plugin để tách CSS trong entry file sang 1 output file riêng biệt). 
6. Example 6: use CommonsChunkPlugin for multi pages app with multiple entry files (ứng dụng nhiều trang html sử dụng asset files riêng, cấu hình nhều file entry và output, dùng CommonsChunkPlugin để lọc ra phần code chung)
7. Example 7: use html-loader, file-loader and html-webpack-plugin to load images and generate html files (tải ảnh và tạo các file html và tự động gắn bundle files)

## Webpack đọc tất cả các file assets (js, css, scss, img,...), tạo 1 dependency graph và output 1 production-ready bundle
* Gói các nhiều file JS thành 1 bundle, giảm thiểu các http requests chỉ để tải các file này
* Chuyển đổi SASS/ LESS sang CSS và chỉ sử dụng chúng khi cần thiết
* Chuyển đổi JSX/ ES2015 sang JS thuần mà browsers có thể h

## Core Concepts:
### Webpack tạo 1 dependencies graph. Có 4 phần chính:

* Entry: file đầu vào - điểm bắt đầu của sơ
* Output: file đầu ra - sau khi bundle hết các file trong sơ đồ
* Loaders: webpack xử lý tất cả assets files của project (html, css, js,...). Tất cả các file đều đc coi là 1 module và webpack chỉ hiểu JS
* Loaders chuyển đổi assets files thành modules rồi thêm vào sơ đồ của webpack
* Loaders có 2 chức năng chính:
* Xác định loại file và loader nào phụ trách file đó (`test`)
* Chuyển đổi những files để thêm vào sơ đồ và gói bundle (`use`)
* Loaders chỉ áp dụng với từng file
* Plugins là các tính năng hay chuyển đổi có thể đc áp dụng với tất cả modules khi `compilation` hay `chunks`
```js
output: {
  path: 'đường dẫn tuyệt đối của file đầu ra'
  filename: 'tên file'
  publicPath: 'đg dẫn tương đối (cho khi chạy web-dev-server, web-dev-server chỉ đọc filename mà bỏ qua path)'
}
```
* Module: cấu hình các loaders sẽ sử dụng, các test là các loai file mà sẽ sử dụng các loaders khác nhau để xử lý, trong 1 loader có thể có nhiều preset, ví dụ preset 'es2015' của babel-loader
* Plugins: áp dụng cho tất cả các file, ví dụ minify code cho production

# CÀI ĐẶT WEBPACK LOCAL
```bash
$ npm install webpack --save-dev
// or
$ yarn add webpack --
```

# GIỚI THIỆU QUA VỀ CÁC TOOLS KHÁC

* Webpack là 1 module bundler
  * Truyền thống khi gần sử dụng assets files nào (CSS, JS,...) ta sẽ dùng thẻ `<script>` và `<link>` để gắn vào trang html sau đó browser sẽ tải các files này lên => Khi mà code front end càng ngày càng nhiều => số lượng và kích thước files tăng lên => việc quản lý files trở nên cồng kềnh và tốc độ tải files chậm (nhiều files => nhiều request => tồn thời gian load web)
  * Các công cụ ra đời xử lý vấn đề này như Browserify, Systemjs, Rollupjs, Webpack,...
  * Webpack ra đời sau nên cũng thừa hưởng từ các thư viện trước, quản lý modules với nhiều tính năng như code splitting, tree shaking, có nhiều loaders để hỗ trợ nhiều kiểu files (sass, less, jsx, json,...)

* Browserify cho phép require() module bên browser như trong node
* Grunt là 1 JS task runner - cho phép tự động hóa các task trong 1 Nodejs project 
* Gulp cũng là 1 task runner nhưng cách chạy cả Grunt vs Gulp khác nhau:
  * Grunt cấu hình dài hơn, gồm là 1 chuỗi của các cấu hình cho từng task chạy lần lượt (mỗi task lại phải cấu hình đầu vào (source), đầu ra (destination)) nên Grunt có thể chậm hơn Gulp
  * Grunt thì ít cấu hình hơn, sử dụng Node stream để truyền dữ liệu và xây các pipelines. Cả 2 tools đều sẽ phải compile source code sau đó sử dụng các plugin hỗ trợ như autoprefixers và ghi code mới vào 1 file đích. Sự khác biệt ở quá trình  xử lý: Grunt không mất thời gian mở/ đóng files hay tạo các bản copies trung gian như Grunt (sử dụng temp files) mà đơn thuần khai báo các tasks và xử lý in-memory