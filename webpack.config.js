const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  stats:{
    children:true,
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins:['@babel/plugin-syntax-jsx']
          }
        },
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.css'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),new HtmlWebpackPlugin({
    template:('./dist/index.html')
  })],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
};
