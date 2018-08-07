const mongoose = require('mongoose')
const db = "mongodb://localhost/shoppingmall"
const {resolve}=require("path")
const glob=require("glob")

mongoose.Promise = global.Promise
exports.connect = () => {    
    let maxConnectTimes = 0 
    return new Promise((resolve,reject)=>{
        mongoose.connect(db)  //连接数据库    
        mongoose.connection.on('disconnected', () => { //增加数据库连接的事件监听
            if(maxConnectTimes<3){
                maxConnectTimes++
                mongoose.connect(db) 
            }else{
                reject()
                throw new Error("数据库连续连接3次，依然失败！请检查原因")
            }
        })
        mongoose.connection.on('error', err => { //数据库出现错误的时候
            if(maxConnectTimes<3){
                maxConnectTimes++
                mongoose.connect(db) 
            }else{
                reject()
                throw new Error("数据库连续连接3次，依然失败！请检查原因")
            }
        })
        mongoose.connection.once('open', () => {  //l连接成功
            console.log('MongoDB Connected successfully!')
            resolve()
        })
    })    
}

exports.initSchemas = () =>{
    glob.sync(resolve(__dirname,'./schemas/','**/*.js')).forEach(require)
}