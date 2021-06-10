// _____________________mobile-nav-toggle_______________


$(document).ready(function() {
    $(".mobile-menu-items-1").click(function() {

        $(".mobile-sub-nav-1").slideToggle(300);
    });
});
$(document).ready(function() {
    $(".mobile-menu-items-2").click(function() {

        $(".mobile-sub-nav-2").slideToggle(300);
    });
});

$(document).ready(function() {
    $(".mobile-menu-items-3").click(function() {

        $(".mobile-sub-nav-3").slideToggle(300);
    });
});






// _______________mess-Btn.onclick____________

$(document).ready(function() {
    $(".mess-btn").click(function() {

        $(".close-btn").css("display", "block");
        $("#noti").css("display", "block");
        $(".mess-btn").css("display", "none");

    });
});


// ______________close-Btn.onclick_____________


$(document).ready(function() {
    $(".close-btn").click(function() {

        $(".close-btn").css("display", "none");
        $("#noti").css("display", "none");
        $(".mess-btn").css("display", "block");

    });
});



// ______________mobileMess-Close________________

$(document).ready(function() {
    $("#mobileMessClose").click(function() {

        $(".close-btn").css("display", "none");
        $("#noti").css("display", "none");
        $(".mess-btn").css("display", "block");

    });
});


//    ______________Scroll_____________

var cuonLen = window.pageYOffset;
window.onscroll = function() {
    var cuonXuong = window.pageYOffset;
    if (cuonXuong < 46) {

        $(".header-nav").css("position", "relative");
        $(".header-nav").css("background-color", "rgba(255,255,255,1)");
        $(".header-nav").css("padding", "0 16px");
        $(".header-nav").css("transition", "none");

        $(".nav-menu").css("position", "relative");
        $(".nav-menu").css("top", "0");
        $(".nav-menu").css("transition", "none");



    } else if (cuonXuong > 130) {
        if (cuonLen > cuonXuong) {

            $(".header-nav").css("position", "fixed");
            $(".header-nav").css("top", "0");
            $(".header-nav").css("left", "0");
            $(".header-nav").css("right", "0");
            $(".header-nav").css("padding", "0 28px");
            $(".header-nav").css("background-color", "#fdfce3");
            $(".header-nav").css("opacity", "1");
            $(".header-nav").css("transition", "all 0.5s linear");

            $(".nav-menu").css("position", "fixed");
            $(".nav-menu").css("top", "79px");
            $(".nav-menu").css("left", "0");
            $(".nav-menu").css("right", "0");
            $(".nav-menu").css("opacity", "1");
            $(".nav-menu").css("transition", "all 0.5s linear");


        } else {

            $(".header-nav").css("top", "-140px");
            $(".header-nav").css("opacity", "0");


            $(".nav-menu").css("top", "-140px");
            $(".nav-menu").css("opacity", "0");

        }
        cuonLen = cuonXuong;
    }
};