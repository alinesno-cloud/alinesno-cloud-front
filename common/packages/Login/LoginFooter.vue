<template>
<div id="footer">
    <div class="widthLimit" ui-view="footer">
        <div ng-if="!model.ipIsInternational" class="footer-content ng-scope unfold" ng-class="{'unfold': model.showICP, 'fold': !model.showICP}">
            <div class="copyrightDiv">
                <span class="right-space ng-binding" ng-bind="model.copyRight">&copy;2021 xinfox技术研发团队 版权所有</span>

            </div>
            <div class="otherLinkDiv">
                <span id="laws">
                    <a ng-if="footer.legalNotice" ng-bind="i18n('legalStatement')" target="_blank" rel="noopener noreferrer"  class="ng-binding ng-scope">法律声明</a>
                    <span ng-if="footer.privacyProtect" class="ng-scope">|</span>
                    <a ng-if="footer.privacyProtect" ng-bind="i18n('privacyStrategyStatement')" target="_blank" rel="noopener noreferrer" class="ng-binding ng-scope">隐私政策声明</a>
                    <span ng-if="footer.cookies" class="ng-scope">|</span>
                    <a ng-if="footer.cookies" ng-bind="i18n('hwId.cookies')" target="_blank" rel="noopener noreferrer" class="ng-binding ng-scope">Cookies</a>
                </span>
            </div>
        </div>
    </div>
</div>
</template>
