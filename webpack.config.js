const path = require('path');

module.exports = {
    mode: 'production', // or 'development' for development mode
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'paystack-form-bundle.js',
      libraryTarget: 'umd',
      library: 'PayStackForm.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(sass|less|css)$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };