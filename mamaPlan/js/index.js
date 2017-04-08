// 妈妈计划首页搜索失去焦点
$(function(){
	$('#search').focus(function(){
	    $(this).val('');
    })
})	
// 妈妈计划首页登录注册点击事件
//$(function(){
//	$('.login ul li a').click(function(){
//		$(this).addClass('newlogin').siblings().removeClass('newlogin');
//	})
//})

// 妈妈计划首页登录注册点击事件

//礼物翻转
$(function(){
var turn = function(target,time,opts){
	target.find('a').hover(function(){
		$(this).find('img').stop().animate(opts[0],time,function(){
			$(this).hide().next().show();
			$(this).next().animate(opts[1],time);
		});
	},function(){
		$(this).find('.info').animate(opts[0],time,function(){
			$(this).hide().prev().show();
			$(this).prev().animate(opts[1],time);
		});
	});
}
var verticalOpts = [{'width':0},{'width':'183px'}];
turn($('#vertical'),180,verticalOpts);
})

// 妈妈计划首页 导航下拉显示
$(function(){
    $('.center_nav ul li a').toggle(function(){
		$(this).next().show(200);
	},function(){
		$(this).next().hide(200);
		})	
	
})

$(function(){
	 $(document).bind("click",function(e){
         var target = $(e.target);
             if(target.closest(".center_nav ul li a").length == 0){
                   $(".center_nav ul li a").next().hide();
                         }
    })                                               
    $('.center_nav ul li a').toggle(function(){
    	$(this).parent().parent().find('.demo').hide();
		$(this).next().show(200);
		//console.log($(this).next());
	},function(){
		$(this).next().hide(200);
		})	
})

// 妈妈计划首页 导航固定定位
$(window).bind('scroll',function(){
		if ($(document).scrollTop() >85) { 
			$('.herder_bottom').addClass('scrolled');
			$('.newlogin').addClass('newlogincur');
		}else{ 
			$('.herder_bottom').removeClass('scrolled');
			$('.newlogin').removeClass('newlogincur');
		} 
    }) 
	
// 妈妈计划首页 二维码固定定位
$(window).bind('scroll',function(){
		if ($(document).scrollTop() >820) { 
			$('.weixin').addClass('weixin_cur');
		}else{ 
			$('.weixin').removeClass('weixin_cur');
		} 
    })




//礼物页翻转
$(function(){
var turn = function(target,time,opts){
	target.find('a').hover(function(){
		$(this).find('img').stop().animate(opts[0],time,function(){
			$(this).hide().next().show();
			$(this).next().animate(opts[1],time);
		});
	},function(){
		$(this).find('.info').animate(opts[0],time,function(){
			$(this).hide().prev().show();
			$(this).prev().animate(opts[1],time);
		});
	});
}
var verticalOpts = [{'width':0},{'width':'215px'}];
turn($('#verticals'),180,verticalOpts);
})


//礼物页翻转
$(function(){
var turn = function(target,time,opts){
	target.find('a').hover(function(){
		$(this).find('img').stop().animate(opts[0],time,function(){
			$(this).hide().next().show();
			$(this).next().animate(opts[1],time);
		});
	},function(){
		$(this).find('.info').animate(opts[0],time,function(){
			$(this).hide().prev().show();
			$(this).prev().animate(opts[1],time);
		});
	});
}
var verticalOpts = [{'width':0},{'width':'215px'}];
turn($('#verticalss'),180,verticalOpts);
})


//礼物页翻转
$(function(){
var turn = function(target,time,opts){
	target.find('a').hover(function(){
		$(this).find('img').stop().animate(opts[0],time,function(){
			$(this).hide().next().show();
			$(this).next().animate(opts[1],time);
		});
	},function(){
		$(this).find('.info').animate(opts[0],time,function(){
			$(this).hide().prev().show();
			$(this).prev().animate(opts[1],time);
		});
	});
}
var verticalOpts = [{'width':0},{'width':'215px'}];
turn($('#verticalsss'),180,verticalOpts);
})

//妈妈计划礼物页详情页礼物包切换
$(function() {
	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focus").append(btn);
	$("#focus .btnBg").css("opacity",0.5);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus .btn span").css("opacity",0.4).mouseenter(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		//$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	}
});


//妈妈计划礼物页详情页礼物详情礼物评论TAB切换效果
function ChangeDiv(divId,divName,zDivCount) 
{ 
for(i=0;i<=zDivCount;i++) 
{ 
document.getElementById(divName+i).style.display="none"; 
//将所有的层都隐藏 
} 
document.getElementById(divName+divId).style.display="block"; 
//显示当前层 
} 

$(function(){
	$('.message span').click(function(){
		$(this).addClass('nos').siblings().removeClass('nos');
     })
    $('#lifes_2 dl dt').hover(function(){
	    $(this).siblings('.infor').fadeIn(1000);
	   },function(){
		$(this).siblings('.infor').fadeOut(1000); 	   
   })
})  

//妈妈计划礼物页详情页礼物详情点赞鼠标滑过效果
$(function(){
	$('.comment_share ul .love_cur').hover(function(){
	   	$(this).children('.love_curbig').css({'display':'block'});
	},function(){
		$(this).children('.love_curbig').css({'display':'none'});
	})
})


//妈妈计划有料分类TAB切换效果
function ChangeDiv(divId,divName,zDivCount) 
{ 
for(i=0;i<=zDivCount;i++) 
{ 
document.getElementById(divName+i).style.display="none"; 
//将所有的层都隐藏 
} 
document.getElementById(divName+divId).style.display="block"; 
//显示当前层 
} 

$(function(){
	$('.infor_message #infor_baby').click(function(){
		$(this).addClass('nos').siblings().removeClass();
     })
	 $('.infor_message #infor_pregnant').click(function(){
		$(this).addClass('nos01').siblings().removeClass();
     })
	 $('.infor_message #infor_study').click(function(){
		$(this).addClass('nos02').siblings().removeClass();
     })
	 $('.infor_message #infor_life').click(function(){
		$(this).addClass('nos03').siblings().removeClass();
     })
	 $('.infor_message #infor_beauty').click(function(){
		$(this).addClass('nos04').siblings().removeClass();
     })
	 $('.infor_message #infor_family').click(function(){
		$(this).addClass('nos05').siblings().removeClass();
     })
})  

//妈妈计划有料首页孕期指南点击左右箭头效果
$(function(){
	var ml = parseInt($(".fl-pic ul li:first").css("margin-left")); //每个图片margin的数值
	var movew = $(".fl-pic ul li:first").outerWidth()+ml;	//需要滑动的数值
	
	//点击左边
	$(".left-arrow").click(function(){
		$(".fl-pic ul li:first").stop(true).animate({"margin-left":-movew},500,function(){
			$(this).css("margin-left",ml).appendTo($(".fl-pic ul"));	
		});
	});
	
	//点击右边
	$(".right-arrow").click(function(){
		$(".fl-pic ul li:last").prependTo($(".fl-pic ul"));
		$(".fl-pic ul li:first").css("margin-left",-movew).animate({"margin-left":ml},500,function(){
		});
	
	})
	
	
});


// 妈妈计划有料未登录失去焦点
$(function(){
	$('#unlogin_emaile').focus(function(){
	    $(this).val('');
    })
})
$(function(){
	$('#unlogin_submit').focus(function(){
	    $(this).val('');
    })
})

//妈妈计划麻团tab切换
$(function(){
		$('#mature_tab_box ul li').click(function() {
			var c = $(this).index();//获得当前移入的li的序号
			$('#mature_tab_box ul li').eq(c).css({'color':'#FF5D98'}).siblings('li').css({'color':' #6F7A88'})
			$('.mature_con').eq(c).show().siblings('.mature_con').hide();//让c号con显示，他的兄弟节点隐藏
			// 计算色块的left值
			var left = c*132;
			// 将色块运动到对应位置
			$('.mature_move').stop().animate({'left':left+'px'}, 100);
		});
	})

//妈妈计划麻团评论显隐
$(function(){
	$('#mature_line .mature_list .mature_content .mature_pro .mature_talk').toggle(
		function(){
			$(this).parents('.mature_content').next('.mature_add').show();
		},
		function(){
			$(this).parents('.mature_content').next('.mature_add').hide();
		}
	)
})
$(function(){
	$('#mature_line .mature_list .mature_img_box .mature_pro .mature_talk').toggle(
		function(){
			$(this).parents('.mature_img_box').next('.mature_add').show();
		},
		function(){
			$(this).parents('.mature_img_box').next('.mature_add').hide();
		}
	)
})
// 妈妈计划麻团图片的遮罩效果1
$(function(){
	$('#mature_line .mature_list .mature_img_box .mature_pic_box .mature_focus_box').click(function(){
		$('.mature_body').show();
		$('.mature_cover').show();
	})
	$('#mature_midbox .mature_false').click(function(){
		$('.mature_body').hide();
		$('.mature_cover').hide();
	})
});

//妈妈计划麻团图片的遮罩效果2
$(function(){
	$('#mature_line .mature_list .mature_content .mature_pic_box .mature_focus_box1').click(function(){
		$('.mature_body1').show();
		$('.mature_cover1').show();
	})
	$('#mature_midbox1 .mature_false1').click(function(){
		$('.mature_body1').hide();
		$('.mature_cover1').hide();
	})
});
//妈妈计划麻团图片的遮罩效果
$(function(){
	$('#mature_line .mature_list .mature_img_box .mature_pic_box .mature_focus_box').mouseover(function(){
		$(this).find('.mature_big').show();
	})
	$('#mature_line .mature_list .mature_img_box .mature_pic_box .mature_focus_box').mouseout(function(){
		$(this).find('.mature_big').hide();
	})
});

$(function(){
	$('#mature_line .mature_list .mature_content .mature_pic_box .mature_focus_box1').mouseover(function(){
		$(this).find('.mature_big').show();
	})
	$('#mature_line .mature_list .mature_content .mature_pic_box .mature_focus_box1').mouseout(function(){
		$(this).find('.mature_big').hide();
	})
});

//妈妈计划麻团图片的Tab-left1左切换
$(function(){
	//右边Tab
	var a=0
	$('#mature_midbox .mature_right').click(function(){
		a--;

		if(a==-1){
			$('#mature_midbox .mature_midbox .mature_tab_box').css({'left':'-2552px'});
			a=4
		}
		var left=a*-638
		$('#mature_midbox .mature_midbox .mature_tab_box').css({'left':left+'px'})
	})
	// 左边Tab
	$('#mature_midbox .mature_left').click(function(){
		a++;
		if(a==5){
			a=0
		}
		var left=a*-638
		$('#mature_midbox .mature_midbox .mature_tab_box').css({'left':left+'px'})
	})
})

//妈妈计划麻团评论显隐
$(function(){
	$('.matuan_talk').toggle(
		function(){
			$(this).parents('#matuan_content_box').next('.matuan_comment_box').show();
		},
		function(){
			$(this).parents('#matuan_content_box').next('.matuan_comment_box').hide();
		}
	)
})

//妈妈计划有料首页小图标滑过效果
$(function(){
	$('#lifes_0 ul li dl dt').hover(function(){
	    $(this).find('.infor_newpic01cur').css({'display':'block'});
		$(this).find('.infor_newpic01').css({'display':'none'});
		},function(){
		$(this).find('.infor_newpic01cur').css({'display':'none'});
		$(this).find('.infor_newpic01').css({'display':'block'});	
	})
})

//妈妈计划个人中心页 我的收藏 TAB切换效果
function ChangeDivCollect(divId,divName,zDivCount) 
{ 
for(i=0;i<=zDivCount;i++) 
{ 
document.getElementById(divName+i).style.display="none"; 
//将所有的层都隐藏 
} 
document.getElementById(divName+divId).style.display="block"; 
//显示当前层 
} 
$(function(){
	$('.collect_message span').click(function(){
		$(this).addClass('nos').siblings().removeClass('nos');
     })
})  

// 妈妈计划首页登录注册失去焦点
$(function(){
	$('#header_user').focus(function(){
	    $(this).val('');
    })
	$('#header_submit').focus(function(){
	    $(this).val('');
    })
})

// 妈妈计划首页登录注册切换效果
$(function(){
	$('#box_register').click(function(){
		$('.header_box_main .header_box_login_register').fadeIn(300);
		$('.header_box_main .header_box_login').fadeOut(300);
	})
	$('#box_login').click(function(){
		$('.header_box_main .header_box_login_register').fadeOut(300);
		$('.header_box_main .header_box_login').fadeIn(300);
	})
})

// 妈妈计划首页登录注册弹框效果
$(function(){
   $('.headerlogin').click(function(){
	   $('.header_box_bg').fadeIn(200);
	   $('.header_box_main').fadeIn(200); 
   })
   $('#header_closes').click(function(){
	   $('.header_box_bg').fadeOut(200);
	   $('.header_box_main').fadeOut(200); 
   })	
})

// 妈妈计划忘记密码失去焦点
$(function(){
	$('#forget_user').focus(function(){
	    $(this).val('');
    })
})

// 妈妈计划礼物详情立即体验弹框效果
$(function(){
   $('.active_click a').click(function(){
	   $('.header_box_bg').fadeIn(200);
	   $('.gift_experience_main').fadeIn(200); 
   })
   $('#gift_closes').click(function(){
	   $('.header_box_bg').fadeOut(200);
	   $('.gift_experience_main').fadeOut(200); 
   })	
})

//妈妈计划个人中心页 设置 TAB切换效果
function ChangeDivSet(divId,divName,zDivCount) 
{ 
for(i=0;i<=zDivCount;i++) 
{ 
document.getElementById(divName+i).style.display="none"; 
//将所有的层都隐藏 
} 
document.getElementById(divName+divId).style.display="block"; 
//显示当前层 
} 
$(function(){
	$('.set_message span').click(function(){
		$(this).addClass('nos').siblings().removeClass('nos');
     })
}) 

// 妈妈计划个人中心设置密码失去焦点
$(function(){
	$('#set_ago').focus(function(){
	    $(this).val('');
    })
})
$(function(){
	$('#set_new').focus(function(){
	    $(this).val('');
    })
})
$(function(){
	$('#set_again').focus(function(){
	    $(this).val('');
    })
})


//妈妈计划礼物复活页 TAB切换效果
function ChangeDivLifes(divId,divName,zDivCount) 
{ 
for(i=0;i<=zDivCount;i++) 
{ 
document.getElementById(divName+i).style.display="none"; 
//将所有的层都隐藏 
} 
document.getElementById(divName+divId).style.display="block"; 
//显示当前层 
} 
$(function(){
	$('.lifes_message span').click(function(){
		$(this).addClass('nos').siblings().removeClass('nos');
     })
})

// 妈妈计划礼物复活图片的遮罩效果1
$(function(){
	$('.newnsy_left .newgz .newgz_right .newraa .newraa_right .mature_pic_box .mature_focus_box').click(function(){
		$('.mature_body').show();
		$('.mature_cover').show();
		$('.herder_bottom').css({'z-index':'0'});
	})
	$('#mature_midbox .mature_false').click(function(){
		$('.mature_body').hide();
		$('.mature_cover').hide();
		$('.herder_bottom').css({'z-index':'1800'});
	})
});

//妈妈计划礼物复活图片的遮罩效果2
$(function(){
	$('.newnsy_left .newgz .newgz_right .newraa .newraa_right .mature_pic_box .mature_focus_box1').click(function(){
		$('.mature_body1').show();
		$('.mature_cover1').show();
		$('.herder_bottom').css({'z-index':'0'});
	})
	$('#mature_midbox1 .mature_false1').click(function(){
		$('.mature_body1').hide();
		$('.mature_cover1').hide();
		$('.herder_bottom').css({'z-index':'1800'});
	})
});
//妈妈计划礼物复活图片的遮罩效果
$(function(){
	$('.newnsy_left .newgz .newgz_right .newraa .newraa_right .mature_pic_box .mature_focus_box').mouseover(function(){
		$(this).find('.mature_big').show();
	})
	$('.newnsy_left .newgz .newgz_right .newraa .newraa_right .mature_pic_box .mature_focus_box').mouseout(function(){
		$(this).find('.mature_big').hide();
	})
});

$(function(){
	$('.newnsy_left .newgz .newgz_right .newraa .newraa_right .mature_pic_box .mature_focus_box1').mouseover(function(){
		$(this).find('.mature_big').show();
	})
	$('.newnsy_left .newgz .newgz_right .newraa .newraa_right .mature_pic_box .mature_focus_box1').mouseout(function(){
		$(this).find('.mature_big').hide();
	})
});

////////////////////////////////////////////////////////

//妈妈计划麻团评论显隐
$(function(){
	$('.matuan_talk').toggle(
		function(){
			$(this).parents('#matuan_content_box').next('.matuan_comment_box').show();
		},
		function(){
			$(this).parents('#matuan_content_box').next('.matuan_comment_box').hide();
		}
	)
})

//妈妈计划个人中心我的消息 TAB切换效果
function ChangeDivInfor(divId,divName,zDivCount) 
{ 
for(i=0;i<=zDivCount;i++) 
{ 
document.getElementById(divName+i).style.display="none"; 
//将所有的层都隐藏 
} 
document.getElementById(divName+divId).style.display="block"; 
//显示当前层 
} 
$(function(){
	$('.infor_message span').click(function(){
		$(this).addClass('nos').siblings().removeClass('nos');
     })
})
//点击设置出现显隐
$(function(){
	$('.user_set').toggle(
		function(){
			$('.user_set_hide_box').show(200);
		},
		function(){
			$('.user_set_hide_box').hide(200);
		}
	)
})
//点击私信图标出现显隐
$(function(){
	$('.user_win').toggle(
		function(){
			$('.user_win_hide_box').show(200);
		},
		function(){
			$('.user_win_hide_box').hide(200);
		}
	)
})

$(function(){
	$('.user_win').click(function(){
		$('.user_set_hide_box').hide(200);
	})
	$('.user_set').click(function(){
		$('.user_win_hide_box').hide(200);
	})
});
//点击评论图片，出现的弹窗，上传图片
$(function(){
	$('.mature_pic').click(function(){
		$('.mature_pic_hide_box').show();
	})
	$('.mature_false_cha').click(function(){
		$('.mature_pic_hide_box').hide();
	})
});

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
/*$(function(){
	$('.header_ul_title').toggle(
		function(){
			$(this).find('.header_ul_hide_box').show(200);
		},
		function(){
			$(this).find('.header_ul_hide_box').hide(200);
		}
	)
})*/
$(function(){
	$(".header_ul_title").click(function(){
		//alert("aaa");
		$(this).find('.header_ul_hide_box').toggle(200);
		$(this).siblings('.header_ul_title').find('.header_ul_hide_box').hide(200);
	  });
});
/*$(function(){
	$('.header_ul_title').click(function(){
		$(this).siblings('.header_ul_title').find('.header_ul_hide_box').hide(200);
	})
});
*/
$(function(){
	 $(document).bind("click",function(e){
         var target = $(e.target);
             if(target.closest('.header_ul_title').length == 0){
                   $(this).find('.header_ul_hide_box').hide(200);
             }
    })                                               
})






