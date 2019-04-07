import avatar from './123.jpg'
function Createavatar () {
  let img = new Image()
  img.src = avatar
  img.classList.add('avatar')

  let root = document.getElementById('root')
  root.append(img)
}

export default Createavatar