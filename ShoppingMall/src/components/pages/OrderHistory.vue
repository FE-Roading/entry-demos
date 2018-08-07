<template>
    <div class="orderhistory-con">
        <topbar title="历史订单"></topbar>
        <div v-if="orders.length==0" class="empty-order">暂无订单，开启购物吧！</div>
        <goodscard :goods="orders"></goodscard>
    </div>
</template>
<script>
    import topbar from "../component/topbarComponent.vue"
    import goodscard from "../component/goodsHistoryComponent.vue"
    import {getCookie} from '@/utils/index.js'
    import url from "@/api.config.js"

    export default{
        created(){
            this.getOrders()
        },
        data(){
            return {
                orders:[]
            }
        },
        components:{
            topbar,
            goodscard,
        },     
        methods:{
            goBack(){
                this.$router.go(-1)
            },
            getOrders(){
                this.axios.request({
                    url:url.order,
                    method:"POST",
                    data:{
                        id:getCookie("id")
                    }
                }).then(result=>{
                    if(result.data.message){
                        this.orders=result.data.message
                    }else{
                        Toast("订单数据获取出错！")
                    }
                }).catch(error=>{
                    Toast("订单数据获取出错！")
                    console.log(error)
                })
            }           
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/css/config.scss";
    .orderhistory-con{
        margin:$topbarHeight 0 0 0;
        .empty-order{
            height: 200px;
            line-height: 200px;
            background-color: #eee;
            text-align: center;
        }        
    }

</style>
