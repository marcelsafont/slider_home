// definición de la función silder_ub
$.fn.slider_ub = function(){
	$(this).find('#banners li').each(function(){
		$(this).css({'position': 'absolute', 'top':'0'});
		
	});
	$(this).find('#thumbs li a').hover(function(){
		var num = $(this).parent().index();
		$('#banners li').hide();
		$('#banners .caption').css('top','40px');
		$('#banners li').eq(num).show();
		$('#banners li').eq(num).find('.caption').css('top','-30px');
	})
};



