$(document).ready(function () {

    //마우스오버시 내비 글자 색깔 변경
    $('.nav a').mouseover(function () {
        $(this).css({ color: 'orangered' })
    })
    $('.nav a').mouseleave(function () {
        $(this).css({ color: 'white' })
    })


    //이미지 아래에서 나타남

    $('.img_box').delay(1000).stop().animate({ top: '-150', opacity: 1 });
    



    //메인 글자 서서히 나타남
    $('#main h2').fadeIn(2000, 'linear')

    $('#main p').fadeIn(1000, 'linear')

    $('#main h3').fadeIn(3000, 'linear')


});

