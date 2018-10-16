"use strict";

let defaultModel = require('./mysql.js')
  , common       = require('./tool/common.js');

const TABLE = 'tb_user';

// 获取单条数据
let getUser = function(condition) {
    let columns = ' id AS userid, account, password, nickname, email, gender, avatar, signature, region, mobile, '
                + 'memo, status, login_ip AS loginip, login_time AS logintime, create_time AS logintime ';
    let table   = 'tb_user';

    let conditionObject = _makeCondition(condition);
    let sql = 'SELECT ' + columns + ' FROM ' + table + conditionObject.where + ' LIMIT 1';
    return defaultModel.query(sql, conditionObject.binds);
}

// 获取多条数据
let getUsers = function(condition, sort = '', maxCount = '') {
    let columns = ' id AS userid, account, password, nickname, email, gender, avatar, signature, region, mobile, '
                + 'memo, status, login_ip AS loginip, login_time AS logintime, create_time AS logintime ';
    let table   = 'tb_user';

    var order = '';
    var limit = '';

    let conditionObject = _makeCondition(condition, sort);

    if (conditionObject.sort) {
        order = ' ORDER BY ' + conditionObject.sort;
    }

    if (maxCount && maxCount > 0) {
        limit = ' LIMIT ' + maxCount;
    }

    let sql = 'SELECT ' + columns + ' FROM ' + table + conditionObject.where + order + limit;
    return defaultModel.query(sql, conditionObject.binds);
}

// 创建
let createUser = function(params) {

    let keys = ['account', 'password', 'email', 'loginip'];

    for (let i = 0; i < keys.length; i++) {
        if (typeof(params[keys[i]]) === 'undefined') {
            return false;
        }
    }

    let binds = _makeBind(params);
    let fields = [];
    let values = [];
    for(let key in binds){
        fields.push(key);
        values.push(':' + key);
    }
        console.log(binds);

    fields = fields.join(', ');
    values = values.join(', ');

    let sql = 'INSERT INTO ' + TABLE + ' (' + fields + ') ' + ' VALUES (' + values + ')';
    return defaultModel.query(sql, binds);
}

// 更新
let updateUser = function(userId, params) {
    if (!Number.isInteger(userId) || userId <= 0) {
        return false;
    }

    let binds = _makeBind(params, true);
    let set = [];
    for(let key in binds){
        set.push(key + ' = :' + key);
    }
    binds.id = userId;

    set = ' SET ' + set.join(', ');

    let sql = 'UPDATE ' + TABLE + set + ' WHERE id = :id';
    return defaultModel.query(sql, binds);
}

// 删除
let deleteUser = function(userId) {
    if (!Number.isInteger(userId) || userId <= 0) {
        return false;
    }

    let sql = 'DELETE FROM ' + TABLE + ' WHERE id = ?';
    return defaultModel.query(sql, userId);
}

// 构造bind参数
let _makeBind = function (params, isUpdate = false) {
    let binds = {};
    // if (!isUpdate && typeof(params.userid) !== 'undefined' && Number.isInteger(params.userid) && params.userid > 0) {
    //     binds.userid = params.userid;
    // }

    if (typeof(params.account) !== 'undefined') {
        binds.account = params.account;
    }

    if (typeof(params.password) !== 'undefined') {
        binds.password = params.password;
    }

    if (typeof(params.nickname) !== 'undefined') {
        binds.nickname = params.nickname;
    }

    if (typeof(params.email) !== 'undefined') {
        binds.email = params.email;
    }

    if (typeof(params.gender) !== 'undefined' && Number.isInteger(params.gender)) {
        binds.gender = params.gender;
    }

    if (typeof(params.avatar) !== 'undefined') {
        binds.avatar = params.avatar;
    }
    
    if (typeof(params.signature) !== 'undefined') {
        binds.signature = params.signature;
    }
    
    if (typeof(params.region) !== 'undefined') {
        binds.region = params.region;
    }
    
    if (typeof(params.mobile) !== 'undefined') {
        binds.mobile = params.mobile;
    }
    
    if (typeof(params.memo) !== 'undefined') {
        binds.memo = params.memo;
    }

    if (typeof(params.status) !== 'undefined' && Number.isInteger(params.status)) {
        binds.status = params.status;
    }

    if (typeof(params.loginip) !== 'undefined' && Number.isInteger(params.loginip)) {
        binds.login_ip = params.loginip;
    }

    if (typeof(params.logintime) !== 'undefined' && Number.isInteger(params.logintime)) {
        binds.login_time = params.logintime;
    }

    return binds;
}

// 构造查询条件   @todo
let _makeCondition = function (condition, sort = '') {
    let where = []
      , binds = {}
      , order = '';
    
    if (typeof(condition.createtime) !== 'undefined' && Number.isInteger(condition.createtime)) {
        where.push('create_time = :createtime');
        binds.createtime = condition.createtime;
    }

    if (typeof(condition.logintime) !== 'undefined' && Number.isInteger(condition.logintime)) {
        where.push('login_time = :logintime');
        binds.logintime = condition.logintime;
    }
    
    if (typeof(condition.account) !== 'undefined') {
        where.push('account = :account');
        binds.account = condition.account;
    }

    if (typeof(condition.nickname) !== 'undefined') {
        where.push('nickname = :nickname');
        binds.nickname = condition.nickname;
    }

    if (typeof(condition.email) !== 'undefined') {
        where.push('email = :email');
        binds.email = condition.email;
    }

    if (typeof(condition.gender) !== 'undefined' && Number.isInteger(condition.gender)) {
        where.push('gender = :gender');
        binds.gender = condition.gender;
    }

    if (typeof(condition.avatar) !== 'undefined') {
        where.push('avatar = :avatar');
        binds.avatar = condition.avatar;
    }
    
    if (typeof(condition.signature) !== 'undefined') {
        where.push('signature = :signature');
        binds.signature = condition.signature;
    }
    
    if (typeof(condition.region) !== 'undefined') {
        where.push('region = :region');
        binds.region = condition.region;
    }
    
    if (typeof(condition.mobile) !== 'undefined') {
        where.push('mobile = :mobile');
        binds.mobile = condition.mobile;
    }
    
    if (typeof(condition.memo) !== 'undefined') {
        where.push('memo = :memo');
        binds.memo = condition.memo;
    }

    if (typeof(condition.status) !== 'undefined' && Number.isInteger(condition.status)) {
        where.push('status = :status');
        binds.status = condition.status;
    }

    if (typeof(condition.loginip) !== 'undefined' && Number.isInteger(condition.loginip)) {
        where.push('login_ip = :loginip');
        binds.loginip = condition.loginip;
    }

    where = where.join(' AND ');
    return {"where": where, "binds": binds, "order": order}
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}