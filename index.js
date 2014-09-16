var triangle = require('a-big-triangle')
var glslify  = require('glslify')
var WMap     = typeof WeakMap === 'undefined'
  ? require('weakmap')
  : WeakMap

module.exports = display

var cache  = new WMap
var Shader = glslify({
    vert: './display.vert'
  , frag: './display.frag'
})

var viewport = new Float32Array(2)
var size     = new Float32Array(2)

function display(tex, scale) {
  var gl     = tex.gl
  var canvas = tex.gl.canvas
  var shader = cache.get(gl)

  if (!shader) {
    cache.set(gl, shader = Shader(gl))
  }

  viewport[0] = canvas.width
  viewport[1] = canvas.height
  size[0] = tex.shape[0] * (scale || 1)
  size[1] = tex.shape[1] * (scale || 1)

  gl.viewport(
      (viewport[0] - size[0]) / 2
    , (viewport[1] - size[1]) / 2
    , size[0]
    , size[1]
  )

  shader.bind()
  shader.uniforms.uSize     = size
  shader.uniforms.uTexture  = tex.bind(0)

  triangle(gl)
}
