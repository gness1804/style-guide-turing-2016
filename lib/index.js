require('./styles');
const $ = require('jquery');

$(".dropdown_menu").hide();

$(".dropdown_container").hover(function () {
   $(this).children().fadeIn();
});

$(".dropdown_container").mouseleave(()=>{
   $(".dropdown_menu").fadeOut(500);
});
