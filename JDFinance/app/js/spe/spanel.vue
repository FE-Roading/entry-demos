<template>
    <div class="spanel">
        <bpanel :more="more" :title="title" :cname="cname">
            <slot/>
        </bpanel>
    </div>
</template>
<script>
    import bpanel from "../core/panel.vue"
    export default{
        props:{
            cname:{
                type: String,
                default:""
            },
            title:{
                type:String,
                default:""
            },
            more:{
                type:String,
                default:""
            }
        },
        components:{
            bpanel
        }
    }
</script>
<style lang="scss">
    .spanel{
        padding:0 30px;
        .head{
            >h4{
                float: left;
                font-size: 36px;
                color:#333;
                line-height: 120px;
                height: 120px;
                text-align: left;
            }  
            >span{
            float: right;
            font-size: 24px;
            color: #999;
            line-height: 120px;
            height: 120px;
        }          
        }       
    }

</style>
