<template>
    <div class="gcomments">
        <ul>
            <li v-for="(item,index) in comments" :key="index">
                <div class="title">
                    <span>{{item.userName}}</span>
                    <star class="star" :rate="item.rate"></star>
                    <span>{{item.createAt | dateFormat}}</span>
                </div>
                <div class="gc-body" v-text="item.content">
                </div>
            </li>          
        </ul>
        <van-loading type="spinner" color="black" v-show="loading" class="loading" />
    </div>
</template>
<script>
    import star from "../component/starComponent.vue"
    import url from "@/api.config.js"
    import { Toast } from 'vant';

    export default {
        props:['gid'],
        created(){
            let id=this.gid || "449666157ac2438991810e0ae8947cad"
            this.getComents(id)
        },
        components:{
            star
        },
        data(){
            return {
                comments:[],
                loading:false,
            }
        },
        methods:{
            getComents(gid){
                this.loading=true
                this.axios.post(url.comments,{gid:this.gid})
                    .then(result=>{
                        if(result.data.message.length>0){
                            this.comments=result.data.message
                        }
                        this.loading=false
                    }).catch(error=>{
                        Toast("获取评论列表出错!")
                        console.log(error)
                        this.loading=false
                    })
            }
        },
        filters:{
            dateFormat(str){
                return str.split("T")[0]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .gcomments{
        background-color: #eee;
        margin-bottom: 3rem;
        padding-top: 10px;
        min-height: 200px;
        position: relative;
        li{
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #eee;
            background-color: #fff;
        }
    }
    .title{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding-bottom: 6px;
        >span{
            width: 5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:last-child{
                text-align: right;
                width: 6rem;
                font-size: 14px;
            }
        }
    }
    .gc-body{
        word-break: break-all;
        text-indent: 2em;
    }
    .loading{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
    }
</style>
