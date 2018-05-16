const path = require('path');

const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

//----------------------------------------------------------------------------//

// How to use Webpack with React: an in-depth tutorial
// https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060

// Optimizing front-end delivery with Webpack 4
// https://jes.al/2018/04/optimizing-front-end-delivery-with-Webpack-4/

// TODO: add react hot reload 

//----------------------------------------------------------------------------//

const PATHS = {
  app: './src/index.js',
  htmlTemplate: './src/index.html',
  
  srcDir: path.resolve(__dirname, 'src'),
  nodeModulesDir: path.resolve(__dirname, 'node_modules'),

  output: {
    filenamePattern: 'static/js/[name].[hash].js',
    path: '/dist'
  },

  css: {
    filename: 'static/css/[name].[hash].css',
    chunkFilename: 'static/css/[id].[hash].css'
  }
};

const CSS_MODULE_NAME_PATTERN = '[name]__[local]___[hash:base64:5]';

//----------------------------------------------------------------------------//

// https://webpack.js.org/configuration/configuration-types/#exporting-a-function
module.exports = (env, argv) => {

  const isProduction = (argv.mode === 'production');
  const isDevelopment = !isProduction;
  const shouldUseSourceMap = isDevelopment;

  // https://webpack.js.org/configuration/#options
  return {

    // Don't attempt to continue if there are any errors.
    bail: true,

    // https://webpack.js.org/configuration/devtool/
    // https://survivejs.com/webpack/building/source-maps/
    devtool: shouldUseSourceMap ? 'eval' : false,

    entry: {
      app: PATHS.app
    },
    
    output: {
      path: path.join(__dirname, PATHS.output.path),
      filename: PATHS.output.filenamePattern,

      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: info =>
        path
          .relative(__dirname, info.absoluteResourcePath)
          .replace(/\\/g, '/'),
    },

    resolve: {
      // enables to use imports with relative paths 
      // (without ./ or ../../, starting from the ./src directory)
      modules: [
        PATHS.srcDir,
        PATHS.nodeModulesDir
      ]
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: isProduction
              }
            }
          ] 
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            (
              isDevelopment ? 
                // creates styles nodes from JS strings
                'style-loader' :
                // extracts the styles to a .css file
                MiniCssExtractPlugin.loader
            ), 
            // translates CSS into CommonJS
            {
              // https://blog.pusher.com/css-modules-react/
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: CSS_MODULE_NAME_PATTERN,
                sourceMap: shouldUseSourceMap
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                sourceMap: shouldUseSourceMap,
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  require('autoprefixer')
                ]
              }
            },
            // compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  PATHS.srcDir
                ]
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin('dist', {}),
      new HtmlWebpackPlugin({
        template: PATHS.htmlTemplate
      }),
      new MiniCssExtractPlugin(PATHS.css)
    ],

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          uglifyOptions: {
            compress: {
              drop_console: true
            }
          }
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
            chunks: 'initial'
          }
        }
      }
    },

    devServer: {
      port: process.env.PORT || 3000
    }
  };
};