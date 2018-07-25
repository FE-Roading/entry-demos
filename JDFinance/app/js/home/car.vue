<template>
    <Panel title="-有车有钱-" cname="car-con">
        <div class="car clearfix">
            <a href="javascript:;">
                <img src="../../images/5a56c877Nee6cfc4d.jpg" alt="">
            </a>
            <a href="javascript:;">
                <img src="../../images/5b4c0d0fN9ef24eb3.png" alt="">
            </a>
        </div>
    </Panel>
    
</template>
<script>
import Panel from "../core/panel.vue";

export default {
  components: {
    Panel
  }
};
</script>
<style lang="scss">
@import "../../css/element.scss";
    .car{
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
    .car-con {
        padding-bottom: 40px;
        margin-bottom: 0;
    }
</style>
