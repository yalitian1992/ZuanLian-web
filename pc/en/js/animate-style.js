$(function(){


					// 判断是否在浏览器可视区域


					// 网页加载完成添加默认向上动画
					if(  $(".animate-to-up").offset().top > jQuery(window).scrollTop() && $(".animate-to-up").offset().top < jQuery(window).scrollTop() + jQuery(window).height()  ){
						$(".animate-to-up").addClass("animate-up-nomal");
						console.log(2)
					}

					// 判断鼠标上下滚动方向
					var toppos = 0; 
					$(window).scroll(function(event){
					 	var scrollTop = $(window).scrollTop();
						 if(scrollTop > toppos){
						  	// console.log("下"); 
						  	 


										// 往下滚目标元素出现在可视区域执行向上渐显动画动画
										for (var i = 0; i < $(".animate-to-up").length; i++) {
											if(  $($(".animate-to-up")[i]).offset().top > jQuery(window).scrollTop() && $($(".animate-to-up")[i]).offset().top -500 < jQuery(window).scrollTop() + jQuery(window).height()  ){
												$($(".animate-to-up")[i]).addClass("animate-up-lazy");
											}else{
												$($(".animate-to-up")[i]).removeClass("animate-up-lazy");
											}
										};

										//往下滚目标元素出现在可视区域执行向左动画
										for (var i = 0; i < $(".animate-to-left").length; i++) {
											if(  $($(".animate-to-left")[i]).offset().top > jQuery(window).scrollTop() && $($(".animate-to-left")[i]).offset().top -500 < jQuery(window).scrollTop() + jQuery(window).height()  ){
												$($(".animate-to-left")[i]).addClass("animate-left-lazy");
											}else{
												$($(".animate-to-left")[i]).removeClass("animate-left-lazy");
											}
										};

						 } else {
						  	// alert("上");


										// 往上滚目标元素出现在可视区域执行向上渐显动画动画
										for (var i = 0; i < $(".animate-to-down").length; i++) {
											if(  $($(".animate-to-down")[i]).offset().top + $($(".animate-to-down")[i]).outerHeight() + 200 > jQuery(window).scrollTop() &&  $($(".animate-to-down")[i]).offset().top + $($(".animate-to-down")[i]).outerHeight() + 200 < jQuery(window).scrollTop() + jQuery(window).height() ){
												$($(".animate-to-down")[i]).addClass("animate-down-lazy");
											}else{
												$($(".animate-to-down")[i]).removeClass("animate-down-lazy");
											}
										};

										//往上滚目标元素出现在可视区域执行向左动画
										for (var i = 0; i < $(".animate-to-left").length; i++) {
											if(  $($(".animate-to-left")[i]).offset().top = jQuery(window).scrollTop()  ){
												$($(".animate-to-left")[i]).addClass("animate-left-lazy");
											}else{
												$($(".animate-to-left")[i]).removeClass("animate-left-lazy");
											}
										};

						 }
					toppos = scrollTop;
					});

})


// 在可视区域
// $("#item").offset().top > jQuery(window).scrollTop() && $("#item").offset().top < jQuery(window).scrollTop() + jQuery(window).height()

//元素顶端到页面顶端的距离
//$("#item").offset().top
//
//jQuery(window).scrollTop()
//浏览器窗口顶端到页面顶端的距离
//
//jQuery(window).height()
//浏览器可视区域高度
//
//
//
//
//JavaScript2：
// jQuery('#item').outerHeight()
// #item 的实际尺寸,即 height+padding+border

// JavaScript3：
// jQuery('#item').outerHeight(true)
// #item的实际尺寸及外边距,即 height+padding+border+margin



// JavaScript1：
// jQuery(window).scrollTop()>(jQuery('#item').offset().top+jQuery('#item').outerHeight())
// 这个表达式结果为true时,表示元素已经向上滚动,并超出了可视区域.
// 情况2: 与情况1相反,向下滚动的过程,页面顶部的偏移量是在不断减少中,所以当它小于元素偏移量与可视区域高度的差值的时候,元素则向下并超出了可视区域,即

// JavaScript2：
// jQuery(window).scrollTop()<</span>(jQuery('#item').offset().top-jQuery(window).height())


// 那么结论就是将这两种情况作或运算即可达到目的.以下表达式结果如果为true,则 #item 不在可视区域内.反之则在可视区域内.

// JavaScript3：
// (jQuery(window).scrollTop()>(jQuery('#item').offset().top+jQuery('#item').outerHeight()))||((jQuery(window).scroll




					// 判断鼠标上下滚动方向
					// var toppos = 0; 
					// $(window).scroll(function(){
					//  	var scrollTop = $(window).scrollTop();
					// 	 if(scrollTop > toppos){
					// 	  	console.log("下"); 

					// 	 } else {
					// 	  	// alert("上");
					// 	 }
					// toppos = scrollTop;
					// });