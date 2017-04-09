'use strict';

$('.prog a').click(function () {
  if (!$(this).parent().hasClass('active')) {
    $(this).parent().addClass('active').siblings('.active').removeClass('active');
    $(this).parent().parent().children().removeClass('completed');
    $(this).parent().prevAll().addClass('completed');

    var tar = $(this).attr('href');
    $(tar).addClass('active').siblings('.active').removeClass('active');
  }
  return false;
});

$('.panel a.next').click(function () {
  var actv = $('.prog .active');
  var nex = actv.next();

  if (nex.size() > 0) {
    nex.children('a').click();
  } else {
    actv.removeClass('active').addClass('completed');

    $('#step7').addClass('active').siblings('.active').removeClass('active');
  }
  return false;
});

$('.panel a.back').click(function () {
  var actv = $('.prog .active');
  var preev = actv.prev();

  if (actv.size() > 0) {
    preev.children('a').click();
  } else {
    $('.prog li:last a').click();
  }
  return false;
});