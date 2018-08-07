<template>
    <div>
        <topbar title="注册"></topbar>
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="container" >
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
                <van-field
                    v-model="rpwd"
                    class="input-item"
                    type="password"
                    label="密码"
                    placeholder="请输入确认密码"
                    icon="question"
                    @click-icon="$toast('密码长度至少为6位')"
                    required
                    :error-message="rpwdError"
                    error
                />
            </van-cell-group>        
            <van-button type="primary" size="large" :loading="loading" @click="register">注册</van-button>
        </div>
    </div>
</template>
<script>
import url from '@/api.config.js'
import { Toast } from 'vant'
import topbar from "../component/topbarComponent.vue"

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
            rpwd: '',
            rpwdError: '',
            loading: false
        }
    },
    beforeCreate(){
    },
    methods: {
        goBack () {
            this.$router.go(-1)
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
            } else if (this.pwd.length < 6) {
                this.pwdError = '密码长度不应该小于6!'
                res = false
            } else {
                this.pwdError = ''
            }
            if(this.pwd !== this.rpwd){
                this.rpwdError="两次密码输入不一致"
                res=false
            }else{
                this.rpwdError=""
            }
            return res
        },
        register () {
            let res = this.formVaild(1)
            if (res) {
                this.loading = true
                this.axios.request({
                    url: url.regiter,
                    method: 'POST',
                    data: {
                        userName: this.name.trim(),
                        password: this.pwd
                    }
                }).then((result) => {
                    if (result.data.message === true) {
                        Toast.success('注册成功！\n请登陆')
                        this.$router.push("/login")
                    } else {
                        Toast.fail('注册失败！'+result.data.message)
                    }
                    this.loading = false
                }).catch((error) => {
                    Toast.fail('注册失败！\n服务器内部错误')
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
    }

</style>
