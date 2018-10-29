function slideDetect() {
    if (document.documentElement.clientWidth < 575) {
        $('.slider').slick('unslick');
    } else if (document.documentElement.clientWidth > 575) {
        $('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            speed: 500,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    }
}
$(document).ready(function(){
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    $('.close').click(function () {
       $(this).parent().removeClass('show');
    });
    slideDetect();
    $(window).resize(function() {
        slideDetect()
    });
});