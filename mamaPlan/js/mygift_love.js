$(function(){
	$('#mygift_main_tab .mygift_ul li').click(function() {
		var c = $(this).index();//获得当前移入的li的序号
		//让c号con显示，他的兄弟节点隐藏
		$('#mygift_main_tab .mygift_con').eq(c).show().siblings('.mygift_con').hide();
		$('#mygift_main_tab .mygift_ul li').eq(c).css({'color':'#FF5D98'}).siblings('li').css({'color':'#6F7A88'})
		// 计算色块的left值
		var left = c*132;
		// 将色块运动到对应位置
		$('#mygift_main_tab .mygift_huakuai').stop().animate({'left':left+'px'}, 100);
	});
})
//点击礼包兑换遮罩效果
$(function(){
	$('#mygift_main_tab .mygift_comment_left .mygift_gift_box .mygift_gift_swape').click(function(){
		$('.mygift_cover').show();
		$('.mygift_body').show();
	})
	$('#mygift_center_box .mygift_false_box').click(function(){
		$('.mygift_cover').hide();
		$('.mygift_body').hide();
	})
});
//点击秀一下遮罩效果，并且弹出对话框
$(function(){
	$('.mygift_show').click(function(){
		$('.mygift_ul_box1').hide();
		$('.mygift_cover1').show();
		$('.mygift_body1').show();
		$('.herder_bottom').css({'z-index':'0'});
	})
	$('#mygift_center_box1 .mygift_false_box1').click(function(){
		$('.mygift_cover1').hide();
		$('.mygift_body1').hide();
		$('.herder_bottom').css({'z-index':'1800'});
	})
});
//礼物翻转
$(function(){
var turn = function(target,time,opts){
	target.find('.mygift_logo_box').hover(function(){
		$(this).find('img').stop().animate(opts[0],time,function(){
			$(this).hide().next().show();
			$(this).next().animate(opts[1],time);
		});
	},function(){
		$(this).find('.mygift_beibu_box').animate(opts[0],time,function(){
			$(this).hide().prev().show();
			$(this).prev().animate(opts[1],time);
		});
	});
}
var verticalOpts = [{'width':0},{'width':'180px'}];
turn($('.mygift_applying_box'),180,verticalOpts);
})
//秀一下
$(function(){
	$('.mygift_show').mouseover(function(){
		$(this).find('.mygift_ul_box').show();
	})
	$('.mygift_show').mouseout(function(){
		$(this).find('.mygift_ul_box').hide();
	})
});
//秀一下
$(function(){
	$('.mygift_show').mouseover(function(){
		$(this).find('.mygift_ul_box').show();
	})
	$('.mygift_show').mouseout(function(){
		$(this).find('.mygift_ul_box').hide();
	})
});
//秀一下
$(function(){
	$('.mygift_qi').mouseover(function(){
		$(this).find('.mygift_ul_box').show();
	})
	$('.mygift_qi').mouseout(function(){
		$(this).find('.mygift_ul_box').hide();
	})
});
// 遗憾
$(function(){
	$('.mygift_cap').mouseover(function(){
		$(this).find('.mygift_ul_box').show();
	})
	$('.mygift_cap').mouseout(function(){
		$(this).find('.mygift_ul_box').hide();
	})
});
// 添加我的看法
$(function(){
	$('.mygift_from_ul_huan1').click(function(){
		$(this).parents('.mygift_from_ul').find('.mygift_from_ul_huan2').show();
		$(this).parents('.mygift_from_ul').find('.mygift_from_ul_huan1').hide();
	})
	$('.mygift_from_confirm').click(function(){
		$(this).parents('.mygift_from_ul').find('.mygift_from_ul_huan1').show();
		$(this).parents('.mygift_from_ul').find('.mygift_from_ul_huan2').hide();
	})
});

//鼠标滑过效果
$(function(){
	$('.mygift_logo_box').mouseover(function(){
		$(this).parent().find('.mygift_del_zhi').show();
	})
	$('.mygift_logo_box').mouseout(function(){
		$(this).parent().find('.mygift_del_zhi').hide();
	})
});



