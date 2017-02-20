height=screen.height;
$("#name1").css({"margin-top": height/2-110});
if(height<768){
  $(".footer").css({"margin-top":height-765});
};
$(function(){
  $("#name1").delay(500).fadeIn(1500);
});
$(document).ready(function(){
  $("#name1").delay(1500).fadeOut(500);
  $("#name2").delay(4000).fadeIn(1000);
  $(".row").delay(4500).fadeIn(1000);
  $(".footer").delay(5500).fadeIn(500);
});