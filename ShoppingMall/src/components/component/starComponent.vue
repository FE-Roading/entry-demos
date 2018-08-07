<template>
    <div class="star-eval">
        <span class="stars-bg">
            <i class="star-active" :style="'width: '+rate*10+'%'"></i>
        </span>
    </div>
</template>
<script>
    export default {
        mounted(){
            console.log("评分值：",this.rate)
        },
        props:['rate']
    }
</script>

<style lang="scss" scoped>   
    .star-eval{
        width: 9rem;
        height: 9/157*15rem;
        box-sizing: border-box;
    }
    .stars-bg{
        position: relative;
        display: inline-block;
        width: 9rem;
        height: 9/157*15rem;
        background: url("../../assets/images/rate.jpg") 0 0 no-repeat;
        background-size: 9rem 9/157*33rem;
    }
    .star-active{
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        height: 9/157*15rem;        
        background: url("../../assets/images/rate.jpg") 0 -1rem no-repeat;
        background-size: 9rem 9/157*33rem;
    }
</style>
