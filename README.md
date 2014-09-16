# gl-texture2d-display [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Displays a given [gl-texture2d](http://github.com/stackgl/gl-texture2d) on your
screen. Useful for debugging.

## Usage

[![NPM](https://nodei.co/npm/gl-texture2d-display.png)](https://nodei.co/npm/gl-texture2d-display/)

### `display(texture2d, [scale])`

Displays the texture in the center of your screen. Optionally, you can pass in
a `scale` value to change the size of the texture, which defaults to 1.

*Note that this will call `gl.viewport` and bind the texture for you, so you'll
want to reset these values afterwards if you plan on using them again.*

## License

MIT. See [LICENSE.md](http://github.com/hughsk/gl-texture2d-display/blob/master/LICENSE.md) for details.
