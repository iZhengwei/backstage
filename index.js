"use strict";

let koaRouter = require('./application/modules/router.js');

let Koa = require('koa')
let koa = new Koa();
var koaViews = require('koa-views');
var koaBodyParser = require('koa-bodyparser');
var koaStatic = require('koa-static');
koa.use(koaStatic(__dirname + '/public'));
koa.use(koaViews('./application/modules', {
    map: {
        html: 'ejs'
    }
}));

koa.use(koaBodyParser());
koa.use(koaRouter.routes());
koa.listen(3000);
console.log('app started at port 3000');