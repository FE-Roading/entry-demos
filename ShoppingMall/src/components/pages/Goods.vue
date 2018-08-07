<template>
    <div class="goods-con" id="scroller-box" @onscroll="scroll(event)">
         <topbar title="商品详情" class="goods-topbar"></topbar>
        <div class="goods-info">
            <img :src="goodsItem.IMAGE1" alt="">
            <div>{{ goodsItem.NAME }}</div>
            <div class="price">
                <p>现价: <span>{{ goodsItem.PRESENT_PRICE | moneyFormat }}</span></p>
                <p>原价: <span>{{ goodsItem.ORI_PRICE | moneyFormat }}</span></p>
                <p>库存: <span>{{ goodsItem.AMOUNT }}</span></p>
            </div>
        </div>
        <div class="goods-content">
            <van-tabs swipeable sticky>
                <van-tab title="商品详情">
                <div class="detail" v-html="goodsItem.DETAIL">
                </div>
            </van-tab>
                <van-tab title="评价">
                    <gcomment :gid="goodsId"></gcomment>
                </van-tab>
            </van-tabs>
        </div>        
        <scrollbar></scrollbar>
        <div class="goods-navbar">
            <van-row class="goods-row">
                <van-col span="8">
                    <van-tabbar v-model="active" :fixed="fixed">
                        <van-tabbar-item icon="wap-home" to="/" class="gnarb-btn">首页</van-tabbar-item>
                        <van-tabbar-item icon="cart" :info="this.goodsSelectedQty" to="/car" class="gnarb-btn">购物车</van-tabbar-item>
                    </van-tabbar>
                </van-col>
                <van-col span="8">
                    <div><van-button size="large" type="primary" class="btn" @click="addToCar(goodsItem)">加入购物车</van-button></div>
                </van-col>
                <van-col span="8">
                    <div><van-button size="large" type="danger" class="btn">立即购买</van-button></div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
import url from '@/api.config.js'
import { Toast } from 'vant'
import scrollbar from '../component/scrollBarCompment.vue'
import topbar from "../component/topbarComponent.vue"
import gcomment from "../component/goodsCommentsComponent.vue"

import { mapMutations, mapGetters } from 'vuex'
export default{    
    components:{
        scrollbar,
        topbar,
        gcomment
    },
    data () {
        return {
            goodsId: '',
            goodsItem: {},
            active: 0,
            fixed: false
        }
    },
    created () {
        this.goodsId = this.$route.query.goodsId
        this.getInfo()
    },
    computed:{
        ...mapGetters(['goodsSelectedQty'])
    },
    methods: {
        scrollToTop(event){
            window.scrollTo(0,0)
        },
        goBack () {
            this.$router.go(-1)
        },
        getInfo () {
            this.axios.request({
                url: url.getGoodsInfo,
                method: 'POST',
                data: {
                    goodsId: this.goodsId
                }
            }).then(result => {
                this.goodsItem = result.data.message
            }).catch(error => {
                Toast('服务器错误，数据取得失败')
                console.log(error)
            })
        },
        ...mapMutations(['addToCar'])
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/css/config.scss";
    .goods-con{
        margin:$topbarHeight 0 $navbarHeight 0;
    }
    .goods-topbar{
        z-index: 10;
    }
    .goods-info{
        >div{
            box-sizing: border-box;
            width: 90%;
            margin: 0 auto;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }    
        img{
            width: 100%;
        }
        .price{            
            font-size: 14px;
            line-height: 20px;
            display: flex;
            flex-direction: row;
            p{
                width: 33.33333%;
                &:nth-child(1){
                    span{
                        font-weight: 700;
                    }
                }
                &:nth-child(2){
                    text-decoration: line-through;
                }
            }            
        }
    }
    .goods-content{
        .detail{
            font-size: 0;
            letter-spacing: -5px;
            img{
                display: block;
                width: 100%;
            }
        }
    }
    .purchase-con{
        background-color: #fff;
        display: flex;
        >div{
            flex: 1;
            .btn{
                border-radius: 0;
            }
        }
    }
    .goods-navbar{
        height: 3rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #eee;
        color: #fff;
        font-size: 0;
        z-index: 100;
        .goods-row{
            height: 100%;
            div{
                height: 100%;
            }
        }
        .btn{
            border-radius: 0;
            border: 0;
            height: 100%;
        }
    }
</style>
