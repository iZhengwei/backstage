"use strict";

let path = require('path')
  , fs = require('fs')
  , ini = require('ini');

let filePath = path.resolve(__dirname, '../../application/configs/application.ini');
exports.config = ini.parse(fs.readFileSync(filePath, 'utf-8'));