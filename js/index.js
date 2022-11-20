$(document).ready(function () {

    //마우스오버시 내비 글자 색깔 변경
    $('.nav a').mouseover(function(){
        $(this).css({color:'orangered'})
    })
    $('.nav a').mouseleave(function(){
        $(this).css({color:'white'})
    })


    //메인이미지 

   


    //메인 글자 서서히 나타남
    $('#main h2').fadeIn(2000, 'linear')

    $('#main p').fadeIn(3000, 'linear')

    $('#main h3').fadeIn(4000, 'linear')


});

