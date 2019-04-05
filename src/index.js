var img = require('./ll.jpg')
var img1 = require('./123.jpg')
let css = require('./index.css')
// let bg = require('./bg.less')
import bg from './bg.less'

let mm = new Image();
mm.src = img;
mm.classList.add('title')

let root = document.getElementById('root');
root.append(mm)