const Router=require("koa-router")

const users=require("../service/user.js")
const home=require("../service/home")
const goods=require("../service/goods")

let router=new Router()
router.use("/user",users.routes())
router.use("/home",home.routes())
router.use("/goods",goods.routes())

module.exports=router