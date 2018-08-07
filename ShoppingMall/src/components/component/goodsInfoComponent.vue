<template>
    <div class="goods-info" @click="goToGoodsPage($event)" :key="formatGood.goodsId">
        <div class="image" >
            <img :src="error?defaultImage:formatGood.image" @error="imageErrorAction">
        </div>
        <div class="name" v-text="formatGood.name"></div>
        <div class="price" v-cloak>
             <span>现价:￥{{formatGood.mallPrice | moneyFormat }}</span>
            <span>￥{{formatGood.price | moneyFormat }}</span>
        </div>
    </div>
</template>
<script>
export default{
    props: ['goodsItem'],
    data () {
        return {
            error: 0,
            defaultImage: require('@/assets/images/errorimg.png')
        }
    },
    methods: {
        goToGoodsPage (event) {
            if (this.error === 0) {
                this.$router.push({name: 'goods', query: {goodsId: this.formatGood.goodsId}})
            }
        },
        imageErrorAction () {
            this.error = 1
        }
    },
    computed: {
        formatGood () {
            let item = {}
            item.image = this.goodsItem.image ? this.goodsItem.image : this.goodsItem.IMAGE1
            item.name = this.goodsItem.name ? this.goodsItem.name : this.goodsItem.NAME
            item.price = this.goodsItem.price ? this.goodsItem.price : this.goodsItem.ORI_PRICE
            item.mallPrice = this.goodsItem.mallPrice ? this.goodsItem.mallPrice : this.goodsItem.PRESENT_PRICE
            item.goodsId = this.goodsItem.goodsId ? this.goodsItem.goodsId : this.goodsItem.ID
            return item
        }
    }
}
</script>

<style lang="scss" scoped>
    .goods-info{
        width: 100%;
        .name{
            padding: 0 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
        }
        img{
            width: 100%;
        }
        .price{
            padding: 5px 4px;             
            display: flex;
            flex-direction: row;            
            justify-content: space-between;
            flex-wrap: nowrap;
            overflow:hidden;
            white-space: nowrap;
            span{
                color: red;
                font-size: 14px;
            }
            span:last-of-type{
                text-decoration: line-through;
                color: #000;
                font-size: 8px;
            }
        }
    }

</style>
