<template>
    <div class="comm-con">
        <topbaar title="评论记录"></topbaar>
        <div class="comments" v-for="(gitem,index) in goods" :key="index">
            <rateCom :goods="gitem"></rateCom>            
        </div>
        <div class="bottom">
            <div class="detail">{{status}}</div>
            <van-button size="normal" type="primary" @click="uploadComments">提交评论</van-button>
        </div>
    </div>
</template>
<script>
    import topbaar from "../component/topbarComponent.vue"
    import rateCom from "../component/rateComponent.vue"
    import { Dialog, Toast } from 'vant';
    import { mapState } from "vuex"
    import { getCookie } from "@/utils/index.js"
    import url from  '@/api.config.js'

    export default {
        created(){
            
        },
        data(){
            return {
                value:10,
                order:null,
                goods:[],
                finished:this.goods?false:true
            }
        },
        components:{
            topbaar,
            rateCom
        },
        computed:{
            ...mapState(['token','login','id']),
            status(){
                return "共有"+this.goods.length+"件商品"
            }
        },
        methods:{}                    
        
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/css/config.scss";
    .comm-con{
        margin-top:$topbarHeight;
        padding-bottom: 65px;
        .comments{
            margin-bottom: 10px;
        }
        .bottom{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: right;
            padding: 10px;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            .detail{
                height: 43px;
                line-height: 43px;
            }
        }
    }
</style>

