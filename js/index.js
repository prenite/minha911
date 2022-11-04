$(document).ready(function () {
    var scene01Num = 1;

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 1800 && scene01Num == 1) {
            scene01Num = 0;
            $('#skill .in_box01').stop().delay(0).css({ top: '300px' }).animate({ top: '150px' }, 1000);
            $('#skill .in_box02').stop().delay(500).css({ top: '300px' }).animate({ top: '30px' }, 1000);
            $('#skill .in_box03').stop().delay(1000).css({ top: '300px' }).animate({ top: '120px' }, 1000);
            $('#skill .in_box04').stop().delay(1500).css({ top: '300px' }).animate({ top: '100px' }, 1000);
        }
        else if (scrollTop < 1500 && scene01Num == 0) {
            scene01Num = 1;
            $('#skill .in_box01').stop().css({ top: '150px' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box02').stop().css({ top: '30px' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box03').stop().css({ top: '120px' }).animate({ top: '300px' }, 1000);
            $('#skill .in_box04').stop().css({ top: '100px' }).animate({ top: '300px' }, 1000);

        }
    });
});


$(function () {
    var menu = $('.nav > li');
    var contents = $('#wrap > div');

    $('.nav> li').click(function (event) {
        event.preventDefault();

        var tg = $(this);
        var i = tg.index();

        var section = $('#wrap > div').eq(i);
        var tt = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tt });
    });
    //메뉴에 addclass를 적용
    // $(window).scroll(function(){
    //     var sct = $(window).scrollTop();

    //     $('#wrap > div').each(function(){
    //         var tg = $(this);
    //         var i = tg.index();
    //         if(tg.offset().top <= sct){
    //             $('.nav > li').removeClass('on');
    //             $('.nav > li').eq(i).addClass('on');
    //     }
    // });
    // $(window).scroll(function(){
    // var sct = $(window).scrollTop();

    // contents.each(function(){
    //     var tg = $(this);
    //     var i = tg.index();
    //     if(tg.offset().top <= sct){
    //         menu.removeClass('on');
    //         menu.eq(i).addClass('on');
    //     }
    // });


});

$(function(){
    $(window).scroll(
    function(){
    var	windowTop =$(window).scrollTop()+300;
    $("#q_mn").stop().animate({top:windowTop+"px" },500);
    //$("#q_mn").stop().animate({속성:"속성값", 속성:"속성값" },1000);	
        }
    );
});