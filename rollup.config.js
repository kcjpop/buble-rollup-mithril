import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import buble from 'rollup-plugin-buble'

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
      filesize()
    ] : []
  ),
  targets: [
    {format: 'cjs', dest: 'public/built/index.js'}
  ]
}
