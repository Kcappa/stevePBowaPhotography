$('#menuIcon').click(function(){

$('#navi').css("width", "50%");

});

$('.closebtn').click(function(){

$('#navi').css("width", "0");

});

//slide show
$(function() {

var ul = $(".imgGalleryContainer ul");
var slide_count = ul.children().length;
var slide_width_pc = 100.0 / slide_count;
var slide_index = 0;



ul.find("li").each(function(indx) {
var left_percent = (slide_width_pc * indx) + "%";
$(this).css({"left":left_percent});
$(this).css({width:(100 / slide_count) + "%"});
});

// Listen for click of prev button
$(".imgGalleryContainer .prev").click(function() {
console.log("prev button clicked");
slide(slide_index - 1);
});

// Listen for click of next button
$(".imgGalleryContainer .next").click(function() {
console.log("next button clicked");
slide(slide_index + 1);
});

function slide(new_slide_index) {

if(new_slide_index < 0 || new_slide_index >= slide_count) return;

var margin_left_pc = (new_slide_index * (-100)) + "%";

ul.animate({"margin-left": margin_left_pc}, 400, function() {

slide_index = new_slide_index

});

}

console.log(ul.children().length);

});
