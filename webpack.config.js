const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ExtendedDefinePlugin = require('extended-define-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015', 'stage-2']
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }
    ]
  },
  plugins: [
    new LiveReloadPlugin({ appendScriptTag: true }),
    new ExtractTextPlugin('styles.css'),
    new ExtendedDefinePlugin({
      'process.env': {
        'GOOGLE_KEY': JSON.stringify(process.env.GOOGLE_KEY),
        'SPOTIFY_CLIENT_ID': JSON.stringify(process.env.GOOGLE_KEY),
        'SPOTIFY_CLIENT_SECRET': JSON.stringify(process.env.SPOTIFY_CLIENT_SECRET),
        'SPOTIFY_REDIRECT_URI': JSON.stringify(process.env.SPOTIFY_REDIRECT_URI)
      }
    })
  ]
};
