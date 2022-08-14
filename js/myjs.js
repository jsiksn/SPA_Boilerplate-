$(document).ready(function(){
    $('a.scrollPage').click(function(e){
        e.preventDefault(); // 책갈피 기능 차단
        $('body, html').animate({
            scrollTop: $($(this).attr('href')).offset().top
            }, 400, "linear", function(){

        })
    })
})