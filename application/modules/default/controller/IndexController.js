"use strict";
let path = require('path');
let userModel = require(path.resolve(__dirname, '../../../../library/UserModel.js'));

let index = async ctx => {

    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>index</h1>';
    // ctx.response.redirect('/login');
    await console.log(ctx.request.body);
}

let login = async ctx => {
    // ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>login</h1>';
    // ctx.response.redirect('/');
    await ctx.render('default/view/login', {
        user: 12,
    });
}

module.exports = {
    index,
    login
}