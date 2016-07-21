// JavaScript Document
//----------------------主页背景切换----------------------------------
	function indexCut(){
		var i=0;
		setInterval(function(){
			if(i==4)
			{
				$("section").eq(i).fadeOut(1000,function(){
					$("section").eq(0).fadeIn(1000);
				});
				i=0;
			}
			else{
				//$("div").eq(i).fadeIn(900,function(){$("div").eq(i-1).fadeOut();});
				$("section").eq(i).fadeOut(1000,function(){
					i++;
					$("section").eq(i).fadeIn(1000);
				});

			}
		},2000);
	}

//----------------------弹出导航栏----------------------------------
function footnav(){
		$("body").click(function(){
		if($(".footnav").height()>0)
		{
			$(".footnav").stop().animate({top:"0px",height:"0px"});
			
			}
		else
		{
		    $(".footnav").stop().animate({top:"-120px",height:"120px"});
		
		}
		});
		$(".footnav").click(function(){
			event.stopPropagation();
			})
		}
function footW(){
	$(".weixin").mouseover(function(){
		$(".weixinMain").css("display","block");
		}).mouseout(function(){
			$(".weixinMain").css("display","none");});
}
//----------------------设定背景高度----------------------------------
function  height(){
	  var i;
	  i=$(window).height();
	  $("section").height(i);
	  }
//----------------------加入我们----------------------------------
function joinUs(){
	$(".joinUs").click(function(){
		$(".storyMain").css("display","block");
		event.stopPropagation();
		});
	$(".storyMain").click(function(){
		$(this).css("display","none");
		event.stopPropagation();
		});
	$(".storyCenter").click(function(){
		event.stopPropagation();
		});
	}
function story(){
	$(".story").click(function(){
		$(".storyMain").css("display","block");
		event.stopPropagation();
		});
	$(".storyMain").click(function(){
		$(this).css("display","none");
		event.stopPropagation();
		});
	$(".storyCenter").click(function(){
		event.stopPropagation();
		});
	}