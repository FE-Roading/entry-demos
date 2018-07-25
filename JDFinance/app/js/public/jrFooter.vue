<template>
    <Panel :class="$style.footer">
        <ul>
            <li>
                <a href="javascript:;">
                    <img src="../../images/577dc28dNe5138337.png" alt="">
                    <p>客户端</p>
                </a>
                <a href="javascript:;">
                    <img src="../../images/577cf3dcN18aadbf2.png" alt="">
                    <p>触屏版</p>
                </a>
                <a href="javascript:;">
                    <img src="../../images/577cf3e5N53f740b8.png" alt="">
                    <p>电脑版</p>
                </a>     
            </li>
            <li>
                Copyright © 2004-2018 京东JD.com 版权所有
            </li>
            <li>
                投资有风险，购买需谨慎
            </li>
            <li>
                京东金融平台服务协议
            </li>
            <li>
                京东金融隐私政策
            </li>
        </ul>
    </Panel>
    
</template>
<script>
    import Panel from "../core/panel.vue";
    export default{
        components:{
            Panel
        }
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .footer{
        background-color: transparent;
        >h4{
            display: none;
        }
        ul{
            @include flex(row);
            width: 100%;
            li{
                width: 100%;
                text-align: center;
                font-size: 24px;
                line-height:1.6;
                color: #999;
                padding: 24px 32px;
                border-bottom: 1px solid #DDD;        
                a{
                    text-decoration: none;
                    color: #999;
                    font-size: 26px;
                    img{
                        width: 90px;
                        height: 90px;
                    }
                }        
            }
            li:first-child{
                @include list;
                justify-content: space-around;
                padding-left: 0;
                padding-right: 0;
                a{
                    display: inline-block;
                    width: 33.33333%;
                    text-align: center;
                }
            }
            li:last-child{
                border-bottom:none;
            }
        }
        
    }

</style>
