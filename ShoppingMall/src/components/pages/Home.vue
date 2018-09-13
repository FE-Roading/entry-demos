<template>
  <div class="index-con">
    <searchbar :iclick="iClick">      
        <img src="@/assets/logo.png" class="index-logo" v-if="login"> 
        <router-link to="login" class="index-login" v-else>登</router-link>         
    </searchbar>
    <Index />
    <navbar />
  </div>
</template>

<script>
import Index from './Index.vue'
import searchbar from "../component/searchBarCompoment.vue"
import navbar from "../component/bottomNavbarComponent.vue"
import url from '@/api.config.js'

export default {
    components:{
        Index,
        navbar,
        searchbar
    },
    data () {        
        return {
            normal:true,
            login:this.$store.state.login
        }
    },
    methods:{
        iClick(){
            this.$router.push("search")
        }
    }

}

</script>

<style lang="scss">
@import "@/assets/css/config.scss";
   .index-con{
        margin: $topbarHeight 0 $navbarHeight 0;  
    }
</style>