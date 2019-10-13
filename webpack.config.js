// import path from 'path';

const path = require('path');
// export default {
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'app'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // We can use a plugin to extract that CSS to a file, but
      // in production & development "style" loader enables hot editing of CSS.
      {
        test: /\.(css|scss)$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          // {
          //   loader: require.resolve('postcss-loader'),
          //   options: {
          //     // Necessary for external CSS imports to work
          //     // https://github.com/facebookincubator/create-react-app/issues/2677
          //     ident: 'postcss',
          //     plugins: () => [
          //       require('postcss-flexbugs-fixes'),
          //       autoprefixer({
          //         browsers: [
          //           '>1%',
          //           'last 4 versions',
          //           'Firefox ESR',
          //           'not ie < 9' // React doesn't support IE8 anyway
          //         ],
          //         flexbox: 'no-2009'
          //       })
          //     ]
          //   }
          // },
          {
            loader: require.resolve('sass-loader')
          }
        ]
      }
    ]
  }
};
