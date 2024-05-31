//PRELOADER
$(document).ready(function(){
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
})
 
// Smooth Scroll
$('nav a').click(function(e){
e.preventDefault();
var id = $(this).attr('href'),
targetOffset=$(id).offset().top,
menuHeight= $('nav').innerHeight();
$('html, body').animate({
    scrollTop: targetOffset - 100
}, 500);
});

// navbar background
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    // if (scroll >= 25) {
        // $('.navbar-wrapper').addClass('header-scrolled');
        // $('.navbar').addClass('header-scrolled');
    // } else {
        // $('.navbar-wrapper').removeClass('header-scrolled');
        // $('.navbar').removeClass('header-scrolled');
    // }
});

OS.init();

