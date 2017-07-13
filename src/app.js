const message = require('./script1.js')
const btn = document.getElementById('changeBtn');

btn.addEventListener('click', function () {
  alert('Alert a message: ' + message);
})