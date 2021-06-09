$(document).ready(function(){
alert("Welcome to jquery learning, Wish your best luck!");


// message
$('#bttn').mouseup(function(){
alert("Hellow SSB! Welcome");
});
// hide
$('#hide').mouseup(function(){
$('.message').hide("slow");
});

// show
$('#show').mouseup(function(){
$('.message').show(1000);
});

// toggle
$('#toggle').mouseup(function(){
$('.message').toggle(2000);
});

// FadeOut
$('#fadeOut').mouseup(function(){
$('.message').fadeOut(2000);
});

// Fade In
$('#fadeIn').mouseup(function(){
$('.message').fadeIn(2000);
});

// Fade Toggle
$('#fadeToggle').mouseup(function(){
$('.message').fadeToggle(2000);
});

// Fade To
$('#fadeTo').mouseup(function(){
$('.message').fadeTo(2000,.75);
});

});