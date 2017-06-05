console.log("hello!");

var wWidth = window.innerWidth;
var wHeight = window.innerHeight;

$(document).ready(function(){
    var fWidth = $('.moodform').width();
    var fHeight = $('.moodform').height();

    //center the moodform by subtracting the form width from the window width / 2
    $('.moodform').css("margin-left", (wWidth - fWidth)/2);

    //make the mood picture box the same size as the form
    var formgroupHeight = $('.form-group').height();

    //this makes the moodbox the same height as the moodform, and then makes it a square.
    $('.moodbox').css("height", formgroupHeight);
    $('.moodbox').css("width", formgroupHeight);


});
