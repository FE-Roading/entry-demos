<template>
    <div class="shoppingcar-con">
        <topbar title="购物车"></topbar>  
        <div class="empty-list" v-if="getCarStatus">
            <img src="@/assets/images/5a93c51cN3bb5e37b.png" alt="">
            <p v-text="login?emptyTip2:emptyTip1"></p>
            <van-button type="primary" plain @click="toLogin" v-show="!login">登陆</van-button>
        </div>   
        <div class="goods-list" v-else>
            <goodscard :good-item="item" v-for="item in getGoods" :key="item.ID" :checkAll="checkAllItems"></goodscard>
        </div>             
        <div class="recommend">
            <div class="remd-title"><span>您可能感兴趣的产品</span></div>
            <van-list>
                <van-row gutter="20">
                    <van-col span="12" v-for="(item,index) in hotGoods" :key="index" class="hot-goods">
                        <gitem :goodsItem="item" />
                    </van-col>
                </van-row>
            </van-list>
        </div>
        <div class="car-navbar">
            <div class="little-box checkbox-con">
                <van-checkbox v-model="checkAllItems" class="check-btn"></van-checkbox>
                <p>全选</p>
            </div>
            <div class="cal-box">
                <p>数量：<em> {{ goodsSelectedQty?goodsSelectedQty:0 }} </em><sub>件</sub></p>
                <p>总计：<em> {{ goodsSelectedPrice | moneyFormat }} </em><sub>元</sub></p>
            </div>
            <div  class="big-box">
                <van-button size="large" type="danger" class="btn" :disabled="goodsSelectedQty===''" @click="pay">去结算</van-button>
            </div>
        </div>
    </div>
</template>
<script>
    import topbar from "../component/topbarComponent.vue"
    import goodscard from "../component/goodsCardComponent.vue"
    import gitem from '../component/goodsInfoComponent.vue'
    import {isLogin} from '@/utils/index.js'
    import {mapGetters,mapMutations,mapState} from "vuex"
    import url from "@/api.config.js"

    export default{
        data(){
            return {
                empty:false,               
                items:[],
                hotGoods:this.$store.state.hotGoods,
                emptyTip1:"登录后可同步购物车中商品",
                emptyTip2:"购物车空无一物，马上添加吧"
            }
        },
        components:{
            topbar,
            goodscard,
            gitem
        },
        created(){
            if(this.hotGoods.length==0){
                this.getRecomentGoods()
            }
        }, 
        methods:{
            ...mapMutations(['checkAllGoods']),
            goBack(){
                this.$router.go(-1)
            },
            toLogin(){
                this.$router.push("/login")
            },
            pay(){
                let goods=this.getSelectdGoods                
                goods=goods.map(item=>{
                    return {
                        id:item.ID,
                        qty:item.qty
                    }
                })
                this.$router.push({name:"orderPay",params:{goods:goods,from:"car"}})
            },
            getRecomentGoods(){
                this.axios.request({url: url.index, method: 'GET'})
                    .then(result => {
                        if (result.status === 200) {
                            this.hotGoods = result.data.data.hotGoods
                            this.$store.state.hotGoods=this.hotGoods
                        } else {
                            throw new Error({status: 400, msg: '服务器返回状态不是200'})
                        }
                    })
                    .catch(error => {
                        console.log('数据获取出错：', error)
                    })
            }
        },
        computed:{
            ...mapGetters(['goodsSelectedPrice','goodsSelectedQty','getCarStatus','getGoods','getCheckStatus',"getSelectdGoods"]),
            ...mapState(['token','login']),
            checkAllItems:{
                get(){
                    return this.getCheckStatus
                },
                set(value){
                    this.checkAllGoods(value)
                }     
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/css/config.scss";
    .shoppingcar-con{
        margin:$topbarHeight 0 $navbarHeight 0;
        border-top: 10px solid #eee;
        .goods-list{
            min-height: 300px;
            background-color: #eee;
            padding-bottom: 1px;
        }
        .empty-list{
            height: 300px;
            text-align: center;
            background-color: #eee;
        }
        .recommend{
            overflow: hidden;
            .remd-title{
                height: 50px;                
                text-align: center;
                position: relative;
                span{
                    line-height: 50px;
                    position: relative;
                    z-index: 2;
                    padding:0 20px;
                   background-color: #fff;
                }
                &::after{
                    content: "";
                    display: block;
                    height: 2px;                    
                    width: 100%;
                    background: #eee;
                    position: absolute;
                    top: 24px;
                    left: 0;
                }
            }
            .hot-goods{
                border: 5px solid #eee;
            }
        }
        .car-navbar{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
            height: $navbarHeight;
            background-color: $navbarActivebgColor;
            box-sizing: border-box;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;    
            justify-content: space-between;        
            p{
                margin: 0;
                font-size: 16px;
                line-height: 16px;
                &:last-child{
                    padding-top: 4px;
                }
                em{
                    font-style: normal;
                    font-weight: 700;
                }
            }
            .checkbox-con p{
                font-size: 10px;
                padding-top: 0;
            }
            >div{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:first-child{
                    font-size: 12px;
                }
            }
            .big-box{
                width: 33.3333333%;
            }
            .little-box{
                width: 16.6666666%;  
                text-align: center;              
            }
            .cal-box{
                min-width: 33.3333333%;
                max-width: 50%;
                sub{
                    vertical-align: text-bottom;
                    font-size: xx-small;
                }
            }
        }
    }

</style>
