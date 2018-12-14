// h5视频全屏函数
function launchFullScreen(element) { 
    if(element.requestFullscreen) { 
    element.requestFullscreen(); 
    } else if(element.mozRequestFullScreen) { 
    element.mozRequestFullScreen(); 
    } else if(element.webkitRequestFullscreen) { 
    element.webkitRequestFullscreen(); 
    } else if(element.msRequestFullscreen) { 
    element.msRequestFullscreen(); 
    } 
} 


$(function () {


    // 首屏dialink图切换
    var bannerIdx = 1;
    $(".dialink1").fadeIn();
    var timer = setInterval(function(){
        bannerChange();
    }, 5000)

    function bannerChange(){
        bannerIdx++;
        // console.log(bannerIdx);
        if (bannerIdx == 1) {
            $(".dialink1").fadeIn();
            $(".dialink2").fadeOut();
            $(".dialink3").fadeOut();
        }else if (bannerIdx == 2) {
            $(".dialink1").fadeOut();
            $(".dialink3").fadeOut();
            $(".dialink2").fadeIn();
            bannerIdx = 0;
        }
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
    

    // 首页焦点banner图
    $(".focus-advertising").fadeIn(400);
    $(".focus-advertising .focus-zhezhao .focus-banner .focus-close-btn").on("click",function(){
        $(".focus-advertising").fadeOut(400);
    })
     var focusBannerTimer = setInterval(function(){
        $(".focus-advertising .focus-zhezhao .focus-banner").addClass("active");
        $(".focus-advertising .focus-zhezhao").addClass('active')
     },2000)
     
    

    // 第四屏详情部分
    $(".swiper-slide-4 .content-dsc-button-show").click(function() {
        $(".swiper-slide-4 .content").fadeOut(400, function() {
        });

        $(".swiper-slide-4 .content-dsc").fadeIn(400, function() {
            
        });
        $(".content-dsc-button-hidden").fadeIn(400, function() {
            
        });
        $(".main-nav .nav-button").fadeOut(400, function() {
            
        });
    });
    $(".content-dsc-button-hidden").click(function() {
        $(".swiper-slide-4 .content").fadeIn(400, function() {
            
        });
        $(".swiper-slide-4 .content-dsc").fadeOut(400, function() {
            
        });
        $(".content-dsc-button-hidden").fadeOut(400, function() {
            
        });
        $(".main-nav .nav-button").fadeIn(400, function() {
            
        });
    });


    //音乐播放暂停
    // $("#music")[0].play();
    // $(".musiccontor").children("span").addClass('musicplay')
    // $(".musiccontor").on('click', function(event) {
    //     if ( $("#music")[0].paused) {
    //         $("#music")[0].play();
    //         $(".musiccontor").children("span").addClass('musicplay')
    //     }else{
    //         $("#music")[0].pause();
    //         $(".musiccontor").children("span").removeClass('musicplay')
    //     };
    // });


    // 第二屏视频播放暂停
    
    $(".video-button").on("click",function(event){
        $(".nomal").css({
            zIndex: '-1'
        });
        $(".movie #diamond-story").fadeIn(400);
        $(".movie #diamond-story")[0].play();
        if($("#music")[0].paused == false){
            $("#music")[0].pause();
        }
        //让视频全屏自动全屏播放
        launchFullScreen($(".movie #diamond-story")[0]);
        // screen.orientation.lock('landscape');
    });








        // 默认背景图片尺寸
        $(".main-bgc .up-down").css({
                    width: $(window).width(),
                    height: $(window).height() + 1 + "px"
                });
        // 根据浏览器窗口尺寸设置尺寸
        $(window).resize(function() {
                var screenWidth = $(window).width();
                var screenHeight = $(window).height();
                $(".main-bgc .up-down").css({
                    width: screenWidth,
                    height: screenHeight
                });
        });


        // 监听设备窗口大小，设置主屏幕背景是按宽度百分比还是高度百分比显示
        // var bgcImgStartWidth = $(window).width();
        // var bgcImgStartHeight = $(window).height();
        // if (bgcImgStartWidth / bgcImgStartHeight > 1200 / 680) {
        //     $(".main-bgc img").removeClass('img-height');
        //     $("#v1").addClass('img-width');
        // }else{
        //     $(".main-bgc img").removeClass('img-width');
        //     $(".main-bgc img").addClass('img-height');
        // };

        // $(window).resize(function() {
        //     var bgcImgChangeWidth = $(this).width();
        //     var bgcImgChangeHeight = $(this).height();

        //     if (bgcImgChangeWidth / bgcImgChangeHeight > 1200 / 680) {
        //         $(".main-bgc img").removeClass('img-height');
        //         $(".main-bgc img").addClass('img-width');
        //     }else{
        //         $(".main-bgc img").removeClass('img-width');
        //         $(".main-bgc img").addClass('img-height');
        //     };
        // });


    // 第六屏箭头的消失与出现
    



    new Swiper('#swiper-container-1', {
        resistanceRatio : 0.68,
        direction: 'vertical',
        pagination: '.swiper-pagination',
        paginationBulletRender: function () {
            return '';
        },
        onTouchMove: function(swiper,direction){
                if(swiper.activeIndex == 6){
                     $('.bottom').toggleClass('bottom-show');
                     $('.swiper-slide-7').toggleClass('up');
                }else{
                     $('.bottom').removeClass('bottom-show');
                     $('.swiper-slide-7').removeClass('up');
                }


        },
        onTouchEnd: function (swiper) {
            
        },

        onTransitionEnd: function(swiper){
            // $('.animate-up').removeClass('animate-up-nomal');
        },
        //滑动前
        onSlideChangeStart: function(swiper){



                    // 背景
                    
                        $(".main-bgc .up-down").animate({
                            "margin-top": - ($(window).height()) * (swiper.activeIndex) + "px" 
                        },300);






            $('.animate-up') 
            switch (swiper.activeIndex) {
                case 0:
                    // console.log(2);
                case 1:
                    $('.animate-up').addClass('animate-up-nomal');
                    break;
                case 6:
                    $('.swiper-slide-8 .content .text > img:nth-child(2)').addClass('animte-7');
                    break;
            }

            switch (swiper.activeIndex) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:
                    break;
                case 9:
                    break;
                case 10:
                    break;
                case 11:
                    break;
                case 12:
                    break;
            }


        },
        //滑动后
        onSlideChangeEnd: function (swiper) {

                // var isClassActive = $( $(".swiper-slide-active .swiper-slide")[0] ).hasClass('swiper-slide-active');
                // console.log(isClassActive)
                
                // if($(".swiper-slide .swiper-slide")){

                // }

            // 滑动后
            switch (swiper.activeIndex) {
                case 0:
                    $('.animate-up').removeClass('animate-up-nomal');
                    break;
                case 1:
                    // $('.swiper-slide-2 .content').addClass('animate-up-nomal');
                    $('.swiper-slide-2 .content .text p').addClass('animte-2');
                    break;
                case 2:
                    $('.animate-up').removeClass('animate-up-nomal');
                    break;
                case 3:
                    $('.animate-up').removeClass('animate-up-nomal');

                    break;
                case 6:
                    $('.swiper-slide-8 .content .text > img:nth-child(2)').addClass('animte-7');
                    break;
                case 7:
                    break;
                case 8:
                    break;
                case 9:
                    break;
                case 10:
                    break;
                case 11:
                    break;
                case 12:
                    break;
            }

            // 粒子动画
            switch (swiper.activeIndex) {
                case 0:
                    $('.lizi').fadeOut(400);
                    break;
                case 1:
                    $('.lizi').fadeIn(400);
                    break;
                case 2:
                    $('.lizi').fadeIn(400);
                    break;
                case 3:
                    $('.lizi').fadeOut(400);
                    break;
                case 5:
                    $('.lizi').fadeOut(400);
                    break;
                case 6:
                    $('.lizi').fadeIn(400);
                    break;
                case 7:
                    $('.lizi').fadeOut(400);
                    break;
                case 8:
                    $('.lizi').fadeOut(400);
                    break;
                case 9:
                    $('.lizi').fadeOut(400);
                    break;
                case 10:
                    $('.lizi').fadeOut(400);
                    break;
            }





            if (swiper.activeIndex != 2) {
                $('.swiper-slide-3 .content .little-title-1').removeClass('little-3-1');
                $('.swiper-slide-3 .content .little-title-2').removeClass('little-3-2');
                $('.swiper-slide-3 .content .little-title-3').removeClass('little-3-3');
                $('.swiper-slide-3 .content .little-title-4').removeClass('little-3-4');
            }
            if (swiper.activeIndex != 0) {
                $('.swiper-slide-1 .content .sy-logo').removeClass('animte-1');
                $('.swiper-slide-1 .content > span').removeClass('animte-1');
                $('.swiper-slide-1 .content > p').removeClass('animte-1');
            }

            if (swiper.activeIndex != 1) {
                $('.swiper-slide-2 .content > h3').removeClass('animte-2');
                $('.swiper-slide-2 .content .text p').removeClass('animte-2');
            }

            if (swiper.activeIndex != 6) {
                $('.swiper-slide-8 .content .text > img:nth-child(2)').removeClass('animte-7');
                //$('.bottom').css({'display':'none'}).fadeOut(1000);
            }


            if (swiper.activeIndex != 3) {
                $('.swiper-slide-5 .content-w > img:nth-child(1)').removeClass('animte-4');
                $('.swiper-slide-5 .content-w > img:nth-child(2)').removeClass('animte-4');

                $('.swiper-slide-5 .content-m > img:nth-child(1)').removeClass('animte-4');
                $('.swiper-slide-5 .content-m > img:nth-child(2)').removeClass('animte-4');
                $('.swiper-slide-5 .content-m > img:nth-child(3)').removeClass('animte-4');

                $('.swiper-slide-5 .content-l > img:nth-child(1)').removeClass('animte-4');
                $('.swiper-slide-5 .content-l > img:nth-child(2)').removeClass('animte-4');
                $('.swiper-slide-5 .content-l > img:nth-child(3)').removeClass('animte-4');
            }
        }
    })

  // 轮播图

    new Swiper('#swiper-container-2', {
        direction: 'horizontal',
        paginationBulletRender: function () {
            return '';
        },
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflow: {
            rotate: 0,
            stretch: -180,
            depth: 60,
            modifier: 2,
            slideShadows: false
        },
    })


    var myswiper = new Swiper('#swiper-container-3', {
        direction: 'horizontal',
        paginationBulletRender: function () {
            return '';
        },
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })

    //

    // 第六屏弹出层
    $('.little').on('click', function () {
        $('.swiper-slide-6 .diamonds').fadeOut(400);
        $('.swiper-slide-6 .content').fadeOut(400);
        $('#swiper-container-3').fadeIn(400);

        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 1;

        $(".main-nav .nav-button").fadeOut(400, function() {
            
        });
        $("#close").fadeIn(400);
    });
    $('#close').on('click', function () {
        $('.swiper-slide-6 .diamonds').fadeIn(400);
        $('.swiper-slide-6 .content').fadeIn(400);
        $('#swiper-container-3').fadeOut(400);

        $('#swiper-container-3').css({'visibility': 'hidden'});
        $(".main-nav .nav-button").fadeIn(400, function() {
            
        });
        $("#close").fadeOut(400);
    });
})