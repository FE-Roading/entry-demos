<template lang="html">
    <div :class="$style.container">
        <div>
            <img src="../../images/goldCard.png" />
            <p>最高可借</p>
            <p><span>¥</span>300,000</p>
            <p>立即登录</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" module>
    .container{        
        width: 100%;
        box-sizing: border-box;
        padding: 47.25px 26.25px 0 26.25px;
        color: #fff;
        div{
            position: relative;
        }
        img{
            width:100%;
        }
        p{
            position: absolute;
            font-size: 28px;
            line-height: 28px;
            height: 28px;
        }
        p:nth-of-type(1){
            top: 18%;
            left: 10%;
        }
        p:nth-of-type(2){
            top: 30%;
            left: 10%;
            font-size:75.25px;
            line-height: 75.25px;
            height: 75.25px;
            span{
                font-size:52.5px;
                padding-right:0.4375px;
            }
        }
        p:nth-of-type(3){
            top: 56%;
            left: 10%;
            font-size: 24.5px;
            width: 180.25px;
            height: 56.876px;
            text-align: center;
            line-height: 56.876px;
            font-weight: 500;
            background: url("../../images/btnBj.png") center center no-repeat;
            background-size: cover;
        }


    }
</style>
