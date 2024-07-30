$(document).ready(function() {
    let rollingNumber = 0;
    let autoRolling;

    function startAutoRolling() {
        // let imgRolling = setInterval(함수,시간);
        autoRolling = setInterval(imgRolling, 3000); // 자동 롤링 시간을 3초로 변경
    }

    function stopAutoRolling() {
        // clearInterval(imgRolling);
        clearInterval(autoRolling);
    }

    $('#section1 li').mouseenter(function() {
        stopAutoRolling();
        rollingNumber = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        let imgSrc = $(this).find('figure img').attr('src');
        let h3Text = $(this).find('h3').text();
        let cateText = $(this).find('.cate').text();

        $('.big_img img').attr('src', imgSrc).hide().fadeIn(2000); // 페이드 인 시간을 2초로 변경
        $('.big_img .text strong').text(h3Text);
        $('.big_img .text .cate').text(cateText);

        $('.big_img').removeClass('on');
        setTimeout(function() {
            $('.big_img').addClass('on');
        }, 2000); // 텍스트 변경 시간을 2.5초로 변경
    });

    $('#section1 li').mouseleave(function() {
        startAutoRolling();
    });

    function imgRolling() {
        rollingNumber++;
        if (rollingNumber > 3) {
            rollingNumber = 0;
        }

        let $currentLi = $('.small_img li').eq(rollingNumber);
        $currentLi.addClass('on').siblings().removeClass('on');

        let imgSrc = $currentLi.find('figure img').attr('src');
        let h3Text = $currentLi.find('h3').text();
        let cateText = $currentLi.find('.cate').text();

        $('.big_img img').attr('src', imgSrc).hide().fadeIn(2000); // 페이드 인 시간을 2초로 변경
        $('.big_img .text strong').text(h3Text);
        $('.big_img .text .cate').text(cateText);

        $('.big_img').removeClass('on');
        setTimeout(function() {
            $('.big_img').addClass('on');
        }, 2000); // 텍스트 변경 시간을 2.5초로 변경
    }

    startAutoRolling();


    $('#section3 .content .name' ).each(function() {
        let name = $(this).text(); /* 박경태 */
        let nameComp = name.substr(0,1) + '*' + name.substr(2,1)
        /* substr : 0번째로 부터 1개 라는 뜻 그래서 박 & 만약에 0,2 면 박경  */ 
        
        $(this).text(nameComp);
    })

    $('.floating_menu a').click(function(){
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        $('html, body').animate({scrollTop: targetPos}, 500);
    })

    /* $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        let sec1Top = $('#section1').offset().top;
        let sec2Top = $('#section2').offset().top;
        let sec3Top = $('#section3').offset().top;
        let winH = $(window).height();

        if(scrollTop >= sec1Top - winH/4){
            $('.floating_menu a').removeClass('on');
            $('.floating_menu a[href="#section1"]').addClass('on');
        }
        else {
            $('.floating_menu a').removeClass('on'); // 잘못된 else 구문 수정
        }
        
        if(scrollTop >= sec2Top - winH/4){
            $('.floating_menu a').removeClass('on');
            $('.floating_menu a[href="#section2"]').addClass('on');
        }
        
        if(scrollTop >= sec3Top - winH/4){
            $('.floating_menu a').removeClass('on');
            $('.floating_menu a[href="#section3"]').addClass('on');
        }
    }) */
    $(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    let winH = $(window).height();

    $('.floating_menu a').not('[href="visual"]').each(function(){
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;

        if(scrollTop >= targetPos - winH/4){
            $('.floating_menu a').removeClass('on');
            $(this).addClass('on');
            }
        })
    })
})
