/* Elexer Theme Scripts */

(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    /*=========================================================================
        Header
    =========================================================================*/
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('.header-section').toggleClass('menu-active');
    });

    /*=========================================================================
        Main Slider
    =========================================================================*/
    $('.main-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        navSpeed: 5,
        items: 1,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        responsiveClass: true
    });

    /*=========================================================================
        Isotope Active
    =========================================================================*/
    $('.gallery-items').imagesLoaded(function () {

        // Add isotope click function
        $('.gallery-filter li').on('click', function () {
            $(".gallery-filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".gallery-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        $(".gallery-items").isotope({
            itemSelector: '.single-item',
            layoutMode: 'masonry',
        });
    });

    /*=========================================================================
        Active venobox
    =========================================================================*/
    $('.img-popup').venobox({
        numeratio: true,
        infinigall: true
    });

    /*=========================================================================
        Counter Up Active
    =========================================================================*/
    var counterSelector = $('.counter');
    counterSelector.counterUp({
        delay: 10,
        time: 1000
    });

    /*=========================================================================
        Testimonial Carousel
    =========================================================================*/
    $('#testimonial-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: false
    });

    /*=========================================================================
        Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
        Instagram Feed
    =========================================================================*/
    var element = document.getElementById("instafeed");
    if (element != null) {
        var feed = new Instafeed({
            get: 'user',
            clientId: 'b84a5448343245f88dd43e62ba0cc9a8',
            accessToken: '4793566378.1677ed0.69bb8075ace04a73bdbe1cb83b9026b1',
            userId: '4793566378',
            limit: 20,
            resolution: 'standard_resolution',
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
        });
        feed.run();
    }
    /*=========================================================================
        Scroll To Top
    =========================================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

})(jQuery);
