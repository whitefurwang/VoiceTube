const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

let plugins = [
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css'
  }),
  new CopyWebpackPlugin([
    { from: 'src/assets/images', to: 'assets/images' }
  ])
]

if (!devMode) {
  plugins = plugins.concat([new CleanWebpackPlugin('demo/*.css')])
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: devMode ? '[path][name]---[local]' : '[hash:base64:5]',
              sourceMap: devMode,
              minimize: true
            }
          },
          {
            loader: 'sass-loader?url=false,outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib'),
            options: {
              sourceMap: devMode
            }
          }
        ]
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: plugins
}
