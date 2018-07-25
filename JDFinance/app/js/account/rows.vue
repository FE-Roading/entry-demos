<template lang="html">
    <div class="jr-rows-con">
        <row :icon="item.icon" :title="item.title" :subtitle="item.subtitle" :class="[cname,'jr-account-rows']" v-for="item in items" :key="item.title+item.subtitle"></row>
    </div>
</template>
<script>
import row from "./row";

export default {
    components:{
        row
    },
    props:{
        items:{
            type:Array,
            default:[]
        },
        cname:{
            type:String,
            default:""
        }
    }
}
</script>
<style lang="scss">
    .jr-rows-con{
        margin-bottom: 20px;
        background-color: #fff;
        .jr-account-rows:nth-child(n+1){
            position: relative;
            &::after{
                content: "";
                display: block;
                width: 100%;
                height: 2px;
                background-color: #eee;
                position: absolute;
                bottom: -2px;
                left: 112px;
                z-index: 1;
            }
            &:last-of-type::after{
                display: none;
            }

        }
    }

</style>
