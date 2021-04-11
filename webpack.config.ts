const path = require("path");
// const path = require("path");
const webpack = require('webpack');
// const webpackMerge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// const commonPaths = require('./config/paths');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: 'all'
    },
    // new TerserPlugin({
    //   // Use multi-process parallel running to improve the build speed
    //   // Default number of concurrent runs: os.cpus().length - 1
    //   parallel: true,
    //   // Enable file caching
    //   cache: true,
    //   sourceMap: true,
    // }),
  },
  devtool: false,
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin ({
      filename: 'index.html',
      inject: true,
      // template: commonPaths.templatePath,
      template: path.resolve(__dirname, "src", "index.html")
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Code Splitting',
    //   meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
    // }),
    new ForkTsCheckerWebpackPlugin(),
    // new ForkTsCheckerWebpackPlugin({
    //   async: false,
    //   eslint: {
    //     files: "./src/**/*",
    //   },
    // }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      // filename: `${commonPaths.cssFolder}/[name].[contenthash].css`,
      // chunkFilename: `${commonPaths.cssFolder}/[name].[contenthash].css`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                symbolId: '[name]_[hash]',
                runtimeCompat: false,
                prefixize: true,
              },
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  { removeTitle: true },
                  { convertColors: { shorthex: false } },
                  { convertPathData: false },
                ],
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png)$/i,
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: '[hash].[ext]',
          },
        },
        {
          test: /\.ico$/i,
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: 'favicon.ico',
          },
        },
    ],
  },
  resolve: {
    // modules: [path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'node_modules')],
    extensions: ['.tsx', '.ts', '.js', '.jsx', ".css"],
    alias: {
      // _components: commonPaths.componentsPath,
      _components: path.resolve(__dirname, '..', 'src/components/'),
      // _views: path.resolve(__dirname, '..', 'src/views/'),
    },
  },
  output: {
    // filename: "bundle.[contenthash].js",
    filename: "bundle.js",
    chunkFilename: '[name].bundle.js',// format name của bundle
    path: path.resolve(__dirname, "build"),
    // path: commonPaths.outputPath,
    // publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    // contentBase: commonPaths.devServerContentBase,
    compress: true,
    port: 4000,
  },
};
