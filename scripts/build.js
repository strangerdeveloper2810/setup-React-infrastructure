// scripts/build.js
'use strict';

process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('../config/webpack/webpack.prod.js');
const paths = require('../config/webpack/paths');
const fs = require('fs-extra');
const path = require('path');

// Clean the build directory
fs.emptyDirSync(paths.appBuild);

// Copy the public folder to the build directory
fs.copySync(paths.appPublic, paths.appBuild, {
  dereference: true,
  filter: file => file !== paths.appHtml,
});

// Run Webpack
webpack(config, (err, stats) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(stats.toString({
    colors: true,
    all: false,
    errors: true,
    warnings: true,
    assets: true,
    timings: true,
  }));

  if (stats.hasErrors()) {
    process.exit(1);
  }
});