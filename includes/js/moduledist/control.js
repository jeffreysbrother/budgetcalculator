"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// change background color of INCOME box when user has negative income
// also determine which panel (original, congrats, excess) displays at the end

// working, but DOMSubtreeModified is deprecated (according to the documentation)
$("#subtract").bind("DOMSubtreeModified", function () {

  var n = $('#subtract').text();

  if (n < 0) {
    $('.positive-income').css({
      "background-color": "red",
      "background": "red"
    });
    $('.contain-excess').css("display", "block");
    $('.contain-congrats').css("display", "none");
    $('.contain-original').css("display", "none");
    //this returns the background to its normal green
  } else if (n == 0) {
    var _$$css;

    $('.positive-income').css((_$$css = {
      "background-color": "#a2ca07",
      "background": "-webkit-linear-gradient( 0deg, #a2ca07 90%, #86A607)"
    }, _defineProperty(_$$css, "background", "-o-linear-gradient(0deg, #a2ca07 90%, #86A607)"), _defineProperty(_$$css, "background", "-moz-linear-gradient(0deg, #a2ca07 90%, #86A607)"), _defineProperty(_$$css, "background", "linear-gradient(0deg, #a2ca07 90%, #86A607)"), _$$css));
    $('.contain-excess').css("display", "none");
    $('.contain-congrats').css("display", "none");
    $('.contain-original').css("display", "block");
  } else {
    var _$$css2;

    $('.positive-income').css((_$$css2 = {
      "background-color": "#a2ca07",
      "background": "-webkit-linear-gradient( 0deg, #a2ca07 90%, #86A607)"
    }, _defineProperty(_$$css2, "background", "-o-linear-gradient(0deg, #a2ca07 90%, #86A607)"), _defineProperty(_$$css2, "background", "-moz-linear-gradient(0deg, #a2ca07 90%, #86A607)"), _defineProperty(_$$css2, "background", "linear-gradient(0deg, #a2ca07 90%, #86A607)"), _$$css2));
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