import axios from "axios"
import url from "../api.config.js"

function cookieToObj(){
    let cookies=document.cookie.split("; ")
    let cookieObj={}
    cookies.forEach(item=>{
        let items=item.split("=")
        cookieObj[items[0]]=items[1]
    })
    cookieObj.length=cookies.length
    return cookieObj
}
function getCookie(name){
    let cookie=cookieToObj()
    return cookie[name]?cookie[name]:""
}
function delCookie(name){
    let date=new Date()
    date.setTime(-1000)
    document.cookie=name+"=''; expires="+date.toGMTString(); 
}
function clearCookie(){
    let cookies=document.cookie.split("; ")
    let date=new Date()
    date.setTime(-1000)
    cookies.forEach(item=>{
        let items=item.split("=")
        document.cookie=items[0]+"=''; expires="+date.toGMTString(); 
    })
}

//手动封装的ajax功能
//ajax(url.loginStatus,"POST",{"token":token},{"content-type":"application/json"},true,url.url)
function ajax(url,method,data,headers,cookie=false,cros){
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest()
        console.log(url,method)
        xhr.open(method,url)
        if(Object.keys(headers).length>0){
            for(let index of Object.keys(headers)){
                xhr.setRequestHeader(index,headers[index])
            }
        }
        cookie?xhr.withCredentials = true:"";
        if(cros){
            xhr.setRequestHeader("Access-Control-Allow-Origin", cros)
            xhr.setRequestHeader("Access-Control-Allow-Credentials", "true")
        }

        xhr.timeout=1000
        xhr.send(JSON.stringify(data))
        
        xhr.onloadend=result=>{
            resolve(JSON.parse(xhr.response))
        }
        xhr.ontimeout=()=>{
            reject({code:1000,message:"服务端无响应"})
        }
        xhr.onerror=error=>{
            reject({code:999,message:error})
        }
    })
}

export {
    cookieToObj,
    getCookie,
    ajax,
    clearCookie
}
