<template>
    <div class="vip-pslider">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide >
                <ul>
                    <li>
                        <img src="../../images/5b247539N4854a034.png" alt="">
                        <p>机票</p>
                    </li>
                     <li>
                        <img src="../../images/5b45b595Na2f43d34.png" alt="">
                        <p>租房</p>
                    </li>
                     <li>
                        <img src="../../images/5a4f2693N937f1905.png" alt="">
                        <p>房抵贷</p>
                    </li>
                     <li>
                        <img src="../../images/5a4f26edN6cdfda66.png" alt="">
                        <p>分期用</p>
                    </li>
                     <li>
                        <img src="../../images/5b247663Nc83d2060.jpg" alt="">
                        <p>分期商城</p>
                    </li>
                </ul>
            </swiper-slide>
            <swiper-slide>
                <ul>
                    <li>
                        <img src="../../images/5a4f27d0N9e3df1d5.png" alt="">
                        <p>教育</p>
                    </li>
                     <li>
                        <img src="../../images/5a4f2801N015920c5.png" alt="">
                        <p>车险</p>
                    </li>
                     <li>
                        <img src="../../images/5a4f2823Ne430c735.png" alt="">
                        <p>家装</p>
                    </li>
                     <li>
                        <img src="../../images/5a4f265bN66ef5ae8.png" alt="">
                        <p>医美</p>
                    </li>
                     <li>
                        <img src="../../images/5a4f26bfN03ed1f66.png" alt="">
                        <p>驾校</p>
                    </li>
                </ul>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'; 
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data(){
            return {
                options:{
                    pagination:{
                        el:".swiper-pagination"
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    @import '~swiper/dist/css/swiper.css';
    @import "../../css/element.scss";
    .vip-pslider{
        ul{
            @include list;
            li{
                width: 20%;
                @include flex(column);
                justify-content: center;
                align-items: center;
                img{
                    width: 77px;
                    height: 77px;
                    margin-bottom: 17.5px;
                }
                p{
                    line-height:24px;
                    height: 24px;
                    font-size:24px;
                    color:#333;
                }

            }
        }

    }
</style>
