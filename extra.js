/**
 * @file             : extra.js
 * @author           : haoyi <haoyi@buaa.edu.cn>
 * Date              : 28.07.2021
 * Last Modified Date: 28.07.2021
 */

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

