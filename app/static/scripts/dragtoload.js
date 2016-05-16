$(document).ready(
    function(){
    var range = 50;             //距下边界长度/单位px
    var totalheight = 0;
    var main = $("#content");                     //主体元素
    $(window).scroll(function(){
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)

        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if(($(document).height()-range) <= totalheight) {
            main.append("<div style='border:1px solid tomato;margin-top:20px;color:#ac;>hello world</div>");
        }
    });
}
);