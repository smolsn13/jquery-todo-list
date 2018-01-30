$(document).ready(function() {

  $('.submit').click(function() {
    var task = $('.newItem').val();
    var addTask = "<li>"+task+"<button class='deleteItem'>"+"X</button></li>";
    $('ul').append(addTask);
    $('.newItem').val('');
    $('.newItem').focus();
  });

  $('ul').on('click', 'li', function() {
    $(this).remove();
  });

});
