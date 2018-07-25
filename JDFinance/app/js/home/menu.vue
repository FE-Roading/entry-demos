<template>
    <Panel class="hmenu">
        <ul>
            <li>
                <a href="javascript:;">
                    <img src="../../images/5a4f2622Nc4aca701.png" alt="">
                    <p>旅游</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5a4f265bN66ef5ae8.png" alt="">
                    <p>医美</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5a4f2693N937f1905.png" alt="">
                    <p>房抵贷</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5a4f26bfN03ed1f66.png" alt="">
                    <p>驾校</p>
                </a>
            </li>
            <li>
                 <a href="javascript:;">
                    <img src="../../images/5a4f26edN6cdfda66.png" alt="">
                    <p>分期用</p>
                </a>
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
<style lang="scss">
    @import "../../css/element.scss";
    .hmenu{
        margin-top: 0;
        padding: 40px 0 20px 0;
        h4{
            display: none;
        }
        ul{
            @include list;
            li{
                width: 20%;
                text-align: center;
                font-size: 26px;
                a{
                    text-decoration: none;
                }
                p{
                    margin-top: 10px;
                    color: #666;
                }
                img{
                    width: 90px;
                }
            }

        }
    }

</style>
