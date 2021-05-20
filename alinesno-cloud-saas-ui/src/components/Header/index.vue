<template>
<header id="aws-page-header" class="awsm m-page-header" role="banner">
    <div id="m-nav" class="m-nav" role="navigation">
        <div class="m-nav-header lb-clearfix m-nav-single-row" data-menu-url="https://s0.awsstatic-china.com/zh_CN/nav/v3/panel-content/desktop/index.html" style="position: relative;">
            <div class="m-nav-logo">
                <div class="lb-bg-logo aws-amazon_web_services_smile-header-desktop-en">
                    <a href="/"> <span style="background: url('')"><img src="http://training-static.linesno.com/fox_cloud/fox_header.png" style="position: absolute; left: 10px; top: 11px; width: 50px;" /></span></a>
                </div>
            </div>
            <div class="m-nav-secondary-links" style="min-width: 620px; margin-left: 80px;">
                <a class="lb-tiny-iblock lb-txt lb-has-trigger-indicator" href="/dashboard" target="_blank" data-lb-popover-trigger="popover-my-account">控制台</a>
                <div>
                    <span class="lb-tiny-iblock lb-txt lb-has-trigger-indicator" style="padding-right: 10px;" data-lb-popover-trigger="popover-my-account">【开发】测试账号</span>
                    <a class="lb-tiny-iblock lb-txt lb-has-trigger-indicator" href="/logout" data-lb-popover-trigger="popover-my-account">退出登录</a>
                </div>
            </div>
            <div class="m-nav-primary-group">
                <div class="m-nav-primary-links">
                    <i class="m-nav-angle-left-icon" aria-hidden="true"></i>
                    <ul>
                        <li><a href="/product" data-panel="m-nav-panel-products" class="product-a">产品</a>
                        <a href="/solution" data-panel="m-nav-panel-products" class="product-a">解决方案</a>
                        <a href="/technique" data-panel="m-nav-panel-products" class="product-a">研发体系</a>
                        <a href="/document" data-panel="m-nav-panel-products" class="product-a">文档</a
                        ><a href="/project-seed" data-panel="m-nav-panel-products" class="product-a">中台脚架</a>
                        <a href="/support" data-panel="m-nav-panel-products" class="product-a">服务支持</a>
                        <a href="/developer" data-panel="m-nav-panel-products" class="product-a">开发者</a>
                        <a href="/about" data-panel="m-nav-panel-products" class="product-a">关于</a></li>
                    </ul>
                </div>
                <div class="m-nav-search">
                    <form action="https://amazonaws-china.com/search/" role="search">
                        <div class="m-typeahead" data-directory-id="typeahead-suggestions" data-lb-comp="typeahead" data-lb-comp-registered="true">
                            <span class="twitter-typeahead" style="position: relative; display: inline-block;"> <input class="m-nav-search-field tt-hint" autocomplete="off" spellcheck="false" dir="ltr" type="text" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: rgb(255, 255, 255) none repeat scroll 0% 0%;" readonly="" tabindex="-1" /> <input class="m-nav-search-field tt-input" placeholder="搜索" autocomplete="off" spellcheck="false" dir="auto" type="text" name="searchQuery" style="position: relative; vertical-align: top; background-color: transparent;" /> <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Helvetica, Arial, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: optimizelegibility; text-transform: none;"></pre>
                                <div class="tt-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;">
                                    <div class="tt-dataset tt-dataset-products"></div>
                                    <div class="tt-dataset tt-dataset-keypages"></div>
                                    <div class="tt-dataset tt-dataset-tutorials"></div>
                            </div> </span>
                        </div>
                    </form>
                    <i class="m-nav-close-icon"></i>
                </div>
            </div>
        </div>
    </div>
</header>
</template>
<script>
</script>

<style lang="scss" scoped>

@import '@/resources/css/style-awsm.scss';

</style>
