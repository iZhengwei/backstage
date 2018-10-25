"use strict";

let path = require('path');
let koaRouter = require('./application/modules/router.js');

let Koa = require('koa')
let koa = new Koa();
var koaViews = require('koa-views');

app.use(koaViews(path.resolve(__dirname, '../../../../library/UserModel.js'), {
    map: {
        html: 'underscore'
    }
}));

koa.use(koaRouter.routes());
koa.listen(3000);
console.log('app started at port 3000');