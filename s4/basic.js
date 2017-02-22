$(function() {
	var last = $('#mMaskD .regTabs li').eq(1);
	$('#mMaskD .regTabs li').click(function() {
		$(this).css('color', '#fff').css('font-weight', '600');
		last.css('color', '#000').css('font-weight', '400');
		last = $(this);
		if($(this).index() == 0) {
			$('#mMaskD .regTabs').css('background-position', '0 0');
			$('#regTabs').css('display', 'block');
			$('#regMobile').css('display', 'none');
			$('#regVip').css('display', 'none');
			$('.mainBody-side .regExt').css('display','block');
			$('.mainBody-side .regVip').css('display','none');
		} else if($(this).index() == 1) {
			$('#mMaskD .regTabs').css('background-position', '0 -59px');
			$('#regTabs').css('display', 'none');
			$('#regMobile').css('display', 'block');
			$('#regVip').css('display', 'none');
			$('.mainBody-side .regExt').css('display','block');
			$('.mainBody-side .regVip').css('display','none');
		} else {
			$('#mMaskD .regTabs').css('background-position', '0 -112px');
			$('#regTabs').css('display', 'none');
			$('#regMobile').css('display', 'none');
			$('#regVip').css('display', 'block');
			$('.mainBody-side .regExt').css('display','none');
			$('.mainBody-side .regVip').css('display','block');
		}
	});
	$('#regMobile dl dd input').hover(function(){
		$(this).siblings('#regMobile dl dd .prompt').css('color','#000');	
	},function(){
		$(this).siblings('#regMobile dl dd .prompt').css('color','#999');
	});
	$('#mobileRegA').mousedown(function(){
		$('#mobileRegA').css('background','url(img/anXia.png) no-repeat');
	});
	$('#mobileRegA').mouseup(function(){
		$('#mobileRegA').css('background','url(img/songKai.png) no-repeat');
	});
	$('#mobileRegA').hover(function(){
		$('#mobileRegA').css('background','url(img/tingLiu.png) no-repeat');
	},function(){
		$('#mobileRegA').css('background','url(img/zhengChang.png) no-repeat');
	});
	var i=1;
	$('#mobileAcceptIpt').click(function(){
		if (i%2 != 0) {
			$('#m_mobileAccept').css('display','block');
		}else{
			$('#m_mobileAccept').css('display','none');
		}
		i++;
	});
});
