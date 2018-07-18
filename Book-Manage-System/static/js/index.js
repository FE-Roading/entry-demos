var doamin={
    "host":"http://127.0.0.1",
    "port":3000
}

$(function(){
    init()
    $("#booksContainer").on("click",selector="td button:first-child",function(event){
        //修改数据
        let id=$(this).data("id")
        var mark = new MarkBox(300,200,'修改图书',$("#addFormCon")[0]);
        ajax("GET","/api/books/"+id,null,(data)=>{
            let book=data.books
            $("#addBookForm input[name=id]").val(book.id)
            $("#addBookForm input[name=name]").val(book.name)
            $("#addBookForm input[name=author]").val(book.author)
            $("#addBookForm input[name=category]").val(book.category)
            $("#addBookForm input[name=description]").val(book.description)
            mark.init();  //数据获取成功时，显示弹窗。获取失败显示失败信息但不现实弹窗
        },false)      

        $("#addBookForm input[type=button]").off("click").on("click",()=>{
            console.log($("#addBookForm").serialize())
            ajax(
                "PUT",
                "/api/books/"+id,
                $("#addBookForm").serialize(),
                ()=>{
                    mark.close()
                    formClear()
                    init()
                }
            )
        })     
    })    
    $("#booksContainer").on("click",selector="td button:last-child",function(event){
        //删除数据
        let that=$(this)
        ajax("DELETE","/api/books/"+that.data("id"),null,()=>{
            that.parents("tr").remove()
        })
    })    

})
function init(){
    ajax("GET","/api/books",null,renderData,false)
}
function addBook(){
    formClear()
    var mark = new MarkBox(300,200,'添加图书',document.getElementById("addFormCon"));
    mark.init();
    $("#addBookForm input[type=button]").off("click").on("click",()=>{
        console.log($("#addBookForm").serialize())
        ajax(
            "POST",
            "/api/books",
            $("#addBookForm").serialize(),
            ()=>{
                mark.close()
                formClear()
                init()
            }
        )
    })  
}

function formClear(){
    $("#addBookForm input[name=id]").val("")
    $("#addBookForm input[name=name]").val("")
    $("#addBookForm input[name=author]").val("")
    $("#addBookForm input[name=category]").val("")
    $("#addBookForm input[name=description]").val("")
}

function ajax(method,url,data,callback,showMsg=true){
    $.ajax({
        url:doamin.host+":"+doamin.port+url,
        dataType:"json",
        method:method,
        data:data,
        success:function(data){
            typeof callback=="function" && callback(data)
            showMsg && showInfo({code:data.error,msg:data.msg})
        },
        error:function(error){
            console.log(error,url)
            showInfo({code:error.error,msg:error.statusText})
        }
    })
}
function showInfo(info){
    if(info.code==0){
        $("#info").attr("class","success")
    }else{
        $("#info").attr("class","warning")
    }
    $("#info #info-msg").html(info.msg)
    $("#info").animate({"top":0},1000,function(){
        $(this).attr("style","").attr("class","")
        $("#info #info-msg").html("")
    })
}
function renderData(data){
    $("#booksContainer").empty()
    let temp=""
    for(let item of data.books){
        temp+=`
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.author}</td>
                <td>${item.category}</td>
                <td class="book-desc">${item.description}</td>
                <td><button data-id="${item.id}">修改</button><button data-id="${item.id}">删除</button></td>
            </tr>        
        `
    }
    $("#booksContainer").html(temp)
    
}


