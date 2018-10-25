"use strict";
let path = require('path');
let userModel = require(path.resolve(__dirname, '../../../../library/UserModel.js'));

let index = ctx => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>index</h1>';
    // ctx.response.redirect('/login');
    console.log(ctx.response);
}

let login = ctx => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>login</h1>';
    ctx.response.redirect('/');
    // ctx.response.render();
}

module.exports = {
    index,
    login
}