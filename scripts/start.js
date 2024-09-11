// scripts/start.js
'use strict';

process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack/webpack.dev.js');
const paths = require('../config/webpack/paths');
const fs = require('fs');
const path = require('path');

// Check if the public folder exists
if (!fs.existsSync(paths.appPublic)) {
  console.error('Public folder does not exist.');
  process.exit(1);
}

// Run Webpack Dev Server
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: paths.appPublic,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
});

server.listen(config.devServer.port, 'localhost', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Starting the development server on http://localhost:${config.devServer.port}...\n`);
});