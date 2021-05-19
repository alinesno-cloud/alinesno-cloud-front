<template>
<div id="banner">
    <div class="widthLimit" ui-view="banner">
        <div ng-click="BiEvent('send','event','button','click','login_logoSrc',model.logoSrc)" style="display:inline" class="ng-scope">
            <a class="logo-banner">
                <img data-v-01387e75="" src="http://training-static.linesno.com/fox_cloud/fox_header.png" style="position: absolute; width: 40px; top: 5px; left: 10px;">
            </a>
            <a title="新狐云单点登陆平台" target="_self" class="header-logo-label"><span>新狐云单点登陆平台</span></a>
        </div>
    </div>
    <span id="bannerQuickLink" class="ng-scope">
        <div style="display:inline">
            <a class="homepageLink ng-binding" ng-bind="i18n('homepageLink')" href="http://www.huaweicloud.com/?locale=zh-cn">首页</a>
        </div>
        <div style="display:inline">
            <a class="homepageLink ng-binding" ng-bind="i18n('helpCenter')" href="http://support.huaweicloud.com/">帮助中心</a>
        </div>
    </span>
</div>
</template>
