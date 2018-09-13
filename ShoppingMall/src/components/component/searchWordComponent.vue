<template>
  <div class="search-option">
    <div class="search-head">
      <em v-text="title"></em><span v-show="clearEvent" @click="onBtnClick">清除</span>
    </div>
    <ul class="search-item">
        <li v-for="item in this.items" :key="item" @click="onClick(item)">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      sevent:{
        type:Function
      },
      title:{
        type:String
      },
      items:{
        type:Array,
        default:[]
      },
      clearEvent:{
        type:Function,
        default:false
      }
    },
    methods:{
      onClick(word){
        this.sevent?this.sevent(word):""
      },
      onBtnClick(){
        this.clearEvent?this.clearEvent():""
      }
    }
  }
</script>
<style lang="scss" scopped>
  .search-option{
    margin: 10px 20px;
    overflow: hidden;
    .search-head{
      font-size: 16px;
      margin-bottom: 10px;
      &::after{
        content:"";
        display:block;
        clear: both;
      }
      em{
        font-weight: 700;
        float: left;
        font-style: normal;
      }
      span{
        float: right;
        margin-right: 10px;
        background: #eee;
        padding: 2px 10px;
        font-size: 14px;
        border-radius: 5px;
      }
    }
    .search-item{
      li{
        float: left;
        font-size: 14px;
        padding: 5px 10px;
        background: #eee;
        margin-right: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
      }
    }

  }
</style>

