module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  performance: {
    maxEntrypointSize: 800000,
    maxAssetSize: 800000
},
  devServer: {
    contentBase: 'build',
    port: 8081,
  }
};
