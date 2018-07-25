<template lang="html">
    <div :class="$style.favorable">
        <panel title="支付优惠" :cname="$style.panel">
            <div :class="$style.favor">
                <a href="javascript:;">
                    <img src="../../images/5b0b947bN916e62ee.jpg" alt="">
                </a>
            </div>  
            <ul :class="$style.more">
                <li>
                    <a href="javascript:;">
                        <img src="../../images/5b0b957bNcb388c1b.png" alt="">
                    </a>
                </li>
                <li>
                    <div>
                        <a href="javascript:;">
                            <img src="../../images/5b0402a7Nc06d77e4.png" alt="">
                        </a>
                    </div>
                    <div>
                            <a href="javascript:;">
                                <img src="../../images/5b0b8b37Nf39a066b.png" alt="">
                            </a>
                        </div>
                </li>
            </ul>

        </panel>
    </div>
</template>
<script>
    import panel from "../core/panel.vue"
    export default {
        components:{
            panel
        }
    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .favorable{
        a,img{
            display: block;
            width: 100%;
        }
    }
    .panel{
        h4{
            text-align: left!important;
        }
        .favor{
            width: 100%;
        }
        .more{
            padding:0 30px;
            @include list;
            li{
                width: 50%;
                box-sizing: border-box;
                &:last-of-type{
                    @include flex(row);
                    position: relative;
                    >div{
                        width: 100%;
                        height: 50%;
                        position: relative;
                        &:last-of-type::before{
                            content:"";
                            display: block;
                            background:#f2f2f2;
                            width:100%;
                            height:10px;
                            position:absolute;
                            left:0;
                            top:-10px;
                        }
                    }
                    &::before{
                        content:"";
                        display: block;
                        background:#f2f2f2;
                        height:100%;
                        width:10px;
                        position:absolute;
                        top:0;
                        left:-10px;
                    }
                }
            }
        }

    }

</style>
