const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt')

const addressSchema=new Schema({
    name:{type:String},
    tel:{type:String},
    province:{type:String},
    city:{type:String},
    county:{type:String},
    address_detail:{type:String},
    area_code:{type:String},
    postal_code:{type:String},
    is_default:{type:Boolean}
})

const userSchema = new Schema({
    userName : {unique:true,type:String},
    password : String,
    phone:String,
    mail:String,
    default_address:String,
    address:[addressSchema],
    delete:{type:String,default:false},
    createAt:{type:Date, default:Date.now()},
    lastLoginAt:{type:Date, default:Date.now()}
}) 

userSchema.methods={
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}

mongoose.model("Address",addressSchema)
mongoose.model('User',userSchema)