$(function(){
		$("#menu a.hover").mousemove(function(){
             $(this).addClass("hover-change");
             $(".hover-change .span1").animate({"opacity":"1"},0);
             $(".hover-change .span2").animate({"opacity":"0"},0);
             $(".hover-change .span3").animate({"opacity":"1"},0);
		})
		$("#menu a.hover").mouseout(function(){
			// console.log(3)
             $(".hover-change .span1").animate({"opacity":"0"},0);
             $(".hover-change .span2").animate({"opacity":"0.3"},0);
             $(".hover-change .span3").animate({"opacity":"0"},0);
             $(".hover-change").removeClass("hover-change");
		})
})