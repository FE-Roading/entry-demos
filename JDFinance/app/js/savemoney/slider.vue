<template lang="html">
    <div class="savem-silder">
        <Slider cname="savem-silder-con" :options="options" :items="items"></Slider>
    </div>
</template>
<script>
    import Slider from "../core/slider.vue"
export default {
    components:{
        Slider
    },
    data(){
        return {
            options:{
                slidesPerView:1,
                spaceBetween:24,
                autoplay:true,
                loop:true,
                pagination:{
                    el:".swiper-pagination",
                    type: 'fraction',
                }
            },
            items:[
                {
                    href:"savemoney",
                    src:require("../../images/5b4d5d3fN09d38d18.png")
                },
                {
                    href:"savemoney",
                    src:require("../../images/5b57da12N354a4309.jpg")
                },
                {
                    href:"savemoney",
                    src:require("../../images/5b5547e6N23a2371a.jpg")
                },
                {
                    href:"savemoney",
                    src:require("../../images/5b0b6d83Nef4c766a.jpg")
                }
            ]
        }
    }

}
</script>
<style lang="scss">
    .savem-silder{  
        position: relative;      
        a{
            display: inline-block;
            width: 100%;
            img{
                width: 100%;
            }
        }
        .swiper-pagination-fraction{
            font-size: 25.6px!important;
            text-align: right;
            box-sizing: border-box;
            padding-right: 34.134px;
            padding-bottom: 10px;
            color: #cccccc;
            .swiper-pagination-current{
                color: #fff;
            }
        }
        


    }
</style>
