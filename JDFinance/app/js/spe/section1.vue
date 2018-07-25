<template lang="html">
    <div class="sec1-con">
        <div class="sbaner">
            <img src="../../images/5b2a3b82N6a3aec1d.png">
        </div>
        <Silder :items="items" cname="sslider" />
        <div class="logincon">
            <a href="javascript:;" class="clearfix">
                <span>会员等级</span>
                <span>立即登录 马上赚钱！</span>
                <span>签到</span>
            </a>
        </div>
    </div>
</template>

<script>
import Silder from "../core/slider.vue";
export default {
    data(){
        return {
            items:[
                {
                    href:"spe",
                    src:require("../../images/5b55b3d7N95db0c1a.jpg"),
                },{
                    href:"spe",
                    src:require("../../images/5b55b3dbN87d29517.jpg"),
                },{
                    href:"spe",
                    src:require("../../images/5b55b3deN1eeeb36e.jpg"),
                },{
                    href:"spe",
                    src:require("../../images/5b55b3e2Nef62ba54.jpg"),
                }
            ],
        }
    },
    components:{
       Silder,
    }
}
</script>
<style lang="scss">
    @import "../../css/element.scss";

    .sec1-con{
        position: relative;
        margin:0 auto;
        background-color: #fff;
        padding-bottom: 124px;
        .sbaner{
            position: fixed;
            top:90px;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index:100;
            height: 60px;
            max-width: 1366px;
            width: 100%;
            img{
                width: 100%;
                left: 50%;
            }
        }
        .sslider{
            img{
                width: 100%;
            }
            .swiper-pagination-bullets{
                bottom: 20px!important;

                .swiper-pagination-bullet{
                    width: 20px;
                }
                .swiper-pagination-bullet-active{
                    background-color: #fff;
                }
            }
        }

        .logincon{
            box-sizing: border-box;
            width: 576px;
            height: 130px;
            box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
            position: absolute;
            bottom: 6px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
            background-color: #fff;
            a{
                width:100%;
                height:100%;
                text-decoration:none;
                font-size:24px;
                color:#fff;
                @include list;
                align-items:center;
            }
            span{
                background:url("../../images/user-info.png") 50% no-repeat;
                background-size: cover;
                font-size: 24px;
            }
            span:nth-child(1){
                margin-left: 20px;
                height: 66px;
                line-height: 66px;
                min-width: 96px;
            }
            span:nth-child(2){
                color: #c6a76f;
                margin-left: 20px;
                width: 274px;
                font-size: 28px;
                background-image: none;
            }
            span:nth-child(3){
                width: 140px;
                height: 66px;
                border-radius: 33px;
                line-height: 66px;
                text-align: center;
            }
        }
    }

    

 

</style>
