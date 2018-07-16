var mobileEvent={
    tap:function(dom,callback){
        if(!dom || typeof  dom!="object"){
            return;
        }
        var startTime,startX,startY;
        dom.addEventListener("touchstart",function(e){
            if(e.targetTouches.length > 1){
                return;
            }
            startTime=Date.now();
            startX= e.targetTouches[0].clientX;
            startY= e.targetTouches[0].clientY;
        })
        dom.addEventListener("touchend",function(e){
            if(e.changedTouches.length > 1){ 
                return;
            }
            if(Date.now()-startTime > 150){ 
                return;
            }
            var endX=e.changedTouches[0].clientX;
            var endY=e.changedTouches[0].clientY;
            if(Math.abs(endX-startX) < 6 && Math.abs(endY-startY) <6){
                callback && callback(e);
            }
        })
    }
};

window.onload=function(){
    var cbLeftCon=document.querySelector(".cb-left ul")
    var lis=document.querySelectorAll(".cb-left ul li")
    var liLen=lis[1].offsetHeight
    var maxLen=lis.length*liLen
    var cbLeftConH=cbLeftCon.offsetHeight
    var moveMaxOffset=100
    var moveStart=0;
    var moveDistance=0;
    var curPos=0;
    var tmpPos=0  

    cbLeftCon.addEventListener("touchstart",function(event){
        moveStart=event.touches[0].clientY
    })
    cbLeftCon.addEventListener("touchmove",function(event){
        moveDistance=event.touches[0].clientY-moveStart
        cbLeftCon.style.transition=""
        tmpPos=curPos+moveDistance
        moveTo(tmpPos)
    })
    cbLeftCon.addEventListener("touchend",function(){
        console.log("touched")
        moveEnd()
    })

    lis.forEach(function(item,index){
        item.index=index
        mobileEvent.tap(item,function(event){
            tmpPos=-event.target.parentNode.index*liLen
            cbLeftCon.style.transition="top 0.8s"
            moveTo(tmpPos)
            lis.forEach(function(item){
                item.classList.remove("active")
            })
            event.target.parentNode.classList.add("active")
        })

    })


    function moveTo(pos){
        if(pos>moveMaxOffset){
            pos=moveMaxOffset
        }else if(pos<-(maxLen+moveMaxOffset-cbLeftConH)){
            pos=-(maxLen+moveMaxOffset-cbLeftConH)
        }
        cbLeftCon.style.top=pos+"px"
    }
    function moveEnd(){
        if(tmpPos>0 || tmpPos<-(maxLen-cbLeftConH)){            
            if(tmpPos>0){
                tmpPos=0
            }else{
                tmpPos=cbLeftConH-maxLen-liLen
            }
        }
        cbLeftCon.style.transition="top 0.8s"
        moveTo(tmpPos)
        curPos=tmpPos
        moveDistance=0
    }


}
