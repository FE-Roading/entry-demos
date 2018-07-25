<template>
    <div :class="$style.sec3">
        <div :class="$style.lctj"> 
            <p :class="$style.title">13.99<span :class="$style.per">%</span></p>
            <p :class="$style.desc">近一年涨跌幅</p>
            <p :class="$style.btn">立即购买</p>
        </div>
        <div :class="$style.slider">
            <swiper :options="options">
                <swiper-slide :class="$style.sitem" v-for="item in items" :key="item.src">
                    <a href="javascript:;">
                        <img :src="item.src" alt="">
                        <p>{{item.title}}</p>    
                    </a>
                </swiper-slide>
            </swiper>
        </div>       
    </div>
    
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "jSlider",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      items: [
        {
          title: "4.2折买还赠 专业级进攻型羽毛球拍",
          href: "spe",
          src: require("../../images/5b557000Nd564d381.jpg")
        },
        {
          title: "5.7折首发 极致音效 网易云音响",
          href: "spe",
          src: require("../../images/5b557011Na20d7dc7.jpg")
        },
        {
          title: "立减140元 商务出行必备熨衣小神器",
          href: "spe",
          src: require("../../images/5b557024Nfc9b43db.jpg")
        }
      ],
      options: {
        direction: "vertical",
        autoplay: true,
        loop: true,
        allowTouchMove:false,
        spaceBetween: 30,
      }
    };
  }
};
</script>
<style lang="scss" module>
@import "../../css/element.scss";

.sec3 {
  margin-top: 0;
  background-color: #fff;
  padding: 50px 30px;

  &::after{
    content: "";
    display:block;
    clear: both;
  }

  .lctj {
    width: 36%;
    box-sizing: border-box;
    height: 200px;
    background:url("../../images/lctj-bg.png") 50% no-repeat;
    background-size: cover;
    float: left;
    color: #fff;
    font-size: 24px;
    padding-left: 24px;
    padding-right: 38px;
    .title{
        margin-top: 24px;
        margin-bottom: 20px;
        font-size: 50px;
        line-height: 1.15;
        font-weight: 400;
        font-family: "DIN-Bold";
    }
    .per{
        font-size: 24px;
    }
    .desc{
        padding-bottom: 12px;
        margin-bottom: 12px;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .btn{
        position: relative;
    }
    .btn::after{
        content: "";
        display: block;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-left: 12px solid #ffffff;
        position: absolute;
        right: 0;
        top: 0;
    }
  }

  .slider {
    box-sizing: border-box;
    padding-left: 20px;
    width: 64%;
    height: 200px;
    overflow: hidden;
    float: right;
    .sitem {
      background: url("../../images/wrap-bg.png") 50% no-repeat;
      background-size: cover;
      height: 200px;
      img {
        width: 160px;
        height: 160px;
        padding: 20px;
        float: left;
      }
      p {
        box-sizing: border-box;
        font-size: 24px;
        margin-top: 24px;
        line-height: 1;
        height: 2em;
        width: 42%;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
      }
    }
  }
}
</style>
