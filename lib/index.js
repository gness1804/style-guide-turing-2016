require('./styles');
const $ = require('jquery');

$(".dropdown_menu").hide();

$(".dropdown_container").click(function (){
   $(this).children().fadeIn(500);
});

$(".dropdown_container").mouseleave(()=>{
   $(".dropdown_menu").fadeOut(500);
});
