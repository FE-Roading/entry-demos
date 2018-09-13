<template>
    <div class="category-con">
        <searchbar :iclick="iClick"> 
            <van-icon name="arrow-left" @click="goBack" />
         </searchbar> 
        <div class="category">
            <ul class="content">
                <li v-for="item in catagory" :key="item.ID" :class="{'categoryActive':item.ID==categoryId}" @click="changeCatagory(item.ID)">
                    {{item.MALL_CATEGORY_NAME}}
                </li>
            </ul>
        </div>
        <div class="body">
            <keep-alive>
                <ul class="left category-list">
                    <li v-for="item in subCatagory" :key="item.ID" :class="{'subcategoryActiive':item.ID==subCategoryId}" @click="changeSubCatagory(item.ID)">
                        {{item.MALL_SUB_NAME}}
                    </li>
                </ul>
            </keep-alive>           
            <div class="right">
                <keep-alive>
                    <van-list
                        v-model="loadding"
                        :finished="finished"
                        @load="getGoodsListById"
                        :offset="offset"  
                        class="goods-list"    
                        >
                        <div class="goodlist-item" v-for="item in goodsList" :key="item.ID">
                            <gitem :goodsItem="item" ></gitem>
                        </div>                            
                    </van-list>
                </keep-alive>
            </div>
        </div>
        <navbar :active="1"></navbar>
    </div>
</template>
<script>
import url from '@/api.config.js'
import { Toast } from 'vant'
import searchbar from "../component/searchBarCompoment.vue"
import gitem from '../component/goodsInfoComponent.vue'
import navbar from "@/components/component/bottomNavbarComponent.vue"

export default{
    components: {
        searchbar,
        gitem,
        navbar
    },
    data () {
        return {
            catagory: [],
            subCatagory: [],
            categoryId: this.$route.params.cid,
            subCategoryId: this.$route.params.sid,
            loadding: false,
            finished: false,
            goodsList: [],
            page: 1,
            offset: 50,
            count: 0
        }
    },
    created () {
        this.categoryInit()
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        },
        iClick(){
            this.$router.push("search")
        },
        categoryInit () {
            this.axios.request({
                url: url.getCategory,
                method: 'GET'
            }).then(result => {
                this.catagory = result.data.message
                this.categoryId = this.categoryId || this.catagory[0].ID;
                this.getSubCatagory(this.categoryId)           
            }).catch(error => {
                Toast('获取分类列表失败')
                console.log(error)
            })
        },
        getSubCatagory (id,sid) {
            this.finished = false            
            this.page = 1
            this.axios.request({
                url: url.getSubCategory,
                method: 'POST',
                data: { categoryId: id }
            }).then(result => {
                this.subCatagory = result.data.message
                this.subCategoryId = sid?sid:this.subCatagory[0].ID
                this.getGoodsListById(this.subCategoryId)
            }).catch(error => {
                Toast('获取子类列表失败')
                console.log(error)
            })
        },
        getGoodsListById (id) {
            this.loadding = true
            this.axios.request({
                url: url.getGoodsList,
                method: 'POST',
                data: { subCategoryId: id || this.subCategoryId, page: this.page }
            }).then(result => {
                if (result.data.code === 200 && result.data.message.length > 0) {
                    if (result.data.message.length < 6) {
                        this.finished = true
                    } else {
                        this.page++
                    }
                } else {
                    this.finished = true
                }
                this.loadding = false
                this.goodsList = this.goodsList.concat(result.data.message)
            }).catch(error => {
                this.loadding = false
                this.finished = true
                Toast('获取子类列表失败')
                console.log(error)
            })
        },
        changeCatagory (id) {
            this.categoryId = id
            this.getSubCatagory(id)
        },
        changeSubCatagory (id) {
            this.subCategoryId = id
            this.finished = false
            this.page = 1
            this.getGoodsListById(id)
        }
    },
    watch:{
      '$route'(to,from){
          this.$router.go(0)
      },
      subCategoryId:function(o,n){
          this.goodsList=[]
      },
      categoryId:function(o,n){
          this.goodsList=[]
      }
    }
}
</script>
<style lang="scss" scopped>
@import "@/assets/css/config.scss";
    .category-con{
        margin-top: $topbarHeight;
    }
    .categoryActive{
        border-bottom: 2px solid #FF524D;
    }
    .subcategoryActiive{
        background-color: #EFEFEF;
    }
    .category{
        height: 2.3rem;
        .content{
            display:flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            li{
                text-align: center;
                box-sizing: border-box;
                width: 5rem;
                height: 100%;
                line-height: 2.3rem;
                font-size: 16px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                flex-shrink: 0;
            }
            &::-webkit-scrollbar{
                display: none;
            }
        }
    }
    .body{
        position: absolute;
        top:5rem;
        left: 0;
        right: 0;
        bottom: 3rem;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .left{
            width: 25%;
            height: 100%;
        }
        .right{
            width: 75%;
            height: 100%;
            background: #eee;
        }
        .goods-list, .category-list{
            height: 100%;
            overflow: auto;
        }
        .category-list{
            li {
                line-height: 2rem;
                border-bottom:1px solid #E4E7ED;
                padding:3px;
                font-size:0.8rem;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .goods-list{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .goodlist-item{
            width: 50%;
            height: 200px;
            background: #fff;
            box-sizing: border-box;
            border-top: 10px solid #eee;
            border-left: 10px solid #eee;
        }
    }

</style>
