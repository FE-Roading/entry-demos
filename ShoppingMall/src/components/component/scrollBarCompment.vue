<template>
    <div>
        <transition name="el-fade-in">
            <div id="to-top-btn" @click="scroll" v-show="toTopShow">
                <van-icon name="upgrade" class="btn"/>
            </div>
        </transition>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        toTopShow: false,
      }
    },
    methods: {
        scroll(){
            document.documentElement.scrollIntoView()
        },
        scrollToTop() {
            let topBtn = document.getElementById('to-top-btn');
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let browserHeight = window.outerHeight;
            if (scrollTop > browserHeight) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        }
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.scrollToTop)
      });
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollToTop)
    }
  }
</script>

<style scoped lang="scss">
  #to-top-btn{
    position: fixed;
    right: 2rem;
    bottom: 10rem;
    border-radius: 20px;
    z-index: 100;
    .btn{
        font-size: 40px;
        &:hover{
            color: #fff;
        }
    }
  }
</style>