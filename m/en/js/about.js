
$(function(){
	$(".pop-detail").on("click",function(){
		$(this).addClass('pop-sign');
		$(".pop-sign .pop-box").fadeIn(200, function() {
			
		});
	})
	$(".close-btn").on("click",function(){
		$(".pop-sign .pop-box").fadeOut(200, function() {
		$('.pop-sign').removeClass('pop-sign');
		});
	})
})