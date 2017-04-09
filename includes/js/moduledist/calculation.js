"use strict";

$(document).ready(function () {
  $("input[name='sum']").sum("keyup", "#totalSum");
  $("input[name='sum2']").sum("keyup", "#totalSum2");
  $("input[name='sum3']").sum("keyup", "#totalSum3");
  $("input[name='sum4']").sum("keyup", "#totalSum4");
  $("input[name='sum5']").sum("keyup", "#totalSum5");
  $("input[name='sum6']").sum("keyup", "#totalSum6");

  $("input").not(".exclude").sum("keyup", "#expenses");

  $("input").subtract({
    'bind': "keyup",
    'selector': "#subtract",
    'oncalc': function oncalc() {
      chart.unload({
        ids: ['housing', 'transportation', 'educational', 'personal', 'savings']
      });
      chart.load({
        columns: [['housing', document.getElementById('totalSum2').innerHTML], ['transportation', document.getElementById('totalSum3').innerHTML], ['educational', document.getElementById('totalSum4').innerHTML], ['personal', document.getElementById('totalSum5').innerHTML], ['savings', document.getElementById('totalSum6').innerHTML]]
      });
    }
  });


  $('.qbcalc input').autoNumeric('init', {
    mDec: 0,
    aSign: '$',
    vMin: "-99999",
    vMax: "99999",
    lZero: 'deny'
  }).bind('focus', function () {
    if (jQuery(undefined).val() == '$') {
      jQuery(undefined).val('');
    }
  });
});