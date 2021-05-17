$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 100;
    count = count < 10 ? 10 : count;
    $input.val(count + ' ₹');
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 100 + ' ₹');
    $input.change();
    return false;
  });
});