import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Spe from "../spe/index.vue"
import Savemoney from "../savemoney/index.vue"
import Account from "../account/index.vue"
import Vip from "../vip/index.vue"

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            redirect:"home"
        },
        {
            path: "/home",
            name: "home",
            component: Home,            
            meta:{
                title:"京东金融"
            }
        },
        {
            path:"/spe",
            name:"spe",
            component:Spe,            
            meta:{
                title:"赚钱"
            }
        },
        {
            path:"/vip",
            name:"vip",
            component:Vip,            
            meta:{
                title:"借钱"
            }

        },
        {
            path:"/savemoney",
            name:"savemoney",
            component:Savemoney
        },
        {
            path:"/account",
            name:"account",
            component:Account,
            meta:{
                title:"金融会员"
            }
            
        }
        
    ],
})