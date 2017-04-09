'use strict';

$(document).keyup(function (e) {
  if (e.keyCode == 13) {
    var actv = $('.prog .active');
    var nex = actv.next();

    if (nex.size() > 0) {
      nex.children('a').click();
    } else {
      actv.removeClass('active').addClass('completed');

      $('#step7').addClass('active').siblings('.active').removeClass('active');
    }
    return false;
  }
});