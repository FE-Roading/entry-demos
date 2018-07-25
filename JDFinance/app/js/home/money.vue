<template>
    <Panel title="-理财精选-" :cname="$style.hmoney">
        <section :class="$style.content">
            <dl v-for="item in items" :key="item.title" >
                <dt class="clearfix"><span :class="$style.title">{{item.title}} </span><span :class="$style.sub">{{item.sub}}</span></dt>
                <dd>{{item.rate}}</dd>
                <dd>{{item.desc}}</dd>
            </dl>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue";

export default {
    components:{
        Panel,
    },
    data(){
        return {
            items:[
                {
                    title:"京渤随享盈",
                    sub:"90天可质押",
                    rate:"5.50%",
                    desc:"历史年化收益率"
                },{
                    title:"年年盈",
                    sub:"理财推荐",
                    rate:"4.94%",
                    desc:"综合年化收益率"
                },{
                    title:"建信养老飞益鑫",
                    sub:"1000起投",
                    rate:"4.57%",
                    desc:"近7日年化收益"
                },{
                    title:"小白基金",
                    sub:"超短期",
                    rate:"4.50%",
                    desc:"7日年化收益率"
                }
            ]
        }
    }
}
</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    @import "../../css/layout.scss";

    .hmoney{
        @include panel;
        .content{
            @include list;
            box-sizing: border-box;
            margin-bottom: 20px;
            dl{
                box-sizing: border-box;
                width: 50%;                
                padding-left: 32px;
                position: relative;
                height: 218px;
                &::after{
                    content: "";
                    width: 1px;
                    height: 136px;
                    position: absolute;
                    top: 5%;
                    right: 0px;
                    margin-top: -34px;
                    border-right: 1px solid #eeeeee;
                }
                &:nth-child(2n){
                    &::after{
                        border: none;
                    }
                }
                dt{
                    margin-top: 34px;
                    margin-bottom: 16px;
                    width: 100%;
                    height: 42px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                dt span{
                    float: left;
                    box-sizing: border-box;
                    line-height: 42px;
                } 
                dt .title{
                    font-size: 30px;
                    font-weight: 700;                    
                    color: #333;                    
                }
                dt .sub{
                    height: 34px;
                    line-height: 34px;
                    font-size: 22px;
                    margin-left: 8px;
                    padding: 0 8px;
                    color: #FF5155;
                    border:1px solid #FF5155;
                }                               
                dd:nth-child(2){
                    font-size: 44px;
                    height: 58px;
                    line-height: 58px;
                    color: #FF5155;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                dd:nth-child(3){
                    font-size: 24px;
                    height: 34px;
                    line-height: 34px;
                    color: #999;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            
            }


        }
        
    }

</style>
