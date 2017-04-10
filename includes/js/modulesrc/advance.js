// this allows the user to advance by simply hitting the ENTER key
  $(document).keyup(function(e) {
    if(e.keyCode == 13) {
        const actv = $('.prog .active');
        const nex = actv.next();

        if (nex.size() > 0) {
          // click handles changing .active
          nex.children('a').click();
        } else {
          // on the last?
          actv.removeClass('active')
            .addClass('completed');

          $('#step7').addClass('active')
            .siblings('.active')
            .removeClass('active');
        }
        return false;
    }
  });
