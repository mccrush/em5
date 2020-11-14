module.exports = {
  //publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ?
    'em5/' : '/',
  outputDir: 'docs'
}