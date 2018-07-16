$(function(){
    var baner=document.querySelector(".banner")
    var topbar=this.document.querySelector(".topbar")
    var bH=baner.offsetHeight

    banner()
    function banner(){
        var bCon=$("#banner-con")
        var first=$("#banner-con li:first-of-type")
        var last=$("#banner-con li:last-of-type")
        var len=null
        var curIndex=0
        var timer=null


        bW=$(".banner").width()

        bCon.append(first.clone())
        last.clone().insertBefore(first)
        len=$("#banner-con li").length
        banerResize()

        bCon.on("swipeLeft",function(){
            clearInterval(timer)
            slide()   
            timer=setInterval(slide,2000)         
        })
        bCon.on("swipeRight",function(){
            clearInterval(timer)
            slide(false)
            timer=setInterval(slide,2000)     
        })


        timer=setInterval(slide,2000)

        function slide(right=true){
            if(right){
                curIndex++
            }else{
                curIndex--
            }
            bCon.animate({"left":-curIndex*bW},200,"ease-in-out",function(){
                if(curIndex>=len-1){
                    curIndex=1
                    bCon.css("left",-curIndex*bW)

                }else if(curIndex==0){
                    curIndex=len-2
                    bCon.css("left",-curIndex*bW)
                }
                $(".banner .indicators li").removeClass("active").eq(curIndex-1).addClass("active")
            })
        }



        function banerResize(){
            bW=$(".banner").width()
            bCon.width(len*bW)
            $("#banner-con li").width(bW)            
        }


        $(window).on("resize",banerResize)


    }





    window.onscroll=function(){
        var offset=document.documentElement.scrollTop
        if(bH>offset){
            topbar.style.backgroundColor="rgba(233,35,34,"+offset/bH+")"
        }      
    }
    Daojishi()
    function Daojishi(){        
        var total=1*60*60
        setInterval(function(){
            total--;
            let t=`<span>${parseInt(total/3600/10)}</span><span>${parseInt((total/3600)%10)}</span><span>:</span><span>${parseInt(total%3600/60/10)}</span><span>${parseInt(total%3600/60%10)}</span><span>:</span><span>${parseInt((total%60)/10)}</span><span>${total%10}</span>`
            document.querySelector("#clock").innerHTML=t      
        },1000)
    }
    
})