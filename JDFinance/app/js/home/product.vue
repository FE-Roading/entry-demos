<template>
    <Panel title="-众筹新品-" class="product">
        <Slider :options="options" :items="items" cname="product-slider"></Slider>
    </Panel>
    
</template>
<script>
    import Slider from "../core/slider.vue";
    import Panel from "../core/panel.vue";
    export default{
        components:{
            Slider,
            Panel
        },
        data(){
            return {
                options:{
                    slidesPerView:2.3,
                    spaceBetween:24,
                    // slidesPerGroup:3,
                    // loop: true,
                    // loopFillGroupWithBlank:true,
                },
                items:[
                    {
                        href:"home",
                        src:require("../../images/5b30a5a5N3dec8fdc.jpg")
                    },{
                        href:"home",
                        src:require("../../images/5b5066e3Nb460c234.jpg")
                    },{
                        href:"home",
                        src:require("../../images/5b5066f2N360c723a.jpg")
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    .product-slider{
        padding:0 24px;
        font-size: 0;
        letter-spacing: -5px;        
        a{
            display: inline-block;
            width: 100%;
            img{
                width: 250px;
                height: 100%;
                display:inline-block;
                border: none;
            }
        }        
    }
    .product{
        padding-bottom: 40px;
    }
</style>
