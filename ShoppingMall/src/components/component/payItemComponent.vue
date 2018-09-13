<template>
    <div class="goods-item" @click="onClick">
        <img :src="goodItem.IMAGE1" alt="" @error="onError">
        <div class="detail">
            <div class="title">{{goodItem.NAME}}</div>
            <div class="price">价格：¥ <em>{{ goodItem.PRESENT_PRICE | moneyFormat }}</em></div>
            <div v-if="goodItem.qty">数量： {{ goodItem.qty }}</div>
        </div>         
    </div>    
</template>
<script>
import { mapMutations } from "vuex"
import {Dialog} from "vant"

export default {
    props:{
        goodItem:Object,
        url:Object
    },
    data(){
        return {
            step:1,
            min:1,
            max:3,
            ammount:this.goodItem.qty,
            error:false
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
        },
        onError(){
            this.error=true
        },
        onClick(){
            if (!this.error){
                this.url?this.$router.push(this.url):""
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
                vertical-align: middle;
            }
            .price{
                font-size: 14px;
                padding: 4px 0;
                em{
                    font-weight: 700;
                }
            }
        }   
    }
</style>
