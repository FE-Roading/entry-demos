const Router=require("koa-router")
const mongoose = require('mongoose')
const config=require('../config/config.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
let router=new Router()

router.post("/comments/add",async(ctx)=>{
    let id=ctx.request.body.id
    let oid=ctx.request.body.oid
    let comments=ctx.request.body.comments

    if(toString.call(comments)!="[object Array]"){
        ctx.body={
            code:200,
            message:"请输入正确的查询参数！"
        }
    }

    const Comments = mongoose.model('Comments')
    const Order=mongoose.model("Order")
    try{
        let order=await Order.findOne({DELETE:false,USERID:id,_id:oid}).exec()
        if(order){
            for(let comment of comments){
                let nComment=new Comments(comment)
                await nComment.save()
            }
            order.COMMENT=true
            await order.save()
            ctx.body={
                code:200,
                message:true
           }
        }else{
            throw new Error("未查找到对应的订单信息！")   
        }        
    }catch(error){
        ctx.body={
            code:200,
            message:JSON.stringify(error)
       }
    }
})
router.post("/comments/del",async(ctx)=>{
    let id=ctx.request.body.id
    let gid=ctx.request.body.gid
    let oid=ctx.request.body.oid

    const Comments = mongoose.model('Comments')
    await Comments.findOne({userId:id,delete:false,goodsId:gid,orderId:oid}).exec()
    .then(result=>{
        result.delete=true
        result.save()
        ctx.body={
            code:200,
            message:true
        }
    }).catch(error=>{
        ctx.body={
            code:200,
            message:JSON.stringify(error)
        }
    })
})

router.post("/comments",async(ctx)=>{
    let id=ctx.request.body.id
    let gid=ctx.request.body.gid
    let str={}

    if(id){
        str={userId:id,delete:false}
    }else if(gid){
        str={goodsId:gid,delete:false}
    }else{
        ctx.body={
            code:200,
            message:"请输入正确的查询参数！"
        }
    }

    const Comments = mongoose.model('Comments')
    await Comments.find(str).sort({"createAt":-1}).exec()
    .then(result=>{
        if(result){
            ctx.body={
                code:200,
                message:result
            }
        }else {
            ctx.body={
                code:200,
                message:"无评论信息"
            }
        }
    }).catch(error=>{
        ctx.body={
            code:200,
            message:JSON.stringify(error)
        }
    })

})
//个人信息修改接口
router.post('/info/edit',async(ctx)=>{
    let id=ctx.request.body.id
    let mail=ctx.request.body.mail
    let phone=ctx.request.body.phone

    const User = mongoose.model('User')
    await User.findOne({_id:id,delete:false}).exec()
    .then((result)=>{
        if(result){
            result.phone=phone
            result.mail=mail
            result.save()
            ctx.body={
                code:200,
                message:true
            }
        }else {
            ctx.body={
                code:200,
                message:"未找到对应的用户信息"
            }
        }
    }).catch(error=>{
        ctx.body={
            code:200,
            message:JSON.stringify(error)
        }
    })
})
router.post('/info',async(ctx)=>{
    let id=ctx.request.body.id

    const User = mongoose.model('User')
    await User.findOne({_id:id,delete:false}).exec()
    .then(async(result)=>{
        if(result){
            ctx.body={
                code:200,
                message:{
                    name:result.userName,
                    phone:result.phone,
                    mail:result.mail
                }
            }
        }else {
            ctx.body={
                code:200,
                message:"未找到对应的用户信息"
            }
        }
    }).catch(error=>{
        ctx.body={
            code:200,
            message:JSON.stringify(error)
        }
    })
})


//订单相关操作
router.post("/order",async(ctx)=>{
    let id=ctx.request.body.id
    const Order=mongoose.model("Order")
    await Order.find({DELETE:false,USERID:id}).sort({"CREATEAT":-1}).exec().then((result)=>{
        ctx.body={
            code:200,
            message:result
        }
    }).catch(error=>{
        ctx.body={
            code:200,
            message:JSON.stringify(error)
        }
    })
})
router.post("/order/del",async(ctx)=>{
    let id=ctx.request.body.id
    let oid=ctx.request.body.oid
    const Order=mongoose.model("Order")
    await Order.findOne({DELETE:false,USERID:id,_id:oid}).exec().then(result=>{
        if(result){
            result.DELETE=true
            result.save()
            ctx.body={
                code:200,
                message:true
            }   
        }else{
            ctx.body={
                code:200,
                message:result
            }   
        }
             
    }).catch(error=>{
        ctx.body={
            code:200,
            message:JSON.stringify(error)
        }
    })
})

//将goods对象转换为订单中goods需要的格式
function gooodsTransform(goods){
    let temp={}
    let tgoods=[]
    let transKeys=["SHOP_ID","SUB_ID","GOOD_TYPE","NAME","ORI_PRICE","PRESENT_PRICE","SALES_COUNT","IMAGE1"]
    for(let item of goods){
        temp={}
        for(let key of transKeys){
            temp[key]=item[key]
        }
        temp.GID=item.ID
        temp.SALES_COUNT=item.qty
        tgoods.push(temp)
    }
    return tgoods
}
router.post('/pay',async(ctx)=>{
    try{
        var id=ctx.request.body.id  //用户ID
        var total=ctx.request.body.total //总价格
        var address=ctx.request.body.address
        var pay=ctx.request.body.pay  //付款方式
        var goods=gooodsTransform(ctx.request.body.goods)  //货物格式转换
        var verifyTotal=0
    }catch(error){
        ctx.body={
            code:200,
            message:"请传入完整的订单信息"
        }
    }   

    goods.forEach((ele)=>{
        verifyTotal+=ele.PRESENT_PRICE
    });
    if(verifyTotal-total>0.5){
        console.log('交易价格出现大偏差，校验价格为',verifyTotal,"，实际价格为",total)
        ctx.body={
            code:200,
            message:"交易出现错误，请重试"
        }
    }
    try{
        const Order = mongoose.model("Order")
        const OrderGoods=mongoose.model("orderGoods")
        const OrderAddress=mongoose.model("orderAddress")

        let goodsModel=[]
        goods.forEach((ele)=>{
            goodsModel.push(new OrderGoods(ele))
        });
        let addressModel=new OrderAddress(address)
        let order=new Order({
            GOODS:goodsModel,
            SUM_PRICE:total,
            ADDRESS:addressModel,
            USERNAME:address.name,
            USERID:id,
            PAY:pay
        })
        await order.save()
        ctx.body={
            code:200,
            message:true
        }
    }catch(error){
        console.log('交易出现错误',error)
        ctx.body={
            code:500,
            message:error
        }
    }
})

//登陆相关操作
function verifyToken(token){
    let result=0
    try{
        payload = jwt.verify(token, config.secretKey) 
    }catch(e){
        if(e.message.indexOf("expired")!=-1){
            result=1  //表示过去
        }else if(e.message.indexOf("invalid")!=-1){
            result=2  //表示过去
        }else{
            result=3
        }       
    }
    return result
}
router.post('/register',async(ctx)=>{
    let info=ctx.request.body
    try{
        if(info.password.length<6 || info.userName.trim()==""){
            throw new Error("注册信息不符合要求")
        }
    }catch(e){
        ctx.body={
            code:400,
            message:"请输入正确的注册信息！"
        }
    }
    const User = mongoose.model('User')
    try{
        let salt=await bcrypt.genSalt(SALT_WORK_FACTOR)
        let hash=await bcrypt.hash(ctx.request.body.password,salt)
        let newUser=new User({userName:ctx.request.body.userName,password:hash})
        let save=await newUser.save()
        ctx.body={
            code:200,
            message:true
        }
    }catch(error){
        if(error.code==11000){
            ctx.body={
                code:200,
                message:"用户名已存在!"
            }
        }else{
            ctx.body={
                code:200,
                message:JSON.stringify(error)
            }
        }
    }
})

router.post('/login',async(ctx)=>{
    let userName=ctx.request.body.username
    let password=ctx.request.body.password
    const User = mongoose.model('User')

    await User.findOne({userName:userName,delete:false}).exec().then(async(result)=>{
        if(result){
            let newUser = new User()
            await newUser.comparePassword(password,result.password)
            .then(isMatch=>{
                if(isMatch){
                    token=jwt.sign({id:result._id},config.secretKey,{"expiresIn":config.maxAge})
                    ctx.cookies.set("token",token,{maxAge:config.maxAge*1000,domain:ctx.domain,httpOnly:false})
                    ctx.cookies.set("id",result._id,{maxAge:config.maxAge*1000,domain:ctx.domain,httpOnly:false})
                    ctx.cookies.set("name",userName,{maxAge:config.maxAge*1000,domain:ctx.domain,httpOnly:false})
                    ctx.body={code:200,message:true}
                }else {
                    ctx.body={code:200,message:false}
                }
            })
            .catch(error=>{
                console.log("用户登陆出错，",error)
                ctx.body={code:500,message:error}
            })
        }else{
            ctx.body={code:200,message:'用户名不存在'}
        }
    }).catch(error=>{
        console.log(error)
        ctx.body={code:500,message:error}
    })
})
//获取当前登陆是否有效或过期
router.post('/status', async(ctx)=>{
    let token=ctx.request.body.token
    let error=1
    if(token){
        error=verifyToken(token)
    }
    ctx.body={
        code:200,
        message:error===0?true:false
    }    
})

//地址相关操作
router.post('/address',async(ctx)=>{
    let id=ctx.request.body.id
    const User=mongoose.model("User")
    await User.findOne({_id:id}).exec().then(async(result)=>{
        if(result && result.default_address!=""){
            ctx.body={
                code:200,
                message:result.address.id(result.default_address)
            }
        }else{
            ctx.body={
                code:200,
                message:false,
            }
        }
    }).catch((error)=>{
        ctx.body={
            code:400,
            message:error
        }
    })
})
router.post('/address/all',async(ctx)=>{
    let id=ctx.request.body.id
    const User=mongoose.model("User")
    await User.findOne({_id:id}).exec().then(async(result)=>{
        if(result){
            ctx.body={
                code:200,
                message:result.address
            }
        }else{
            ctx.body={
                code:200,
                message:[""],
            }
        }
    }).catch((error)=>{
        ctx.body={
            code:400,
            message:error
        }
    })
})
router.post('/address/add',async(ctx)=>{
    let id=ctx.request.body.id
    let address=JSON.parse(ctx.request.body.address)
    
    const User=mongoose.model("User")
    const Address=mongoose.model("Address")
    await User.findOne({_id:id}).exec().then(async(result)=>{
        if(result){
            try{
                let addr=new Address(address)
                if(result.address.length==0 || address.is_default){
                    result.default_address=addr._id
                }                
                result.address.push(addr)
                result.save()
                ctx.body={
                    code:200,
                    message:true
                }  
            }catch(e){
                ctx.body={
                    code:200,
                    message:e
                } 
            }
                      
        }else{
            ctx.body={
                code:200,
                message:'未找到对应的用户',
            }
        }
    }).catch((error)=>{
        ctx.body={
            code:400,
            message:error
        }
    })
})
router.post('/address/edit',async(ctx)=>{
    let id=ctx.request.body.id
    let address=JSON.parse(ctx.request.body.address)
    
    const User=mongoose.model("User")
    const Address=mongoose.model("Address")
    await User.findOne({_id:id}).exec().then(async(result)=>{
        if(result){
            try{
                result.address.id(address._id).remove()
                result.address.push(new Address(address))
                result.save()
                ctx.body={
                    code:200,
                    message:true
                }  
            }catch(e){
                console.log(e)
                ctx.body={
                    code:200,
                    message:e
                } 
            }
                      
        }else{
            ctx.body={
                code:200,
                message:'未找到对应的用户',
            }
        }
    }).catch((error)=>{
        ctx.body={
            code:400,
            message:error
        }
    })
})
router.post('/address/del',async(ctx)=>{
    let id=ctx.request.body.id
    let addr_id=ctx.request.body.addr_id
    
    const User=mongoose.model("User")
    const Address=mongoose.model("Address")
    await User.findOne({_id:id}).exec().then(async(result)=>{
        if(result){
            try{
                if(addr_id==result.default_address){
                    result.default_address=result.address[0]?result.address[0]._id:""
                }
                result.address.id(addr_id).remove()
                result.save()
                ctx.body={
                    code:200,
                    message:true
                }  
            }catch(e){
                console.log(e)
                ctx.body={
                    code:200,
                    message:e
                } 
            }
                      
        }else{
            ctx.body={
                code:200,
                message:'未找到对应的用户',
            }
        }
    }).catch((error)=>{
        ctx.body={
            code:400,
            message:error
        }
    })
})
module.exports=router