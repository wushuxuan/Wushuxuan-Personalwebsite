/**
 * Created by Administrator on 2017/6/28.
 */
$(window).on('load',function(){
    waterfall();
})

function waterfall(){
    var $boxs = $("#container>.sections>.section:nth-child(3)>section>section>div#main>div.box");
    var w = $boxs.eq(0).outerWidth();
    var cols = Math.floor($(window).width()/w);
    $("#container>.sections>.section:nth-child(3)>section>section>div#main").width(w*cols).css('margin','0 auto');
    var hArr = [];
    $boxs.each(function(index,value){
        var h = $boxs.eq(index).outerHeight();
        if(index<cols){
            hArr[index] = h;
        }else{
            var minH = Math.min.apply(null,hArr);
            var minHIndex = $.inArray(minH,hArr);
            $(value).css({
                'position':'absolute',
                'top':minH+'px',
                'left':minHIndex*w+'px'
            })
            hArr[minHIndex]+= $boxs.eq(index).outerHeight();
        }
    })
}
