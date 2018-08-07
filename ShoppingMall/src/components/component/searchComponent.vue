<template>
    <div :class="['search-bar', cname]" >
        <van-row>
            <van-col span="3" class="icon">
                <slot  />
            </van-col>            
            <van-col span="16">
            <input type="text" placeholder="查找" />
            </van-col>
            <van-col span="5">
            <van-button size="small" class="search">查找</van-button>
            </van-col>
        </van-row>
    </div>
</template>
<script>

export default{
    props: {
        cname: {
            type: String,
            default: ''
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scopped>
    $inputColor:#ffffff;
    .search-bar{
        height: 2.2em;
        line-height: 2.2em;
        background-color: #e5017d;
        color: #fff;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        .icon{
            height: 2.2em;
            line-height: 2.2em;
            font-size: 20px;
            text-align: center;
        }
        input{
            width:100%;
            height: 1.3rem;
            border-top:0px;
            border-left:0px;
            border-right:0px;
            border-bottom: 1px solid 1px !important ;
            background-color: #e5017d;
            color:$inputColor;
        }
        input::-webkit-input-placeholder{
            color:$inputColor;
        }
        input::-moz-placeholder{
            color:$inputColor;
        }
        input:-moz-placeholder{
            color:$inputColor;
        }
        input:-ms-input-placeholder{
            color:$inputColor;
        }
  }
</style>
