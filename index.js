/**
 * Created by fx on 17-5-10.
 */
const mongoose = require("mongoose");
const Promise = require("bluebird");
mongoose.Promise = Promise;

const config = require(process.cwd()+'/config') || {};

const dbConfig = config.mongoDB || {};

const dbString = "mongodb://" + dbConfig.dbIp + ":" + dbConfig.dbPort + "/" + dbConfig.dbName;

let options = {
    'user': dbConfig.user,
    'pass': dbConfig.pass,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500,
    promiseLibrary: Promise

};


function init() {

    mongoose.connection.on('open', function () {
        console.log("数据库连接成功:" + config.dbIp + ",端口:" + config.dbPort + ' 数据库：' + config.dbName);
    });

    mongoose.connection.on('error', function (error) {
        console.log('数据库连接断开，原因为：', error);
    });
    return mongoose.connect(dbString, options);
    // return conn.open(config.dbIp, config.dbName, config.dbPort,options);

}

// module.exports.conn = conn;
module.exports.dbString = dbString;
module.exports.init = init;
module.exports.mongoose = mongoose;
