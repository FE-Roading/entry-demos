<template>
    <Panel title="有车有钱" :cname="$style.car">
        <div class="car clearfix">
            <a href="javascript:;">
                <img src="../../images/5a56c877Nee6cfc4d.jpg" alt="">
            </a>
            <a href="javascript:;">
                <img src="../../images/5b4c0d0fN9ef24eb3.png" alt="">
            </a>
        </div>
        <Pslider/>
    </Panel>
    
</template>
<script>
import Panel from "../core/panel.vue";
import Pslider from "./product-silder";

export default {
  components: {
    Panel,
    Pslider    
  }
};
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .car{
        padding: 52.5px 0 20px 0!important;
        h4{
            text-align:left!important;
            margin-left: 32px;
            padding: 0 0 0 32px!important;
            line-height: 38px!important;
            height: 38px!important;
            border-left: 5px solid #D3AD6E;
        }
        >div:nth-of-type(2){
            margin-top: 26.5px;
        }
        a {
            float: right;
            width: 50%;
            text-align: center;
            img {
                width: 100%;
                display: inline-block;
            }
        }
    }
</style>
