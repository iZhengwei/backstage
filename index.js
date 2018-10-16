"use strict";
let userModel = require('./library/UserModel.js');

const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const koaRouter = new KoaRouter();

koaRouter.get("/", ctx => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello koa2</h1>'
    let query = ctx.request.query;
    console.log(query);
    let condition = {};
    condition['userid'] = 'aa';
    condition['nick'] = 'aab';
    userModel.getUser(condition)
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

app.use(koaRouter.routes());
app.listen(3000);
console.log('app started at port 3000');