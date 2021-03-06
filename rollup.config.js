import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import includePaths from 'rollup-plugin-includepaths'
import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import cssnext from 'postcss-cssnext'
import assets from 'postcss-assets'
import cssnano from 'cssnano'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-js'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    includePaths({
      paths: ['src']
    }),
    nodeResolve({
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    postcss({
      extensions: [ '.css' ],
      sourceMap: true, // true, "inline" or false
      extract : 'public/built/style.css',
      plugins: [
        cssnext(),
        assets()
        // cssnano({ preset: 'default' })
      ]
    }),
    buble()
  ].concat(
    process.env.NODE_ENV === 'production'
    ? [
      filesize(), // Show filesize of bundle
      uglify({}, minify) // Minify bundle
    ]
    : []
  ),
  targets: [
    {format: 'cjs', dest: 'public/built/index.js'}
  ]
}
