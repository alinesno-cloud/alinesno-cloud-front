// 产品及其类型列表样式初始化
$(function () {
    // 获取第一个产品类型属性值
    var productTypeId = $('.product-type-a-first').attr('id');

    // 遍历产品列表
    $('.product-item-box').each(function () {
        if (productTypeId == $(this).attr('id')) {
            // 获取产品列表高度
            $(this).parent('.product-item-dbox').css('display', 'block');
            var height = $(this).height();

            $(this).css('display', 'block');
            $(this).siblings().css('display', 'none');
            $(this).parent('.product-item-dbox').css('height', height); // 将产品列表高度赋值给该父级高度显示
        }
    })
})

// 点击产品类型效果
$('.product-type-a').each(function () {
    $(this).click(function () {
        // 产品类型选中颜色切换
        $(this).addClass("lb-active");
        $(this).parent().siblings().children().removeClass("lb-active");
        $(this).parent().parent().siblings().children().children().removeClass("lb-active");

        var productTypeId = $(this).attr('id');    // 获取产品类型id

        // 遍历产品列表
        $('.product-item-box').each(function () {
            if (productTypeId == $(this).attr('id')) {
                // 获取产品列表高度
                $(this).parent('.product-item-dbox').css('display', 'block');
                var height = $(this).height();
                $(this).parent().css('height', height); // 将产品列表高度赋值给该父级高度显示

                $(this).addClass("lb-active");  // 产品列表内容显示样式
                $(this).css('display', 'block');
                $(this).siblings().css('display', 'none');

                // 隐藏其它产品列表
                $(this).parent('.product-item-dbox').parent().siblings('.lb-item-expander-row')
                    .children('.product-item-dbox').css('display', 'none');
            }
        })
    })
});