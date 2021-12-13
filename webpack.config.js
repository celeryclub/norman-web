const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/App.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
    }),
    new HtmlWebpackPlugin({
      title: 'Norman - A cool way to log roast information',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
};
