require('./styles');
const $ = require('jquery');

$(".dropdown-menu").hide();

$(".dropdown-container").click(function (){
   $(this).children().fadeIn(500);
});

$(".dropdown-container").mouseleave(()=>{
   $(".dropdown-menu").fadeOut(500);
});
