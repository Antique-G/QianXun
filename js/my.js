'use strict';
$(function(){
	//定义全局变量
	var num=0;  
	var timer=0;
	
	//字体滚动
	$('.screen1').children('.title').removeClass('no');
	//7个图片
	$('.side li').click(function(event){
//		alert($(this).index()) 获得索引值
        num=$(this).index();     //-100*num数值加’%‘
        $('section').animate({'top':-100*num+'%'},500)   //speed表示速度为500
	    $(this).addClass('current').siblings('li').removeClass('current')         //猫耳朵添加事件	
	   $('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no')
	});
	
	//滚轮事件
	$(document).mousewheel(function(e,d){
		//alert(d)
		//向下滚动d为-1，向上滚动d为1
		//定时器：serintervl(function(){},时间)
		//一次性定时器：setTimeout(function(){}，时间)
		
		clearTimeout(timer);
		timer=setTimeout(function(){
	
		num=num+(-d);
		if(num>6){num=6}
		if(num<0){num=0}
		$('section').animate({'top':-100*num+'%'},500)
		$('.side li').eq(num).addClass('current').siblings().removeClass('current') 
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no')
	  },500)
	})
	
	
	//音乐按钮
	$('.music').click(function(event){
		$(this).toggleClass('play')  ;//切换类名
	     var i=$(this).hasClass('play')     //hasClass判断是否有该类名,返回值为true和false
//	     alert(i)
       /*点击音乐播放或停止*/
       if(i){
//     	document.getElementById('audio').play()
     	$('audio').get(0).play()
       }else{
       	$('audio').get(0).pause()
       }
	});
})


