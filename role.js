/**
 * Created by fx on 17-5-15.
 */
const mongoose = require('mongoose');

const role = new mongoose.Schema(
    {
        identity:{type: String,unique:true},//角色标识
        type:{type: String},//角色类型 system ,workflow
        name:{type:String},//角色名称
        memo:{type:String},//备注
    }
);

module.exports = mongoose.model('role', role);