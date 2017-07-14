# Webpack2

## Example 4: use webpack-dev-server to creates a server and live loading

* Webpack-dev-server is a wrapper around webpack itself, thus, it has all webpack functionalities and an extra feature of development server

```bash
$ npm install --save-dev webpack-dev-server
```

* Thêm `npm run dev` để chạy webpack-dev-server. Lưu ý cần ghi rõ `--entry` và `--output-filename` và chuyển đường dẫn thành tương đối, ví dụ `src/app.js` phải là `--entry ./src/app.js`

```js
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "webpack-dev-server --entry ./src/app.js --output-filename ./dist/bundle.js",
"build": "webpack --config webpack.config.js"
},
```

* Webpack sẽ không tạo trong máy `dist/bundle.js` mà lưu bunle file trong memory