<template>
    <div :class="$style.hardware">
       <Panel title="便利生活" >
            <ul>
            <li>
                <a href="javascript:;">
                    <img src="../../images/5b3aefa9N37c2e0cc.png" alt="">
                    <p>机票</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5b3af119Na8f20cb4.png" alt="">
                    <p>每日特惠</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5b3af111N72cbcdab.png" alt="">
                    <p>领福利</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5b3af0e2Nedf7b9b4.png" alt="">
                    <p>租车</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5b3aee47N95783160.png" alt="">
                    <p>电影票</p>
                </a>
            </li>
        </ul>
       </Panel>
    </div>
    
</template>
<script>
    import Panel from "../core/panel.vue"
    export default{
        components:{
            Panel
        }
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .hardware{       
        h4{
            text-align: left!important;
        }

        ul{
            @include list;
            li{
                width: 20%;
                text-align: center;
                font-size: 26px;
                position: relative;
                a{
                    text-decoration: none;                    
                }
                p{
                    margin-top: 18px;
                    font-size: 24px;
                    color: #666;
                }
                img{
                    width: 90px;
                }
            }
            padding-bottom: 40px;

        }
    }

</style>
