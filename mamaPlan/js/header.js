// 妈妈计划首页 导航固定定位
$(window).bind('scroll',function(){
	if ($(document).scrollTop() >0) { 
		$('.header_box').addClass('scrolled');
		$('.header_inside_box').addClass('.header_fixed');
		$('.header_login').css({'background':'#FF5D98','color':'#FFF'});
		$('.header_login').mouseover(function(){
			$('.header_login').css({'background':'#FF5D98','color':'#FFF'});
		})
		$('.header_login').mouseout(function(){
			$('.header_login').css({'background':'#FF5D98','color':'#FFF'});
		})
	}else{ 
		$('.header_box').removeClass('scrolled');
		$('.header_inside_box').removeClass('.header_fixed');
		$('.header_login').css({'background':'white','color':'#FF5D98'});
		$('.header_login').mouseover(function(){
			$('.header_login').css({'background':'#FF5D98','color':'#FFF'});
		})
		$('.header_login').mouseout(function(){
			$('.header_login').css({'background':'white','color':'#FF5D98'});
		})
	} 
})
// 妈妈计划首页 二级菜单显隐
$(function(){
	$('.header_ul_title').toggle(
		function(){
			$(this).find('.header_ul_hide_box').show(200);
		},
		function(){
			$(this).find('.header_ul_hide_box').hide(200);
		}
	)
})

$(function(){
	$('.header_ul_title').click(function(){
		$(this).siblings('.header_ul_title').find('.header_ul_hide_box').hide(200);
	})
});



