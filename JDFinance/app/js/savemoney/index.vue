<template lang="html">
    <div class="savem">
        <Ssilder></Ssilder>
        <Sact></Sact>
        <Sfavorable></Sfavorable>
        <Shardware></Shardware>
        <Sslogn></Sslogn>
        
        <Szongchou></Szongchou>
    </div>
</template>
<script>
    import Ssilder from "./slider.vue"
    import Sact from "./actities.vue"
    import Sfavorable from "./favorable.vue"
    import Shardware from "./hardware.vue"
    import Sslogn from "./slogn.vue"
    import Szongchou from "./zongchou.vue"


export default {
    components:{
        Ssilder,
        Sact,
        Sfavorable,
        Shardware,
        Sslogn,
        Szongchou,

    }
}
</script>
<style lang="scss">
    .savem{
        margin-bottom:100px;
        background-color: #f2f2f2;
    }

</style>
