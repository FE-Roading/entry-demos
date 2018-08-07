<template>
    <div class="comment">
        <div class="title">
            <img :src="goods.IMAGE1" alt="">                
            <div class="right">
                <h5>{{ goods.createAt }}</h5>
                <van-rate v-model="rate" :count="10" disabled/>
            </div>
        </div>
        <van-cell-group>
            <van-field
                v-model="content"
                type="textarea"
                :placeholder="'请输入20-'+max+'字的评论'"
                rows="1"
                :autosize="{maxHeight:180, minHeight:100}"
                disabled
            />
        </van-cell-group>      
    </div>
</template>
<script>
    import topbaar from "../component/topbarComponent.vue"
    import { mapMutations } from "vuex"
    import { getCookie } from "@/utils/index.js"

    export default {
        props:['goods'],
        data(){
            return {
                rate:this.goods.rate,
                content:this.goods.content,
                max:120  //最大字符长度
            }
        },
        components:{
            topbaar
        },
        methods:{
            ...mapMutations(['commentsContentUpdate','commentsRateUpdate'])
        },
        watch:{
            rate(nValue,value){                
                this.commentsRateUpdate({id:this.goods.GID,rate:nValue})
            },
            content(nValue,value){
                if(nValue.length>this.max){
                    this.content=value
                }else{
                    this.commentsContentUpdate({id:this.goods.GID,content:nValue})
                }               
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/css/config.scss";
    .comment{
        margin-bottom: 10px;
        padding: 10px;
        background-color: #eee;
        .title{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            padding-bottom: 10px;
            img{
                height: 51px;
            }
            .right{
                flex: 1;
                padding-left: 6px;
            }
            h5{
                margin: 5px;
            }
        }

    }
</style>

