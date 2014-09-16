var canvas  = document.body.appendChild(document.createElement('canvas'))
var gl      = require('gl-context')(canvas, render)
var Tex2D   = require('gl-texture2d')
var lena    = require('lena')
var display = require('./')

var texture = Tex2D(gl, lena.transpose(1, 0, 2))

window.addEventListener('resize'
  , require('canvas-fit')(canvas)
  , false
)

function render() {
  gl.viewport(0, 0, canvas.width, canvas.height)
  gl.clearColor(0, 0, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  display(texture)
}
