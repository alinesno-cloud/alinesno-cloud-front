$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(document).scrollTop();                                  //定义变量，获取滚动条的高度
        var menu = $("#lb-section-menu");                                   //定义变量，抓取#lb-section-menu
        var items = $("#contentBox").find(".lb-section-indicator-flag");    //定义变量，查找.lb-section-indicator-flag

        var curId = "";                             //定义变量，当前所在的楼层item #id

        items.each(function(){
            var m = $(this);                        //定义变量，获取当前类
            var itemsTop = m.offset().top;          //定义变量，获取当前类的top偏移量
            if(top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });

        //给相应的楼层设置lb-active,取消其他楼层的lb-active
        var curLink = menu.find(".lb-active");
        if( curId && curLink.attr("href") != curId ){
            curLink.removeClass("lb-active");
            menu.find( "[href=" + curId + "]" ).addClass("lb-active");
        }
    });
});
