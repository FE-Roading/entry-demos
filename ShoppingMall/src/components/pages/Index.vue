<template>
  <div>
    <div class="swipe-area">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="item in bannerPics" :key="item.image">
                <router-link :to="{name:'goods',query:{goodsId:item.goodsId}}">
                    <img v-lazy="item.image" alt="" >
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="index-category">
        <router-link v-for="(item,index) in category" :key="index" :to="{name:'categoryList',params:{cid:item.mallCategoryId}}">
            <img v-lazy="item.image">
            <span> {{item.mallCategoryName}} </span>
        </router-link>
    </div>
    <div class="ad-banner">
        <img :src="adBanner">
    </div>
    <div class="recommend-area">
        <div class="index-row-title">商品推荐</div>
        <div class="recommend-body">
            <swiper :options="swiperOption">                
                <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                    <router-link :to="{name:'goods',query:{goodsId:item.goodsId}}">
                        <div class="recommend-item">
                            <img :src="item.image" width="80%">
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price | moneyFormat}}(￥{{item.mallPrice | moneyFormat}})</div>
                        </div>
                    </router-link>
                </swiper-slide>                
            </swiper>
        </div>
    </div>
    <div class="floor-area">
        <floor :floorData="floor1" :floorTitle="floorName.floor1"></floor>
        <floor :floorData="floor2" :floorTitle="floorName.floor2"></floor>
        <floor :floorData="floor3" :floorTitle="floorName.floor3"></floor>
    </div>
    <div class="hot-area">
        <div class="index-row-title">热卖商品</div>
        <div>
            <van-list>
                <van-row gutter="20">
                    <van-col span="12" v-for="(item,index) in hotGoods" :key="index" class="hot-goods">
                        <gitem :goodsItem="item" />
                    </van-col>
                </van-row>
            </van-list>
        </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import floor from '../component/floorComponent.vue'
import gitem from '../component/goodsInfoComponent.vue'
import url from '@/api.config.js'

export default {
    name: 'App',
    components: {
        swiper,
        swiperSlide,
        floor,
        gitem     
    },
    created () {
        this.axios.request({url: url.index, method: 'GET'})
            .then(result => {
                if (result.status === 200) {
                    this.category = result.data.data.category
                    this.adBanner = result.data.data.advertesPicture
                    this.bannerPics = result.data.data.slides
                    this.adBanner = result.data.data.advertesPicture.PICTURE_ADDRESS
                    this.recommendGoods = result.data.data.recommend
                    this.floor1 = result.data.data.floor1
                    this.floor2 = result.data.data.floor2
                    this.floor3 = result.data.data.floor3
                    this.floorName = result.data.data.floorName
                    this.hotGoods = result.data.data.hotGoods
                    this.$store.state.hotGoods=this.hotGoods
                } else {
                    throw new Error({status: 400, msg: '服务器返回状态不是200'})
                }
            })
            .catch(error => {
                console.log('数据获取出错：', error)
            })
    },
    data () {
        return {
            location: require('@/assets/images/location.png'),
            bannerPics: [],
            category: [],
            adBanner: '',
            recommendGoods: '',
            login:this.$store.state.login,
            swiperOption: {
                slidesPerView: 3,
                autoplay: true,
                speed: 100,
                loop: true,
                disableOnInteraction: false,
                notNextTick: false
            },
            floor1: '',
            floor2: '',
            floor3: '',
            floorName: '',
            hotGoods: [],
            normal:true,
            search:""
        }
    }
}

</script>

<style lang="scss">
@import "swiper/dist/css/swiper.css";
    .index-logo{
        width: 26px;
        margin-top: 10px;
    }
    .index-login{
        font-size: 21px;
        display: block;
        color: #fff;
        line-height: 2.2rem;
    }
  .swipe-area{
      width: 20rem;
      clear: both;
      img{
            max-height: 100%;
            max-width: 100%;
            margin: auto;
            display: block;
      }
      overflow: hidden;
  }
  .index-category{
      background-color: #fff;
      margin:.3rem;
      margin-top:0;
      border-radius: .3rem;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      img{
          width: 80%;
      }
      >a{
          padding: .3rem;
          font-size: 12px;
          text-align: center;
          width: 20%;
      }
  }
  .ad-banner{
      width: 100%;
      height: 34px;
      img{
          width: 100%;
      }
  }
  .recommend-area{
      background-color: #fff;
      margin-top: .3rem;
      .recommend-body{
          border-bottom:1px solid #eee;
          .recommend-item{
              width:99%;
                border-right:1px solid #eee;
                font-size:12px;
                text-align: center;
          }
      }
    }
    .index-row-title{
        border-bottom: 1px solid #eee;
        padding: .2rem;
        font-size: 14px;
        color: #e5017d;
        text-align: center;
        font-weight: 700;
    }
    .hot-area{
        overflow: hidden;
        .hot-goods{
            border: 5px solid #eee;
        }
    }
</style>
