const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development";
let target = 'web';

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,

  plugins: [new MiniCssExtractPlugin()],
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
        test: /\.(s[ac]|c)ss/i,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "postcss-loader", // order is important because sass get's loaded
          "sass-loader" // then goto postcss and forth.
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource",
      }
    ],
  },
  
  devServer: {
    static: './',
    hot: true
  },
  devtool: 'source-map',
};