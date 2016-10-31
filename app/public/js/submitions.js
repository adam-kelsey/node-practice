$(function() {
  $.getJSON('api', updateSubmitions);

  $('.submition-form').submit(function(e) {
    e.preventDefault();
    $.post('api', {
      name: $('#submition-form-name').val(),
      title: $('#submition-form-title').val(),
      message: $('#submition-form-message').val()
    }, updateSubmitions);
  });