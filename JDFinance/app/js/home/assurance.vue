<template>
    <Panel title="-保险保障-" cname="assurance">
        <Slider :options="options" :items="items" cname="assurance-slider"></Slider>
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
                },
                items:[
                    {
                        href:"home",
                        src:require("../../images/5a153643N04efba6e.jpg")
                    },{
                        href:"home",
                       src:require("../../images/59cb6304Naef85042.jpg")
                    },{
                        href:"home",
                        src:require("../../images/59cb632fNcac82571.jpg")
                    },{
                        href:"home",
                        src:require("../../images/5a31dde6Nbba7f26c.png")
                    },{
                        href:"home",
                        src:require("../../images/59cb637dNf25b0dff.jpg")
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    .assurance-slider{
        padding:0 20px 40px 20px;
        font-size: 0;
        letter-spacing: -5px;
        a{
            display: inline-block; 
            width: 100%;
        }      
        img{
            width: 100%!important;
            display:inline-block;
            border: none;
        }  
    }
    .assurance{
         padding-bottom: 40px;
    }
</style>
