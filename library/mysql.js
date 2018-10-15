"use strict";

let common = require('./tool/common.js')
  , mysql  = require('mysql');
  
var connection = mysql.createConnection({
  host     : common.config.mysql.host,
  user     : common.config.mysql.username,
  password : common.config.mysql.password,
  database : common.config.mysql.dbname
});
console.log(connection)