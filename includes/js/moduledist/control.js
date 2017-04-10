"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// change background color of INCOME box when user has negative income
// also determine which panel (original, congrats, excess) displays at the end

// working, but DOMSubtreeModified is deprecated (according to the documentation)
$("#subtract").bind("DOMSubtreeModified", function () {
  var _greenColor;

  var n = $('#subtract').text();
  var greenColor = (_greenColor = {
    "background-color": "#a2ca07",
    "background": "-webkit-linear-gradient( 0deg, #a2ca07 90%, #86A607)"
  }, _defineProperty(_greenColor, "background", "-o-linear-gradient(0deg, #a2ca07 90%, #86A607)"), _defineProperty(_greenColor, "background", "-moz-linear-gradient(0deg, #a2ca07 90%, #86A607)"), _defineProperty(_greenColor, "background", "linear-gradient(0deg, #a2ca07 90%, #86A607)"), _greenColor);
  var redColor = {
    "background-color": "red",
    "background": "red"
  };

  // when income is negative, show "excess" message
  if (n < 0) {
    $('.positive-income').css(redColor);
    $('.contain-excess').css("display", "block");
    $('.contain-congrats').css("display", "none");
    $('.contain-original').css("display", "none");
    // when income is zero, show default message
  } else if (n == 0) {
    $('.positive-income').css(greenColor);
    $('.contain-excess').css("display", "none");
    $('.contain-congrats').css("display", "none");
    $('.contain-original').css("display", "block");
    // when income is positive, show "congrats" message
  } else {
    $('.positive-income').css(greenColor);
    $('.contain-excess').css("display", "none");
    $('.contain-congrats').css("display", "block");
    $('.contain-original').css("display", "none");
  }
});

// script for hiding the NO DATA message
$('input').not(".exclude").keyup(function () {
  if ($(this).val()) {
    $('.image-container').removeClass('demo-chart');
  }
});