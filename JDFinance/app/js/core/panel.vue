<template>
    <div :class="[panelClass,cname]">
        <div class="clearfix head"><h4>{{title}}</h4><span>{{more}}</span></div>        
        <slot/>
    </div>
</template>
<script>
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
        data(){
            return {
                panelClass:"bpanel"
            }
        }
    }
</script>
<style lang="scss">
    @import "../../css/element.scss";
    .bpanel{
        @include panel;        
    }

</style>
