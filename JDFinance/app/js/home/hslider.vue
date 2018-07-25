<template lang="html">
    <div >
        <Silder :items="items" :cname="$style.slider" />
        <div :class="$style.list">
            <router-link v-for="item  in listItems" :key="item.href"  :to="{ name:item.href}" :class="$style.item">
                <img :src="item.src">
                <p v-html="item.title"></p>
            </router-link>
        </div>
    </div>
</template>

<script>
import Silder from "../core/slider.vue";


export default {
    name:"jhSilder",
    data(){
        return {
            items:[
                {
                    href:"home",
                    src:require("../../images/5b552930Nb68f5f55.jpg"),
                },{
                    href:"home",
                    src:require("../../images/5b51c68dNc9c51bf2.jpg"),
                },{
                    href:"home",
                    src:require("../../images/5b51c664N2ca1ca35.jpg"),
                }
            ],
            listItems:[
                {
                    href:"home",
                    src:require("../../images/58d1e462Ncf294123.png"),
                    title:"<span>优惠券</span><br/><span>100-99券<span>"                    
                },{
                    href:"home",
                    src:require("../../images/59224650N0f7ffc92.png"),
                    title:"领福利"   
                },{
                    href:"home",
                    src:require("../../images/58ec9dcdN1534e2d7.png"),
                    title:"抢钢镚"   
                },{
                    href:"home",
                    src:require("../../images/590ac8e8Ne9def22e.png"),
                    title:"白条提额"   
                }
            ]
        }
    },
    components:{
       Silder,
    }
}
</script>
<style lang="scss" module>
    @import "../../css/element.scss";

    .slider{
        margin-top: 210px;        
        img{
            width: 100%;
        }
    }
    .list{
        @include list;
        background-color: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        a{
            text-decoration: none;
            width: 25%;
        }
        .item{
            text-align: center;
            img{
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            p{
                font-size:26px;
                margin-top: 12px;
                color: #666;
                span:last-child{
                    display: block;
                    font-size: 24px;
                    color: red;
                    margin-top: 8px;
                }
            }

        }

    }

</style>
