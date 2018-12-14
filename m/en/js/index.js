$(function () {


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
        var testWidth =  $(window).width();
        var testHeight = $(window).height();
        $(".test").css({
            width: testWidth,
            height: testHeight
        });



    // 第六屏箭头的消失与出现
    



    new Swiper('#swiper-container-1', {
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







            // alert('事件触发了;');
            $('.animate-up') 
            switch (swiper.activeIndex) {
                case 0:
                    // console.log(2);
                case 1:
                    $('.animate-up').addClass('animate-up-nomal');


                    break;
                case 2:
                    $('.swiper-slide-3 .content .little-title-1').addClass('little-3-1');
                    $('.swiper-slide-3 .content .little-title-2').addClass('little-3-2');
                    $('.swiper-slide-3 .content .little-title-3').addClass('little-3-3');
                    $('.swiper-slide-3 .content .little-title-4').addClass('little-3-4');
                    break;
                case 6:
                    $('.swiper-slide-8 .content .text > img:nth-child(2)').addClass('animte-7');
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

    //µÚÈýÆÁµÄhover
    $('.little-title-1').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 1;
    });

    $('.little-title-2').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 2;
    });

    $('.little-title-3').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 3;
    });

    $('.little-title-4').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'visible'});
        myswiper.initialSlide = 4;
    });

    $('#close').on('click', function () {
        $('#swiper-container-3').css({'visibility': 'hidden'});
    });
})