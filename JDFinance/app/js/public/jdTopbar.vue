<template lang="html">
    <div :class="$style.topbar">
        <ul>
            <li @click="goBack"></li>
            <li>{{ title }}</li>
            <li></li>
        </ul>
    </div>
</template>

<script>
import btn from "../core/btn.vue";

export default {
  components: {
    btn
  },
  props:{
      title:{
          type:String,
          default:""
      }
  },
  methods:{
      goBack(){
          this.$router.go(-1)
      }
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.topbar {
    height: 90px;
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    ul{
            @include list;
            justify-content: space-between;
            height: 100%;
            li{
                font-size: 32px;
                color: #333;
                line-height: 90px;
            }
            li:first-child{
                width: 80px;
                background:url("@/images/back.png") no-repeat center;
            }
            li:last-child{
                width: 80px;
                background:url("@/images/more.png") no-repeat center center;
                background-size: 40px;
            }
    }

}
</style>