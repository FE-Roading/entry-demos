const mysql=require("./database.js")

exports.index=(req,res)=>{
    let sql="select * from book"
    mysql.query(sql,null,(results)=>{
        res.render("index",{list:results})
    })
}
exports.addbookGET=(req,res)=>{
    res.render("addbook")
}
exports.addbookPOST=(req,res)=>{
    let book=req.body
    let sql="insert into book set ?";
    //如果不进行JSON格式化，会出现TypeError: Cannot convert object to primitive value
    mysql.query(sql,JSON.parse(JSON.stringify(book)),(results)=>{
        if(results.affectedRows==1){
            res.redirect("/")
        }else{
            res.end("服务器错误!")
        }
    })
}
exports.editbookGET=(req,res)=>{
    let id=req.query.id
    let sql="select * from book where id=?"
    let data=[id]

    mysql.query(sql,data,(results)=>{
        if(results){
            res.render("editbook",{book:results[0]})
        }else{
            res.end("请输入正确的图书编号！")
        }
    })
}
exports.editbookPOST=(req,res)=>{
    let book=req.body
    let sql="update book set name=?,author=?,category=?,description=? where id=?";
    let data=[book.name,book.author,book.category,book.description,book.id];

    mysql.query(sql,data,(results)=>{
        if(results.affectedRows==1){
            res.redirect("/")
        }else{
            res.end("服务器错误!")
        }
    })
}
exports.delbook=(req,res)=>{
    let sql="delete from book where id=?"
    let data=[req.query.id]

    mysql.query(sql,data,(results)=>{
        if(results.affectedRows==1){
            res.redirect("/")
        }else{
            res.end("该图书未找到，请输入正确的图书编码")
        }
    })
}

