<template>
    <div class="info-con">
        <topbar title="用户名新" ></topbar>
        <van-cell-group>
            <van-field
                v-model="name"
                label="用户名"
                left-icon="contact"
                error
                class="item"
                disabled
            />
            <van-field
                v-model="phone"
                label="手机号"
                left-icon="phone"
                :placeholder="phonePlaceholder"
                :error-message="phoneError"
                :disabled='close'
                class="item"
            />
            <van-field
                v-model="mail"
                label="邮 箱"
                left-icon="info-o"
                :placeholder="mailPlaceholder"
                :error-message="mailError"
                :disabled='close'
                class="item"
            />
        </van-cell-group>
        <van-button plain size="large" @click="edit" :loading="loading">{{btn}}</van-button>
    </div>
</template>
<script>
    import topbar from "../component/topbarComponent.vue"
    import url from "@/api.config.js"
    import { mapState } from 'vuex'
    import { Toast } from 'vant';
    import { getCookie } from "@/utils/index.js"

    export default {
        mounted(){
            console.log("id信息：",this.id,this.$store.state.id)
            this.axios.post(url.info,{
                id: getCookie("id")
            }).then(result=>{
                let info=result.data.message
                if(typeof info == 'object'){
                    this.mail=info.mail
                    this.phone=info.phone
                }else{
                    Toast("获取用户信息失败！",{duration:2})
                }
            }).catch(error=>{
                Toast("获取用户信息失败,服务器出错！",{duration:2})
                console.log(error)
            })
        },
        data(){
            return {
                phone:'',
                mail:'',
                close:true,
                loading:false,
                mailError:'',
                phoneError:'',         
            }
        },
        computed:{
            ...mapState(['name','id','login']),
            btn(){
                return this.close?'编辑用户信息':'保存用户信息' 
            },
            phonePlaceholder(){
                return this.close?'':'请输入手机号'
            },
            mailPlaceholder(){
                return this.close?'':'请输入邮箱'
            }
        },
        components:{
            topbar
        },
        methods:{
            verify(){
                let pPhone = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
                let pMail = /^[a-zA-Z0-9-_\u4e00-\u9fa5]+@[a-zA-Z0-9-_]+(\.[A-Za-z0-9-_]+)+$/i
                let result=true
                if(pPhone.test(this.phone)){
                    this.phoneError=''
                }else{
                     this.phoneError='请输入正确的手机号码'
                     result=false
                }
                if(pMail.test(this.mail)){
                    this.mailError=''
                }else{
                     this.mailError='请输入正确的邮箱地址'
                     result=false
                }
                return result
            },
            edit(){
                if(this.close){
                    this.close=false
                }else{
                    if(this.verify()){
                        this.loading=true
                        this.axios.post(url.infoEdit,{
                            id:this.id,
                            phone:this.phone,
                            mail:this.mail 
                        }).then(result=>{
                            if(result.data.message===true){
                                Toast("保存成功",{duration:2})
                                this.btn=true
                            }else{
                                Toast("保存失败",{duration:2})
                            }
                            this.loading=false
                        }).catch(error=>{
                            Toast("保存失败,服务器出错！",{duration:2})
                            console.log(error)
                            this.loading=false
                        })
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/css/config.scss";
    .info-con{
        margin-top: $topbarHeight+5;
        .item{
            margin-bottom: 10px;
            &::last-child{
                margin-bottom: 20px;
            }
        }
    }
</style>
