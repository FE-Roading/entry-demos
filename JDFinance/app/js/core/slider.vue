<template>
    <div :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.src">
                <router-link :to="{name:item.href}">
                    <img :src="item.src">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'; 
    export default {
        name:"jSlider",
        components: {
            swiper,
            swiperSlide
        },
        props:{
            options:{
                type:Object,
                default(){
                    return {
                        autoplay:true,
                        loop:true,
                        pagination:{
                            el:".swiper-pagination"
                        },
                        notNextTick:false
                    }
                }
            },
            items:{
                type:Array,
                default(){
                    return []
                }
            },
            cname:{
                type:String,
                default:""
            }
        }
    }
</script>
<style lang="scss">
    @import '~swiper/dist/css/swiper.css';
</style>
