//以ipone6屏宽414为基准，尺寸px除以100换算成rem
//->响应式布局格式
function autoSize(maxWidth){
	var mWidth = $(window).width();
	var totleWidth = mWidth*100;
	if (mWidth <= maxWidth) {
		var fontSize = totleWidth/414;
		$("html").css("font-size",fontSize+"px");
		$("body").css("font-size",fontSize+"px");
	};
}
//初次加载时设置导航条的宽度
function navWidthAuto(NavList,OutContent){
	var sum = 0;
	$(NavList).each(function(index, el) {
		var w = $(this).outerWidth()+1;
		var marginLeft = parseInt($(this).css("margin-left"));
		var marginRight = parseInt($(this).css("margin-right"));
		sum += w+marginLeft+marginRight;
	});
	$(OutContent).css("width",sum+"px");
}
//文字的循环滚动效果
function textUping(){
	var i = 0;
	var up = 0.23;
	var ampHtml = $('.jd-newsList').first().clone();
	$('.jd-newsWrap').append(ampHtml);
	var num = $('.jd-newsList').size();
	setInterval(function(){
		i++;
		if(i == num){
			$('.jd-newsWrap').css('margin-top','0rem');
			i = 1;
		}
		$('.jd-newsWrap').stop().animate({'margin-top':'-'+up*i+'rem'}, 300);
	},3000);
}
//获取滚动的y轴的值
function getTransform(el) {
 	var results = $(el).css('transform');
 	var strArr = [];
 	var strLast = null;
 	strArr=results.split(",");
 	strLast = parseInt(strArr[4]);
 	return strLast;
}
//倒计时函数
function daojishi(){
	var now_time=new Date();//创建当前时间
	var shiyi=new Date(2616,9,1,0,0,0);//创建十月一时间
	var diff=shiyi.getTime()-now_time.getTime();//计算时间差

	var tian=parseInt(diff/(24*60*60*1000));//计算还剩多少天
	diff=diff%(24*60*60*1000);//获得还剩多少天后，计算还剩多少毫秒
	var xiaoshi=parseInt(diff/(60*60*1000));//计算还剩多少小时
	diff=diff%(60*60*1000);//获得还剩多少小时后，计算还剩多少毫秒
	var fenzhong=parseInt(diff/(60*1000));//计算还剩多少分钟
	diff=diff%(60*1000);//获得还剩多少分钟后，计算还剩多少毫秒
	var miao=parseInt(diff/1000);//计算毫秒
	if (xiaoshi < 10) {
		xiaoshi = '0' + xiaoshi;
	};
	if (fenzhong < 10) {
		fenzhong = '0' + fenzhong;
	};
	if (miao < 10) {
		miao = '0' + miao;
	};
	$("#hours").text(xiaoshi);
	$("#minutes").text(fenzhong);
	$("#seconds").text(miao);
}
//0.5秒后主页面显示
function autoShow(){
	setTimeout(function(){
		$('.app-show').animate({'opacity':'1'}, 100);
	},10);
}
//页面初始化
$(function(){
	//自适应方法调用
   	autoSize(2000);
   	//主页面自动显示
   	autoShow();
   	//文字的循环滚动效果
   	textUping();
   	//滑动导航条的宽度
    navWidthAuto(".navSrcList","#navbarOuter .scroller");
    //倒计时方法调用
	setInterval(daojishi,1000);
	//倒计时
	daojishi();
	//音乐按钮的点击效
});
$(window).resize(function(){
	//自适应方法调用
   	autoSize(2000);
   	//滑动导航条的宽度
    navWidthAuto(".navSrcList","#navbarOuter .scroller");
});