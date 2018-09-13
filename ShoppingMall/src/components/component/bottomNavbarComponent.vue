<template>
    <div  class="nav-bar">
        <van-tabbar v-model="active1">
            <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="idcard" to="/categoryList">分类</van-tabbar-item>
            <van-tabbar-item icon="cart" :info="info" to="/car">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" info="" to="/account">会员中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        props:['active'],
        data(){
            return {
                active1:this.active
            }
        },
        computed:{
            info(){
                return this.$store.getters.goodsSelectedQty
            }
        }

    }
</script>

<style scoped lang="scss">
@import "@/assets/css/config.scss";
    .nav-bar{
        height: $navbarHeight;
        background-color: $navbarbgColor;
        color: $navbarColor;
        position: fixed;
        z-index: 9;
        bottom: 0;
    }
    .van-tabbar-item--active{
        background-color: $navbarActivebgColor;
    }
</style>