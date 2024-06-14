$(document).ready(function () {

    $(".gnb_bg").hide();
    $(".depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".gnb_bg").stop().slideDown();
    });

    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".gnb_bg").stop().slideUp();
    });


    // 사이트맵영역
    $(".all_wrap").hide();
    $(".btn_sitemap").click(function () {
        $(".all_wrap").stop().fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_wrap").stop().fadeOut();
    });

    $('.all_depth2 li').mouseover(function () {
        $(this).siblings().find('a').css('opacity', '0.3');
    });
    $('.all_depth2 li').mouseout(function () {
        $('.all_depth2 li a').css('opacity', '');
    });

});