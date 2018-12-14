
$(function(){



    // 首屏dialink图切换
    var bannerIdx = 1;
    $(".dialink1").fadeIn();
            //自动轮播
    var timer = setInterval(function(){
        bannerChangeToRight();
    }, 5000)
            //向右轮播
    $(".section:nth-child(1) .content .sy-banner .ctrl-right").on('click', function(event) {
        bannerChangeToRight();
    });
            //向左轮播
    $(".section:nth-child(1) .content .sy-banner .ctrl-left").on('click', function(event) {
        // bannerIdx--;
        bannerChangeToLeft();
    });

    function bannerChangeToRight(){
        if (bannerIdx > 2) {
            bannerIdx = 0;
        };

        bannerIdx++;

        // console.log(bannerIdx);
        if (bannerIdx == 1) {
            $(".dialink1").fadeIn();
            $(".dialink2").fadeOut();
            $(".dialink3").fadeOut();
        }
        // else if (bannerIdx == 2) {
        //     $(".dialink1").fadeOut();
        //     $(".dialink3").fadeOut();
        //     $(".dialink2").fadeIn();
        //}
        else if (bannerIdx == 2) {
            $(".dialink1").fadeOut();
            $(".dialink2").fadeOut();
            $(".dialink3").fadeIn();
            bannerIdx = 0;
        }

        return bannerIdx;
    }



    function bannerChangeToLeft(){

        if (bannerIdx < 2) {
            bannerIdx = 4;
        };

        bannerIdx--;
        
        // console.log(bannerIdx);
        if (bannerIdx == 1) {
            $(".dialink1").fadeIn();
            $(".dialink2").fadeOut();
            $(".dialink3").fadeOut();
            bannerIdx = 3;
        }
        // else if (bannerIdx == 2) {
        //     $(".dialink1").fadeOut();
        //     $(".dialink3").fadeOut();
        //     $(".dialink2").fadeIn();
        //}
        else if (bannerIdx == 2) {
            $(".dialink1").fadeOut();
            $(".dialink2").fadeOut();
            $(".dialink3").fadeIn();
        }

        return bannerIdx;
    }





    // var bannerIdx = 1;
    // var timer = setInterval(function(){
    //     bannerIdx++;
    //     console.log(bannerIdx);
    //     if (bannerIdx == 1) {
    //         $(".dialink1").addClass('active');
    //         $(".dialink2").removeClass('active');
    //         $(".dialink3").removeClass('active');
    //     }else if (bannerIdx == 2) {
    //         $(".dialink1").removeClass('active');
    //         $(".dialink3").removeClass('active');
    //         $(".dialink2").addClass('active');
    //     }else if (bannerIdx == 3 ) {
    //         $(".dialink1").removeClass('active');
    //         $(".dialink2").removeClass('active');
    //         $(".dialink3").addClass('active');
    //         bannerIdx = 0;
    //     };
    // }, 3000)

    //音乐播放暂停
    $(".musiccontor").children("span").addClass('musicplay')
    $(".musiccontor").on('click', function(event) {
        if ( $("#music")[0].paused) {
            $("#music")[0].play();
            $(".musiccontor").children("span").addClass('musicplay')
        }else{
            $("#music")[0].pause();
            $(".musiccontor").children("span").removeClass('musicplay')
        };
    });


    // 背景图片宽高设置
    // 
        // 默认背景图片尺寸
        $(".main-bgc .up-down .bgc-img").css({
                    width: $(window).width(),
                    height: $(window).height()
                });
        $(".movie .movie-kuang").css("height",$("#diamond-story").height())
        // 根据浏览器窗口尺寸设置尺寸
        $(window).resize(function() {
                var screenWidth = $(window).width();
                var screenHeight = $(window).height();
                $(".main-bgc .up-down .bgc-img").css({
                    width: screenWidth,
                    height: screenHeight
                });
                $(".movie").css({
                            width: $(window).width(),
                            height: $(window).height()
                        });
            $(".movie .movie-kuang").css({
                        height: $("#diamond-story").height()
                    });
        });

    // 第二屏视频钻石的故事
        $(".movie").css({
                    width: $(window).width(),
                    height: $(window).height()
                });
        $(".img-button").on("click",function(){
            $(".movie").fadeIn(400);
            $("#diamond-story")[0].play();
            $(".movie .movie-kuang").css({
                        height: $("#diamond-story").height()
                    });

            if ( $("#music")[0].paused == false) {
                $("#music")[0].pause();
                $(".musiccontor").children("span").removeClass('musicplay')
            }

        })        
        $(".movie-close-button").on("click",function(){
            $(".movie").fadeOut(400);
            $("#diamond-story")[0].pause();
        })

    // 滚屏动画
    $('#dowebok').fullpage({
        sectionsColor: [],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7','page8', 'page9', 'page10','page11'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){


                        //左侧导航条滑块动画
                        if(index == 0) {
                                $("#menu li:nth-child(1)").animate({
                                    "opacity":"1"
                                },1000, function() {
                                    /* stuff to do after animation is complete */
                                });
                                $("#menu li:nth-child(1)").animate({
                                    "opacity":"0"
                                },1000, function() {
                                    /* stuff to do after animation is complete */
                                });
                                $("#menu li:nth-child(1)").animate({
                                    "opacity":"1"
                                },1000, function() {
                                    /* stuff to do after animation is complete */
                                });
                        }
                        

                        // 滚到首页视频自动播放
                        if(index == 1){
                            $("#v1")[0].play();

                            $(".main-bgc .up-down").animate({
                                "margin-top": $(window).height()+"px" 
                            },1000);

                            // $("#v1").css("margin-top",-300 + "px" );
                            $("#v1").css("margin-top", 0 +"px" );

                        };

                        //如果滚到的是2、3、4、5 显示源起，否则隐藏源起
                        if( index == 2 || index == 3 || index == 4 || index == 5 ) {
                            $("#menu .yuanqi").addClass('active-active')
                        }else {
                            $("#menu .yuanqi").removeClass('active-active')
                        }


                        // 滚到这屏钻石动画
                        if (index == 2) {
                            $(".diamonds").stop();
                            $(".diamonds").css("left","600px");
                            $(".diamonds").fadeIn(1500);


                            // console.log(2)
                        };
                        if (index == 5 || index == 8 || index == 11) {
                            $(".diamonds").stop();
                            $(".diamonds").css("left","0px");
                            $(".diamonds").fadeIn(1500);
                                if(index == 8){
                                    // $(".diamonds").css("top","-100px");
                                }
                                if (index == 2) {
                                    $(".diamonds").css("top","-135px");
                                };
                                if (index == 5) {
                                    $(".diamonds").css("top","155px");
                                };
                                if (index == 8) {
                                    $(".diamonds").css("top","0px");
                                };
                                if (index == 11) {
                                    $(".diamonds").css("top","-100px");
                                };
                        }; 
                        //滚动到这屏粒子动画
                    },


        //页面加载完成
        afterRender: function(index){



                        // 结构加载完成视频自动播放
                        $("#v1")[0].play();


                        //结构加载完成是主背景margin的值为屏幕高度，正好显示视频
                        $(".main-bgc .up-down").css("margin-top",$(window).height()+"px");


                        //结构加载完成TOP显示
                        //
                        


                        // 页面文档加载完成给所有animate类添加动画样式，开关在向上滑动向下滑动函数里
                        // 
                        $(".animate").addClass("animate-up");

                        $(".animate:nth-child(1)").addClass("animate-to-up-1");
                        $(".animate:nth-child(2)").addClass("animate-to-up-2");
                        $(".animate:nth-child(3)").addClass("animate-to-up-3");
                        $(".animate:nth-child(4)").addClass("animate-to-up-4");
                        $(".animate:nth-child(5)").addClass("animate-to-up-5");
                        $(".animate:nth-child(6)").addClass("animate-to-up-5");
                        $(".animate:nth-child(7)").addClass("animate-to-up-5");
                        $(".animate:nth-child(8)").addClass("animate-to-up-5");
                        $(".animate:nth-child(9)").addClass("animate-to-up-5");
                        $(".animate:nth-child(10)").addClass("animate-to-up-5");

                        $(".animate:nth-child(1)").addClass("animate-to-down-1");
                        $(".animate:nth-child(2)").addClass("animate-to-down-2");
                        $(".animate:nth-child(3)").addClass("animate-to-down-3");
                        $(".animate:nth-child(4)").addClass("animate-to-down-4");
                        $(".animate:nth-child(5)").addClass("animate-to-down-4");
                        $(".animate:nth-child(6)").addClass("animate-to-down-4");
                        $(".animate:nth-child(7)").addClass("animate-to-down-4");
                        $(".animate:nth-child(8)").addClass("animate-to-down-4");
                        $(".animate:nth-child(9)").addClass("animate-to-down-4");
                        $(".animate:nth-child(10)").addClass("animate-to-down-4");
                    },
        // 'navigation': true,
        onLeave: function(index,nextIndex,direction){





                    if (direction == "down") {

                        // 首页向下滑动前先清除本屏文字动画
                        $(".animate-up").removeClass('animate-up');
                        $(".animate-down").removeClass('animate-down');
                        $(".animate").addClass('animate-up');
                        



                        //向下左侧导航条滑块动画
                        if (index == 0) {
                            $(".huakuai").animate({
                                "height": $("#menu").height()
                            })

                        }else if(index == 1 || index == 2 || index == 3 || index == 4){
                            $(".huakuai").animate({
                                "top": $("#menu li").height() + $("#menu li.min-li").height() * ( index - 1 ),
                                "height": $("#menu li.min-li").height()
                            },1000, function() {
                                /* stuff to do after animation is complete */
                            });

                        }else {
                            $(".huakuai").animate({
                                "height": $("#menu li").height(),
                                "top": $($("#menu li")[index]).height() * (index -3 )
                            },1000, function() {
                                /* stuff to do after animation is complete */
                            });
                        }



                        // 向下滑动背景动画
                        $(".main-bgc .up-down").animate({
                            "margin-top": $(window).height() - ($(window).height()) * (nextIndex-1) + "px" 
                        },500);

                        $("#v1").animate({
                            "margin-top": -$(window).height() + 955 +"px"  
                        },2000);


                        
                        // 向下滑动钻石动画
                        

                        if (index == 2 || index == 5 || index == 8 || index == 11) {
                            $(".diamonds").stop();
                            $(".diamonds").fadeOut(200);

                            // console.log(2)
                        };

                        // 向下滑动粒子动画
                        if (index == 1 ) {
                            $(".lizi").fadeIn(0);
                        };
                        if (index == 2 ) {
                            $(".lizi").fadeOut(0);
                        };
                        if (index == 5 ) {
                            $(".lizi").fadeIn(0);
                        };
                        if (index == 6 ) {
                            $(".lizi").fadeOut(0);
                        };
                        if (index == 10 ) {
                            $(".lizi").fadeIn(0);
                        };
                        

                    };



                    if (direction== "up") {
                        //首页向上滑动前先清除本屏文字动画
                        $(".animate-up").removeClass('animate-up');
                        $(".animate-down").removeClass('animate-down');
                        $(".animate").addClass('animate-down');
                        

                        // 向上滑动粒子动画
                        if (index == 2 ) {
                            $(".lizi").fadeOut(0);
                        };
                        if (index == 3 ) {
                            $(".lizi").fadeIn(0);
                        };
                        if (index == 6 ) {
                            $(".lizi").fadeOut(0);
                        };
                        if (index == 7 ) {
                            $(".lizi").fadeIn(0);
                        };
                        if (index == 11 ) {
                            $(".lizi").fadeOut(0);
                        };
                        


                        //向上滑动左侧导航条滑块动画
                            if(index == 2 ){

                                $(".huakuai").animate({
                                    "height": $("#menu li").height(),
                                    "top": "0"
                                },1000, function() {
                                    /* stuff to do after animation is complete */
                                });
                            }else if ( index == 3 || index == 4 || index == 5 || index == 6){
                                $(".huakuai").animate({
                                    "height": $("#menu li.min-li").height(),
                                    "top": $("#menu li").height() + $("#menu li.min-li").height() * (index - 3 )
                                },1000, function() {
                                    /* stuff to do after animation is complete */
                                });
                            }else {
                                $(".huakuai").animate({
                                    "top": $($("#menu li")[index]).height() * (index - 5 )
                                },1000, function() {
                                    /* stuff to do after animation is complete */
                                });


                            }

                            // 向上滑动背景动画
                            $("#v1").stop();
                            $("#v1").css("margin-top", -$(window).height() + 955 +"px" );

                            $(".main-bgc .up-down").animate({
                                "margin-top": $(window).height() - ($(window).height()) * (nextIndex-1) + "px" 
                            },500);

                            $("#v1").animate({
                                "margin-top": 0 + "px" 
                            },500);


                            // 向上滑动内容动画
                            // 
                            // 
                            // 
                        
                        // 向上滑动钻石动画
                        

                        if (index == 2 || index == 5 || index == 8 || index == 11 ) {
                            $(".diamonds").stop();
                            $(".diamonds").fadeOut(200);

                            // console.log(2)
                        };
                    };



        }
    });



});