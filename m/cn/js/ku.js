/*
* @Author: Administrator
* @Date:   2016-11-25 18:16:49
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-25 18:34:37
*/

'use strict';


$(function(){
	$(".click-start").on('click', function(event) {
		console.log(2)
		$("#ku li span").addClass('animate-spread');
		$("#ku li span").css('animation',"none");
	});
})