$(function () {
    var cItems=$("#wjs-carousel .carousel-inner .item")
    var carousel=$("#wjs-carousel")
    var startX=null

    // 提示框初始化
    $('[data-toggle="tooltip"]').tooltip()

    // 产品标题栏在sm屏幕中，进行滑动操作
    var pdctBar=$(".products .nav-tabs-parent")
    var pdctItems=$(".products .nav-tabs li")
    var pIWidth=0
    pdctItems.each(function (index,item) {
        pIWidth+=$(item).innerWidth()
    })
    $(".products .nav-tabs").width(pIWidth)

    var iscoll=new IScroll(pdctBar[0],{
        "scrollX":true,
        "scrollY":false
    })

    $(window).on("resize",function(){
        var width=$(window).width()
        if(width>768){
            cItems.each(function (index,value) {
                var item=$(this)
                item.html($('<a href="'+item.data("url")+'" class="pc-img"></a>').css("backgroundImage",'url("'+item.data("large")+'")'))
            })
        }else {
            cItems.each(function (index,item) {
                var item=$(this)
                item.html($('<a href="'+item.data("url")+'" class="mb-img"></a>').html('<img src="'+item.data("small")+'">'))
            })
        }
    }).trigger("resize")

    carousel[0].addEventListener("touchstart",function (event) {
        console.log(event,event.targetTouches)
        if(event.touches.length>1){
            startX=null
        }else{
            startX=event.touches[0].clientX
        }
    })
    carousel[0].addEventListener("touchend",function (event) {
        if(startX){
            if(event.changedTouches[0].clientX>startX){
                $(this).carousel("prev")
            }else{
                $(this).carousel("next")
            }
        }
    })

})