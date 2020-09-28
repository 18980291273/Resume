$(function () {
    // 设置屏幕滑动事件
    $(document).on("scroll", function () {
        //获取nav的高度
        const navHeight = $(".my-nav-style").height();
        if ($(document).scrollTop() >= navHeight) {
            $(".my-nav-style").addClass("my-nav-black");
        } else {
            $(".my-nav-style").removeClass("my-nav-black");
        }
    });

    //设置导航a标签的点击事件,锚点平滑跳转
    $("#nav li a").on("click", function () {
        //获取当前a标签的hush值，href的值,hash值是dom对象具有的属性，需要转化为jquery对象
        let hashValue = $(this.hash);
        //获取当前a标签对应的页面模块距离顶部的高度
        let aTop = hashValue.offset().top;
        //设置屏幕滑动的高度和平滑滑动
        $("html,body").animate({
            scrollTop: aTop //设置屏幕滑动的高度为a标签对应的页面模块距离顶部的高度
        }, 900);    //设置动画滑动的时间，单位：毫秒
    });

    //设置下滑按钮的点击事件
    $(".decline").on("click", function () {
        //获取data-content离浏览器顶部的距离
        let sectionTop = $("#data-content").offset().top;
        //设置屏幕下滑的高度和时间
        $("html,body").animate({
            scrollTop: sectionTop
        }, 500);
    });

    //设置iso过滤
    $(".grid").isotope();   //初始化
    //设置各类a标签的点击事件
    $(".btn-group a").on("click", function () {
        //当点击事件发生时，移除全部按钮的默认样式，并添加到点击的按钮上
        $(".btn-group .btn-active").removeClass("btn-active");
        $(this).addClass("btn-active");

        //获取当前data-filter的值
        let filterValue = $(this).attr("data-filter");
        //将获取的值，引用到isotope插件上
        $(".grid").isotope({
            //注意：data-filter的属性值要和对应div的class值相同
            filter: filterValue
        });
    });

    //设置轮播自动播放
    $("#carousel-wrap").carousel({
        interval: 2000
    });
})