import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ]
}
