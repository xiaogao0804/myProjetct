// 私信主体部分的Tab切换
$(function(){
	$('.private_letter_title li').click(function(){
		var c = $(this).index();//获得当前li的序号
		//让c号con显示，他的兄弟节点隐藏
		$(this).css({'color':'#FF5D98'}).siblings('li').css({'color':'#6F7A88'});
		$('.private_letter_con').eq(c).show().siblings('.private_letter_con').hide();	
	});
})
//点击私信遮罩效果，并且弹出对话框
$(function(){
	$('.private_letter').click(function(){
		$(this).parents('.private_letter_content').find('.private_letter_body').show();
		$(this).parents('.private_letter_content').find('.private_letter_cover').show();
	})
	$('#private_letter_center_box .private_letter_false_box').click(function(){
		$(this).parents('.private_letter_content').find('.private_letter_cover').hide();
		$(this).parents('.private_letter_content').find('.private_letter_body').hide();
	})
});










