// common chunk between index.html and todos.html
import '../css/commons.css';
// css of index.html
import '../css/main.css';
import '../css/color.css';

const message = require('./script1.js')

const btn = document.getElementById('changeBtn');

btn.addEventListener('click', function() {
  alert('Alert a message: ' + message);
})