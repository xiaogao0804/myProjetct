/*
* 后盾为方便同学们工作和学习，特将一些常用的、jquery里面没有、大家都能写但是写起来麻烦的功能写好封装到了插件中，方便随时使用。该插件基于jquery，在引入该插件文件前请务必先引入jquery。
* 目前已有功能：抽取随机数、固定定位、计算倒计时
*/


/***** 固定定位使用方法 *****/
/*
* 代码示例：$('#houdun').hd_fixed({'left':'10px','bottom':'20px'});
* 以上代码会将#houdun这个元素定位到可视区域距离左边10px，距离下边20px的位置。兼容ie6等低版本ie浏览器
*/

/***** 抽取随机数的方法 *****/
/*
* 本方法可以实现抽取任意两个数之间的随机小数或随机整数的效果。
* 代码示例：
* 1、 hd_random(23,66);
* 上面这段代码抽取的是23至66之间的随机小数（取不到23和66）
* 2、hd_random(23,66,true);
* 上面这段代码抽取的是23至66之间的随机整数（能取到23和66）
*/
/***** 抽取随机数的方法 *****/


/***** 计算倒计时的方法 *****/
/*
* 代码示例：
* 1、hd_countdown(2016,10,1,6,12,50);
* 以上代码是获得当前时间与2016年10月1日6时12分50秒的时间间隔
* 2、hd_countdown(1399316708);
* 以上代码传入的是以毫秒表示的utc时间戳，该时间戳表示1970年1月1日0时0分0秒这个参考点往后1399316708秒的时间。因为php给前台返回的时间一般是以这种时间戳的格式。
*/


/***** 元素自由拖拽的方法 *****/
/*
* ★注意：在使用本方法前，被拖拽元素应该拥有绝对定位（absolute）属性，并且直接放在body内(即被拖拽元素应为body的儿子辈元素)
* 代码示例：
* 1、$('#hd').hd_drag();
* 以上代码控制#hd元素可以被拖拽
* 2、$('#hd').hd_drag(true);
* 以上代码控制#hd元素可以被拖拽，并且拖拽范围被限制在可视区域内
*/

/***** 判断鼠标移入方向的方法 *****/
/*
* ★注意：本方法一般配合mouseover、mouseenter事件使用，用来获得鼠标从哪个方向移入当前对象
* 代码示例：
* hd_direction(obj,e);
* obj为事件源（鼠标移入的对象），e是事件对象
* 返回一个字符串结果，有四种返回值：
* left表示鼠标从左侧移入
* top表示鼠标从顶部移入
* right表示鼠标从右侧移入
* bottom表示鼠标从底部移入
*/

/******************** 处理固定定位效果 ********************/
;(function($){ 
	$.extend($.fn,{ 
		hd_fixed : 
function(position){ //固定定位方法
			if(state = 'fixed'){//如果是一直固定状态
				var _this = $(this);
				if(!-[1,]&&!window.XMLHttpRequest){
					// alert($(this).attr('src'))
					$('body').append($(this));//将对象插入到body中
					$(this).css('position','absolute');//给元素加固定定位，相对于body进行定位

					hd_fixed_postion($(this),position);
					$(window).scroll(function(){
						hd_fixed_postion(_this,position);
					})
				}else{
					$(this).css('position','fixed');//让元素固定定位
					for(x in position){
						$(this).css(x,position[x]);
					}
				}
				
			}
			return $(this);
		},

		//控制元素拖拽的方法
		hd_drag:function(limit){
			var _this = $(this);
		
				_this.mousedown(function(ev){
					// 获得鼠标的位置
					var m_old_left = ev.pageX;
					var m_old_top = ev.pageY;
					// 获得div的位置
					var box_old_left = _this.position().left;
					var box_old_top = _this.position().top;
					// 给文档区域加鼠标移动事件
					$(document).mousemove(function(ev){
						// 获得鼠标当前的位置
						var m_new_left = ev.pageX;
						var m_new_top = ev.pageY;

						// 计算鼠标移动的距离
						var left_diff = m_new_left - m_old_left;
						var top_diff = m_new_top - m_old_top;

						// 计算div新的位置
						var box_new_left = box_old_left + left_diff;
						var box_new_top = box_old_top + top_diff;

						// 判断是否限定范围
						if(limit){
							// 计算元素最大left和top值
							var max_left = $(window).width() - _this.outerWidth();
							var max_top = $(window).height() - _this.outerHeight();
							if(box_new_left<0){
								box_new_left=0;
							}
							if(box_new_left>max_left){
								box_new_left = max_left;
							}
							if(box_new_top<0){
								box_new_top=0;
							}
							if(box_new_top>max_top){
								box_new_top = max_top;
							}

						}

						// 给div设置新的位置
						_this.css({'top':box_new_top+'px','left':box_new_left+'px'});
					})
				})

				_this.mouseup(function() {
					$(document).off('mousemove');//鼠标抬起的时候，取消document身上的鼠标移动事件
				});
			
			return $(this);
		}
		// 控制元素拖拽的方法结束


	}) 
})(jQuery); 

// 固定定位用到的函数
function hd_fixed_postion(obj,position){
	// alert(obj.attr('src')
			var window_height = $(window).height();//获得页面总高度
			var obj_height = obj.outerHeight();//获得定位元素的高度
			var scroll_top = $(document).scrollTop();//获得已滚动上去的高度
					var l,r,t,b;
					// for in遍历开始
					for(x in position){//遍历位置信息对象，将位置设置给obj对象
						switch(x){
							case 'left':
								l = position[x];
								break;
							case 'right':
								r = position[x];
								break;
							case 'top':
								t = scroll_top + parseInt(position[x]);
								break;
							case 'bottom':
								b = window_height + scroll_top - obj_height - parseInt(position[x]);
								break;
						}
					}
					// for in遍历结束
					if(l){
						obj.css('left',l);
					}
					if(r){
						obj.css('right',r);
					}
					if(b){
						obj.css('top',b);
					}
					if(t){
						obj.css('top',t);
					}
		}
//固定定位用到的函数结束
/******************** 处理固定定位效果结束 ********************/


// 抽取随机数的函数
function hd_random(start,end,integer){
	if(integer){//生成随机整数
		var random = Math.floor(Math.random()*(end+1-start)+start)
	}else{//生成随机小数
		var random = Math.random()*(end-start)+start;
	}
	return random; 
}
// 抽取随机数的函数结束


// 倒计时功能
function hd_countdown(year,month,day,hour,minute,second){

		var start_time = new Date();//创建现在时间


		if(arguments.length == 6){//如果传入6个参数，就是传入的年月日时分秒
			var end_time = new Date(year,month-1,day,hour,minute,second);//创建未来时间
			var diff = end_time.getTime() - start_time.getTime();//获得两个时间的时间差
		}else if(arguments.length == 1){//如果只传入1个参数，就是传入的时间戳
			var diff = year*1000 - start_time.getTime();//获得两个时间的时间差
		}
		
		
		var result = new Object();//创建用来记录结果的对象

		result.days= parseInt(diff/(24*60*60*1000));//计算剩余天数
		diff = diff%(24*60*60*1000);//计算还剩多少毫秒
		result.hours = parseInt(diff/(60*60*1000));//计算剩余小时
		diff = diff%(60*60*1000);
		result.minutes = parseInt(diff/(60*1000));//计算还剩多少分钟
		diff = diff%(60*1000);
		result.seconds = parseInt(diff/1000);//计算还剩多少秒

		return result;//返回结果

}

// 倒计时功能结束



// 判断鼠标移入方向
function hd_direction(obj,e) {
	//获得元素的尺寸
	var w = obj.width();
	var h = obj.height();

	// 计算鼠标点击的点坐标
    var x = e.pageX - obj.offset().left - (w/2);
    var y = e.pageY - obj.offset().top - (h/2);
    // 计算鼠标点击角度
    var angle = Math.atan2(y, x) * (180/Math.PI);
    // 左侧移入 -180 -135 
    // 上侧移入 -135 -45
    // 右侧移入 -45 45
    // 下侧移入 45 135
    // 左侧移入 135 180
    if(angle>135 || angle<-135){
    	var direction = 'left';
    }else if(angle>45){
    	var direction = 'bottom';
    }else if(angle>-45){
    	var direction = 'right';
    }else{
    	var direction = 'top';
    }
    return direction;
}
// 判断鼠标移入方向结束