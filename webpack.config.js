const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [
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
