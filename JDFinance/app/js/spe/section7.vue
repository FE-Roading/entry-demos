<template>
    <div :class="$style.sec7">
        <spanel title="白条" more="年轻不留白 >">
            <div :class="$style.product">
                <div :class="$style.focus">
                </div>
                <div :class="$style.more">
                    <ul>
                        <li>
                            <img src="../../images/59af980eN987fd5c2.png" alt="">
                            <p>白条</p>
                        </li>
                        <li>
                            <img src="../../images/59b901f5Nc93edaac.png" alt="">
                            <p>还款</p>
                        </li>
                        <li>
                            <img src="../../images/59b90214N4f745107.png" alt="">
                            <p>1元枪券</p>
                        </li>
                        <li>
                            <img src="../../images/59b90228Nd61b6465.png" alt="">
                            <p>小合卡</p>
                        </li>
                        <li>
                            <img src="../../images/59b90230N09140aba.png" alt="">
                            <p>金条</p>
                        </li>
                        <li>
                            <img src="../../images/59b90247Nac3c9ebe.png" alt="">
                            <p>校园</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div :class="$style.ad">
                <img src="../../images/5b31b40dNeefe4c3c.png" alt="">
            </div>
            <p :class="$style.subtitle">股票</p>
            <div :class="$style.gp">
                <div></div>
                <div></div>
            </div>

        </spanel>
    </div>

</template>
<script>
    import spanel from "./spanel.vue";
    import Slider from "../core/slider.vue";
    import nbslider from "./nbslider.vue";

    export default {
        components: {
            spanel,
            Slider,
            nbslider
        },
        data() {
            return {
                options: {
                    slidesPerView: 2.6,
                    spaceBetween: 30,
                },
                items: [{
                        href: "spe",
                        src: require("../../images/5b1f9a3bN7f56be28.jpg")
                    },
                    {
                        href: "spe",
                        src: require("../../images/5b3dfd7fNf09c94f9.jpg")
                    },
                    {
                        href: "spe",
                        src: require("../../images/5b440d34Ncf587248.jpg")
                    },
                    {
                        href: "spe",
                        src: require("../../images/5b4ebbdbN4d795f2e.jpg")
                    }
                ]
            };
        }
    };
</script>
<style lang="scss" module>
    @import "../../css/element.scss";

    .sec7 {
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
                background: url("../../images/xy-bg.jpg") center center no-repeat;
                background-size: contain;
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
            padding-bottom: 40px;
        }  
        .subtitle{
            height: 120px;
            line-height: 120px;
            font-size: 36px;
            color: #333;
            font-weight: 700;
        }
        .gp{
            @include list;
            div{
                width:49%;
                height: 200px;           
            }
            div:nth-child(1){
                background: url("../../images/gupiao1.png") center center no-repeat;
                background-size: contain;
                margin-right: 2%;
            }
            div:nth-child(2){
                background: url("../../images/gupiao2.png") center center no-repeat;
                background-size: contain;
            }
        }
    }
</style>