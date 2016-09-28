import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-js'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    buble(),
    nodeResolve({browser: true}),
    commonjs({include: 'node_modules/**'})
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
