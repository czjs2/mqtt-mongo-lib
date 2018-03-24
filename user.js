/**
 * Created by fx on 17-5-10.
 */
const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        telNo:{type: String,unique:true},//用户手机号
        password:{type: String},//密码
        name:{type:String},
        avatar:{type:String}, //头像
        role:{type:String},//角色
        wfRoles:[{type:String}],
        memo:{type:String},//备注
        isDel:{type:Boolean},//停用
        registerTime:{type:Date}
    }
);

module.exports = mongoose.model('user', user);