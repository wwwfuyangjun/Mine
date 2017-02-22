var i = 0;
var timer;
$(function() {
	$(".ig").eq(0).show().siblings("div").hide();
	showTime();
	$(".tab").hover(function() {
		i = $(this).index();
		show();
		clearInterval(timer);
	}, function() {
		showTime();
	});
	$(".btn2").click(function() {
		clearInterval(timer);
		if(i == 0) {
			i = 8;
		}
		i--;
		show();
		showTime();
	});
	$(".btn1").click(function() {
		clearInterval(timer);
		if(i == 7) {
			i = -1;
		}
		i++;
		show();
		showTime();
	});
});

function show() {
	$(".ig").eq(i).fadeIn(300).siblings("div").fadeOut(300);
	$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

function showTime() {
	timer = setInterval(function() {
		i++;
		if(i == 8) {
			i = 0;
		}
		show();
	}, 4000);
}

