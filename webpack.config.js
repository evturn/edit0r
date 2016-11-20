const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const prod = process.env.NODE_ENV === 'production'
const CWD = process.cwd()

const config = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(CWD, 'demo', 'src')
  ],

  output: {
    path: path.join(CWD, 'demo', 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunky.mclover.js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {presets: [ 'react-hmre' ]},
    },{
      test: /\.json$/,
      loader: 'json-loader',
    },{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: [
        `style-loader`,
        `!css-loader`,
        `?localIdentName=[local]--[path]-[hash:base64:5]`,
        `&modules&importLoaders=1`,
        `&sourceMap`,
        `!postcss-loader`,
      ].join(''),
    },{
      test: /\.css$/,
      include: /node_modules/,
      loader: ['style-loader', 'css-loader'],
    },{
      test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      loader: 'url?limit=65000&mimetype=application/octet-stream&name=font/[name].[ext]',
    },]
  },

  resolve: {
    modules: ['app', 'demo', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.react.js'],
    packageMains: [
      'jsnext:main',
      'main',
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WriteFilePlugin({log: false}),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'demo/dist/index.html',
      title: 'Edit0r - A place for friends©',
      filename: 'index.html',
      appMountId: 'main',
      inject: true,
    }),
    new webpack.DefinePlugin({__DEV__: true}),
  ],

  postcss: _ => [
    postcssFocus(),
    cssnext({ browsers: ['last 2 versions', 'IE > 10'] }),
    postcssReporter({ clearMessages: true }),
  ],

  target: 'web',
  stats: false,
  progress: true,
  devtool: prod ? null : 'inline-source-map',
}

module.exports = config