<template>
  <div id="app">
    <jdtopbar :title="title" v-show="showT"> </jdtopbar>
    <router-view></router-view>
    <jrnavbar/>
  </div>
</template>

<script>
  import "../css/reset.scss";
  import jrnavbar from "./public/jrNavbar.vue";   
  import jdtopbar from "./public/jdTopbar.vue";

   export default {
      components:{
       jrnavbar,
       jdtopbar

    },
    data(){
      return {
        title:"京东金融",
        showT:true
      }
    },
    created() {
      if(this.$route.name=="savemoney"){
        this.showT=false
      }
    },
    methods:{
      updateTitle(){
        this.title=this.$router.title
        if(!this.title){
          this.showT=false
        }else{
          this.showT=true
        }
      }
  },
  watch:{
    $route(to,from){
      this.title=to.meta.title
        if(!this.title){
          this.showT=false
        }else{
          this.showT=true
        }
      }
  }
  }
</script>
