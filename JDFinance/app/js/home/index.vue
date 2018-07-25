<template lang="html">
    <div class="home-con">
        <jr-header/>
        <Hslider/>
        <Hmoney/>
        <Hproduct/>
        <Hassurance/>
        <Hcar />
        <Hmenu />
        <Hcommunicate/>
        <jrfooter />
    </div>
</template>

<script>
    import jrHeader from "../public/jrHeader.vue";
    import Hslider from "./hslider.vue"
    import Hmoney from "./money.vue"
    import Hproduct from "./product.vue"
    import Hassurance from "./assurance.vue"
    import Hcar from "./car.vue"
    import Hmenu from "./menu.vue"
    import Hcommunicate from "./communicate.vue"
    import jrfooter from "../public/jrFooter.vue";    

    export default {
        components:{
          jrHeader,
           Hslider,
           Hmoney,
           Hproduct,
           Hassurance,
           Hcar,
           Hmenu,
           Hcommunicate,
           jrfooter
        }
    }
</script>

<style lang="scss" module>

  
</style>
