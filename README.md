# Webpack2: Example 2

* Có 2 files js trong folder `src/`
* `app.js` là file chính sẽ require các file js khác
* `script1.js` export code trong file này ra để `app.js` require
* Webpack có 2 chế độ: `build` thẳng ra file bundle hoặc chạy `webpack-dev-server`
* Ta có thể configure trong `package.json`, gán câu lệnh webpack cho `npm run build`

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack src/app.js dist/bundle.js"
  },
```
* Nếu không xài webpack để bundle files, ta link cả 2 file js trong trang html theo kiểu cũ

```html
<script src="./src/script1.js"></script>
<script src="./src/app.js"></script>
```
* Sau khi bundle files, chỉ cần link file bundle

```html
<script src="./dist/bundle.js"></script>
```
