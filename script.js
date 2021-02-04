$(document).ready(function () {
    $(".nav-box").hide();

    $(".btn-first").click(function () {
        $(".btn-first").hide();
        $(".social-first").fadeIn();
    });

    $(".btn-third").click(function () {
        $(".btn-third").hide();
        $(".social-third").fadeIn();
    });

    $(".btn-second").click(function () {
        $(".btn-second").hide();
        $(".social-second").fadeIn();
    });


    $(".btn-nav").click(function () {
        $(".btn-nav").hide();
        $(".nav-box").fadeIn();
        $("#on").fadeIn();
    });

    $("#on").click(function () {
        $(".btn-nav").fadeIn();
        $(".nav-box").hide();
        $("#on").hide();
    });
});