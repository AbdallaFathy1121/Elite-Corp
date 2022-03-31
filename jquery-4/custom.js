
$(function() {

    "use strict";

    // =========================================================================================================================

    // NavBar (Links)

    $('.navbar .navbar-collapse li').click (function(){

        $(this).addClass('active').siblings().removeClass('active');

    });

    $('.navbar .navbar-collapse .link-about').click (function(){

        $('html, body').animate ({

            scrollTop: $('.choose').offset().top

        }, 1200);

    });

    
    $('.navbar .navbar-collapse .link-work').click (function(){

        $('html, body').animate ({

            scrollTop: $('.work').offset().top

        }, 1200);

    });

    
    $('.navbar .navbar-collapse .link-blog').click (function(){

        $('html, body').animate ({

            scrollTop: $('.pricing').offset().top

        }, 1200);

    });

    
    $('.navbar .navbar-collapse .link-contact').click (function(){

        $('html, body').animate ({

            scrollTop: $('.contact-us').offset().top

        }, 1200);

    });

    // ==========================================================================================================================

    // Carousel Slide 

    var winH = $(window).height(),
        uppH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").innerHeight();

    $(".carousel, .carousel-item, .carousel-inner").height(winH - (uppH + navH));

    $(window).resize (function () {

        var winH = $(window).height(),
            uppH = $(".upper-bar").innerHeight(),
            navH = $(".navbar").innerHeight();

        $(".carousel, .carousel-item, carousel-inner").height(winH - (uppH + navH));

    });

    // ==========================================================================================================================

    // Featured Work 

    $('.work .row .col ul li').click(function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

    // ==========================================================================================================================

    // OverView (View More)

    $('.over button').click (function (){

        $('.over p').removeClass('hidden').fadeIn();

        $(this).addClass('hidden').fadeOut();

    });

    // ==========================================================================================================================

       // Coose Us (View More)

       $('.choose button').click (function (){

        $('.choose p').removeClass('hidden').fadeIn();

        $(this).addClass('hidden').fadeOut();

    });

    // ==========================================================================================================================

    // Chevron Top

    $('.fa-arrow-circle-up').click (function(){

        $('html, body').animate({

            scrollTop: $('.upper-bar').offset().top

        }, 1200);

    });


});



