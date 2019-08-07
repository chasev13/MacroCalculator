$(document).ready(function() {
  //$('.macrosLeft').hide();
  $('#check').on('click', function() {
    let netCarbsToday = $('#carbsToday').val() - $('#fiber').val()
    $('#carbsLeft').html($('#carbGoal').html() - netCarbsToday);
    $('#fatLeft').html($('#fatGoal').html() - $('#fatToday').val());
    $('#proteinLeft').html($('#proteinGoal').html() - $('#proteinToday').val());

    $('.macrosLeft').show('fast');
    $('.macrosLeft > div > span').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  })
})
