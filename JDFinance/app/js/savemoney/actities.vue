<template lang="html">
    <div :class="$style.activities">
        <div :class="$style.payway">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img src="../../images/5b3b1363N136fafe7.png" alt="">
                    </a>
    
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../../images/5b4c6bb6Nf4477141.png" alt="">
                    </a>
    
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../../images/5b35caedN6cd9fa8e.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div :class="$style.pinsha">
            <a href="javascript:;">
                <img src="../../images/5b514599N27df0166.jpg" alt="">
            </a>
        </div>
        <div :class="$style.disacout">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img src="../../images/5b03d5bcN29ef6416.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../../images/5b03d5c7Nccffa23f.jpg" alt="">
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .activities{
        ul{
            @include list;
            li {
                width: 33.3333%;
                background-color:#fff;
                a,img {
                    display: block;
                    width: 100%;
                }
            }
        }
    }
    .pinsha{
        width: 100%;
        a,img{
            width: 100%;
            display: block;
        }
    }
    .disacout{
        padding-top: 12.8px;
        li{
            width:50%!important;
        }
    }

</style>