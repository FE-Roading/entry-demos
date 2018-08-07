<template>
    <div class="goods-item">
        <van-cell-swipe :right-width="65" :left-width="65" :on-close="this.goodsDel">
            <van-button type="danger" size="small" slot="left" class="del-btn">删除</van-button>
            <van-row >
            <van-col span="4" :class="['check',classCheckbox]">
                <van-checkbox v-model="checked" class="btn"></van-checkbox>
            </van-col>
            <van-col span="20" :class="['goods',classGoods]">                
                <img :src="goodItem.IMAGE1" alt="">
                <div class="detail">
                    <div class="title">{{goodItem.NAME}}</div>
                    <div class="price">价格：¥ <em>{{ goodItem.PRESENT_PRICE | moneyFormat }}</em></div>
                    <van-stepper class="qty-con" v-model="ammount" :step="step" :min="min" :max="goodItem.AMOUNT"  integer/>
                </div>
            </van-col>            
            </van-row>
            <van-button type="danger" size="small" slot="right" class="del-btn">删除</van-button>
        </van-cell-swipe>
    </div>    
</template>
<script>
import { mapMutations } from "vuex"
import {Dialog} from "vant"

export default {
    props:{
        goodItem:Object,
        checkAll:{
            type:Boolean,
            default:false
        },
        classCheckbox:{
            type:String,
            default:''
        },
        classGoods:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            step:1,
            min:1,
            max:3,
            ammount:this.goodItem.qty
        }
    },
    methods:{
        ...mapMutations(['goodsChange','goodsDelete','goodsSelect']),
        goodsDel(clickPosition, instance){
            switch (clickPosition) {                
                case 'cell':
                case 'outside':
                    instance.close();
                    break;
                case 'left':
                case 'right':
                    Dialog.confirm({
                        message: '确定删除吗？'
                    }).then(() => {
                        instance.close();
                        this.goodsDelete(this.goodItem.ID)
                    })
                    break;
            }        
        }
    },
    computed:{
        checked:{
            set(value){
                this.goodsSelect({id:this.goodItem.ID})
            },
            get(){
                return this.checkAll || this.$store.state.carList[this.goodItem.ID].selected
            }
        }
    },
    watch:{
        ammount(newValue,oldValue){
            if(newValue<this.goodItem.AMOUNT){
                this.goodsChange({id:this.goodItem.ID,num:newValue})
            }else{
                return oldValue
            }
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
    .goods-item{
        margin-bottom: 10px;
        height: 110px;
        position: relative;
        background: #fff;
        .check{
            position: relative;
            .btn{
                text-align: center;
                position: relative;
                top: 40px;
            }
        }
        .del-btn{
            position: relative;
            transform: translateY(-50%);
            top: 50%;
        }
        .goods{
            @extend .list;
            padding: 5px 10px;
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
    }
</style>
