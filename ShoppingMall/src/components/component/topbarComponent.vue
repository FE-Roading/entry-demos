<template>
    <div class="topbar-con" v-if="show">
        <van-nav-bar
        :title="title"
        left-text="返回"
        right-text="首页"
        left-arrow
        @click-left="goBack"
        @click-right="goHome"
        class="topbar"        
        />
    </div>
    <div class="topbar-con" v-else>
        <van-nav-bar
        :title="title"
        @click-left="goBack"
        class="topbar"
        />
    </div>
</template>
<script>    
    export default{
        props:{
            title:String,
            show:{
                type:Boolean,
                default:true
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            },
            goHome(){
                this.$router.push("/")
            }
        }
    }
</script>
<style lang="scss">
    @import "@/assets/css/config.scss";
    .topbar-con{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 10;
        .topbar{
            height: $topbarHeight;
            line-height: $topbarHeight;            
            color: #ffffff;
            background-color: #e5017d;
            font-size: 16px;
            span,i{
                font-size: 16px!important;
                color: #ffffff!important;
            }
            span:active{
                background: #e5017d;
            }
        }        
    }
</style>
