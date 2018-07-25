<template>
    <div :class="$style.sec6">
        <spanel title="保险保障" >
            <div :class="$style.product">
                <div :class="$style.focus">
                    <p :class="$style.title">135万</p>
                    <p :class="$style.stitle">健康意外财产</p>
                    <div :class="$style.btn">免费领取</div>
                    <span :class="$style.label">今日推荐</span>
                </div>
                <div :class="$style.more">
                    <ul>
                        <li>
                            <img src="../../images/59b90050N62f41061.png" alt="">
                            <p>车险</p>
                        </li>
                        <li>
                            <img src="../../images/59b90111N4e88098c.png" alt="">
                            <p>人寿</p>
                        </li>
                        <li>
                            <img src="../../images/59b900cfNe88db318.png" alt="">
                            <p>意外</p>
                        </li>
                        <li>
                            <img src="../../images/59b900e6N73c7b311.png" alt="">
                            <p>财产</p>
                        </li>
                        <li>
                            <img src="../../images/59ca556eNb605e901.png" alt="">
                            <p>健康</p>
                        </li>
                        <li>
                            <img src="../../images/59b9011bNf3b01bea.png" alt="">
                            <p>旅行</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div :class="$style.ad">
                <img src="../../images/5b4eb8bfN8ffb50fe.jpg" alt="">
            </div>
            <p :class="$style.subtitle">热销保险</p>
            <Slider :options="options" :items="items" :cname="$style.assslider"></Slider>
        </spanel>
    </div>
    
</template>
<script>
    import spanel from "./spanel.vue";
    import Slider from "../core/slider.vue";
    import nbslider from "./nbslider.vue";

    export default{
        components:{
            spanel,
            Slider,
            nbslider
        },
        data(){
            return {
                options:{
                    slidesPerView:2.6,
                    spaceBetween: 30,
                },
                items:[
                    {
                        href:"spe",
                        src:require("../../images/5b1f9a3bN7f56be28.jpg")
                    },
                    {
                        href:"spe",
                        src:require("../../images/5b3dfd7fNf09c94f9.jpg")
                    },
                    {
                        href:"spe",
                        src:require("../../images/5b440d34Ncf587248.jpg")
                    },
                    {
                        href:"spe",
                        src:require("../../images/5b4ebbdbN4d795f2e.jpg")
                    }
                ],
            }           
        }
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";

    .sec6{
        background-color: #fff;
        .product{
            @include list;     
            >div{
                height: 260px;
                box-shadow: 0 0 10px 0.5px rgba(101,118,155,.15);
                box-sizing: border-box;
                text-align: center;
            }                   
            .focus{
                width: 40%;
                position: relative;
                .title{
                    margin: 62px 0 4px 0;
                    color: #1bd5c7;
                    font-size: 50px;
                    line-height: 62px;
                    padding: 0 12px;
                }
                .stitle{
                    padding: 0 12px;
                    margin-bottom: 24px;
                    line-height: 34px;
                    font-size: 24px;
                    color: #000;
                }
                .btn{
                    @include btn($size:24px,$bgcolor:#1bd5c7,$radius:50px);
                    height: 50px;
                    line-height: 50px;
                    width: 140px;
                    padding:0 12px;
                    margin: 0 24px;              
                }
                .label{
                    position: absolute;
                    top: 0;
                    left: 0;
                    font-size: 24px;
                    height: 32px;
                    line-height: 32px;
                    padding: 0 12px;
                    background: #000;
                    color: #fff;
                }
            }
            .more{
                width: 60%;
                ul{
                    @include list;
                    li{
                        width: 33.33333%;
                        height: 130px;
                        @include flex(column);
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 56px;
                            height: 56px;
                        }
                        p{
                            font-size: 24px;
                            height: 26px;
                        }
                    }
                }
            }
        }    
        .ad img{
            width: 100%;
            margin-top: 20px;
        }  
        .subtitle{
            height: 100px;
            line-height: 100px;
            font-size: 28px;
            color: #333;
        }
        .assslider img{
            width: 100%;
        }
    }

</style>
