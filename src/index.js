import avatar from './123.jpg'
import index from './index.scss'

import Creavatar from './avatar'
Creavatar()

let img = new Image()
img.src = avatar
img.classList.add(index.avatar)

let root = document.getElementById('root')
root.append(img)

