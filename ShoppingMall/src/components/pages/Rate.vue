<template>
    <div class="comm-con">
        <topbaar title="商品评论"></topbaar>
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
            this.order=this.$route.params.order
            this.goods=this.order.GOODS
            this.$store.commit("commentsClear")
            this.$store.commit("commentsInit",this.goods)
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
        methods:{
            leave(next){
                Dialog.confirm({
                    title: '评论内容',
                    message: '评论尚未提交，如现在离开，评论将会被清空。请确认是否离开？'
                    }).then(() => {
                        next()
                    }).catch(()=>{
                        next(false)
                    })
            },
            commentsFormat(){
                let comments=this.$store.state.comments
                let tmp=[]
                comments.forEach((item)=>{
                    console.log(item.content,item.content.length)
                    if(item.content.length>20){
                        tmp.push({
                            star:item.rate,
                            content:item.content,
                            userName:this.order.ADDRESS.name,
                            userId:this.id,
                            goodsId:item.GID,
                            shopId:item.SHOP_ID,
                            orderId:this.order._id
                        })
                    }
                })
                console.log(tmp)
                return tmp
            },
            commitComments(){
                let comments=this.commentsFormat()
                if(comments.length==0){
                    Toast("无完整评论需要提交！",{duration:2})
                }else{
                    this.axios.post(url.comAdd,{
                        id:this.id,
                        oid:this.order._id,
                        comments
                    }).then(result=>{
                        console.log(result.data)
                        if(result.data.message===true){
                            Toast("评论提交成功！",{duration:2})
                            this.$router.push("/order")
                            this.$store.commit("commentsClear")
                        }else{
                            Toast("评论提交失败！",{duration:2})
                        }
                    }).catch(error=>{
                        Toast("评论提交失败！",{duration:2})
                        console.log(error)
                    })
                }
            },
            uploadComments(){
                let comments=this.$store.state.comments
                let complete=true
                comments.forEach((item)=>{
                    if(item.content.length<20){
                        complete=false;  
                    }
                })
                if(!complete){
                    Dialog.confirm({
                        title: '评论内容',
                        message: '评论尚未全部填写，如现在提交后，未评论的商品后续将无法被。请确认是否提交？'
                        }).then(() => {
                            this.commitComments()
                        }).catch(()=>{
                            void(0)
                        })
                }else{
                    this.commitComments()
                }
            }
        },
        beforeRouteLeave (to, from, next) {
            if(!this.finished){
                this.leave(next)
            }else{
                next()
            }
        },            
        
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

