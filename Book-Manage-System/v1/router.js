const express=require("express")
const service=require("./service.js")

var router=express.Router()
router.get("/",service.index)
router.get("/addbook",service.addbookGET)
router.post("/addbook",service.addbookPOST)
router.get("/editbook",service.editbookGET)
router.post("/editbook",service.editbookPOST)
router.get("/delbook",service.delbook)
module.exports=router