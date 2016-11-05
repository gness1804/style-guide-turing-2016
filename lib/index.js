require('./styles');
const $ = require('jquery');

$(".dropdown-menu").hide();

$(".dropdown-container").click(function (){
   $(this).children().fadeIn(500);
   $(this).children('.dropdown-link').css('background-color', 'rgb(247, 184, 245)');
});

$(".dropdown-container").mouseleave(()=>{
   $(".dropdown-menu").fadeOut(500);
   $('.dropdown-link').css('background-color', 'rgb(121, 139, 231)');
});
