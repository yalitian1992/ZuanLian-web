
//监听浏览器窗口大小
$(function(){


		// 根据浏览器窗口尺寸设置尺寸
		var videoStartWidth = $(window).width();
		var videoStartHeight = $(window).height();

		// 设置视频默认尺寸
		if (videoStartWidth / videoStartHeight > 1200 / 680) {
			$("#v1").removeClass('video-height');
			$("#v1").addClass('video-width');
		}else{
			$("#v1").removeClass('video-width');
			$("#v1").addClass('video-height');
		};

		if (videoStartWidth / videoStartHeight > 1200 / 680) {
			$("#v1").removeClass('video-height');
			$("#v1").addClass('video-width');
		}else{
			$("#v1").removeClass('video-width');
			$("#v1").addClass('video-height');
		};


		// 设置视屏随窗口大小尺寸变化
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


		
        $(".main-bgc .up-down .bgc-img").css({
            width: videoStartWidth,
            height: videoStartHeight
        });
	});








})



/*	//jquery监听浏览器窗口大小以及获取窗口大小
	$(window).resize(function() {  
	var width = $(this).width();  
	var height = $(this).height();  
	});  */