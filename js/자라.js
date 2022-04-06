$(document).ready(function(){
    js();
    function js(){
        var windowWidth = $(window).width();
        if(windowWidth >= 1400){
            new fullpage('#fullpage',{
                //앵커 잡아서 현재 있던 페이지 위치값 돌려줌
                anchors : ['firstPage','secondPage', '3rdPage', '4rdPage'],
        
                //스크롤바 생성해서 스크롤이벤트 가능하게해줌
                scrollBar:true,
            });
        
            // 배너
            var swiper = new Swiper(".mySwiper", {
                effect: "fade",
                autoplay: {
                  delay: 3500,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              });
              
            //sec-3
            //해당 영역 메뉴에 마우스 올리면 배경이미지 변경되게끔 처리하기
              $('.inner-gallery').mouseenter(function(){
                var changeImage = $(this).attr('data-image')
                $('.fade-gallery-photo').css({
                    'background-image' : 'url(' + changeImage + ')',
                });
            });
        
            $('.inner-gallery').mouseleave(function(){
                $('.fade-gallery-photo').css({
                    'background-image' : ''
                });
            });
        
            // 상단이동버튼
            var but=$('.top_but');
            $(window).scroll(function(){
                if($(window).scrollTop() > 300){
                    but.fadeIn();
                }else{
                    but.fadeOut();
                }
            });
            but.on('click',function(e){
                e.preventDefault();
                $('html,body').animate({
                    scrollTop:0
                },300);
                });
        }else{
            // 배너
            var swiper = new Swiper(".mySwiper", {
                effect: "fade",
                autoplay: {
                  delay: 3500,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              });

              // 상단이동버튼
            var but=$('.top_but');
            $(window).scroll(function(){
                if($(window).scrollTop() > 300){
                    but.fadeIn();
                }else{
                    but.fadeOut();
                }
            });
            but.on('click',function(e){
                e.preventDefault();
                $('html,body').animate({
                    scrollTop:0
                },300);
                });

            //sec-3
            //해당 영역 메뉴에 마우스 올리면 배경이미지 변경되게끔 처리하기
            $('.inner-gallery').mouseenter(function(){
                var changeImage = $(this).attr('data-image')
                $('.fade-gallery-photo').css({
                    'background-image' : 'url(' + changeImage + ')',
                });
            });
        
            $('.inner-gallery').mouseleave(function(){
                $('.fade-gallery-photo').css({
                    'background-image' : ''
                });
            });

        }






    }


    






});//end