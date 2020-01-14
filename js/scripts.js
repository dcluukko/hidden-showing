$(document).ready(function() {
	$(".clickable#walrus").click(function() {
		$("#initially-showing-walrus").slideToggle();
		$("#initially-hidden").slideToggle();
	});

	$(".clickable#otter").click(function(){
		$("#initially-showing-sea-otter").slideToggle();
		$("#initially-hidden").slideToggle();
	});
});