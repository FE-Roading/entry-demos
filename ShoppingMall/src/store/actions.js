import axios from "axios"
import url from "@/api.config.js"
import { getCookie,clearCookie } from "@/utils/index.js"

export default {
    async loginAction({commit,state}){
        let token=getCookie("token")
        let id=getCookie("id")
        let name=getCookie("name")
        //如果已从cookie中获取到这些变量，则确认诗词是否有效
        if(token && id && name){
            let result=await axios.post(url.loginStatus,{"token":token})
            if(result.data.message===true){
                commit("login",{login:true,token:token,id:id,name:name})
            }
        }
    },
    logoutAction({commit}){
        clearCookie()
        commit("logout")
    }
}