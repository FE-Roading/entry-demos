<template>
    <div class="nb-slider swiper-container">
        <swiper :options="options" :not-next-tick="options.notNextTick" class="s">
            <swiper-slide v-for="item in items" :key="item.title" class="wiper-wrapper">
                <router-link :to="{name:'spe'}">
                    <div class="nb-product">
                        <p class="title">{{item.period}}</p>
                        <p class="label">{{item.label}}</p>
                        <p class="rate">{{item.rate}}<span>%</span></p>
                        <p class="desc">{{item.desc}}</p>
                    </div>
                </router-link>
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
                    slidesPerView:2.6,
                    spaceBetween:10,
                    notNextTick:true
                },
                items:[
                    {
                        period:"月月盈",
                        label:"金融专享",
                        rate:"4.70",
                        desc:"近七日年化收益率"
                    },
                     {
                        period:"周期盈",
                        label:"理财优选",
                        rate:"4.60",
                        desc:"近七日年化收益率"
                    },
                     {
                        period:"五年盈",
                        label:"长期稳健",
                        rate:"5.80",
                        desc:"历史年化投资回报率"
                    },
                     {
                        period:"随享盈",
                        label:"质押贷款",
                        rate:"5.50",
                        desc:"历史年化结算利率"
                    }
                    ]
            }
        }       
    }
</script>
<style lang="scss">
    @import '~swiper/dist/css/swiper.css';
    .nb-slider{
        a{
            text-decoration: none!important;
        }
        
        .swiper-slide{
            box-shadow: 0 0, 0 0 10px 0.5px rgba(101,118,155,.25);  
        }
    }

    .nb-product{
        width: 210px;
        height: 260px;
        box-sizing: border-box;
        padding: 0 16px;
        margin-right: 16px;
        font-weight: 400;               
        .title{
            line-height: 46px;
            height: 46px;
            padding:38px 0 10px 0;
            font-size: 32px;
            color: #333333;
        }
        .label{
            background-image: linear-gradient(#5e8fff,#2f6fff);
            color: #fff;
            font-size: 24px;
            line-height: 32px;
            min-width: 100px;
            display: inline;
            border-radius: 18px;
        }
        .rate{
            line-height: 60px;
            height: 60px;
            color: #ff281e;
            font-size: 50px;
            span{
                font-size: 36px;
            }
        }
        .desc{
            font-size: 24px;
            color: #999;
            height: 28px;
            line-height: 28px;
        }


    }



</style>
