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
            scrollTop: $($anchor.attr('href')).offset().top //- $('.navbar').height() - parseInt($('#intro').css('padding-top')) // TODO: Fix so that this works both on mobile and desktop
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

$('#mc-form-launch-bottom').ajaxChimp({
    url: 'http://formdevices.us8.list-manage.com/subscribe/post?u=148eabee2d3bdf2c67c658db9&amp;id=089d16bcd3'
});

// Twitter Follow button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook Like button
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// countdown clock to kickstarter launch
var d1 = new Date();
var d2 = new Date(2014, 10, 4, 0, 0, 0);
var seconds =  (d2 - d1)/1000;
var clock = $('.clock').FlipClock(seconds, {
  clockFace: 'DailyCounter',
  countdown: true,
  showSeconds: true
});