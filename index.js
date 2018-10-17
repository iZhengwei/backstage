"use strict";

let koaRouter = require('./application/modules/router.js');

let Koa = require('koa')
let koa = new Koa();


koa.use(koaRouter.routes());
koa.listen(3000);
console.log('app started at port 3000');