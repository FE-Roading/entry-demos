<template>
    <div class="search-con">
        <div :class="['search-bar', cname]" >
            <van-row>
                <van-col span="3" class="icon">
                    <van-icon name="arrow-left" @click="goBack" />
                </van-col>            
                <van-col span="16">
                <input type="text" placeholder="商品搜索内容" v-model="word" autofocus/>
                </van-col>
                <van-col span="5">
                <van-button size="small" class="search" @click="onSearchClick">搜索</van-button>
                </van-col>
            </van-row>
        </div>
        <div class="search-content">
            <ul v-if="searched" class="search-results">
                <div v-if="this.searchList.length>0">
                    <payItem v-for="item in searchList" :key="item.ID" :goodItem="item" :url="{name:'goods',query:{goodsId:item.ID,from:'search',word:word}}"/>             
                </div>
                <div v-else class="no-result">
                    暂无搜索结果，换个关键词试试！
                </div>
            </ul>
            <searchword v-if="!searched && this.$store.state.shword.length!=0" :items="this.$store.state.shword?this.$store.state.shword:[]" :title="'搜索历史'" :sevent="searhWord" :clearEvent="clearSearchHistory"></searchword>
            <searchword v-if="!searched || this.searchList.length==0" :items="hotwords" :title="'热门搜索'" :sevent="searhWord"></searchword>
        </div>
    </div>
    
</template>
<script>
import url from '@/api.config.js'
import searchword from '../component/searchWordComponent.vue'
import payItem from "../component/payItemComponent.vue"
import { mapMutations } from 'vuex';

export default{
    components:{
        searchword,
        payItem
    },
    props: {
        cname: {
            type: String,
            default: ''
        },
        search:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return {
            word:this.$route.params.word || "",
            searchList:[],
            hotwords:["矿泉水","巧克力","牛奶","可乐"],
            searched:false,
            loading:false
        }
    },
    methods: {
        ...mapMutations(["saveSearchWord"]),
        goBack () {
            this.$router.go(-1)
        },
        goodClick(id){
            if(id){
                this.$router.push({name:'goods',query:{goodsId:id}})
            }
        },
        onSearchClick(){
            this.searhWord(this.word.trim())
        },
        searhWord(word=""){
            word=word?word.trim():this.word.trim()
            if(word.length && !this.loading){
                this.loading=true
                this.searched=false
                this.axios.request({
                    url: url.goodsSearch,
                    method: 'POST',
                    data: {
                        word:word
                    }             
                }).then((result) => {
                    this.$store.commit("saveSearchWord",word)
                    if (result.data.message.length>0) {
                        this.searchList=result.data.message
                    }
                    this.searched=true
                    this.loading = false
                })
            }
        },
        clearSearchHistory(){
            this.$store.commit("clearSearchWord")
        }       
    }
}
</script>
<style lang="scss">
    $inputColor:#ffffff;
    .search-con{
        overflow: hidden;
        .search-bar{
            position: fixed;
            width:100%;
            z-index: 9;
            height: 2.2rem;
            line-height: 2.2rem;
            background-color: #e5017d;
            color: #fff;
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
        .search-content{
            margin-top: 2.2rem;
            overflow: hidden;
            padding-top: 10px;
        }
        .search-results{
            background: #eee;
            .no-result{
                background: #fff;
                height: 100px;
                line-height: 100px;
                text-align: center;
            }
        }
        
    }
</style>
