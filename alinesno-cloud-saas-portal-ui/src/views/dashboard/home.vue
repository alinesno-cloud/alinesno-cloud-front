<template>
<div class="home">
    <div class="homeHeader" data-spm="home-header">
        <div class="greeting" style="padding-bottom: 20px;">
            <h1>您好，luoandon@gmail.com</h1>
        </div>
    </div>

    <div class="app-container">
        <index-create />

        <el-row :gutter="20">
        <el-col :span="16">
        <h3 class="widget-title">我的导航</h3>
        <div class="widget-product-recent">
            <h4 class="subtitle">最近访问</h4>
            <div dir="ltr" role="row" class="next-row next-row-wrap" style="margin-left: -4px; margin-right: -4px; margin-bottom: -8px;">
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//iot.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre0;title=物联网平台" rel="noreferrer"><span>物联网平台</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//oss.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre1;title=对象存储 OSS" rel="noreferrer"><span>对象存储 OSS</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//cr.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre2;title=容器镜像服务" rel="noreferrer"><span>容器镜像服务</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//ecs.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre3;title=云服务器 ECS" rel="noreferrer"><span>云服务器 ECS</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//dhsnext.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre4;title=数据总线 DataHub" rel="noreferrer"><span>数据总线 DataHub</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//vcs.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre5;title=视觉计算服务" rel="noreferrer"><span>视觉计算服务</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//dc.console.aliyun.com/next/index#/domain/list/all-domain" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre6;title=域名" rel="noreferrer"><span>域名</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//dns.console.aliyun.com/#/dns/domainList" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre7;title=云解析 DNS" rel="noreferrer"><span>云解析 DNS</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//workbench.shuju.aliyun.com/console" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre8;title=DataWorks" rel="noreferrer"><span>DataWorks</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//kafka.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre9;title=消息队列 Kafka 版" rel="noreferrer"><span>消息队列 Kafka 版</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//yundun.console.aliyun.com/?p=cas" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre10;title=SSL 证书（应用安全）" rel="noreferrer"><span>SSL 证书（应用安全）</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//yundun.console.aliyun.com/?p=sas" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dre11;title=云安全中心（态势感知）" rel="noreferrer"><span>云安全中心（态势感知）</span></a>
                </div>
            </div>
            <h4 class="subtitle">保有资源的云产品<i aria-haspopup="true" aria-expanded="false" class="next-icon next-icon-help next-xs" style="font-size: 0px; vertical-align: middle; margin: -1px 4px 0px;"></i></h4>
            <div dir="ltr" role="row" class="next-row next-row-wrap" style="margin-left: -4px; margin-right: -4px; margin-bottom: -8px;">
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//sls.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta0;title=日志服务" rel="noreferrer"><span>日志服务</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//ram.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta1;title=访问控制" rel="noreferrer"><span>访问控制</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//cdn.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta2;title=CDN" rel="noreferrer"><span>CDN</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//vod.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta3;title=视频点播" rel="noreferrer"><span>视频点播</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//dm.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta4;title=邮件推送" rel="noreferrer"><span>邮件推送</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//cds.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta5;title=CodePipeline" rel="noreferrer"><span>CodePipeline</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//tracing.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta6;title=链路追踪" rel="noreferrer"><span>链路追踪</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//ros.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta7;title=资源编排" rel="noreferrer"><span>资源编排</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//yundun.console.aliyun.com/?p=wafnext" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta8;title=Web 应用防火墙（网络安全）" rel="noreferrer"><span>Web 应用防火墙（网络安全）</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//pts.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta9;title=性能测试服务" rel="noreferrer"><span>性能测试服务</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//apigateway.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta10;title=API 网关" rel="noreferrer"><span>API 网关</span></a>
                </div>
                <div dir="ltr" role="gridcell" class="next-col next-col-4" >
                    <a class="tag" target="_blank" href="//mns.console.aliyun.com" data-spm-click="gostr=/aliyun-console.home-product-recent.recentlist;locaid=dreta11;title=消息服务 MNS" rel="noreferrer"><span>消息服务 MNS</span></a>
                </div>
            </div>
        </div>
        </el-col>
        <el-col :span="8">
        <div class="next-card next-card-free next-card-show-divider">
            <h3 class="widget-title">公告</h3>
            <div class="widget-wrapper" style="position: relative;height: 218px;">
                <div class="widget-bulletin-list">
                    <div class="pin">
                        <div class="msg">
                            <span><span hidden="">type:home_bulletin</span>
                                <!-- 通知：控制台门户V2.0升级，跨产品、跨地域全局视角资源管理利器 <a href="https://help.aliyun.com/document_detail/202690.html" target="_blank" rel="noopener noreferrer">点击了解</a><br /> --> <span>问卷调研：参与<a href="//survey.aliyun.com/apps/zhiliao/mpyyc_HOI" target="_blank" rel="noopener noreferrer">API满意度有奖调研</a>，赢取阿里云通用代金券！</span></span>
                        </div>
                        <!-- <div class="line"></div> -->
                    </div>
                    <div class="cont">
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060847550.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem0;itemid=1060847550">【升级】5月20日云通信短信服务中国联通网络割接操作通知</a>
                        </div>
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060847364.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem1;itemid=1060847364">【其他】5月31日未实名认证.公司/.网络域名将被注册局暂停解析</a>
                        </div>
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060846481.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem2;itemid=1060846481">【升级】5月23日注册局维护通知</a>
                        </div>
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060846468.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem3;itemid=1060846468">【升级】5月19日DDoS高防（国际）升级通知</a>
                        </div>
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060846187.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem4;itemid=1060846187">【漏洞预警】XStream &lt; 1.4.17 反序列化远程代码执行漏洞（CVE-2021-29505）</a>
                        </div>
                    </div>
                </div>
                <div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;">
                    <div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;">
                        <div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -18px -17px -17px -18px;">
                            <div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;">
                                <div style="position: absolute; left: 0px; top: 0px; width: 619px; height: 301px;"></div>
                            </div>
                            <div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;">
                                <div style="position: absolute; width: 200%; height: 200%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </el-col>
        </el-row>

        <el-row :gutter="20">
        <el-col :span="16">
			<div class="WidgetHomeProductMy-detailContainer-3W8nd">
			   <h3 class="WidgetHomeProductMy-opendProductTitle-3NDOg"><span tooltipicon="help" class="nb-rc-text product-title"><span class="the-text">已开通的云产品</span><span class="nb-rc-text-tooltip" aria-haspopup="true" aria-expanded="false"><i class="v2-0-1-icon v2-0-1-icon-question-circle v2-0-1-medium"></i></span></span></h3>
			   <div style="position: relative; overflow: hidden; width: 100%; height: 182px;">
				<div style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
				 <ul class="product_list thm-uglier">
				  <li><a href="https://dm.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=ddm"><i class="wind-rc-product-icon glyph-dm"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="邮件推送">邮件推送</span></a></li>
				  <li><a href="https://vod.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=dvod"><i class="wind-rc-product-icon glyph-vod"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="视频点播">视频点播</span></a></li>
				  <li><a href="https://oss.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=doss"><i class="wind-rc-product-icon glyph-oss"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="对象存储 OSS">对象存储 OSS</span></a></li>
				  <li><a href="https://iot.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=diot"><i class="wind-rc-product-icon glyph-iot"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="物联网平台">物联网平台</span></a></li>
				  <li><a href="https://cds.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=dcodepipeline"><i class="wind-rc-product-icon glyph-codepipeline"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="CodePipeline">CodePipeline</span></a></li>
				  <li><a href="https://apigateway.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=dapigateway"><i class="wind-rc-product-icon glyph-apigateway"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="API 网关">API 网关</span></a></li>
				  <li><a href="https://mns.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=dmns"><i class="wind-rc-product-icon glyph-mns"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="消息服务 MNS">消息服务 MNS</span></a></li>
				  <li><a href="https://ahas.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=dahas"><i class="wind-rc-product-icon glyph-ahas"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="应用高可用服务">应用高可用服务</span></a></li>
				  <li><a href="https://dc.console.aliyun.com/next/index#/domain/list/all-domain" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=ddomain"><i class="wind-rc-product-icon glyph-domain"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="域名">域名</span></a></li>
				  <li><a href="https://sls.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=dsls"><i class="wind-rc-product-icon glyph-sls"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="日志服务">日志服务</span></a></li>
				  <li><a href="https://market.console.aliyun.com" target="_blank" rel="noopener noreferrer" data-spm-click="gostr=/aliyun;locaid=dmarket"><i class="wind-rc-product-icon glyph-market"></i><span class="WidgetHomeProductMy-product_name-TNtW6" title="云市场">云市场</span></a></li>
				 </ul>
				</div>
			   </div>
			  </div>
		</el-col>
        <el-col :span="8">
            <div class="next-card next-card-free next-card-show-divider">
            <h3 class="widget-title">平台手册</h3>
            <div class="widget-wrapper" style="position: relative;">
                <div class="widget-bulletin-list">
                    <div class="pin">
                        <div class="msg">
                            <span><span hidden="">type:home_bulletin</span>
                                <!-- 通知：控制台门户V2.0升级，跨产品、跨地域全局视角资源管理利器 <a href="https://help.aliyun.com/document_detail/202690.html" target="_blank" rel="noopener noreferrer">点击了解</a><br /> --> <span>问卷调研：参与<a href="//survey.aliyun.com/apps/zhiliao/mpyyc_HOI" target="_blank" rel="noopener noreferrer">API满意度有奖调研</a>，赢取阿里云通用代金券！</span></span>
                        </div>
                        <!-- <div class="line"></div> -->
                    </div>
                    <div class="cont">
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060847550.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem0;itemid=1060847550">【升级】5月20日云通信短信服务中国联通网络割接操作通知</a>
                        </div>
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060847364.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem1;itemid=1060847364">【其他】5月31日未实名认证.公司/.网络域名将被注册局暂停解析</a>
                        </div>
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060846481.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem2;itemid=1060846481">【升级】5月23日注册局维护通知</a>
                        </div>
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060846468.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem3;itemid=1060846468">【升级】5月19日DDoS高防（国际）升级通知</a>
                        </div>
                        <div class="item">
                            <a class="wind-rc-link" href="//help.aliyun.com/noticelist/articleid/1060846187.html" target="_blank" data-spm-click="gostr=/aliyun-console.help-bulletin.item;locaid=ditem4;itemid=1060846187">【漏洞预警】XStream &lt; 1.4.17 反序列化远程代码执行漏洞（CVE-2021-29505）</a>
                        </div>
                    </div>
                </div>
                <div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;">
                    <div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;">
                        <div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -18px -17px -17px -18px;">
                            <div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;">
                                <div style="position: absolute; left: 0px; top: 0px; width: 619px; height: 301px;"></div>
                            </div>
                            <div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;">
                                <div style="position: absolute; width: 200%; height: 200%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		</el-col>
        </el-row>
    </div>
</div>

</template>

<script>

import IndexCreate from './create'

export default {
    name: "index",
    components: {
        IndexCreate
    },
    data() {
        return {
            // 版本号
            version: "3.4.0",
        };
    },
    methods: {
        goTarget(href) {
            window.open(href, "_blank");
        },
    },
};
</script>

<style scoped lang="scss">

.homeHeader {
    position: relative;
    box-sizing: border-box;
    padding: 24px 24px 0;
    background-color: #fff;
    box-shadow: 0 1px 0 0 #e3e4e6 ;
    z-index: 1;
}

.homeHeader h1 {
    margin: 0 0 8px;
    font-size: 16px;
    color: #333;
    line-height: 24px;
}

.app-container {
    background-color: #fafafa ;
}

.widget-title {
    margin: -16px 0 0;
    font-size: 14px;
    color: #333;
    line-height: 44px;
    font-weight: 400;
}

.app-icon {
    width: 32px;
    height: 32px;
    position: relative;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 2px;
    background: #fff ;
    padding: 20px !important ;
    padding-left: 20px !important ;
    padding-right: 20px !important ;
    border: var(--card-border-width,1px) var(--card-border-style,solid) var(--card-border-color,#e3e4e6);
}

.el-col-8 {
    width: calc(33.3333333333% - 10px);
    margin-left: 10px;
}

.widget-bulletin-list .item {
    height: 32px;
    line-height: 32px;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;

    a {
        color: #555;
    }
}

.widget-bulletin-list {
    .line {
        position: absolute;
        left: -16px;
        right: -16px;
        height: 1px;
        background-color: #e3e4e6;
    }
    .pin {
        position: relative;
        margin-bottom: 15px;
        margin-top: 15px;

        .msg {
            padding: 8px 12px;
            line-height: 18px;
            color: #333;
            font-size: 12px;
            background-color: #eff3f8;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            margin-bottom: 16px;
        }
    }
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

.next-col-4 {
    -ms-flex: 0 0 16.66667%;
    -webkit-flex: 0 0 16.66667%;
    flex: 0 0 16.66667%;
    width: 16.66667%;
    max-width: 16.66667%;
    float: left ;
}

.tag {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 12px;
    margin-bottom: 8px;
    height: 32px;
    width: 95%;
    font-size: 12px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    background-color: #f7f9fa;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: #333!important;
    cursor: pointer;
    -webkit-transition: background-color .1s linear;
    -o-transition: background-color linear .1s;
    -moz-transition: background-color linear .1s;
    transition: background-color .1s linear;
    white-space: nowrap;
    text-decoration: none;
}

.subtitle {
    font-weight: 500;
    font-size: 12px;
    color: #666;
    line-height: 20px;
    margin: 16px 0 8px;
}

.thm-uglier {
	list-style: none;
	margin: 0;
	padding: 0;
}

.product_list {
	a {
		display: flex;
		align-items: center;
		padding: 0 16px;
		background-color: #f9f9f9;
		width: 100%;
		line-height: 36px;
		text-decoration: none;
		color: #333;
		transition: all 250ms linear;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}

.product_list > li {
    padding: 0 8px 8px 0;
    overflow: hidden;
    flex: none;
    width: 25%;
    float: left;
	border-radius: 4px;
	font-size: 12px;

	a {
		line-height: 42px;

		i {
			display: none;
			border: 1px solid #dedede;
			border-radius: 14px;
			width: 28px;
			height: 28px;
			text-align: center;
		}
	}

	.WidgetHomeProductMy-product_name-TNtW6 {
		flex: 1;
		margin-left: 8px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}

</style>


