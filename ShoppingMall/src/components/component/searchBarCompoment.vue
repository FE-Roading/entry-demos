<template>
    <div :class="$style.searchbar">
        <van-row>
            <van-col span="3" :class="$style.icon">
                <slot  />
            </van-col>            
            <van-col span="16">
            <input type="text" placeholder="商品搜索内容" @click="onInputClick" />
            </van-col>
            <van-col span="5">
            <van-button size="small" :class="$style.search" @click="onSearchClick">搜索</van-button>
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
        },
        search:{
            type:Function
        },
        iclick:{
            type:Function
        }
    },
    data(){
        return {
            word:""
        }
    },
    methods: {
        onSearchClick(){
            if(this.word.trim()){
                this.search?this.search(this.word.trim()):""
            }            
        },
        onInputClick(){
            this.iclick?this.iclick():""
        }      
    }
}
</script>
<style lang="scss" module>
    $inputColor:#ffffff;
    .searchbar{
        height: 2.2rem;
        line-height: 2.2rem;
        background-color: #e5017d;
        color: #fff;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        .icon{
            height: 2.2rem;
            line-height: 2.2rem;
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
