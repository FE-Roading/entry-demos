<template lang="html">
    <section :class="['info-row','clearfix',cname]">       
        <p class="i-title"> <img class="i-icon" :src="iconUrl">{{title}}</p>
        <p class="i-subtitle">{{subtitle}}</p>
    </section>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:""
        },
        subtitle:{
            type:String,
            default:""
        },
        icon:{
            type:String,
            default:"59cb5fbdNa7c682c3.png"
        },
        cname:{
            type:String,
            default:""
        }
    },
    computed:{
        iconUrl(){
            return require('../../images/'+this.icon);
        }
    }
    
}
</script>
<style lang="scss">
    .info-row{
        height: 112px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #ffffff;
        p{
            font-size: 32px;
            height: 88px;
            line-height: 88px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .i-icon{
            width: 48px;
            margin: 0 32px;
            display: inline-block;
        }
        .i-title{          
            color: #333;
            max-width: 50%;
            display: flex;
            align-items: center;
        }
        .i-subtitle{
            margin-right: 32px;
            color: #999;
            max-width: 39%;
            padding-right: 36px;
            background:url("../../images/icon_arrow1.png") right center no-repeat;
            background-size: 18px 30px;
        }
    }

</style>
