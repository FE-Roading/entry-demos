const mysql=require("mysql")

exports.query=(sql,data,callback)=>{
    const connection=mysql.createConnection({
        host:"localhost",
        port:3306,
        user:"python",
        password:"123456",
        database:"book"
    })
    connection.connect((error)=>{
        if(error){
            throw  new Error("数据库连接失败，请检查相关参数！")
            return
        }
    })
    connection.query(sql,data,(error,results,fields)=>{
        if(error){
            throw new Error("数据库操作出现错误！"+sql+","+data+","+error)
            return
        }  
        callback(results)
    })
    connection.end()
}
