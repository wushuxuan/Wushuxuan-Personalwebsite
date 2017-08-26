window.onload = function() {
    var kuang = document.getElementById('head');
    var Carousel = document.getElementById('head_contain');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');


    function play(){
        timer = setInterval(function(){
            next.onclick();
        },10000);
    }
    function stop(){
        clearInterval(timer);
    }
    function animate(offset){
        var newleft = parseInt(Carousel.style.left)+offset;
        Carousel.style.left = newleft+ '%';
        if(newleft<-50){
            Carousel.style.left = 0+ '%';
        }
        if(newleft>0){
            Carousel.style.left = -50+ '%';
        }
    }
    next.onclick = function () {
        animate(-50);
    }
    prev.onclick = function () {
        animate(50);
    }
    kuang.onmouseover = stop;
    kuang.onmouseout = play;
    play();
}