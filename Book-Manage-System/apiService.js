const mysql=require("./database.js")

exports.index=(req,res)=>{
    res.render("index-API")
}

exports.getAll=(req,res)=>{
    let sql="select * from book"
    mysql.query(sql,null,(results)=>{
        if(results){
            res.status(200).json({
                error:0,
                msg:"success",
                length:results.length,
                books:results
            })
        }else{
            res.status(500).json({
                error:1,
                msg:"server internal error!",
                length:0,
                books:[]
            })
        }

    })
}
exports.getBook=(req,res)=>{
    let sql="select * from book where id=?"
    mysql.query(sql,req.params.id,(results)=>{
        if(results){
            if(results.length>0){
                res.status(200).json({
                    error:0,
                    msg:"success to get one book info",
                    length:1,
                    books:results[0]
                })
            }else{
                res.status(200).json({
                    error:1,
                    msg:"无该id图书",
                    length:0,
                })
            }
        }else{
            res.status(500).json({
                error:1,
                msg:"the book id is invalid",
                length:0,
                books:[]
            })
        }

    })
}
exports.addBook=(req,res)=>{
    let book=req.body
    let sql="insert into book set ?";
    //如果不进行JSON格式化，会出现TypeError: Cannot convert object to primitive value
    delete book.id
    mysql.query(sql,JSON.parse(JSON.stringify(book)),(results)=>{
        if(results.affectedRows==1){
            res.status(201).json({
                error:0,
                msg:"success to add one book info",
            })
        }else{
            res.status(500).json({
                error:1,
                msg:"server internal error!",
            })
        }
    })
}
exports.editBook=(req,res)=>{
    let book=req.body
    let sql="update book set name=?,author=?,category=?,description=? where id=?";
    let data=[book.name,book.author,book.category,book.description,book.id];
    mysql.query(sql,data,(results)=>{
        if(results.affectedRows==1){
            res.status(201).json({
                error:0,
                msg:"success to update one book info",
            })
        }else{
            res.status(500).json({
                error:1,
                msg:"server internal error!",
            })
        }
    })
}
exports.delBook=(req,res)=>{
    let sql="delete from book where id=?"
    mysql.query(sql,req.params.id,(results)=>{
        if(results.affectedRows==1){
            res.status(204).json({
                error:0,
                msg:"success to delete one book info",
            })
        }else{
            res.status(500).json({
                error:1,
                msg:"server internal error!",
            })
        }
    })
}

