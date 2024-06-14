$(document).ready(function () {
    const progressLine = document.querySelector('.autoplay-progress svg')
    const mv = new Swiper(".mv", {
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        speed: 1000,
        loop: true,
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressLine.style.setProperty("--progress", 1 - progress);
            }
        },
        effect: "fade",
    });

    $(".play-button").hide();
    $(".pause-button").click(function () {
        mv.autoplay.stop();
        $(".pause-button").hide();
        $(".play-button").show();
    });
    $(".play-button").click(function () {
        mv.autoplay.start();
        $(".play-button").hide();
        $(".pause-button").show();
    });

    AOS.init();

    $(".bussiness_con").eq(1).hide();
    $(".bussiness_con").eq(2).hide();
});