<template>
    <div :class="$style.sec2">
        <ul>
            <li>
                <a href="javascript:;">
                    <img src="../../images/5b2a56b8Nf044e64a.png" alt="">
                    <p>领红包</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5b2a56c7N4c04f536.png" alt="">
                    <p>领福利</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5b2a56d2Ne7f7eae3.png" alt="">
                    <span :class="$style.super">100-99</span>
                    <p>领券</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5b2a56d9Ne622413c.png" alt="">
                    <p>支付抽奖</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5b2a56e2Na4227ae7.png" alt="">
                    <p>全部</p>
                </a>
            </li>
        </ul>
    </div>
    
</template>
<script>
    import Panel from "../core/panel.vue";
    export default{
        components:{
            Panel
        }
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";

    .sec2{
        margin-top: 0;
        padding-top: 30px;
        background-color: #fff;
        ul{
            @include list;
            li{
                width: 20%;
                text-align: center;
                font-size: 26px;
                position: relative;
                .super{
                    position: absolute;
                    right: -26px;
                    top: -15px;
                    background:url("../../images/icon-bg.png") 50% no-repeat;
                    background-size: cover;
                    color: #fff;
                    font-size: 24px;
                    width: 88px;
                    height: 46px;
                    line-height: 34px;
        
                }
                a{
                    text-decoration: none;                    
                }
                p{
                    margin-top: 18px;
                    font-size: 24px;
                    color: #666;
                }
                img{
                    width: 90px;
                }
            }

        }
    }

</style>
