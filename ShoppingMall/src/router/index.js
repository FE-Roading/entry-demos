import Vue from 'vue'
import Router from 'vue-router'
import {getCookie} from "@/utils/index.js"

import Home from '@/components/pages/Index.vue'
import Register from '@/components/pages/Register.vue'
import Login from '@/components/pages/Login.vue'
import Goods from '@/components/pages/Goods.vue'
import categoryList from '@/components/pages/CategoryList.vue'
import Car from '@/components/pages/Car.vue'
import Account from '@/components/pages/Account.vue'
import AddressEdit from '@/components/pages/addressEdit.vue'
import addressList from '@/components/pages/addressList.vue'
import OrderPay from "@/components/pages/orderpay.vue"
import OrderHistory from "@/components/pages/OrderHistory.vue"
import UserInfo from "@/components/pages/UserInfo.vue"
import Rate from "@/components/pages/Rate.vue"
import Error from "@/components/pages/404.vue"

Vue.use(Router)
let router=new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta:{
                showBar:true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/goods',
            name: 'goods',
            component: Goods
        },
        {
            path: '/categorylist',
            name: 'categoryList',
            component: categoryList,
            meta:{
                showBar:true
            }
        },
        {
            path: '/car',
            name: 'car',
            component: Car,
        },
        {
            path:"/account",
            name:"account",
            component:Account
        },
        {
            path:'/addresslist',
            name:'addressList',
            component:addressList
        },
        {
            path:'/addressedit',
            name:'addressEdit',
            component:AddressEdit
        },
        {
            path:'/orderpay',
            name:'orderPay',
            component:OrderPay
        },
        {
            path:"/order",
            name:"order",
            component:OrderHistory
        },
        {
            path:'/userinfo',
            name:'userinfo',
            component: UserInfo
        },
        {
            path:"/rate",
            name:"rate",
            component:Rate
        },
        {
            path:"*",
            name:"error",
            component:Error
        }
    ]
})

let authPath=["/rate","/userinfo","/order","/orderpay","/addressedit","/account"]
router.beforeEach((to,from,next)=>{
    //由于在此处无法访问vue实例，因此只是确认是否有cookie
    let token=getCookie("token")
    let id=getCookie("id")
    let name=getCookie("name")
    if(authPath.includes(to.path.toLowerCase())){
        if(token && id && name){
            next()
        }else{
            next({
                path:"/login",
                query:{
                    redirect: to.fullPath
                }
            })
        }
    }else{
        next()
    }
})




export default router