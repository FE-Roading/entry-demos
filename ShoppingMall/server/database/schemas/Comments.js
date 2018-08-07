const mongoose=require("mongoose")

const Schema=mongoose.Schema
const ObjID=Schema.Types.ObjectId

const commentsSchema=new Schema({
    id:{type:ObjID},
    star:Number,
    content:String,
    userName:String,
    userId:String,
    goodsId:String,
    shopId:String,
    orderId:String,
    delete:{type:String,default:false},
    createAt:{type:Date, default:Date.now()},
})

mongoose.model("Comments",commentsSchema)