const path = require('path')
const webpack = require('webpack')
const prod = process.env.NODE_ENV === 'production'

const config = {
  entry: [path.join(__dirname, 'demo', 'src', 'MarkMyBitchUp.js')],

  output: {
    path: path.join(__dirname, 'demo', 'dist', 'js'),
    filename: 'demo.js',
    publicPath: '/demo/dist',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {test: /\.json$/, loader: 'json'},
      {test: /\.js$/,   loader: 'babel'}
    ]
  },

  externals: {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  },

  plugins: [new webpack.NoErrorsPlugin()],

  devtool: prod ? null : 'eval',
}

if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {NODE_ENV: JSON.stringify('production')}
  }))
  config.plugins.push(new webpack.optimize.DedupePlugin())
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true))
}

module.exports = config