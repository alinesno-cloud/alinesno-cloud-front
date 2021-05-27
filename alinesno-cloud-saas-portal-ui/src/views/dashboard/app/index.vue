<template>
    <div class="rl31dg-2 iKCdHH">
        <div class="rl31dg-3 fCytZy">
            <div class="sc-1d9uflq-1 kjzgGw">
                <h1 class="jc6i63-0 sc-1d9uflq-2 cmoiYo">创建移动应用</h1>
                <p class="djs2am-0 sc-1d9uflq-3 hVuhLe">移动应用包括H5、Android、IOS、微信小程序等.</p>
                <div class="sc-494z8g-0 sc-494z8g-1 sc-4eglrx-3 fyoXML">
                    <div class="sc-4eglrx-4 hNEHOb">
                        <div class="sc-4eglrx-6 kTTBp">
                            <input class="sc-564pke-1 bwQYqK" value="" />
                        </div>
                    </div>
                    <div class="sc-4eglrx-4 hNEHOb">
                        <div class="sc-494z8g-0 sc-494z8g-2 ggtYoZ">
                            <div class="sc-494z8g-0 sc-494z8g-1 bDgoGc">
                                <div class="sc-494z8g-0 sc-494z8g-2 sc-4eglrx-5 gjguTC">
                                    <label color="#616E7E" class="sc-1bjkklg-0 hDuZmn">应用图标</label>
                                </div>
                                <div class="sc-494z8g-0 sc-1qfgar8-3 gvwTmF" color="#3880FF">
                                    <div class="sc-494z8g-0 sc-1qfgar8-2 cESjSD">
                                        <div class="app-icon-image " style="background-image: url(&quot;https://twemoji.maxcdn.com/v/latest/svg/1f970.svg&quot;);"></div>
                                        <div class="app-icon-hover">
                                            <div class="app-icon-hover-icons">
                                                <div class="icon" title="Pick emoji">

                                                </div>
                                                <div class="icon" title="Pick file">
                                                    <svg width="18" height="24" viewbox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 23H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M9 1V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17 9L9 1L1 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <input type="file" id="file-app-icon" accept="image/png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <app-attr />
                        </div>
                    </div>
                    <div class="sc-494z8g-0 sc-494z8g-2 jXsIvj">
                        <div class="sc-494z8g-0 sc-494z8g-1 gQtOCy">
                            <div class="sc-494z8g-0 sc-494z8g-2 sc-4eglrx-5 gjguTC">
                                <label color="#616E7E" class="sc-1bjkklg-0 hDuZmn">Pick a template</label>
                            </div>
                            <div class="njq98s-2 kxsIQe">
                                <div class="njq98s-1 hrzERy selected " height="140" width="120">
                                    <div class="sc-4eglrx-0 uFTAi"></div>
                                    <div class="njq98s-0 cIOlFt">
                                        基础模板
                                    </div>
                                </div>
                                <div class="njq98s-1 hrzERy  " height="140" width="120">
                                    <div class="sc-4eglrx-0 emjNvs"></div>
                                    <div class="njq98s-0 cIOlFt">
                                        电商模板
                                    </div>
                                </div>
                                <div class="njq98s-1 hrzERy  " height="140" width="120">
                                    <div class="sc-4eglrx-0 cnMQuN"></div>
                                    <div class="njq98s-0 cIOlFt">
                                        点餐模板
                                    </div>
                                </div>
                                <div class="njq98s-1 hrzERy" height="140" width="120">
                                    <div class="sc-4eglrx-0 uFTAi"></div>
                                    <div class="njq98s-0 cIOlFt">
                                        企业展示
                                    </div>
                                </div>
                                <div class="njq98s-1 hrzERy  " height="140" width="120">
                                    <div class="sc-4eglrx-0 emjNvs"></div>
                                    <div class="njq98s-0 cIOlFt">
                                        视频直播
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sc-4eglrx-7 iHjquI">
                        <button class="sc-4eglrx-8 dsYJZf">Cancel</button>

                        <router-link to="/build/app/gitlab" tag="button" class="aap711-0 LrZpX  dash-color-primary dash-size-large" font-weight="700">
                            <span>下一步</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppAttr from './attribute'

export default {
    components: {
        AppAttr
    },
};
</script>

<style scoped lang="scss">

@import '@/resources/css/build/component.scss';

.iHjquI {
    margin-top: 30px;
}

</style>


