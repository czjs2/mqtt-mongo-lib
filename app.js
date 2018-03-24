const mongoose = require('mongoose');

const app = new mongoose.Schema(
    {
        appToken: String,//唯一ID
        appSecret: String,//秘钥
        appName: String,//名称
        appType: String,//类型 app gw
        creator: String,//创建者
        publish: [String],
        subscribe: [String],
        pubsub: [String],
        circles: [{
            circleId: String,//唯一ID
            circleName: String,//唯一ID
            appInfos: [{appId: String, authority: String}],
        }],
        memo: String
    });

module.exports = mongoose.model('app', app);