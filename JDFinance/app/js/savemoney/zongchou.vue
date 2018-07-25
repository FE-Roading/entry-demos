<template>
    <div :class="$style.zongchou">
        <panel title="众筹好物" :cname="$style.zccon">
            <ul :class="$style.product">
                <li v-for="item in items" :key="item.src">
                    <img :src="item.src" alt="">
                    <p :class="$style.title">{{item.title}}</p>
                    <p :class="$style.price"><span :class="$style.unit">¥</span>{{item.price}}<span :class="$style.sub">起</span></p>
                </li>
            </ul>
        </panel>
    </div>

</template>
<script>
     import panel from "../core/panel.vue"

    export default {
        components: {
            panel,
        },
        data() {
            return {
                    items: [{
                        href: "savemoney",
                        src:"//img30.360buyimg.com/cf/jfs/t18154/53/1392583303/18925/ede1f5b2/5acb31c5N81a0fcf6.jpg!q70.dpg",
                        title:"自增压SPA按摩花洒",
                        price:"69.00",                        
                    },
                    {
                        href: "savemoney",
                        src:"//img30.360buyimg.com/cf/jfs/t20206/168/2110626788/109833/b72aee40/5b480298N8850b6e9.jpg!q70.dpg",
                        title:"让你想摔掉传家物而收藏的茶器",
                        price:"168.00",                        
                    },
                    {
                        href: "savemoney",
                        src:"//img30.360buyimg.com/cf/jfs/t23662/217/1031551458/54488/40c7a9af/5b4ea905Ncb75974f.jpg!q70.dpg",
                        title:"南国陶源·匠心手作石湾陶塑",
                        price:"248.00",                        
                    },
                    {
                        href: "savemoney",
                        src:"//img30.360buyimg.com/cf/jfs/t21433/165/2275844196/35235/7785664a/5b4ecbeeN84c280eb.jpg!q70.dpg",
                        title:"这就是豆香味的狮峰龙井",
                        price:"13.00",                        
                    },
                    {
                        href: "savemoney",
                        src:"//img30.360buyimg.com/cf/jfs/t22609/196/1042877247/46285/30ae25e6/5b4f1e66N1957af8e.jpg!q70.dpg",
                        title:"宫廷老普洱·甘醇大红柑",
                        price:"39.00",                        
                    },
                    {
                        href: "savemoney",
                        src:"//img30.360buyimg.com/cf/jfs/t23173/47/1041631988/53904/98d7f904/5b4d9decN73e83455.jpg!q70.dpg",
                        title:"觀云 / 手绘文人扇",
                        price:"210.00",                        
                    },
                    {
                        href: "savemoney",
                        src:"//img30.360buyimg.com/cf/jfs/t23101/140/1088608732/20789/bb4fee37/5b5043d2Ncbc878b5.jpg!q70.dpg",
                        title:"逆袭：企业全网营销突围之路",
                        price:"49.00",                        
                    },
                    {
                        href: "savemoney",
                        src:"//img30.360buyimg.com/cf/jfs/t23482/64/672667164/65773/9c0bfe99/5b3c7cb1N3be8ae2c.jpg!q70.dpg",
                        title:"自带书法的砚台—残碑澄泥砚",
                        price:"198.00",                        
                    }
                ]
            };
        }
    };
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .zongchou {
        background-color: #F3F5F7;
        padding-bottom: 60px;
        .zccon{            
            h4{
                text-align: left!important;
                background-color: #F3F5F7;
            }
        }
        .product{
            @include list;
            background-color: #F3F5F7;
            li{
                box-sizing: border-box;
                width: 50%; 
                padding:0 20px 40px 20px;
                background-color: rgba(0,0,0,.02);
                background-clip: content-box;
                text-align: center;

                &:nth-child(2n){
                    padding-left:0;
                }
                img{
                    display: block;
                    margin: 44px auto 20px auto;
                    width: 180px;
                }
                .title{
                    font-size: 28px;
                    font-weight: 700;
                    height: 40px;
                    line-height: 40px;
                    margin: 0 24px;
                    color: #444;
                    text-align: center;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .price{
                    font-weight: 700;
                    font-size: 36px;
                    color: #FF3232;
                    height: 48px;
                    line-height: 48px;
                    margin-bottom: 16px;
                    text-align: center;
                    span{
                        font-size: 24px;
                        padding: 0 6px; 
                    }
                }              
            }
            

        }


    }
</style>