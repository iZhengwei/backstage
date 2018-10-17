"use strict";

let common = require('./tool/common.js')
  , mysql  = require('mysql');

let pool = mysql.createPool({
    host     : common.config.mysql.host,
    user     : common.config.mysql.username,
    password : common.config.mysql.password,
    database : common.config.mysql.dbname
});
let query = (sql, binds) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                resolve(error)
            } else {
                connection.config.queryFormat = function (query, values) {
                    if (!values) return query;
                    return query.replace(/\:(\w+)/g, function (txt, key) {
                        if (values.hasOwnProperty(key)) {
                            return this.escape(values[key]);
                        }
                        return txt;
                    }.bind(this));
                };
                connection.query(sql, binds, (error, rows) => {
                    if (error) {
                        resolve(error)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}




module.exports = {
    query
}