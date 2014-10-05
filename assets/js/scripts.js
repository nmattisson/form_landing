/*!
 * Adapted from Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// For the Ajax Chimp scrolling form.
$('#mc-form').ajaxChimp({
    url: 'http://formdevices.us8.list-manage.com/subscribe/post?u=148eabee2d3bdf2c67c658db9&amp;id=8839686f56'
});

$('#mc-form-launch').ajaxChimp({
    url: 'http://formdevices.us8.list-manage.com/subscribe/post?u=148eabee2d3bdf2c67c658db9&amp;id=089d16bcd3'
});
