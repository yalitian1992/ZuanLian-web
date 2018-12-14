$(function () {

    // 判断鼠标上下滚动方向
    var toppos = 0;
    $(window).scroll(function (event) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > toppos) {
            // 往下滚目标元素出现在可视区域执行向上渐显动画动画
            for (var i = 0; i < $(".animate-left").length; i++) {


                //向左滑动
                if ($($(".animate-left")[i]).offset().top > $(window).scrollTop() && $($(".animate-left")[i]).offset().top - 0 < $(window).scrollTop() + $(window).height()) {
                    $($(".animate-left")[i]).addClass("animate-left-nomal");
                };

                if ($($(".animate-left")[i]).offset().top < $(window).scrollTop()) {
                    $($(".animate-left")[i]).removeClass("animate-left-nomal");
                };

                if ($($(".animate-left")[i]).offset().top - 0 > $(window).scrollTop() + $(window).height()) {
                    $($(".animate-left")[i]).removeClass("animate-left-nomal");
                };

                //向右滑动
                if ($($(".animate-right")[i]).offset().top > $(window).scrollTop() && $($(".animate-right")[i]).offset().top - 0 < $(window).scrollTop() + $(window).height()) {
                    $($(".animate-right")[i]).addClass("animate-right-nomal");
                };


                if ($($(".animate-right")[i]).offset().top < $(window).scrollTop()) {
                    $($(".animate-right")[i]).removeClass("animate-right-nomal");
                };

                if ($($(".animate-right")[i]).offset().top - 0 > $(window).scrollTop() + $(window).height()) {
                    $($(".animate-right")[i]).removeClass("animate-right-nomal");
                };

                //渐隐渐显
                // if ($($(".animate-show")[i]).offset().top > $(window).scrollTop() && $($(".animate-show")[i]).offset().top - 0 < $(window).scrollTop() + $(window).height()) {
                //     $($(".animate-show")[i]).addClass("animate-show-nomal");
                // };


                // if ($($(".animate-show")[i]).offset().top < $(window).scrollTop()) {
                //     $($(".animate-show")[i]).removeClass("animate-show-nomal");
                // };

                // if ($($(".animate-show")[i]).offset().top - 0 > $(window).scrollTop() + $(window).height()) {
                //     $($(".animate-show")[i]).removeClass("animate-show-nomal");
                // };

                //向上滑动
                // if ($($(".animate-up")[i]).offset().top > $(window).scrollTop() && $($(".animate-up")[i]).offset().top - 0 < $(window).scrollTop() + $(window).height()) {
                //     $($(".animate-up")[i]).addClass("animate-up-nomal");
                // };


                // if ($($(".animate-up")[i]).offset().top < $(window).scrollTop()) {
                //     $($(".animate-up")[i]).removeClass("animate-up-nomal");
                // };

                // if ($($(".animate-up")[i]).offset().top - 0 > $(window).scrollTop() + $(window).height()) {
                //     $($(".animate-up")[i]).removeClass("animate-up-nomal");
                // };

            };





             // 向上滑动
            for (var i = 0; i < $(".animate-up").length; i++) {


                // 渐隐渐显
                // if ($($(".animate-show")[i]).offset().top > $(window).scrollTop() && $($(".animate-show")[i]).offset().top - 0 < $(window).scrollTop() + $(window).height()) {
                //     $($(".animate-show")[i]).addClass("animate-show-nomal");
                // };


                // if ($($(".animate-show")[i]).offset().top < $(window).scrollTop()) {
                //     $($(".animate-show")[i]).removeClass("animate-show-nomal");
                // };

                // if ($($(".animate-show")[i]).offset().top - 0 > $(window).scrollTop() + $(window).height()) {
                //     $($(".animate-show")[i]).removeClass("animate-show-nomal");
                // };

                if ($($(".animate-up")[i]).offset().top > $(window).scrollTop() && $($(".animate-up")[i]).offset().top - 0 < $(window).scrollTop() + $(window).height()) {
                    $($(".animate-up")[i]).addClass("animate-up-nomal");
                };


                if ($($(".animate-up")[i]).offset().top < $(window).scrollTop()) {
                    $($(".animate-up")[i]).removeClass("animate-up-nomal");
                };

                if ($($(".animate-up")[i]).offset().top - 0 > $(window).scrollTop() + $(window).height()) {
                    $($(".animate-up")[i]).removeClass("animate-up-nomal");
                };

            };








        }
        toppos = scrollTop;
    });

});
