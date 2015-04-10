
(function(document) {
  // EU member states
  var memberstates = [
    "BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU",
    "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB"
  ];

  // triggers
  $('#checkout-noofunits').change(function() {
    $('#checkout-totalprice').text($('#checkout-noofunits option:selected').text() * 99);
  });

  $('#checkout-shipping-country').change(function() {
    var countryCode = $('#checkout-shipping-country option:selected').val();
    if ($.inArray(countryCode, memberstates) > -1) {
      $('#checkout-currency').text('EUR');
    } else {
      $('#checkout-currency').text('USD');
    }
  });

  $('#checkout-billing-address-checkbox').change(function() {
    $('#checkout-billing-address-form').toggle();
  });

  var hasDiscount = window.location.search.indexOf('discount');
  if (hasDiscount > 0) {
    $('#checkout-discount-code').toggle();
  }

  // functions
  document.checkoutStep = function(step) {
    // TODO: add a bunch of verification
    $('#checkout-button-' + (step - 1)).toggle();

    $('#checkout-step-' + step).toggle({
      duration: 400
    });
  };

  document.placeOrder = function() {
    $('#submit-step-3').toggleClass('disabled');

    var currency = 'usd';
    var countryCode = $('#checkout-shipping-country option:selected').val().toLowerCase();
    var expiry = $('input[name=card-expiry]').val().split(' / ');
    var exp_month = parseInt(expiry[0]);
    var exp_year = parseInt(expiry[1]);
    var state = $('input[name=addressstate]').val();
    if (state.length === 2) state = state.toLowerCase(); // Possible US state

    var checkout = {
      user_id: '54721d696841140500c1d67a',
      currency: currency,
      buyer: {
        email: $('input[name=email]').val(),
        first_name: $('input[name=firstname]').val(),
        last_name: $('input[name=lastname]').val()
      },
      shipping_address: {
        first_name: $('input[name=firstname]').val(),
        last_name: $('input[name=lastname]').val(),
        line1: $('input[name=addressline1]').val(),
        line2: $('input[name=addressline2]').val(),
        city: $('input[name=addresscity]').val(),
        state: state,
        zip: $('input[name=addresspostcode]').val(),
        country: countryCode
      },
      line_items: [{
        product_id: '54721d7825177305002d92d7'
      }],
      payment_source: {
        card: {
          name: $('input[name=card-holder-name]').val(),
          number: $('input[name=card-number]').val(),
          exp_month: exp_month,
          exp_year: exp_year,
          cvc: $('input[name=card-cvc]').val(),
        }
      }
    };

    console.log(checkout);

    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: 'https://api-sandbox.trycelery.com/v2/orders/checkout',
      data: checkout,
      dataType: 'json'
    })
    .done(function(result) {
      console.log(result);
      $('#checkout-welcome').toggle();
      $('#checkout-completed').toggle();
    })
    .fail(function(err) {
      console.error(err);
    });
  };

  // credit card form
  var card = new Card({
    // a selector or DOM element for the form where users will
    // be entering their information
    form: '#checkout-form', // *required*
    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-wrapper', // *required*

    formSelectors: {
      numberInput: 'input#card-number', // optional — default input[name="number"]
      expiryInput: 'input#card-expiry', // optional — default input[name="expiry"]
      cvcInput: 'input#card-cvc', // optional — default input[name="cvc"]
      nameInput: 'input#card-holder-name' // optional - defaults input[name="name"]
    },

    // Strings for translation - optional
    messages: {
      monthYear: 'mm/yyyy', // optional - default 'month/year'
    },

    // Default values for rendered fields - optional
    values: {
      'card-number': '•••• •••• •••• ••••',
      'card-holder-name': 'Full Name',
      'card-expiry': '••/••',
      'card-cvc': '•••'
    },

    // if true, will log helpful messages for setting up Card
    debug: false // optional - default false
  });

}(document));
