// -----------------------------------------include Header--------------------------------
$(function () {
    $("#header").load("layout/header.html");
    $("#footer").load("layout/footer.html");
});
//****************************************** */ include Header****************************


//---------------------------------------- use it header color change---------------------
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 70) {
            $(".NavbarMain").addClass("active");
        } else {
      //remove the background property so it comes transparent again (defined in your css)
            $(".NavbarMain").removeClass("active");
        }
    });
});
//*****************************************/ header color change****************************
$('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1.3
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})
//  -----------------------------------news -------------------------------------------------------

