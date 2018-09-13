<template>
    <router-view></router-view>
</template>

<script> 
  import { mapState } from "vuex"
  export default{
    beforeMount(){
      this.$store.dispatch("loginAction")
      this.$store.commit("getSearchWord")
      this.$store.commit("getCarList")
    },
    computed:{
      ...mapState(["carList"])
    },
    watch:{
      carList(newValue){
        localStorage.setItem("car-goods",JSON.stringify(newValue))
      }
    }

  }
</script>
