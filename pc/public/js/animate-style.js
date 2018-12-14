$(function(){


					// 判断是否在浏览器可视区域


					// 网页加载完成添加默认向上动画
					for (var i = 0; i < $(".animate.animate-up").length; i++) {
						if(  $($(".animate.animate-up")[i]).offset().top > jQuery(window).scrollTop() && $($(".animate.animate-up")[i]).offset().top < jQuery(window).scrollTop() + jQuery(window).height()  ){
							$($(".animate.animate-up")[i]).removeClass("animate-up-none");
							$($(".animate.animate-up")[i]).addClass("animate-up-show");
						}
					};
					for (var i = 0; i < $(".animate.animate-left").length; i++) {
						if(  $(".animate.animate-left").offset().top > jQuery(window).scrollTop() && $(".animate.animate-left").offset().top < jQuery(window).scrollTop() + jQuery(window).height()  ){
							$($(".animate.animate-left")[i]).removeClass("animate-left-none");
							$($(".animate.animate-left")[i]).addClass("animate-left-show");
						}
					};
					for (var i = 0; i < $(".animate.animate-right").length; i++) {
						if(  $(".animate.animate-right").offset().top > jQuery(window).scrollTop() && $(".animate.animate-right").offset().top < jQuery(window).scrollTop() + jQuery(window).height()  ){
							$($(".animate.animate-right")[i]).removeClass("animate-right-none");
							$($(".animate.animate-right")[i]).addClass("animate-right-show");
						}
					};








					// 判断鼠标上下滚动方向
					var toppos = 0; 
					$(window).scroll(function(event){
					 	var scrollTop = $(window).scrollTop();
						 if(scrollTop > toppos){
						  	// console.log("下"); 
						  	 


										// 往下滚目标元素出现在可视区域执行向上渐显动画动画
										for (var i = 0; i < $(".animate.animate-up").length; i++) {
											if(  $($(".animate.animate-up")[i]).offset().top <  jQuery(window).scrollTop() + jQuery(window).height() +  $($(".animate.animate-up")[i]).height() && $($(".animate.animate-up")[i]).offset().top > jQuery(window).scrollTop() + jQuery(window).height()  ){
												
												$($(".animate.animate-up")[i]).addClass("animate-up-show");
											}else if (  $($(".animate.animate-up")[i]).offset().top < jQuery(window).scrollTop() - $($(".animate.animate-up")[i]).height() ) {
												$($(".animate.animate-up")[i]).removeClass("animate-up-show");
												$($(".animate.animate-up")[i]).removeClass("animate-up-show");
												$($(".animate.animate-up")[i]).removeClass("animate-up-none");
												$($(".animate.animate-up")[i]).addClass("animate-down-none");
											}
										};
										for (var i = 0; i < $(".animate.animate-left").length; i++) {
											if(  $($(".animate.animate-left")[i]).offset().top > jQuery(window).scrollTop() && $($(".animate.animate-left")[i]).offset().top +200 < jQuery(window).scrollTop() + jQuery(window).height()  ){
												
												$($(".animate.animate-left")[i]).addClass("animate-left-show");
											}else{
												// $($(".animate.animate-up")[i]).removeClass("animate-up-show");
											}
										};
										for (var i = 0; i < $(".animate.animate-right").length; i++) {
											if(  $($(".animate.animate-right")[i]).offset().top > jQuery(window).scrollTop() && $($(".animate.animate-right")[i]).offset().top +200 < jQuery(window).scrollTop() + jQuery(window).height()  ){
												
												$($(".animate.animate-right")[i]).addClass("animate-right-show");
											}else{
												// $($(".animate.animate-up")[i]).removeClass("animate-up-show");
											}
										};

						 } else {
						  	// alert("上");
										for (var i = 0; i < $(".animate.animate-down").length; i++) {
											if(    $($(".animate.animate-down")[i]).offset().top < jQuery(window).scrollTop() && $($(".animate.animate-down")[i]).offset().top > jQuery(window).scrollTop() - $($(".animate.animate-down")[i]).height() ){
												
												$($(".animate.animate-down")[i]).addClass("animate-down-show");
											}else if ( $($(".animate.animate-down")[i]).offset().top > jQuery(window).scrollTop() + jQuery(window).height() ) {
												$($(".animate.animate-down")[i]).removeClass("animate-up-show");
												$($(".animate.animate-down")[i]).removeClass("animate-down-show");
												$($(".animate.animate-down")[i]).removeClass("animate-down-none");
												$($(".animate.animate-down")[i]).addClass("animate-up-none");
											}
										};
										for (var i = 0; i < $(".animate.animate-left").length; i++) {
											if(  $($(".animate.animate-left")[i]).offset().top > jQuery(window).scrollTop() && $($(".animate.animate-left")[i]).offset().top +200 < jQuery(window).scrollTop() + jQuery(window).height()  ){
												
												$($(".animate.animate-left")[i]).addClass("animate-left-show");
											}else{
												// $($(".animate.animate-up")[i]).removeClass("animate-up-show");
											}
										};
										for (var i = 0; i < $(".animate.animate-right").length; i++) {
											if(  $($(".animate.animate-right")[i]).offset().top > jQuery(window).scrollTop() && $($(".animate.animate-right")[i]).offset().top +200 < jQuery(window).scrollTop() + jQuery(window).height()  ){
												
												$($(".animate.animate-right")[i]).addClass("animate-right-show");
											}else{
												// $($(".animate.animate-up")[i]).removeClass("animate-up-show");
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