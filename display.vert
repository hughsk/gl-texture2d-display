precision mediump float;

attribute vec2 position;
varying vec2 vPos;

void main() {
  vPos = position;
  gl_Position = vec4(position, 1.0, 1.0);
}
