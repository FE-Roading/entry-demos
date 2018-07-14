$(function(){
    var wHeight=$(window).height()

    $("#fullpage").fullpage({
        navigation:true,
        afterLoad: function(anchorLink, index){
            if(index==1){
                setTimeout(function(){
                    $(".page-tip").fadeIn()
                },2000)
            }
           if(index==2){
                $(".s2-search-con").show().animate({"right":339},1200, "easeOutBack",function(){
                    $(".s2-search-word").animate({"opacity":1},500,function(){
                        $(".s2-search-con").hide()
                        $(".s2-search2").show().animate({"height": 30, "right": 250, "bottom": 473},500)
                        $(".s2-goods").show().animate({"width":441},500)
                        $(".s2-word02").animate({"opacity":1},500,function(){
                            $(".page-tip").fadeIn()
                        })
                    })
                   
                })
            }
            if(index==5){
                $(".payway").addClass("paywayAni")  
            }
        },
        
        onLeave: function(index, nextIndex, direction){
            $(".page-tip").hide()
            if(index==2 && nextIndex==3){
                $(".s2-sofamask").show()
                $(".s2-sofa").show().animate({"bottom":278-wHeight,"left":260,"width":207,"height":166},2000,function(){
                    $(".s3-car2").animate({"opacity":1},500,function(){
                        $(".s3-spec2").animate({"opacity":1},500,function(){
                            $(".page-tip").fadeIn();
                        })
                    })
                })               
            }
            if(index==3 && nextIndex==4){
                $(".s2-sofa").hide()
                $(".s3-s4-sofa").show().animate({"bottom":201-wHeight,"left":248},2000,function(){
                    $(this).hide()
                    $(".s4-sofa").show()
                    $(".s4-shopingcar").animate({"left":"150%"},3000,"easeInElastic",function(){
                        $(".s4-tip2").animate({"opacity":1},1000)
                        $(".s4-note").show()
                        $(".s4-address").animate({"opacity":1},1000,function(){
                            $(".page-tip").fadeIn();
                        })                        
                    })
                })                             
            }
            if(index==4 && nextIndex==5){
               
                $(".s5-hand").animate({"bottom":0},1500,function(){
                    $(".s5-mouse2").fadeIn()
                    $(".s5-sofa").show().animate({"bottom":88},1000,function(){
                        $(".s5-bill").animate({"top":-100},500,function(){
                            $(".page-tip").fadeIn();
                        })
                    })
                })
            }
            if(index==5 && nextIndex==6){
                $(".s5-sofa").animate({"bottom":500-wHeight,"left":"40%","width":65},1000,function(){
                    $(this).hide()
                })
                $(".s6-box").animate({"left":"38%"},1000,function(){
                    $(".s6-box").animate({"bottom":40},500,function(){
                        $(this).hide()
                        $(".section6").animate({"backgroundPositionX":"100%"},4000,function(){
                            $(".s6-move").animate({"bottom":116,"height":305},500,function(){
                                $(this).animate({"right":500},1000,function(){
                                    $(".s6-door").animate({"opacity":1},500,function(){
                                        $(".s6-client").show().animate({"right":350,"height":306},500,function(){
                                            $(".s6-word").fadeIn()
                                            $(".page-tip").fadeIn();
                                        })
                                    })
                                  
                                })
                               
                            })
                        })
                        $(".s6-address").fadeIn()
                        $(".s6-slogn").show().animate({"left":"30%"},2000,"easeInOutElastic")
                    })
                })
            }
            if(index==6 && nextIndex==7){
                $(".assess-con").animate({"width":122},1500,function(){
                    $(".s7-result").fadeIn()
                    $(".page-tip").fadeIn();
                })


            }



        },   
    })
    $(".shopping").on("hover",function(){
        $(".s8-shopping2").toggle()
    })
    

    $(".section8").on("mousemove",function(e){
        var x = event.pageX - $(".hand-08").width() / 2;  // 获得鼠
        var y = event.pageY + 10;  // 获得鼠标在页面中的y
        var minY = wHeight - 449; 
        if(y < minY ) {
            y = minY;
        }    
        $(".s8-hand").css({"left": x, "top": y});
    })
    $(".page-tip").click(function(){
        $.fn.fullpage.moveSectionDown()
    })
    $(".s8-again").click(function(){
      $.fn.fullpage.moveTo(0)
        window.location.reload()
    })


})