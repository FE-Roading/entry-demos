<template lang="html">
    <div class="vip-silder">
        <Slider cname="vip-slider-con" :options="options" :items="items"></Slider>
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
                    el:".swiper-pagination"
                }
            },
            items:[
                {
                    href:"vip",
                    src:require("../../images/5b569d4fN717a08fa.png")
                },
                {
                    href:"vip",
                    src:require("../../images/5b569d5bN22e3d353.png")
                },
                {
                    href:"vip",
                    src:require("../../images/5b569d52N102066ff.png")
                },
                {
                    href:"vip",
                    src:require("../../images/5b569d55N80575dd1.png")
                },
                {
                    href:"vip",
                    src:require("../../images/5b569d58Nbe6f5194.png")
                }
            ]
        }
    }

}
</script>
<style lang="scss">
    .vip-silder{        
        a{
            display: inline-block;
            width: 100%;
            box-sizing: border-box;
            padding: 0 26.25px;
            img{
                width: 100%;
            }
        }


    }
</style>
