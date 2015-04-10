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

// ip lookup
var toggleCeleryStore = function() {
  if ($('#celery-checkout-embed').attr('data-celery') === '547f1dde99d46e0500e58373') {
    // use US+Intl store
    $('.celery-checkout').html('<div id="celery-checkout-embed" data-celery="54721d7825177305002d92d7" data-celery-type="embed" data-celery-version="v2">Checkout US/International</div>');
    $('#celery-checkout-toggle').html('US & International | <a href="#" onclick="toggleCeleryStore()">EU</a>');
  } else {
    // use EU store
    $('#celery-checkout-toggle').html('<a href="#" onclick="toggleCeleryStore()">US & International</a> | EU');
    $('.celery-checkout').html('<div id="celery-checkout-embed" data-celery="547f1dde99d46e0500e58373" data-celery-type="embed" data-celery-version="v2">Checkout EU</div>');
  }
}

var celerylocationcallback = function(data) {
  var memberstates = [
        "BE",
        "BG",
        "CZ",
        "DK",
        "DE",
        "EE",
        "IE",
        "EL",
        "ES",
        "FR",
        "IT",
        "CY",
        "LV",
        "LT",
        "LU",
        "HU",
        "MT",
        "NL",
        "AT",
        "PL",
        "PT",
        "RO",
        "SI",
        "SK",
        "FI",
        "SE",
        "GB",
        "UK"
    ];
  if (data.statusCode === "OK" && data.countryCode) {
    if ($.inArray(data.countryCode, memberstates) > -1) {
      // visitor is from EU
      $('#celery-checkout-toggle').html('<a href="#" onclick="toggleCeleryStore()">US & International</a> | EU');
      $('.celery-checkout').html('<div id="celery-checkout-embed" data-celery="547f1dde99d46e0500e58373" data-celery-type="embed" data-celery-version="v2">Checkout</div>');
    }
  }
};

$.getScript("http://api.ipinfodb.com/v3/ip-country/?key=8570f1b66c74cfa95f093d09a8c418f76a4066c93c5559c600d92cf296352767&format=json&callback=celerylocationcallback");
