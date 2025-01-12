const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test:/\.css$/,  //quais arquivos ele irá testar para aplicar  o loader
      use:[MiniCssExtractPlugin.loader, 'css-loader'] //qual loader ele vai usar
    }]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}