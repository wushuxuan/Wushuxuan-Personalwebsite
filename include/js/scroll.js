/**
 * Created by Administrator on 2017/6/16.
 */
$(function(){
    $("#scrolltotop").click(function(){
        $("html,body").animate({scrollTop:'0px'},800);
    });
    $("#head>#head_nav>#head_nav_html02>nav>a:nth-child(2)").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(1)").offset().top},800);
    });
    $("#head>#head_nav>#head_nav_html02>nav>a:nth-child(3)").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(2)").offset().top},800);
    });
    $("#head>#head_nav>#head_nav_html02>nav>a:nth-child(4)").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(3)").offset().top},800);
    });
    $("#head>#head_nav>#head_nav_html02>nav>a:nth-child(5)").click(function(){
        $("html,body").animate({scrollTop:$("#container>.sections>.section:nth-child(4)").offset().top},800);
    });

})


$(function(){
    $(window).on('scroll',function(){
        var $window = $(this).scrollTop();
        if($window<=$("#container>.sections>.section:nth-child(1)").offset().top){
            $("#scrolltotop").hide();
        }else{
            $("#scrolltotop").show();
        }
    })
})