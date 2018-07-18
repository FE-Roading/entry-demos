const express=require("express")
const art=require("art-template")
const eArt=require("express-art-template")
const router=require("./router.js")
const bodyParser=require("body-parser")
const path=require("path")

const app=express()
app.set("views",path.join(__dirname,"/static/templates"))
app.set("view engine","art")
app.engine("art",eArt)

app.use("/static",express.static("static"))
app.use(bodyParser.urlencoded({"extended":false}))
app.use("/",router)

app.listen(3000,"localhost",function(){
    console.log("The server is running..")
})
