var text = document.getElementsByTagName('p')[0]
var bg = document.getElementsByTagName('div')[0]
var body = document.getElementsByTagName('body')[0]
var canvas = document.getElementById('canvas')
var stopped = 0
color = 'black'

function invert() {
  if (color == 'black'){
    bg.style.background = "black"
    text.style.color = "white"
    color = 'white'
  } else {
    bg.style.background = "white"
    text.style.color = "black"
    color = 'black'
  }
}
function fullscreen() {
  if (stopped != 1){
        body.webkitRequestFullscreen()
      }
}
invert()
setInterval(invert, 5)

body.requestPointerLock = body.requestPointerLock ||
                            body.mozRequestPointerLock||
                            body.webkitRequestPointerLock;

body.onmousemove = function() {
  body.requestPointerLock()
     //body.webkitRequestFullscreen()
}

function keyPress(){
  var key = event.keyCode
  if (key == 40){
    stopped = 1
  }
}
