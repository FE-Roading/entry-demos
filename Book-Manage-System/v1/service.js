const data = require('./data.json');
const fs=require("fs")

function genIndex(){
    let arr=[]
    data.forEach(element => {
        arr.push(element.id)
    });
    let max=Math.max.apply(null,arr)
    return max+1
}
function dataSave(data,res){
    fs.writeFile("./data.json",JSON.stringify(data,null,4),(err)=>{
        if(err){
            res.send("服务器错误，请重试!")
        }else{
            res.redirect("/")
        }
    })
}


exports.index=(req,res)=>{
    res.render("index",{list:data})
}
exports.addbookGET=(req,res)=>{
    res.render("addbook")
}
exports.addbookPOST=(req,res)=>{
    let tempBook={}
    tempBook["id"]=genIndex()
    for(let index in req.body){
        tempBook[index]=req.body[index]
    }
    data.push(tempBook)
    dataSave(data,res)    
}
exports.editbookGET=(req,res)=>{
    let id=req.query.id
    let book=null;
    data.forEach((item)=>{
        if(id==item.id){
            book=item
            return
        }
    })
    if(book){
        res.render("editbook",{book:book})
    }else{
        res.send("该图书未找到，请输入争取的图书编码")
    }

}
exports.editbookPOST=(req,res)=>{
    let book=req.body
    data.forEach((item)=>{
        if(item.id==book.id){
            for(let index in book){
                item[index]=book[index]
            }
            return
        }
    })
    dataSave(data,res)
}
exports.delbook=(req,res)=>{
    let id=req.query.id
    let book=null;
    data.forEach((item,index)=>{
        if(id==item.id){
           data.splice(index,1)
           book=item
        }
    })
    if(book){
        dataSave(data,res)
    }else{
        res.send("该图书未找到，请输入争取的图书编码")
    }
}

