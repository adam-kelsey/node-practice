$(function() {
  $.getJSON('api', updateSubmitions);

  $('.submition-form').submit(function(e) {
    e.preventDefault();
    $.post('api', {
      name: $('#submition-form-name').val(),
      title: $('#submition-form-title').val(),
    }, updateSubmitions);
  });

  $('.submition-messages').on('click', function(e) {
    if (e.target.className == 'btn btn-danger') {
      $.ajax({
        url: 'api/' + e.target.id,
        type: 'DELETE',
        success: updateSubmitions
      });
    }
  });

  function updateSubmitions(data) {
    var output = '';
    $.each(data,function(key, item) {

      output += '          <div class="submition-info media-body">';
      output += '            <div class="submition-head">';
      output += '              <div class="submition-title">' + item.name + ' <small class="submition-name label label-info">' + item.title + '</small></div>';
      output += '            </div>';
      output += '          </div>';
    });
    $('.submition-messages').html(output);
  }
});