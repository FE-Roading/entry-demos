<template>
    <Panel title="精彩活动" :cname="$style.activity">
        <div class="car clearfix">
            <a href="javascript:;">
                <img src="../../images/5b2af9c0N7a15f0c2.png" alt="">
            </a>  
            <a href="javascript:;">
                <img src="../../images/5b2afbeaN7987d0b2.png" alt="">
            </a>      
            <a href="javascript:;">
                <img src="../../images/5a5c87faNd161d42e.png" alt="">
            </a>                     
        </div>
    </Panel>
    
</template>
<script>
import Panel from "../core/panel.vue";

export default {
  components: {
    Panel,
  }
};
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .activity{
        padding: 52.5px 0 60px 0!important;
        h4{
            text-align:left!important;
            margin-left: 32px;
            padding: 0!important;
            line-height: 38px!important;
            height: 38px!important;
        }
        >div:nth-of-type(2){
            margin-top: 26.5px;
        }
        a {
            box-sizing: border-box;
            float:left;
            text-decoration: none;
            width: 50%;
            &:last-of-type{
                width: 100%;
            }
            img {
                width: 100%;
                display: inline-block;
            }
        }
    }
</style>
