const mongoose = require('mongoose');

const iot = new mongoose.Schema(
    {
        appId: String,//唯一ID
        iotId: String,//系统内唯一ID
        circles: [String]//唯一ID,
        retainData:Object //保留数据
    }
);

module.exports = mongoose.model('iot', iot);
