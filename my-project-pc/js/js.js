/*头部nav_header的文本部分 （动画的回调函数）*/
	$(function(){
	setInterval(function(){
		$('.text').animate({"left":"340px"},1000,function(){
			$('.text').animate({'left':'350px'},1000)
		});
	},1000);

/*................................*/

/*头部右侧导航（绑定多个事件）*/
$('.header_list li').on({
	hover:function(){$(this).addClass('cur').siblings().removeClass('cur');},
    click:function(){$(this).addClass('curr').siblings().removeClass('curr');}	
})

/*轮播图*/
/* 	var i=1;
 	var time=null;
	var timer=null;
    var wd=$('.slider_inline li img').css("width");
	var len=$('.slider_inline li').length;
	var wdd=parseInt(wd);
	var autoScroll=function(){   		
	   	$('.slider_inline').animate({'left':-wdd*i},500);
	        i++;
	        if(i==len){
	        	i=0;
	        }
    	}
	timer=setInterval(autoScroll,1000);*/
       
   var c = 1;
    //图片自动轮播
	var autoRun = function(){
		// 让c号图片显示，兄弟图片隐藏
		$('.slider_inline li').eq(c).fadeIn(300).siblings().fadeOut();
		// 让c号添加cur这个class，移出它兄弟节点的cur class
		$('.slider_list li:not(:last)').eq(c+1).addClass('cur').siblings('li').removeClass('cur');
			c++;
			if(c>4){
				c=0;
			}	
	}
	var timer = setInterval(autoRun,3000);//设立定时器
	//数字索引
	$('.slider_list li').on({
		mouseover:function(){
		var	i=$(this).index();
			clearInterval(timer);		
	        $('.slider_list li').eq(i).addClass('cur').siblings('li').removeClass('cur');
	        $('.slider_inline li').eq(i-1).fadeIn(700).siblings().fadeOut();
	        c=i;
		},
		mouseout:function(){
			clearInterval(timer);
			timer=setInterval(autoRun,3000);
		}
	})


/*..............欢迎惠顾.....................................*/
var timeFont=setInterval(function(){
	$('.timer_list li span').animate({'top':'0px'}).animate({'top':'-20px'})
},700)

$('.timer_list li span').on({
	mouseover:function(){
		clearInterval(timeFont);
		$(this).stop().animate({'top':'-250px','opacity':'0'},300);
	}
})
$('.timer_list li img').on({
	mouseout:function(){
		timeFont=setInterval(function(){
	$('.timer_list li span').animate({'top':'0px'}).animate({'top':'-20px'})
},700);
		$('.timer_list li span').stop().animate({'top':'0px','opacity':'0.4'},300);
	}
})


/*...........marquee兼容火狐...................*/
function scroll(obj) {
		var tmp = (obj.scrollLeft)++;
		//当滚动条到达右边顶端时
		if (obj.scrollLeft==tmp) obj.innerHTML += obj.innerHTML;
		//当滚动条滚动了初始内容的宽度时滚动条回到最左端
		if (obj.scrollLeft>=obj.firstChild.offsetWidth) obj.scrollLeft=0;
	}
	setInterval("scroll(document.getElementById('scrollobj'))",20);


/*......................欢迎词.......................*/
/*pc欢迎词*/
   var pc_scroll=function(){
   	 var st=$(document).scrollTop();
	    if(st>=300){
		$('.welcome').animate({'opacity':'1'},5000).fadeOut('1000',function(){
			$('.pc_title').animate({'left':'300px'},1000);
			$('marquee').css('display','block');
	 	});
	
       }
  		
  	};
   var pc_title_time=setInterval(pc_scroll,1000);


/*app欢迎词*/  
      var app_scroll=function(){
   	 var app_st=$(document).scrollTop();
	    if(app_st>=1200){
		$('.app_welcome').animate({'opacity':'1'},5000).fadeOut('1000',function(){
			$('.app_title').animate({'left':'300px'},1000);
			$('marquee').css('display','block');
	 	});
	
       }
  		
  	};
   var app_title_time=setInterval(app_scroll,1000);




/*table欢迎词*/  
      var table_scroll=function(){
   	 var table_st=$(document).scrollTop();
	    if(table_st>=1200){
		$('.table_welcome').animate({'opacity':'1'},5000).fadeOut('1000',function(){
			$('.table_title').animate({'left':'300px'},1000);
			$('marquee').css('display','block');
	 	});
	
       }
  		
  	};
   var table_title_time=setInterval(table_scroll,1000);


   /*.............小狗狗效果...............................*/
   /*判断鼠标移入方向  插件 开始*/ 
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
/*判断鼠标移入方向  插件 结束*/



// 判断鼠标移入方向结束
    $('.timer_list').find('li').mouseenter(function(e){
    	//获得移入方向
        var direction=hd_direction($(this),e);

        //改变盖子的位置
        switch(direction){
        	case 'left':$(this).find('a').css({'left':'-280px','top':'0px'});
        	break;
        	case 'top':$(this).find('a').css({'left':'0px','top':'-280px'});
        	break;
        	case 'right':$(this).find('a').css({'left':'280px','top':'0px'});
        	break;  
        	case 'bottom':$(this).find('a').css({'left':'0px','top':'280PX'});
        }
        //让盖子运动
        $(this).find('a').stop().animate({'left':'0px','top':'0px'},300);
    }).mouseleave(function(e){
    	//获得盖子的移出方向
    	var direction=hd_direction($(this),e);
    	//改变盖子的移出位置
    	switch(direction){
    		case 'left':$(this).find('a').stop().animate({'left':'-280px','top':'0px'},200);       
    		break;
    		case 'top':$(this).find('a').stop().animate({'left':'0px','top':'-280px'},100);
    		break;
    		case 'right':$(this).find('a').stop().animate({'left':'280px','top':'0px'},200);
    		break;
    		case 'bottom':$(this).find('a').stop().animate({'left':'0px','top':'280px'},200);
    	}

    }) 
	
 /*............表格..................*/
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        var myChart2 = echarts.init(document.getElementById('main2'));
        // 指定图表的配置项和数据
        //柱状图
        var option = {
            title: {
                text: '柱状图'
            },
            tooltip: {},
            legend: {
                data:['百分比%']
            },
            xAxis: {
                data: ["html","css","js","jquery","css3","html5","angular","php","vue"]
            },
            yAxis: {},
            series: [{
                name: '百分比%',
                type: 'bar',
                data: [95, 90, 80, 85, 88, 85,50,30,70]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        //点击柱状按钮
        $('.column').click(function(){
        	$(this).css('box-shadow','0 0 0 0 #DEC2C2');
        	$('.broken').css('box-shadow','2px 2px 5px 2px #F4EAEA');
            $('#main').css('display','block');
            $('#main2').css('display','none');
        })

         $('.broken').click(function(){
        	$(this).css('box-shadow','0 0 0 0 #DEC2C2');
        	$('.column').css('box-shadow','2px 2px 5px 2px #F4EAEA');
            $('#main2').css('display','block');
             $('#main').css('display','none');
        })


     //折线图
       var option2 = {
		    title: {
		        text: '折线图',
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['百分比%']
		    },
		    toolbox: {
		        show: true,
		        feature: {
		            dataZoom: {
		                yAxisIndex: 'none'
		            },
		            dataView: {readOnly: false},
		            magicType: {type: ['line', 'bar']},
		            restore: {},
		            saveAsImage: {}
		        }
		    },
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        data: ['html','css','js','jquery','ajax','css3','html5','angular','php','vue']
		    },
		    yAxis: {     
		        type: 'value',
		        axisLabel: {
		            formatter: '{value}'
		        }
		    },
		    series: [
		        {
		            name:'百分比',
		            type:'line',
		            data:[95, 90, 80, 85,85, 88, 85,50,30,70],
		         /* markPoint: {
		                data: [
		                    {type: 'max', name: '最大值'},
		                    {type: 'min', name: '最小值'}
		                ]
		            },*/
		          
		        },
		       
		    ]
		
};
         myChart2.setOption(option2);

 
    //预加载
    
        $.MyCommon.PageLoading({ sleep: 2000 });
        createSnow('', 1000);
                 












})

