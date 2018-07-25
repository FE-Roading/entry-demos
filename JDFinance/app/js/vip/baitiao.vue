<template>
    <Panel title="白条服务" :cname="$style.baitiao">
        <div class="car clearfix">
            <a href="javascript:;">
                <img src="../../images/whiteCard.png" alt="">
            </a>  
            <a href="javascript:;">
                <img src="../../images/whiteCircle.png" alt="">
                <p>小白信用</p>
                <p>登录查看</p>
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
    .baitiao{
        padding: 52.5px 0 34px 0!important;
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
            box-sizing: border-box;
            float:left;
            text-decoration: none;
            &:nth-of-type(1){
                width: 63.5%;
                padding-left: 13.126px;
            } 
            &:nth-of-type(2){
                width: 36%;
                padding-right: 13.126px;
                position: relative;
                p{
                    font-size: 24px;
                    line-height: 26px;
                    height: 26px;
                    position: absolute;
                    left: 0;
                    right: 13.126px;
                    text-align: center;
                }
                p:nth-of-type(1){
                    color: #ffeac9;
                    top: 35%;
                }
                p:nth-of-type(2){
                    color: #ae8339;
                    top: 66.5%;
                }
            }
            img {
                width: 100%;
                display: inline-block;
            }
        }
    }
</style>
