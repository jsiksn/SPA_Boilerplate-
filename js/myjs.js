$(document).ready(function(){
    $('a.scrollPage').on('click',function(e){
        e.preventDefault(); // 책갈피 기능 차단
        if($(this).hasClass('navia')){ // navia 클래스를 갖고 있다면
            $('#gnb .navia').removeClass('on') // 우선 스타일 제거
            $(this).addClass('on') // 지금 클릭된 것만 스타일 삽입
        }
        $('body, html').animate({
            scrollTop: $($(this).attr('href')).offset().top
            }, 400, "linear", () => {
                // if($(this).hasClass('navia')){ // navia 클래스를 갖고 있다면
                //     $('#gnb .navia').removeClass('on') // 우선 스타일 제거
                //     $(this).addClass('on') // 지금 클릭된 것만 스타일 삽입
                // }
        })
    }) //// a.scrollPage click

    // $('.section').each(function(){ // each 다중처리 메서드
    //     $(this).attr('data-pos', $(this).offset().top)
    //     // 각자 .section은 data-pos라는 속성을 만들고 body 상단에서 떨어지는 위치를 저장
    // })

    $(window).on('scroll', function(){
        var scrollPos = $(window).scrollTop(); // 반드시 scroll 이벤트 내에 선언 (스크롤 할때마다 변화)
        // scrollTop 스크롤바의 top 위치
        $('.section').each(function(){ // section마다 스크롤 위치가 나의 상단 위치와 비교
            var thisPos = $(this).offset().top; // 나의 상단위치
            if( scrollPos > thisPos - 400 ){ // 스크롤 위치가 나의 상단 위치보다 커지면 아래 실행
                $('#gnb .navia').removeClass('on')
                $('a[href="#' + $(this).attr('id') + '"]').addClass('on')
                // 나의 아이디와 동일한 href 값을 가진 a태그에 on 클래스를 추가해라.
            }
        })

        if( scrollPos > 0 ){
            $('#hd').addClass('on')
        }else{
            $('#hd').removeClass('on')
        }

    })
    
    var num = 0;
    
    $('.culture_item button').on('click', function(){
        clearInterval(myroll); // 자동 롤링 멈춤
        num = $(this).parent().index()
        myrollingfun(num)
    })

    function myrollingfun(x){ // 선택자와 이벤트로 독립
        $('.culture_item').removeClass('active');
        $('.culture_item button').eq(x).parent().addClass('active');
    }
    
    const myroll = setInterval(function(){
        num++;
        num %= $('.culture_item button').length;
        myrollingfun(num);
    }, 3000)
})

// $(this).attr('id')    $('a[href="#aboutus"]')