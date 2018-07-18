const express=require("express")
const service=require("./service.js")
const apiService=require("./apiService.js")

var router=express.Router()
router.get("/",apiService.index)
router.get("/index",service.index)
router.get("/addbook",service.addbookGET)
router.post("/addbook",service.addbookPOST)
router.get("/editbook",service.editbookGET)
router.post("/editbook",service.editbookPOST)
router.get("/delbook",service.delbook)
module.exports=router