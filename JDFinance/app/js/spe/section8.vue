<template>
    <div :class="$style.sec8">
        <spanel title="特色推荐" :cname="$style.sec8con">
            <ul :class="$style.product">
                <li v-for="item in items" :key="item.src">
                    <img :src="item.src" alt="">
                    <p :class="$style.title">{{item.title}}</p>
                    <p :class="$style.price"><span :class="$style.unit">¥</span>{{item.price}}<span :class="$style.sub">起</span></p>
                    <div :class="$style.progress">
                        <div :class="$style.meter">
                            <p></p>
                        </div>
                        <span>{{item.progress}}</span>
                    </div>
                </li>
            </ul>
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
                    items: [{
                        href: "spe",
                        src: "//img30.360buyimg.com/cf/jfs/t19846/144/2476847436/18564/16a2be18/5b456401N195d1bad.jpg!q70.dpg",
                        title:"GPD 口袋电脑二代",
                        price:"1.00",
                        progress:"≥999%"
                    },
                    {
                        href: "spe",
                        src: "//img30.360buyimg.com/cf/jfs/t21463/48/832138123/18561/e5cdbf3c/5b19daa2N231ba688.jpg!q70.dpg",
                        title:"洗牙器，牙垢1冲搞定",
                        price:"1.00",
                        progress:"≥999%"
                    },
                    {
                        href: "spe",
                        src: "//img30.360buyimg.com/cf/jfs/t20281/109/2360875226/53829/cd6265a0/5b5146e1N1f8aab84.jpg!q70.dpg",
                        title:"网易三音云音箱 极致听音享受",
                        price:"799.00",
                        progress:"109%"
                    },
                    {
                        href: "spe",
                        src: "//img30.360buyimg.com/cf/jfs/t24058/264/715043796/64102/334a6064/5b3ec63fN4a4adcbc.jpg!q70.dpg",
                        title:"透爽速干T，型男的净爽战衣",
                        price:"46.00",
                        progress:"489%"
                    },
                    {
                        href: "spe",
                        src: "//img30.360buyimg.com/cf/jfs/t22738/320/886763068/35986/4562af5/5b45b642N7728dfb6.jpg!q70.dpg",
                        title:"黑鲨游戏手机CMEL电竞版",
                        price:"1.00",
                        progress:"100%"
                    },
                    {
                        href: "spe",
                        src: "//img30.360buyimg.com/cf/jfs/t20068/277/1805261234/84298/4d082d3/5b271407Nda85af5b.jpg!q70.dpg",
                        title:"1布去车漆刮痕-划痕传奇布",
                        price:"1.00",
                        progress:"≥999%"
                    },
                    {
                        href: "spe",
                        src: "//img30.360buyimg.com/cf/jfs/t24412/328/1043183669/49189/8ad1d6d0/5b4dbb68N307d0979.jpg!q70.dpg",
                        title:"未豆冲牙器 随时洁牙深层清洁",
                        price:"29.00",
                        progress:"≥999%"
                    },
                    {
                        href: "spe",
                        src: "//img30.360buyimg.com/cf/jfs/t23728/151/610910470/17270/c5d5b383/5b398faeNa51d0e61.jpg!q70.dpg",
                        title:"触摸过就不舍放下的神奇杯子",
                        price:"38.00",
                        progress:"759%"
                    }
                ]
            };
        }
    };
</script>
<style lang="scss" module>
    @import "../../css/element.scss";

    .sec8 {
        background-color: #fff;
        padding-top: 58px;
        .sec8con{
            padding: 0;
            h4{
                padding-left: 30px;
            }
        }

        .product{
            background-color: #F5F5F5;
            @include list;
            li{
                box-sizing: border-box;
                width: 50%;
                margin-bottom:8px;
                background-color: #ffffff;
                background-clip: content-box;
                overflow: hidden;
                &:nth-child(2n+1){
                    padding-right:4px;
                }
                img{
                    box-sizing: border-box;
                    padding: 44px 44px 0 44px;
                    width: 100%;
                }
                .title{
                    line-height: 54px;
                    height: 42px;
                    font-size: 30px;
                    padding-left: 30px;
                    color: #333;
                    width: 100%;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin: 22px 0;
                }
                .price{
                    color: #ff9a1c;
                    font-size: 32px;
                    height: 34px;
                    line-height: 34px;
                    padding-left: 30px;
                    margin-bottom: 14px;
                    span{
                        font-size: 24px;
                        padding: 0 6px; 
                    }
                }
                .progress{
                    padding: 0 30px;
                    margin-bottom: 26px; 
                    font-size: 24px;
                    color: #ff9a1c;
                    .meter{
                        margin-top: 10px;
                        width: 70%;
                        height: 10px;
                        display: inline-block;
                        p{
                            height: 100%;
                            width: 100%;
                            background: linear-gradient(270deg,#f55 1%,#ff9c31);

                        }
                    }
                }
            }
            

        }


    }
</style>