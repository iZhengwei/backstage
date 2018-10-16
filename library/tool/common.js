"use strict";

let path = require('path')
  , fs   = require('fs')
  , ini  = require('ini');

let filePath = path.resolve(__dirname, '../../application/configs/application.ini');
let config = ini.parse(fs.readFileSync(filePath, 'utf-8'));

let jsonSplit2String = function (json, joinString, splitString) {

    if ('object' !== typeof JSON.parse(JSON.stringify(json)) || typeof(joinString) === 'undefined' || typeof(splitString) === 'undefined') {
        return '';
    }

    string = Object.getOwnPropertyNames(json).map(key => {
        return key + joinString + json[key];
    }).join(splitString);

    return string;
}

module.exports = {
  config,
  jsonSplit2String
}