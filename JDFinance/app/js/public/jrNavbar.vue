<template>
    <div class="jr-navbar">
        <ul>
            <li>
                <router-link :to="{name:'home'}">                            
                     <img src="../../images/5ad6aac4N620fbed1.png" alt="">
                     <img src="../../images/5ac4850bNdf876dd8.png" alt="">
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'spe'}">
                     <img src="../../images/59e9d7e9N1289d306.png" alt="">
                    <img src="../../images/59e9d81bN27304850.png" alt="">
                    <p>赚钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'vip'}">
                     <img src="../../images/59e9d826Nadb4e6db.png" alt="">
                    <img src="../../images/59e9d7f3N5f691137.png" alt="">
                    <p>借钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'savemoney'}">
                     <img src="../../images/5aaa44adN4d5e3560.png" alt="">
                    <img src="../../images/5ab85d0eN01f81011.png" alt="">
                    <p>省钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'account'}">
                     <img src="../../images/59e9d86aN8d1daea3.png" alt="">
                    <img src="../../images/59e9d7feNaa5dd2fd.png" alt="">
                    <p>金融会员</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import "../../css/element.scss";

    .jr-navbar{
        width: 100%;
        height: 100px;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        ul{
            @include list;            
            li{
                width: 20%;
                text-align: center;
                font-size: 22px;
                padding-top: 10px;
                a{
                    text-decoration: none;
                    position: relative;
                    display: inline-block;
                    width: 100%;
                    img{
                        position: absolute;
                        width: 44px;
                        height: 44px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    p{
                        margin-top: 50px;
                    }
                }
                .router-link-active{
                    p{
                        color: #4668FF;
                    }
                    img:nth-of-type(1){
                        z-index: 10;
                    }

                }                
            }

        }

    }
</style>
