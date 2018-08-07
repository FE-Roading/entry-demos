<template>
    <div class="account-con">
        <topbar title="会员中心" :show="false"></topbar>
        <div class="avatar">
            <img src="@/assets/images/avatar.png" alt="">
        </div>
        <div v-if="login">
            <h4>{{name}},{{ wellcome }}</h4>
        </div>
        <ul>
            <li>
                <a href="#/userinfo">
                    <span>个人信息</span>
                    <van-icon name="arrow" />
                </a>
            </li>
            <li>
                <a href="#/addresslist">
                    <span>收货地址</span>
                    <van-icon name="arrow" />
                </a>
            </li>
            <li>
                <a href="#/order">
                    <span>全部订单</span>
                    <van-icon name="arrow" />
                </a>
            </li>
            <li @click="logout">
                <a href="javascript:;">
                    <span>退出登录</span>
                    <van-icon name="arrow" />
                </a>
            </li>
        </ul>
        <navbar :active="3"></navbar>
    </div>    
</template>
<script>
    import url from "@/api.config.js"
    import navbar from "@/components/component/bottomNavbarComponent.vue"
    import topbar from "../component/topbarComponent.vue"
    import {mapState} from 'vuex'

    export default {
        components:{
            navbar,
            topbar
        },
        computed:{
            ...mapState(['id','token','name','login']),
            wellcome(){
                let date=new Date()
                return date.getHours()>12?'下午好！':'上午好！'
            }
        },
        methods:{
            logout(){
                this.$store.dispatch("logoutAction").then(()=>{
                    this.$router.push("/")
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/css/config.scss";
    
    .account-con{
        font-size: 16px;
        margin:$topbarHeight 0 0 0;
        .avatar{
            text-align: center;
            img{
                width: 10rem;
            }
        }
        h4{
            text-align: center;
            color: lightgreen;
            margin-top: 0;
        }
        ul{
            background-color: #eee;
            padding-top: 10px;
            padding-bottom: 10px;
            a{
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                padding:10px 20px;
                margin-bottom: 10px;
                background-color: #fff;
                &::last-child{
                    margin-bottom: 0;
                }
            }
        }
        
    }
</style>
