var text = $('.positif').text(),
    textArr = text.split('');

$('.positif').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.positif').append('<span class="space"></span>');}
  $('.positif').append('<span>'+v+'</span>');
})