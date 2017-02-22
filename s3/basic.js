$(function() {
	$(".nav li").hover(
		function() {
			$(".bg").stop().animate({
				height: 74 + $(this).children(".two").height()
			}, 300);
			$(this).children(".two").stop().slideDown(300);
		},
		function() {
			$(".bg").stop().animate({
				height: 74
			}, 300);
			$(this).children(".two").stop().slideUp(300);
		}
	);
	
});