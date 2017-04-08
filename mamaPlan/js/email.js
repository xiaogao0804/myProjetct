// 邮箱验证 遮罩效果
$(function(){
	$('.header_zhuce').click(function(){
		$('.email_cover').show();
		$('.email_body').show();
	})
	$('.email_false_box').click(function(){
		$('.email_cover').hide();
		$('.email_body').hide();
	})
});