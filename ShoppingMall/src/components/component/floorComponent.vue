<template>
    <div>
        <!--floor one area-->
        <div class="floor">
            <div class="title" v-text="floorTitle"></div>
            <div class="first">
                <div class="col-one"><img :src="floorData0.image" /></div>
                <div class="col-two">
                    <div><img :src="floorData1.image" /></div>
                    <div><img :src="floorData2.image" /></div>
                </div>
            </div>

            <div class="two">
                <div v-for="(item ,index) in floorData.slice(3)" :key="index">
                    <img :src="item.image"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['floorData', 'floorTitle'],
    data () {
        return {
            floorData0: {},
            floorData1: {},
            floorData2: {}
        }
    },
    created () {
        // 这里写得不到数据，应为数据是延迟返回的

    },
    watch: {
        floorData: function (val) {
            this.floorData0 = this.floorData[0]
            this.floorData1 = this.floorData[1]
            this.floorData2 = this.floorData[2]
        }
    }

}
</script>

<style lang="scss" scoped>
    .floor{
        width: 100%;
        >div{
            display: flex;
            flex-direction:row;
            background-color: #fff;
            >div{
                width: 50%;
                box-sizing: border-box;
                border-bottom:1px solid #ddd;
            }
        }
        .title{
            text-align:center;
            font-size:14px;
            height: 1.8rem;
            line-height: 1.8rem;
            display: block;
            font-weight: 700;
        }
        .two div:nth-child(odd),.col-one{
            border-right: 1px solid #ddd;
        }
        img{
            width: 100%;
            display: block;
        }
    }
</style>
