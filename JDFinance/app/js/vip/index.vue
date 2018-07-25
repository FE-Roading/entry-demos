<template lang="html">
    <div :class="$style.car">
        <Vbanner></Vbanner>
        <Vsilder></Vsilder>
        <Vcar></Vcar>
        <Vbt></Vbt>
        <Vactv></Vactv>
    </div>
</template>
<script>
    import Vbanner from "./banner.vue";
    import Vsilder from "./slider.vue"
    import Vcar from "./car.vue"
    import Vbt from "./baitiao.vue"
    import Vactv from "./activite.vue"


export default {
    components:{
        Vbanner,
        Vsilder,
        Vcar,
        Vbt,
        Vactv
    }
}
</script>
<style lang="scss" module>
    .car{
        margin:90px 0 100px 0;
        background: url("../../images/bj.png") left top no-repeat;
        background-size: contain;
    }

</style>
