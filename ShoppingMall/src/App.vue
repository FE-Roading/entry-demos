<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script> 
  export default{
    beforeMount(){
      this.$store.dispatch("loginAction")
    },    
  }
</script>
