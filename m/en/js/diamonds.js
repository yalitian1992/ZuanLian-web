// 资源加载函数
var imgUrls = [
    {name: "pic_1", path: "images/diamonds/1.png"},
    {name: "pic_2", path: "images/diamonds/2.png"},
    {name: "pic_3", path: "images/diamonds/3.png"},
    {name: "pic_4", path: "images/diamonds/4.png"},
    {name: "pic_5", path: "images/diamonds/5.png"},
    {name: "pic_6", path: "images/diamonds/6.png"},
    {name: "pic_7", path: "images/diamonds/7.png"},
    {name: "pic_8", path: "images/diamonds/8.png"},
    {name: "pic_9", path: "images/diamonds/9.png"},
    {name: "pic_10", path: "images/diamonds/10.png"},
    {name: "pic_11", path: "images/diamonds/11.png"},
    {name: "pic_12", path: "images/diamonds/12.png"},
    {name: "pic_13", path: "images/diamonds/13.png"},
    {name: "pic_14", path: "images/diamonds/14.png"},
    {name: "pic_15", path: "images/diamonds/15.png"},
    {name: "pic_16", path: "images/diamonds/16.png"},
    {name: "pic_17", path: "images/diamonds/17.png"},
    {name: "pic_18", path: "images/diamonds/18.png"},
    {name: "pic_19", path: "images/diamonds/19.png"},
    {name: "pic_20", path: "images/diamonds/20.png"},
    {name: "pic_21", path: "images/diamonds/21.png"},
    {name: "pic_22", path: "images/diamonds/22.png"},
    {name: "pic_23", path: "images/diamonds/23.png"},
    {name: "pic_24", path: "images/diamonds/24.png"},
    {name: "pic_25", path: "images/diamonds/25.png"},
    {name: "pic_26", path: "images/diamonds/26.png"},
    {name: "pic_27", path: "images/diamonds/27.png"},
    {name: "pic_28", path: "images/diamonds/28.png"},
    {name: "pic_29", path: "images/diamonds/29.png"},
    {name: "pic_30", path: "images/diamonds/30.png"},
    {name: "pic_31", path: "images/diamonds/31.png"},
    {name: "pic_32", path: "images/diamonds/32.png"},
    {name: "pic_33", path: "images/diamonds/33.png"},
    {name: "pic_34", path: "images/diamonds/34.png"},
    {name: "pic_35", path: "images/diamonds/35.png"},
    {name: "pic_36", path: "images/diamonds/36.png"},
    {name: "pic_37", path: "images/diamonds/37.png"},
    {name: "pic_38", path: "images/diamonds/38.png"},
    {name: "pic_39", path: "images/diamonds/39.png"},
    {name: "pic_40", path: "images/diamonds/40.png"},
    {name: "pic_41", path: "images/diamonds/41.png"},
    {name: "pic_42", path: "images/diamonds/42.png"},
    {name: "pic_43", path: "images/diamonds/43.png"},
    {name: "pic_44", path: "images/diamonds/44.png"},
    {name: "pic_45", path: "images/diamonds/45.png"},
    {name: "pic_46", path: "images/diamonds/46.png"},
    {name: "pic_47", path: "images/diamonds/47.png"},
    {name: "pic_48", path: "images/diamonds/48.png"},
    {name: "pic_49", path: "images/diamonds/49.png"},
    {name: "pic_50", path: "images/diamonds/50.png"},
    {name: "pic_51", path: "images/diamonds/51.png"},
    {name: "pic_52", path: "images/diamonds/52.png"},
    {name: "pic_53", path: "images/diamonds/53.png"},
    {name: "pic_54", path: "images/diamonds/54.png"},
    {name: "pic_55", path: "images/diamonds/55.png"},
    {name: "pic_56", path: "images/diamonds/56.png"},
    {name: "pic_57", path: "images/diamonds/57.png"}
];

function loadImages(imgUrls, callback) {
    // 加载的计数器
    var count = imgUrls.length; // 设置它的值为图片的数量
    // 一个对象，用于存储我们创建出来的图片标签
    var imgEls = {};
    for (var i = 0; i < imgUrls.length; i++) {
        var imgEl = new Image(); // 创建图片标签
        imgEl.src = imgUrls[i].path; // 设置图片的资源路径，让图片标签开始加载资源
        var name = imgUrls[i].name; // 图片的名字
        imgEls[name] = imgEl;
        imgEl.addEventListener('load', function () { // 监听load事件
            count--; // 有一张图片已经加载完了，所以计数器减一
            if (count == 0) { // 代表所有图片已经加载完了
                // 我们图片加载完成之后要传出去，因为是异步的所以不能return，只好用callback传递数值
                callback(imgEls);
            }
        })
    }
}

loadImages(imgUrls, function (imgEls) {
    var diamonds_list = 0;
    setInterval(function () {
        get_diamonds_list();
        ;
        (function ($) {
            $(".diamonds-rotate").empty();
            $(".diamonds-rotate").append(imgEls[("pic_" + diamonds_list)]);
        })(Zepto);
    }, 50)
    //获取钻石列表函数
    function get_diamonds_list() {
        if (diamonds_list < 56) {
            diamonds_list++;
        } else {
            diamonds_list = 1;
        }
    }

})
