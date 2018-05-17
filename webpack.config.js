const fs = require('fs');
const path = require('path');

const webpack = require('webpack');

const Dotenv = require('dotenv-webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

//----------------------------------------------------------------------------//
// important to be possible to use the local network ip address on the
// webpack-dev-server and with that access the application through the
// cellphone or/and tablet

const ip = require('ip');

let ipAddress = 'localhost';
try {
  ipAddress = ip.address();
} catch(err){
  console.err(err);
}

//----------------------------------------------------------------------------//

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

function checkDotenv(file){
  return fs.existsSync(resolveApp(file));
}

/*
  get the Dotenv webpack plugin instance looking for
  1. .env.(production|development)
  2. .env.local
  3. .env
  4. .env.example
  the last one is a fallback that will be present on the git repositoru
  to show which variables must be defined
*/
function getDotenvPlugin(mode = 'not-defined'){
  const dotenvFile = './.env';

  let file = {
    mode: `${dotenvFile}.${mode}`,
    local: `${dotenvFile}.local`,
    dot: dotenvFile,
    example: `${dotenvFile}.example`
  };

  let isPresent = {
    mode: checkDotenv(file.mode),
    local: checkDotenv(file.local),
    dot: checkDotenv(file.dot),
    example: checkDotenv(file.example)
  };

  let loadDotenvFile;
  Object.keys(isPresent).forEach(function(key){
    if(isPresent[key] && !loadDotenvFile){
      loadDotenvFile = file[key];
    }
  });

  console.log(`\ndotenv file: ${loadDotenvFile} loaded\n`);

  return (
    new Dotenv({
      path: loadDotenvFile
    })
  );
}

//----------------------------------------------------------------------------//

// How to use Webpack with React: an in-depth tutorial
// https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060

// Optimizing front-end delivery with Webpack 4
// https://jes.al/2018/04/optimizing-front-end-delivery-with-Webpack-4/

//----------------------------------------------------------------------------//

const PATHS = {
  app: './src/index.js',
  htmlTemplate: './src/index.html',
  
  srcDir: path.resolve(__dirname, 'src'),
  nodeModulesDir: path.resolve(__dirname, 'node_modules'),

  output: {
    filenamePattern: 'static/js/[name].[hash].js',
    dir: 'dist'
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
  
  const dotenvFile = './.env';
  const isDotenvPresent = checkDotenv(dotenvFile);
  const dotenvPlugin = getDotenvPlugin(argv.mode);

  // define the webpack config plugins to each environment case
  let plugins;
  if(isDevelopment){
    plugins = [
      dotenvPlugin,
      new HtmlWebpackPlugin({
        inject: true,
        template: PATHS.htmlTemplate
      })
    ];
  } else  {
    plugins = [
      dotenvPlugin,
      new CleanWebpackPlugin(PATHS.output.dir, {}),
      new HtmlWebpackPlugin({
        inject: true,
        template: PATHS.htmlTemplate,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        }
      }),
      new MiniCssExtractPlugin(PATHS.css),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }        
      })
    ];
  }

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
      path: path.join(__dirname, PATHS.output.dir),
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
              cacheDirectory: true,
              sourceMap: shouldUseSourceMap
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

    plugins,

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          // use the same configs from the production build of the create-react-app
          // https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.prod.js#L293
          uglifyOptions: {
            compress: {
              drop_console: true
            },
            mangle: {
              safari10: true
            },
            output: {
              comments: false,
              ascii_only: true
            },
            sourceMap: shouldUseSourceMap
          }
        }),
        new OptimizeCSSAssetsPlugin({})
      ],

      // this will split the vendors to it own js file
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
      host: ipAddress,
      port: process.env.PORT || 3000
    }
  };
};