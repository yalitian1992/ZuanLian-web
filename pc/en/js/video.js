
//监听浏览器窗口大小
$(function(){
		var videoStartWidth = $(window).width();
		var videoStartHeight = $(window).height();
		if (videoStartWidth / videoStartHeight > 1200 / 680) {
			$("#v1").removeClass('video-height');
			$("#v1").addClass('video-width');
		}else{
			$("#v1").removeClass('video-width');
			$("#v1").addClass('video-height');
		};

	$(window).resize(function() {
		var videoChangeWidth = $(this).width();
		var videoChangeHeight = $(this).height();

		if (videoChangeWidth / videoChangeHeight > 1200 / 680) {
			$("#v1").removeClass('video-height');
			$("#v1").addClass('video-width');
		}else{
			$("#v1").removeClass('video-width');
			$("#v1").addClass('video-height');
		};
	});
})



/*	//jquery监听浏览器窗口大小以及获取窗口大小
	$(window).resize(function() {  
	var width = $(this).width();  
	var height = $(this).height();  
	});  */