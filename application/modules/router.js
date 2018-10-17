"use strict";
let path = require('path');
let userModel = require(path.resolve(__dirname, '../../library/UserModel.js'));
let KoaRouter = require('koa-router');
let koaRouter = new KoaRouter();

// defaultModule
koaRouter.get("/", ctx => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello koa2</h1>'
    let condition = {};
    condition['account'] = 'root';
    userModel.getUsers(condition)
            .then(result => {
                let res = JSON.parse(JSON.stringify(result))
                    console.log(res)
            })
})

// test
koaRouter.get("/test", ctx => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello koa2</h1>'
    let condition = {};
    condition['account'] = 'root';
    userModel.getUsers(condition)
            .then(result => {
                let res = JSON.parse(JSON.stringify(result))
                    console.log(res)
            })
})

koaRouter.get("/create-user", ctx => {
    let query = ctx.request.query;
    query.loginip = Number(query.loginip);
    console.log(query);
    userModel.createUser(query)
            .then(result => {
                let res = JSON.parse(JSON.stringify(result))
                    console.log(res)
            })
})

koaRouter.get("/update-user", ctx => {
    let query = ctx.request.query;
    query.loginip = Number(query.loginip);
    console.log(query);
    userModel.updateUser(1, query)
            .then(result => {
                let res = JSON.parse(JSON.stringify(result))
                    console.log(res)
            })
})

koaRouter.get("/delete-user", ctx => {
    let query = ctx.request.query;
    userModel.deleteUser(1)
            .then(result => {
                let res = JSON.parse(JSON.stringify(result))
                    console.log(res)
            })
})



module.exports = koaRouter;