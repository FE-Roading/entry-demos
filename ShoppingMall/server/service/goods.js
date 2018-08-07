const Router=require("koa-router")
const fs=require("fs")
const { resolve }=require("path")
const mongoose = require('mongoose')

let router=new Router()

router.post("/getDetailGoodsInfo",async(ctx)=>{
    let goodsId=ctx.request.body.goodsId
    const Goods=mongoose.model('Goods')
    await Goods.findOne({ID: goodsId}).exec().then(result=>{
        ctx.body={
            code: 200,
            message: result
        }
    }).catch(error=>{
        console.log("获取商品信息失败，商品ID为",goodsId,'错误原因',error)
        ctx.body={
            code: 500,
            message: result
        }
    })
})

router.get('/getCategoryList',async(ctx)=>{
    const Category=mongoose.model('Category')
    await Category.find().exec().then(result=>{
        ctx.body={
            code:200,
            message:result
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
        console.log("获取分类信息失败",'错误原因',error)
    })
})

router.post('/getSubCategoryList',async(ctx)=>{
    let categoryId = ctx.request.body.categoryId    
    const SubCategory=mongoose.model('SubCategory')
    await SubCategory.find({MALL_CATEGORY_ID:categoryId}).exec().then(result=>{
        ctx.body={
            code:200,
            message:result
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
        console.log("获取子类信息失败",'错误原因',error)
    })
})
router.post('/getGoodsListByCategorySubID',async(ctx)=>{
    let subCategoryId = ctx.request.body.subCategoryId
    let page = ctx.request.body.page
    page = page?page:1
    let num = 6
    let start = (page-1)*num
    let queryStr={}
    if(subCategoryId==="0"){
        queryStr={}
    }else{
        queryStr={SUB_ID:subCategoryId}
    }
    const Goods=mongoose.model('Goods')
    await Goods.find(queryStr).skip(start).limit(num).exec().then(result=>{
        ctx.body={
            code:200,
            message:result
        }
    }).catch(error=>{
        ctx.body={
            code:500,
            message:error
        }
        console.log("根据商品类别获取商品列表信息失败",'错误原因',error)
    })
})





/*  
    以下几个API是服务器数据插入的API
*/

function insertItems(fileStr,model,key){
    fs.readFile(resolve(__dirname,"../data/",fileStr),'utf8',(err,data)=>{
        data=JSON.parse(data)
        let saveCount=0
        const Items = mongoose.model(model)
        if(key){
            data=data[key]
        }
        data.map((value,index)=>{
            let newGoods = new Items(value)
            newGoods.save().then(()=>{
                saveCount++
                console.log('已成功保存数据条数：'+saveCount)
            }).catch(error=>{
                 console.log('失败：'+error)
            })
        })    
    })  
}

router.get('/insertAllGoods',async(ctx)=>{
    insertItems("newGoods.json","Goods")
    ctx.body={
        code:200,
        message:"正在导入入局，请稍等！"
    }
})
router.get("/insertAllCategory",async(ctx)=>{
    insertItems("category.json","Category","RECORDS")
    ctx.body={
        code:200,
        message:"正在导入入局，请稍等！"
    }
})
router.get("/insertAllSubCategory",async(ctx)=>{
    insertItems("category_sub.json","SubCategory","RECORDS")
    ctx.body={
        code:200,
        message:"正在导入入局，请稍等！"
    }
})
module.exports=router