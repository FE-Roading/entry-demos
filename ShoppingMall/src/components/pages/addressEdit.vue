<template>
    <div class="address-list">
        <topbar :title="title"></topbar>
        <van-address-edit
            :area-list="areaList"
            :addressInfo="addressInfo"
            show-postal
            show-delete
            show-set-default
            @save="onSave"
            @delete="onDelete"
            />
    </div>
</template>
<script>
    import areaList from "@/store/area.js"
    import topbar from "../component/topbarComponent.vue"
    import { Toast } from "vant"
    import url from "@/api.config.js"

    export default {
        created(){
            this.title=this.$route.params.title || "添加地址"
            if(this.$route.params.address){                
                this.addressInfo=this.$route.params.address
                this.add=false
            }
            this.back==this.$route.params.back || false
        },
        data() {
            return {
                areaList,
                title:"",
                addressInfo:{},
                back:false,
                add:true,
            }
        },
        methods: {
            onSave(content) {
                this.axios.request({
                    url:this.add?url.addressAdd:url.addressEdit,
                    method:"POST",
                    data:{
                        id:this.$store.state.id,
                        address:JSON.stringify(content)
                    }                    
                }).then((result)=>{
                    if(result.data.message===true){
                        let message=this.add?'地址添加成功':'地址修改成功'
                        Toast(message)
                        this.goBack()
                    }else{
                        let message=this.add?'地址添加失败':'地址修改成功失败'
                        Toast(message)
                    }
                }).catch((error)=>{
                    let message=this.add?'地址添加失败':'地址修改成功失败'
                    Toast(message)
                    console.log(error)
                })
            },
            onDelete() {
                if(!this.add){
                    this.axios.request({
                        url:url.addressDel,
                        method:"POST",
                        data:{
                            id:this.$store.state.id,
                            addr_id:this.addressInfo._id
                        }                        
                    }).then((result)=>{
                        if(result.data.message===true){                         
                            Toast('地址删除成功')
                            this.goBack()
                        }else{
                            let message='地址删除失败'
                            Toast('地址删除失败')
                        }
                    }).catch((error)=>{
                        Toast('地址删除失败')
                        console.log(error)
                    })
                }else{
                    Toast("删除成功")
                    this.goBack()
                }
            },
            goBack(){
                this.$router.push({name:"addressList",query:{t:Date.now()}})
            }
        },
        components:{
            topbar
        }
    }
</script>
<style lang="scss" scoped>
    .address-list{
        margin-top: 2.2rem;
    }
</style>
