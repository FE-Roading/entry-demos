<template lang="html">
    <div class="jr-account">
        <rows :items="accountItems" :cname="'accountlogin'"></rows>
        <rows :items="mainIitems"></rows>
        <rows :items="renItems"></rows>
        <rows :items="helpItems"></rows>
    </div>
</template>
<script>
import rows from "./rows";

export default {
    components:{
        rows
    },
    data(){
        return {
            mainIitems:[
                {
                    icon:"59cb5fbdNa7c682c3.png",
                    title:"我的资产",
                    subtitle:"查看全部资产"
                },
                {
                    icon:"59cb6124N31cb2889.png",
                    title:"我的优惠券",
                    subtitle:"查看全部"
                },
                {
                    icon:"59f945edNc1197b64.png",
                    title:"我的金币",
                    subtitle:"赚金币兑好物"
                },
                {
                    icon:"5a0bdf3aN22efb724.png",
                    title:"我的金条",
                    subtitle:"查看额度"
                },
                {
                    icon:"59cb612dN5b974dc5.png",
                    title:"我的借钱",
                    subtitle:"查看全部产品"
                },{
                    icon:"59cb613bN1e749e58.png",
                    title:"我的白条",
                    subtitle:"去提额"
                },{
                    icon:"59cb6162N9c71da0f.png",
                    title:"我的众筹",
                    subtitle:"查订单/物流"
                },{
                    icon:"59cb616bN3e1bd87d.png",
                    title:"我的保障",
                    subtitle:"全方位保障"
                }
            ],
            helpItems:[
                {
                    icon:"59cb61c9Nc2bbc057.png",
                    title:"帮助中心",
                    subtitle:""
                }
            ],
            renItems:[
                {
                    icon:"59cb61b2N53280a30.png",
                    title:"实名认证",
                    subtitle:""
                }
            ],
            accountItems:[
                {
                    icon:"573d96deN06201af5.png",
                    title:"",
                    subtitle:"会员福利",
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    .jr-account{
        padding: 90px 0 100px 0;
        overflow: hidden;
        .accountlogin{
            height: 140px;
            p{
                height: auto;
            }
            img{
                width: 100px;
            }
        }
    }

</style>
