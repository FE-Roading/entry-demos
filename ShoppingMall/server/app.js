
const Koa = require('koa')
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
const router=require("./routers/index")
const cors=require("koa2-cors")
const bodyParser=require("koa-bodyparser")
const jwt = require('jsonwebtoken')
const jwtKoa = require('koa-jwt')
const util = require('util')
const verify = util.promisify(jwt.verify)
const config=require('./config/config.js')
const errorHandler=require("./service/errorHandler.js")

let app=new Koa()
app.use(cors({
        credentials: true, 
        origin: 'http://192.168.0.103:8080'
    }))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    

;(async ()=>{
    await connect()
    initSchemas()
})()

app.listen(3000,()=>{
    console.log("running at 3000!")
})