const mongoose=require("mongoose")

const Schema=mongoose.Schema
const ObjID=Schema.Types.ObjectId

const orderGoodsSchema=new Schema({
    GID:String,
    SHOP_ID:String,
    SUB_ID:String,
    GOOD_TYPE:Number,
    NAME:String,
    ORI_PRICE:Number,
    PRESENT_PRICE:Number,
    SALES_COUNT:Number,
    IMAGE1:String,
})
const orderAddressSchema=new Schema({
    id:String,
    name:String,
    tel:String,
    address:String
})

const orderSchema=new Schema({
    GOODS:[orderGoodsSchema],
    SUM_PRICE:Number,
    ADDRESS:orderAddressSchema,
    USERNANE:String,
    USERID:String,
    PAY:Number,
    DELETE:{type:Boolean,default:false},
    COMMENT:{type:Boolean,default:false},
    CREATEAT:{type:Date, default:Date.now()}
})

mongoose.model("Order",orderSchema)
mongoose.model("orderGoods",orderGoodsSchema)
mongoose.model("orderAddress",orderAddressSchema)