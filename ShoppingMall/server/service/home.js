const Router=require("koa-router")
const mongoose = require('mongoose')
const initInfos=require("../data/indexInfo.json")

let router=new Router()

router.get('/init',async(ctx)=>{
    ctx.body={
        code:200,
        data:initInfos.data
    }
})
module.exports=router