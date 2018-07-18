const mysql=require("./database.js")
const data=require("./data.json")

for(let item of data){
    // let sql='insert into book set name=?,author=?,category=?,desc=?'
    // let data=[item.name,item.author,item.category,item.desc]
    let sql='insert into book set ?'
    let data=item

    mysql.query(sql,data,(results)=>{
        console.log("数据操作成功，",results.affectedRows)
        
    })


}
