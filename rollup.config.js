import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/app.js',
  plugins: [
    babel()
  ],
  dest: 'dist/x.js',
  moduleName: 'x',
  format: 'cjs'
}
