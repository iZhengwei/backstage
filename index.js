"use strict";
require('./library/mysql.js');

const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = 'hello, koa';
    
});

app.listen(3000);

console.log('app started at port 3000');