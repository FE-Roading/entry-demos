<template>
    <div class="address-edit">
        <topbar title="地址编辑页"></topbar>
        <van-address-list
            v-model="chosenAddressId"
            :list="address"
            @add="onAdd"
            @edit="onEdit"
            @select="onSelect"
            />
    </div>    
</template>
<script>
    import topbar from "../component/topbarComponent.vue"
    import url from "@/api.config.js"
    import { Toast, Dialog } from 'vant';
    import { mapState } from "vuex"
     import { getCookie } from "@/utils/index.js"

    export default {
        created(){
            this.dataFetch()
        },
        data() {
            return {
                chosenAddressId: '1',
                address:[],
                originAddr:[]
            }
        },
        computed:{
            ...mapState(['token','login','id'])
        },
        methods: {
            onAdd() {
                this.$router.push({name:"addressEdit",params:{title:"增加地址",id:''}})
            },
            onEdit(item, index) {
                this.$router.push({name:"addressEdit",params:{title:"修改地址",address:this.originAddr[index]}})
            },
            onSelect(item,index){
                if(this.$route.params.back){
                    this.$router.push({name:"orderPay",params:{address:item}})
                }       
            },
            dataFetch(){
                this.axios.request({
                    url:url.addressAll,
                    method:"POST",
                    data:{id:getCookie("id")}
                }).then((result)=>{
                    if(!result.data.message || Object.prototype.toString.call(result.data.message)=="[object Object]"){
                        Toast("未找到收货地址，请先添加吧!")
                        this.$router.push({name:"AddressEdit"})
                    }else{
                        this.originAddr=result.data.message
                        for(let item of result.data.message){
                            this.address.push({id:item._id,name:item.name,tel:item.tel,address:item.province+item.city+item.county+item.address_detail})
                        }                    
                    }                
                }).catch(error=>{
                    Toast("地址列表获取出错，请重试")
                    console.log(error)
                })
            }
        },           
        components:{
            topbar
        }
    }
</script>
<style lang="scss" scoped>
    .address-edit{
        margin-top: 2.2rem;
    }
</style>
