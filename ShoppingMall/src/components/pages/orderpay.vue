<template>
    <div :class="$style.orderpayCon">
        <topbar title="确认订单"></topbar>
        <h3>收货信息：</h3>
        <div :class="$style.address" @click="addressPick" v-if="this.address">            
            <h4>{{address['name']}} - {{address['tel']}}</h4>
            <p>{{ address.address }}</p>
            <van-icon name="arrow" :class="$style.pickIcon"/>
        </div>
        <div :class="$style.address" v-else @click="addressAdd">
            <van-icon name="add2" />
            <span :class="$style.addressadd">添加收货地址</span>
            <van-icon name="arrow" :class="$style.pickIcon"/>
        </div>        
        <h3>订单详情：</h3>
        <div :class="$style.payinggoods">            
            <payItem :goodItem="item" :classCheckbox="$style.poCheck" :classGoods="$style.poGoods" v-for="item in goodsList" :key="item.ID"></payItem>
        </div>        
        <div :class="$style.orderInfo">
            <div :class="$style.cost">订单金额：<em>{{ goodsPrice | moneyFormat }}</em>元</div>
            <van-button type="default" size="large" :class="$style.payway" plain  @click="orderPay(0)"  :loading="loading">货到付款</van-button>
            <van-button type="primary" size="large" @click="orderPay(1)" :loading="loading">在线支付</van-button>
        </div>
    </div>
</template>
<script>
    import topbar from "../component/topbarComponent.vue"
    import payItem from "../component/payItemComponent.vue"
    import {mapGetters,mapMutations,mapState} from "vuex"
    import { Toast, Dialog } from 'vant';
    import url from "@/api.config.js"

    export default{
        data(){
            return {
                address:this.$route.params.address,
                loading:false,
                payed:false,
                goodsList:[],
                payingList:this.$route.params.goods || [],
                source:this.$route.params.from
            }
        },   
        created(){
            var that=this
            if(!(this.login && this.token && this.id)){
                console.log("跳转至登陆页面！")
                this.$router.push({name:'login',query:{redirect:"/orderpay"}})
            }
            if(!(this.payingList)){
                Toast("您没有选中要支付的订单，正在返回！")
                this.goBack()
            }
            this.axios.request({
                url:url.address,
                method:"POST",
                data:{id:this.id}
            }).then((result)=>{
                if(result.data.message){
                    let item=result.data.message
                    this.address={id:item._id,name:item.name,tel:item.tel,address:item.province+item.city+item.county+item.address_detail}
                }
            })
            let goods=this.payingList.map(item=>{
                return item.id
            })
            this.axios.request({
                url:url.goodsList,
                method:"POST",
                data:{goods}
            }).then((result)=>{
                if(result.data.message.length>0){
                    let items=result.data.message
                    let temp=[]
                    items.forEach(item=>{
                        this.payingList.forEach(good=>{
                            if(item.ID==good.id){
                                item.qty=good.qty
                                temp.push(item)
                                return item
                            }
                        })
                    })
                    this.goodsList=temp
                }else{
                    Toast("未购买任何商品，正在返回！")
                    that.goBack()          
                }
            }).catch((error)=>{
                Toast("商品信息获取出错！")
                console.log(error)
                that.goBack()
            })
        
        },
        components:{
            topbar,
            payItem
        },
        methods:{
            orderPay(pay){
                if(!this.address){
                    Toast("请添加收货地址！")
                }
                Dialog.confirm({
                    title: '订单支付',
                    message: '合集费用为：'+this.goodsPrice+'元，确认完成订单?'
                }).then(() => {
                    this.loading=true
                    this.axios.request({
                        url:url.orderPay,
                        method:"POST",
                        data:{
                            id:this.id,
                            total:this.goodsPrice,
                            goods:this.goodsList,
                            address:this.address,
                            pay:pay
                        }
                    }).then((result)=>{
                        if(result.data.message===true){
                            if(this.$route.params.from=="car"){
                                this.goodsList.forEach(item=>{
                                    this.goodsDelete(item.ID)
                                })   
                            }                         
                            Toast("订单已完成，正跳转至历史订单页面")
                            this.payed=true                            
                            this.$router.push("/order")
                        }else{
                            Toast("订单出现错误")
                            console.log(result.data.message)
                        }
                        this.loading=false
                    }).catch(error=>{
                        this.loading=false   
                        Toast("订单出现错误")
                        console.log(error)
                    }) 
                                   
                });
            },
            goBack(){
                this.$router.go(-1)
            },
            addressPick(){
                this.$router.push({name:"addressList",params:{back:true}})
            },
            addressAdd(){
                this.$router.push({name:"addressEdit",params:{goods:this.goodsList,url:"orderPay"}})
            },
            ...mapMutations(["goodsDelete"])
        },
        computed:{
            ...mapState(['token','login','id','carList']),
            goodsPrice(){
                let money=0
                this.goodsList.forEach((item)=>{
                    money=money+ item.qty*item.PRESENT_PRICE
                })
                return money
            }
        }
    }
</script>
<style lang="scss" module>
    @import "@/assets/css/config.scss";
    .orderpayCon{
        margin-top:$topbarHeight;
        min-height: 1vh;
        background-color: #eee;
        padding: 0 0.5rem;
        h4{
            margin: 0;
            padding-bottom: 6px;
        }
        h3{
            margin: 0;
            padding: 10px 0;
        }
        .address{
            padding: 10px;
            background: #fff;
            vertical-align: text-top;
            font-size: 18px;
            line-height: 18px;
            position: relative;
            i{
                padding-left: 20px;
            }
            .addressadd{
                vertical-align: text-top;
                padding-left: 10px;
            }
            p{
                line-height: 20px;
                overflow:hidden; 
                text-overflow:ellipsis;
                display:-webkit-box; 
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2; 
                word-break: break-all;
                margin: 0 0 6px 0;
            }
            .pickIcon{
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                width: 30px;
                cursor: pointer;
                &::before{
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }
        }       
        .payinggoods{            
            padding-bottom: 10px;            
            .poCheck{
                display: none;
            }
            .poGoods{
                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        .orderInfo{
            .cost{
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 20px;
                em{
                    padding-left: 20px;
                    color: red;
                    font-style: normal;
                }               
            }
            .payway{
                margin-bottom: 20px!important;
            }
        }
    }
</style>
