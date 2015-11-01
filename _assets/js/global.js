//= require global/jquery.min
//= require global/bootstrap.min
//= require global/hoverIntent
//= require global/superfish.min
//= require global/owl.carousel
//= require global/wow.min
//= require global/waypoints.min
//= require global/jquery.slicknav.min
//= require global/jquery.responsiveTabs

(function($) {
    "use strict";

    // ______________ RESPONSIVE MENU
    $(document).ready(function() {

        $('#navigation').superfish({
            delay: 300,
            animation: {
                opacity: 'show',
                height: 'show'
            },
            speed: 'fast',
            dropShadows: false
        });

        $(function() {
            $('#navigation').slicknav({
                closedSymbol: "&#8594;",
                openedSymbol: "&#8595;"
            });
        });

    });



    // ______________ ANIMATE EFFECTS
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false
    });
    wow.init();




    // ______________ BACK TO TOP BUTTON

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });
    $('#back-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });



})(jQuery);
