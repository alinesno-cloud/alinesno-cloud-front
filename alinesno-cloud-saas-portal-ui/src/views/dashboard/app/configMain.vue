<template>
<div class="container-main">
    <div class="panel panel-CADConfig clearfix">
        <div class="row padding-48">
            <div data-v-5ba787a2="" class="tqojp3-0 hGylxJ">
                <span data-v-5ba787a2="" class="header-title">专属配置</span>
                <span data-v-5ba787a2="" class="header-subtitle">配置App专属应用功能和个性化配置</span>
            </div>
            <div class="col-md-12" style="padding-top:10px;">
                <div class="row clearfix">
                    <label class="title">图标</label>
                    <div id="icon-list" class="row clearfix btn-group btn-group-CADConfig">
                        <a id="icon-android" href="javascript:void(0)" class="btn btn-default active first">通用</a>
                        <a id="icon-ios" href="javascript:void(0)" class="btn btn-default last">上架专用</a>
                    </div>
                    <div class="row clearfix upload-con-type upload-con-android active">
                        <div class="col-xs-1" style="padding-left:0px;float:left">
                            <img id="icon-CADConfig-android" src="https://twemoji.maxcdn.com/v/latest/svg/1f970.svg" alt="icon" title="icon">
                        </div>
                        <div class="col-xs-10" style="float:left">
                            <label for="upload-icon-CADConfig" id="upload-icon-label-android" class="label-a-CAD webuploader-container"><div class="webuploader-pick">
                                    上传Icon
                            </div><div id="rt_rt_1f6ondi9f9ao1pie1j80gbe1elh1" style="position: absolute; inset: 0px auto auto 0px; width: 49px; height: 17px; overflow: hidden;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept=""><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></label>
                            <div class="row">
                                <label class="label-tip upload-icon-label">*上传大小不超过1M，长宽等比且范围在50px至200px之间的png格式图片</label>
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix upload-con-type upload-con-ios">
                        <div class="col-xs-2">
                            <img id="icon-CADConfig-ios" src="/img/logo_icon_ios.png" alt="icon" title="icon">
                        </div>
                        <div class="col-xs-10">
                            <label for="upload-icon-CADConfig" id="upload-icon-label-ios" class="label-a-CAD webuploader-container"><div class="webuploader-pick">
                                    上传Icon
                            </div><div id="rt_rt_1f6ondi9g1bqo168r7sk1vq61auj4" style="position: absolute; inset: 0px auto auto 0px; width: 100px; height: 100px; overflow: hidden;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept=""><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></label>
                            <div class="row">
                                <label class="label-tip upload-icon-label">*宽高相同且不带透明度的png图片，尺寸180~1024px（若上传AppStore，必须为1024px）</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row clearfix" style="margin-top:15px;">
                    <label class="title">
                        横竖屏设置
                    </label>
                    <div id="orientation" class="row clearfix btn-group btn-group-CADConfig">
                        <a id="portrait" class="btn btn-default active first" href="javascript:void(0)">
                            竖屏应用
                        </a>
                        <a id="landscape" class="btn btn-default last" href="javascript:void(0)">
                            横屏应用
                        </a>

                    </div>
                </div>
                <div class="row clearfix" style="margin-top:20px;">
                    <label class="title">
                        状态栏
                    </label>
                    <label class="label-tip" style="display: block;margin-bottom: 20px;">
                        设置APP运行时系统状态栏是否显示
                    </label>
                    <div id="statusBarSwitch" class="row clearfix btn-group btn-group-CADConfig">
                        <a id="showsb-CADConfig" class="btn btn-default active first" href="javascript:void(0)">
                            显示
                        </a>
                        <a id="hidesb-CADConfig" class="btn btn-default last" href="javascript:void(0)">
                            不显示
                        </a>

                    </div>
                </div>
                <div class="row clearfix" style="margin-top:20px;">
                    <label class="title">
                        启动页
                    </label>
                    <div class="row clearfix">
                        <div class="row" style="padding-right: 50px;">
                            <label class="label-tip">
                                必传尺寸为1080*1920（长1720px-2120px之间，宽880px-1280px之间）系统将智能适配640*1136、640*960、1536*2048、800*1280、720*1280、400*800等分辨率的机型，以帮助你快速创建应用。
                            </label>
                        </div>
                        <div class="row" style="margin-top:30px;" id="toggle-launch">
                            <div id="toggle-launch-cover" style="display:none;" title="上传图片中，请勿点击">
                            </div>
                            <div class="changeImg-box box1">
                                <i class="CAD_star"></i>
                                <span class="resolution">1080*1920</span>
                                <div class="cover-box">
                                    <div class="blue-cover dev1" dev-data="dev_1080_1920" org-url="/img/1080_1920_dev.png" temp-url="">1080*1920
                                    </div>
                                    <label for="upload-sp1-CADConfig" id="up-launch1" class="label-a-CAD2 webuploader-container"><div class="webuploader-pick">
                                            <span class="upload-style1">
                                                上传
                                            </span>
                                            <span class="upload-style2">
                                                更换
                                            </span>
                                    </div><div id="rt_rt_1f6ondi9h3ju11cn65m1tbq1rb07" style="position: absolute; inset: 0px auto auto 0px; width: 100px; height: 100px; overflow: hidden;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept=""><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></label>
                                    <span class="clear-sp" data-index="1">
                                        清除
                                    </span>
                                </div>
                            </div>
                            <div class="changeImg-box box2">
                                <span class="resolution">1536*2048</span>
                                <div class="cover-box">
                                    <div class="blue-cover dev2" dev-data="dev_1536_2048" org-url="/img/1536_2048_dev.png" temp-url="" title="ipad">1536*2048

                                    </div>
                                    <label for="upload-sp2-CADConfig" id="up-launch2" class="label-a-CAD2 webuploader-container"><div class="webuploader-pick">
                                            <span class="upload-style1">
                                                上传
                                            </span>
                                            <span class="upload-style2">
                                                更换
                                            </span>
                                    </div><div id="rt_rt_1f6ondi9h1f681b8obmc1fji15ida" style="position: absolute; inset: 0px auto auto 0px; width: 100px; height: 100px; overflow: hidden;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept=""><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></label>
                                    <span class="clear-sp" data-index="2">
                                        清除
                                    </span>
                                </div>
                            </div>
                            <div class="changeImg-box box6">
                                <span class="resolution">1125*2436</span>
                                <div class="cover-box">
                                    <div class="blue-cover dev6" dev-data="dev_1125_2436" org-url="/img/1125_2436.png" temp-url="" title="iphoneX">1125*2436</div>
                                    <label for="upload-sp6-CADConfig" id="up-launch6" class="label-a-CAD2 webuploader-container"><div class="webuploader-pick">
                                            <!-- <input class="hide-file" id="upload-sp4-CADConfig" type="file"> -->
                                            <span class="upload-style1">上传</span>
                                            <span class="upload-style2">更换</span>
                                    </div><div id="rt_rt_1f6ondi9i805142sk2nkbdv66d" style="position: absolute; inset: 0px auto auto 0px; width: 100px; height: 100px; overflow: hidden;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept=""><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></label>
                                    <span class="clear-sp" data-index="6">清除</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
</script>

<style scoped lang="scss">
@import '@/resources/css/build/appConfig.scss';

.upload-con-type.active {
    margin-bottom: 0px;
}

.btn-group-CADConfig .btn.active, .btn-group-CADConfig .btn:hover {
    color: #fff;
    background-color: #005bd4;
}

#img-startpage-CADConfig {
    background: url('http://training-static.linesno.com/1080_1920_sp.png') center center no-repeat !important ;
    background-size: contain !important;
    left: 28px;
}

.btn-group-CADConfig .btn.first{
    border: 0px;
}

.panel-CADConfig .changeImg-box {
    background: url(http://training-static.linesno.com/price.png) no-repeat #f4f5f7;
    border-radius: 3px;
    margin-right: 20px;
    background-position: -254px -200px;
}

</style>

