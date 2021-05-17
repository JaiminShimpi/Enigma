$(document).ready(function () {
  $('.button')
    .on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('.buttonHover').css({ top: relY, left: relX })
    })
    .on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('.buttonHover').css({ top: relY, left: relX })
    });
  $('[href=#]').click(function () { return false });

  $('#navbarToggle').click(function () {
    if ($('#navbarContainer').hasClass('open')) {
      $('#navbarContainer').slideUp();
      $('#navbarContainer').removeClass('open');
      $('#navbarToggler').removeClass('open');
      $('body').css("overflow", 'auto');
    }
    else {
      $('#navbarContainer').slideDown();
      $('#navbarContainer').addClass('open');
      $('#navbarToggler').addClass('open');
      $('body').css("overflow", 'hidden');
    }
  });

  $('.scrollDown, .scrollLink').click(function (e) {
    if($('#navbarContainer').hasClass('open')) {
      $('#navbarContainer').slideUp();
      $('#navbarContainer').removeClass('open');
      $('#navbarToggler').removeClass('open');
      $('body').css("overflow", 'auto');
    }
    e.preventDefault();
    $id = $(this).attr('href');
    $('body,html').animate({
      scrollTop: $($id).offset().top
    }, 500);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });

  $('.toTop').click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });

  feather.replace();
});