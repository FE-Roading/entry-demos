<template>
    <div class="history-con">
        <div v-for="(item,index) in goods" :key="index">
            <div class="goods-title">
                <span>{{ item.CREATEAT | date }}</span>
                <span>{{ item.PAY==1?'货到付款':'在线支付' }}</span>
            </div>
            <div class="goods-item" v-for="gItem in item.GOODS" :key="gItem._id" @click="goToGoodsPage(gItem.GID)">             
                <img :src="error?defaultImage:gItem.IMAGE1" @error="imageErrorAction">
                <div class="detail">
                    <div class="title">{{gItem.NAME}}</div>
                    <div class="price">价格：¥ <em>{{ gItem.PRESENT_PRICE | moneyFormat }}</em> x {{ gItem.SALES_COUNT }}</div>
                </div>
            </div>
            <div class="order-detail">
                一共有{{item.GOODS.length}}种商品，共支付{{item.SUM_PRICE | moneyFormat}}元
            </div>
            <div class="goods-op">
                <van-button type="default" plain class="btn" @click="orderDel(item._id)">删除订单</van-button>
                <van-button type="default" plain class="btn" v-if="!item.COMMENT" @click="comment(item)">评论</van-button>
            </div>
        </div>   
    </div>     
</template>
<script>
import { Toast } from 'vant'
import url from "@/api.config.js"

export default {
    props:['goods'],
    data(){
        return {
            error:false,
            defaultImage:require('@/assets/images/errorimg.png')
        }
    },
    methods:{
        orderDel(oid){
            this.axios.post(url.orderDel,{
                    id:this.$store.state.id,
                    oid:oid
            }).then(result=>{
                if(result.data.message===true){
                   let tmp=this.goods.filter((ele)=>{
                        return ele._id!=oid
                    })
                    this.goods=tmp
                }else{
                    Toast("删除订单失败！")
                }
            }).catch(error=>{
                Toast("删除订单出错！")
                console.log(error)
            })
        },
        goToGoodsPage(gID){
            this.$router.push({name: 'goods', query: {goodsId: gID}})
        },
        imageErrorAction(){
            this.error=true
        },
        comment(item){
            this.$router.push({
                name:"rate",
                params:{
                    order:item
                }
            })
        }
    },
    filters:{
        date(d){
            return d.split("T")[0]
        }
    }
}
</script>
<style lang="scss" scoped>
    .list{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;            
    }
    .hidden{
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .history-con{
        background: #eee;
        >div{
            margin-bottom: 20px;
            background-color: #fff;
            >div{
                padding: 0 10px;
            }
        }   
        .goods-title{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            span{
                width: 50%;
                line-height: 40px;
                height: 40px;
                @extend .hidden;
                &:last-of-type{
                    text-align: right;
                }
            }
        }
        .goods-item{
            margin-bottom: 10px;
            background: #eee;
            height: 110px;
            position: relative;            
            @extend .list;
            img{
                width: 90px;
                height: 90px;
                margin-right: 10px;                
            }
            .detail{
                flex: 1;
                line-height: 20px;
                font-size: 16px;
                .title{
                    height: 40px;
                    @extend .hidden;
                }
                .price{
                    font-size: 14px;
                    padding: 4px 0;
                    em{
                        font-weight: 700;
                    }
                }
                .qty-con{
                    text-align: center;
                }
            }            
        }
        .order-detail{
            text-align: right;
            font-size: 14px;
            font-weight: 700;
        }
        .goods-op{
            padding-top: 10px;
            padding-bottom: 10px;
            &::after{
                display: block;
                content: "";
                clear: both;
            }
            .btn{
                // height: 40px;
                border-radius: 20px;
                margin-right: 10px;
                float: right;
            }
        }
    }
    
</style>
