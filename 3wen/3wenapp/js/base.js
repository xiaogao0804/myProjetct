(function(){
	var i=0
	var x=["head","head_1","head_2"]
	setInterval(function(){
		i++;
		if(i>2)
		{
			i=0;
		}else{
			$('.headBg').fadeOut(500,function(){
				$('.headBg').fadeIn(500);
				$('.headBg').find("img").attr("src","img/"+x[i]+".png");
				
			});
		}
	},4500);
})();
//大图切换end
$('.mleftNav').on('click',function(){
	$('.topNav').slideToggle();
});
$('.dynamicLeft').height(parseInt($('.dynamicLeft').width()));
$('.toTop').on('click',function(){ 
	$('html,body').animate({'scrollTop':0});
})

