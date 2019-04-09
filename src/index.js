//presets
//import "@babel/polyfill";
import avatar from './123.jpg'
import index from './index.scss'

import Creavatar from './avatar'
Creavatar()

let img = new Image()
img.src = avatar
img.classList.add(index.avatar)

let root = document.getElementById('root')
root.append(img)

let btn = document.createElement('div')
btn.innerHTML = '点击'

document.body.appendChild(btn)

btn.onclick = function () {
  let item = document.createElement('p')
  item.classList.add(index.item)
  item.innerHTML = 'item'
  document.body.appendChild(item)
}

let parPPP = new Promise();
