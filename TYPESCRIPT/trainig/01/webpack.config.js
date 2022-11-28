module.exports = {
/*mode: package to production so we can deploy to the cloud*/
  mode:'production',
/*entry point*/
  entry: './hello.ts',
  devtool:'inline-source-map',
/*the extensions we are supporting*/
  resolve:{
	  extensions:['.ts','.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
