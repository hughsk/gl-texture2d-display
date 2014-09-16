precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uSize;
varying vec2 vPos;

void main() {
  vec2 uv = (vPos + 1.0) * 0.5;
  uv.y = 1.0 - uv.y;
  gl_FragColor = vec4(
      texture2D(uTexture, uv).rgb
    , 1.0
  );
}
