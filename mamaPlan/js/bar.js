//品牌专题页主题左边
$(function(){
	//右边Tab
	var a=0
	$('.bar_tab_right').click(function(){
		a--;

		if(a==-1){
			a=9
		}
		var left=a*-285
		$(this).parents('.bar_left_box').find('.bar_tab_big_box').css({'left':left+'px'})
	})
	// 左边Tab
	$('.bar_tab_left').click(function(){
		a++;
		if(a==10){
			a=0
		}
		var left=a*-285
		$(this).parents('.bar_left_box').find('.bar_tab_big_box').css({'left':left+'px'})
	})
})
