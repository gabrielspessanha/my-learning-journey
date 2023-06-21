
module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets:[
            ['@babel/preset-env', {targets: "defaults"}]
          ]
        }
      }
    }]
  }
}
