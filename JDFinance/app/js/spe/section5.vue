<template>
    <div :class="$style.sec5">
        <spanel title="小金库" more="更多理财产品 >">
            <div :class="$style.account">
                <p :class="$style.title">3.8710<span :class="$style.per">%</span></p>
                <p :class="$style.desc">七日年化收益</p>
                <p :class="$style.last">支付/缴费/优质理财/大额理财</p>
                <p :class="$style.btn">开启送礼包</p>
            </div>
            <p :class="$style.subtitle">稳健灵活 小白精选</p>
            <nbslider></nbslider>
            <p :class="$style.subtitle">银行+ 银行服务精选</p>
            <Slider :options="options" :items="items" :cname="$style.bankslider"></Slider>

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
                        src:require("../../images/5b17a30dN687a4335.png")
                    },
                    {
                        href:"spe",
                        src:require("../../images/5b17a32aN2482a649.png")
                    },
                    {
                        href:"spe",
                        src:require("../../images/5b3618c3N53667624.png")
                    },
                    {
                        href:"spe",
                        src:require("../../images/5b3618ddNe01d7d8d.png")
                    }
                ],
            }           
        }
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";

    .sec5{
        background-color: #fff;
        .account{
            background: url("../../images/445b538c873a5bffc189ad117298eec4.png") 50% no-repeat;
            background-size: cover;
            height: 200px;
            padding-left: 28px;
            font-size: 24px;
            line-height: 34px;
            color: #fff;
            position: relative;
            .title{
                font-size: 60px;
                padding-top: 24px;
                font-weight: 400;
                line-height: 72px;
            }
            .per{
                font-size: 24px;
            }
            .desc{
                margin: 8px 0 4px 0;                
            }
            .last{
                opacity: 0.6;
            }
            .btn{
                background: url("../../images/sbtn-bg.png") 50% no-repeat;
                background-size: cover;
                text-align: center;
                height: 200px;
                line-height: 200px;
                width: 50%;
                position: absolute;
                top: 0;
                right: 0;
            }
        }
        .subtitle{
            height: 100px;
            line-height: 100px;
            font-size: 28px;
            color: #333;
        }
        .bankslider img{
                width: 100%;
        }
    }

</style>
