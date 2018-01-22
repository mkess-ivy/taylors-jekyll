$(document).ready(function(){

    // Preloader
    $(window).load(function() {
        $(".se-pre-con").fadeOut("slow");
    });

    // DelayReveal
    $(function(){

        setTimeout(function(){
            $("#delayReveal").show();
        }, 1500);

    });

    // Accordion
    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.accordion-item').hasClass('active')) {
            // Remove active classes
            $('.accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });

    // Smooth Scroll - removed so that FAQs can work
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
    });

    // Delay reveal
    $("#delayReveal").delay(2000).fadeIn(500);

    // Main Overlay Menu Functionality
    $("#overlay-menu").click(function() {
        $(".overlay").addClass("overlay-open");
        $('body').addClass("noScroll");
    });

	$(".overlay-close").click(function() {
        $(".overlay").removeClass("overlay-open");
        $('body').removeClass("noScroll");
    });

    // Slider
	$('.hero-bg-slider').slick({
		infinite: true,
		autoplay: true,
		dots: false,
		arrows: false,
		autoplaySpeed: 4000,
		fade: true,
		cssEase: 'linear'
	});

}); // Close of jQuery
