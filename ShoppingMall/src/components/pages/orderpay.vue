<template>
    <div :class="$style.orderpayCon">
        <topbar title="确认订单"></topbar>
        <h3>收货信息：</h3>
        <div :class="$style.address" @click="addressPick">            
            <h4>{{address['name']}} - {{address['tel']}}</h4>
            <p>{{ address.address }}</p>
            <van-icon name="arrow" :class="$style.pickIcon"/>
        </div>
        <div :class="$style.goodList">
            <h3>订单详情：</h3>
             <goodscard :goodItem="item" :classCheckbox="$style.poCheck" :classGoods="$style.poGoods" v-for="item in getSelectdGoods" :key="item.ID"></goodscard>
        </div>        
        <div :class="$style.orderInfo">
            <div :class="$style.cost">订单金额：<em>{{ goodsSelectedPrice | moneyFormat }}</em>元</div>
            <van-button type="default" size="large" :class="$style.payway" plain  @click="orderPay(0)"  :loading="loading">货到付款</van-button>
            <van-button type="primary" size="large" @click="orderPay(1)" :loading="loading">在线支付</van-button>
        </div>
    </div>
</template>
<script>
    import topbar from "../component/topbarComponent.vue"
    import goodscard from "../component/goodsCardComponent.vue"
    import {mapGetters,mapMutations,mapState} from "vuex"
    import { Toast, Dialog } from 'vant';
    import url from "@/api.config.js"

    export default{
        data(){
            return {
                address:{},
                loading:false,
                payed:false
            }
        },   
        created(){
            if(!(this.login && this.token && this.id)){
                console.log("跳转至登陆页面！")
                this.$router.push({name:'login',query:{redirect:"/orderpay"}})
            }
            if(!this.goodsSelectedQty){
                Toast("您没有选中要支付的订单，正在返回！")
                this.goBack()
            }
            if(this.$route.params.address){
                this.address=this.$route.params.address
            }else{
                this.axios.request({
                    url:url.address,
                    method:"POST",
                    data:{id:this.id}
                }).then((result)=>{
                    if(!result.data.message){
                        Toast("您您先添加收货地址!")
                        this.$router.push({name:"addressEdit",params:{back:true}})
                    }else{
                        let item=result.data.message
                        this.address={id:item._id,name:item.name,tel:item.tel,address:item.province+item.city+item.county+item.address_detail}
                    }
                    
                })
            }
        },
        components:{
            topbar,
            goodscard
        },
        methods:{
            orderPay(pay){
                Dialog.confirm({
                    title: '订单支付',
                    message: '合集费用为：'+this.goodsSelectedPrice+'元，确认完成订单?'
                }).then(() => {
                    this.loading=true
                    this.axios.request({
                        url:url.orderPay,
                        method:"POST",
                        data:{
                            id:this.id,
                            total:this.goodsSelectedPrice,
                            goods:this.getSelectdGoods,
                            address:this.address,
                            pay:pay
                        }
                    }).then((result)=>{
                        if(result.data.message===true){
                            Toast("订单已完成，正跳转至历史订单页面")
                            this.payed=true
                            this.goodsSelectedDel()
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
            ...mapMutations(["goodsSelectedDel"])
        },
        computed:{
            ...mapGetters(['goodsSelectedPrice','goodsSelectedQty','getSelectdGoods','get']),
            ...mapState(['token','login','id','carList'])
        },
        watch:{
            goodsSelectedQty(newValue){
                if(!newValue && !this.payed){
                    Toast("订单已全部删除，正在返回上级页面！")
                    this.goBack()
                }
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
            padding-top: 1px;
            background-color: #fff;
            position: relative;
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
        .goodList{            
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
