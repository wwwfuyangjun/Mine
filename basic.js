$(function() {	
	//导航效果
	$('#nav li').click(function() {
		$('#container section').stop(true,true);
		if(/active/.test($(this).attr('class'))) {
			$('#container .active').slideUp('slow').slideDown('slow');
		} else {
			if($(this).index() == 0) {
				$('#container img').stop(true,true);
				$('#container img').animate({
					left: '4rem'
				}, 500).animate({
					top: '1.2rem'
				}, 'slow');
				$('#container .home-ct').slideDown(500).animate({
					top: '2.5rem'
				}, 'slow');
				$('#container section.active').slideUp('slow');
			}else{
				$('#container img').animate({
					top: 0
				}, 'slow').animate({
					left: '.25rem'
				}, 'slow');
				$('#container section').eq($(this).index()).slideDown('slow').css('z-index','2');
				$('#container section.active').slideUp('slow').css('z-index','1');
				$('#container .home-ct').animate({
					top: '1.3rem'
				}, 'slow');
			}
		}
		$('#nav li.active').removeClass('active');
		$(this).addClass('active');
		$('#container section.active').removeClass('active');
		$('#container section').eq($(this).index()).addClass('active');
	});
	//图片鼠标停留效果
	$('#container .experience-ct figure').hover(function(){
		$('#container .experience-ct figcaption').stop(true,true);
		$(this).find('figcaption').fadeToggle(500);
	});
	
	//换页效果
	$('#container .more li').click(function(){
		$('#container .more li').css('color','#666666').css('background','#DDDDDD');
		$(this).css('color','#FFFFFF').css('background','#45B6F7');
		if ($(this).index() == 0) {
			$('#container .no1').css('display','block');
			$('#container .no2').css('display','none');
		} else{
			$('#container .no1').css('display','none');
			$('#container .no2').css('display','block');
		}
	});
	
	//博客页效果
	$('#container .list button').click(function(){
		$('#container .list').css('display','none');
		$('#container .write').css('display','block');
	});
	$('#container .write button').click(function(){
		$('#container .list').css('display','block');
		$('#container .write').css('display','none');
	});
});