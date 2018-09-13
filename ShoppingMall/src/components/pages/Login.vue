<template>
    <div>
        <topbar title="登陆"></topbar>
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="container">
            <van-cell-group class="panel">
                <van-field
                    v-model="name"
                    class="input-item"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
                    :error-message="nameError"
                    error
                />
                <van-field
                    v-model="pwd"
                    class="input-item"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    icon="question"
                    @click-icon="$toast('密码长度至少为6位')"
                    required
                    :error-message="pwdError"
                    error
                />
            </van-cell-group>        
            <van-button type="primary" size="large" :loading="loading" @click="login">登陆</van-button>
            <div class="more">
                <van-button size="small" @click="goReg">账号注册</van-button>
            </div>            
        </div>
    </div>
</template>
<script>
import url from '@/api.config.js'
import { Toast } from 'vant'
import topbar from "../component/topbarComponent.vue"
import {getCookie} from "@/utils/index.js"

export default {
    components:{
        topbar
    },
    data () {
        return {
            name: '',
            nameError: '',
            pwd: '',
            pwdError: '',
            loading: false
        }
    },
    beforeCreate(){
        if(this.$store.state.login){
            Toast.success('您已成功登陆，现跳转至首页')
            setTimeout(()=>{
                this.$router.push("/")
            },500)           
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        },
        goReg(){
            this.$router.push("/register")
        },
        formVaild () {
            let res = true
            let name = this.name.trim()    
            if (name.length === 0) {
                this.nameError = '用户名不能为空!'
                res = false
            } else {
                this.nameError = ''
            }
            if (this.pwd.length === 0) {
                this.pwdError = '密码不能为空!'
                res = false
            }else {
                this.pwdError = ''
            }
            return res
        },
        login () {
            let res = this.formVaild()
            if (res) {
                this.loading = true
                this.axios.request({
                    url: url.login,
                    method: 'POST',
                    data: {
                        username: this.name.trim(),
                        password: this.pwd
                    }
                }).then((result) => {
                    if (result.data.message === true) {
                        this.$store.dispatch("loginAction")
                        Toast.success('登陆成功！')
                        this.$router.push(this.$route.query.redirect || '/');                    
                    } else {
                        Toast.fail('登陆失败！')
                        console.log(result.data.message)
                    }
                    this.loading = false
                }).catch((error) => {
                    Toast.fail('登陆失败！')
                    console.log(error)
                    this.loading = false
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/css/config.scss";
    .logo{
        margin-top: $topbarHeight;
        height: 8rem;
        text-align: center;
        img{
            height: 100%;
            display: inline-block;
        }
    }
    .container{
        margin: 0 2rem;
        .panel{
            padding: 1rem 0;
        }
        .more{
            padding-top: 1rem;
            text-align: right;
        }
    }

</style>
