// definición de la función silder_ub
$.fn.slider_ub = function(){
	$(this).find('#banners li').each(function(){
		$(this).css({'position': 'absolute', 'top':'0'});
		
	});
	$(this).find('#thumbs li a').hover(
		//hover
		function(){
			var num = $(this).parent().index();
			$('#banners li').animate({opacity:0});
			$('#banners .caption').css('top', '0px');
			$('#banners li').eq(num).animate({opacity:1}, 1000);

			
			$('#banners li').eq(num).find('.caption').animate({
				top:'-40px',
				opacity: 1
			}, 1000)
		},
		//out
		function(){

		}

	)
};



