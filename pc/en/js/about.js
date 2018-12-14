$(function(){
	// $("#about .box-one .team li .button").on('mouseover', function() {
	// 	console.log(2)
	// 	$(".dsc").stop();
	// 	$(this).siblings(".dsc").fadeIn(550, function() {
	// 		$(".dsc").stop(true,true);
	// 	});
	// })
	// $("#about .box-one .team li .button").on('mouseleave', function() {
	// 	$(this).siblings(".dsc").fadeOut(550, function() {
			
	// 	});
	// 	$(".dsc").stop(true,true);
	// })
	// 
	// 

	$("#about .hover").on('mouseover', function() {
		$("." + $(this).find(".dsc-tab").html()).addClass("dsc-show");
		$("." + $(this).find(".biaoqian-tab").html()).addClass("biaoqian-hidden");
		$(this).siblings('.hover').addClass('zhezhao');
	})
	$("#about .hover").on('mouseleave', function() {
		$("." + $(this).find(".dsc-tab").html()).removeClass("dsc-show");
		$("." + $(this).find(".biaoqian-tab").html()).removeClass("biaoqian-hidden");
		$("#about .hover").siblings('.hover').removeClass('zhezhao');
	})

	////点击详情
	var sow=$(".investor .doc").find("span");
	sow.on("click",function(){
		$(".show_box").fadeIn(200);
		$(".shadow_box").fadeIn(200);
		if($(".show_box").is(":visible")){

			if($(".right_doc").children().length>0){
				return false;
			}else{
				$(".right_doc").append($(this).parent().parent().parent().find('.detailed h4').clone(true));
				$(".right_doc").append($(this).parent().parent().parent().find('.detailed p').clone(true));
			};
			if($(".left_img").children().length>0){
				return false;
			}else{
				$(".left_img").append($(this).parent().parent().parent().find('.detailed img').clone(true));
			}
		}
	});

	$(".investor .close").on("click",function(){
		if($(this).parent().is(":visible")){
			$(this).parent().fadeOut(200);
			$(".shadow_box").fadeOut(200);
			$(".left_img").empty();
			$(".right_doc").empty();
			return false;
		}
	});

$(".celue span").on("click",function(){
	$(".celue .pop-box").fadeIn(200, function() {
		
	});
})
$(".celue .close-btn").on("click",function(){
	$(".celue .pop-box").fadeOut(200, function() {
		
	});
})

$(".guwen span").on("click",function(){
	$(".guwen .pop-box").fadeIn(200, function() {
		
	});
})
$(".guwen .close-btn").on("click",function(){
	$(".guwen .pop-box").fadeOut(200, function() {
		
	});
})




});

