<template>
    <div class="rl31dg-2 iKCdHH">
        <div class="rl31dg-3 fCytZy">
            <div class="sc-1d9uflq-1 kjzgGw">
                <div class="sc-1vhl1ud-0 iAHSCb">
                    <h1 class="jc6i63-0 sc-1d9uflq-2 cmoiYo">选择应用仓库</h1>
                    <p class="djs2am-0 sc-1d9uflq-3 hVuhLe">自动创建应用数据和生成持续集成脚本</p>
                </div>

                <div class="sc-494z8g-0 sc-14i1hry-0 kEwNER">
                    <div class="sc-494z8g-0 sc-494z8g-1 cdyGWv">
                        <button class="aap711-0 cpSike  dash-color-secondary dash-size-regular" font-weight="600">
                            <img class="dingtalk-icons" src="https://img.alicdn.com/tps/TB1d9fKJVXXXXbmXpXXXXXXXXXX-300-300.png" />
                            <span>连接钉钉</span>
                        </button>
                    </div>
                </div>

                <div class="zfc3g7-0 cFMoVy">

                    <div class="ksa0ua-0 elwCEo">
                        <div class="sc-1ngwmbv-3 cZlSjT git-host-item dash-size-regular">
                            <div class="sc-1ngwmbv-4 gWayKh">
                                <div class="sc-1ngwmbv-1 jPmxjq title-text">
                                    Github
                                </div>
                                <div class="sc-1ngwmbv-2 hhsakP sub-text">
                                    <div>
                                        <div class="git-connected">
                                            <div>
                                                连接
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sc-1ngwmbv-5 ghKyco">
                                <div class="sc-1ngwmbv-3 cZlSjT git-identity dash-size-small">
                                    <div class="sc-1ngwmbv-0 dnrqkl">
                                        <div class="img-container">
                                            <img class="git-picture" src="https://avatars.githubusercontent.com/u/9816972?v=4" />
                                        </div>
                                    </div>
                                    <div class="sc-1ngwmbv-4 gWayKh">
                                        <div class="sc-1ngwmbv-1 jPmxjq title-text">
                                            switch
                                        </div>
                                        <div class="sc-1ngwmbv-2 hhsakP sub-text">
                                            switchII
                                        </div>
                                    </div>
                                    <div class="sc-1ngwmbv-5 ghKyco">
                                        <router-link to="/build/app/overview" tag="button" class="aap711-0 LrZpX  dash-color-primary dash-size-regular" font-weight="700">
                                            <span> &nbsp;&nbsp; 选择&nbsp;&nbsp; </span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ksa0ua-0 elwCEo">
                        <div class="sc-1ngwmbv-3 cZlSjT git-host-item dash-size-regular">
                            <div class="sc-1ngwmbv-4 gWayKh">
                                <div class="sc-1ngwmbv-1 jPmxjq title-text">
                                    Bitbucket
                                </div>
                                <div class="sc-1ngwmbv-2 hhsakP sub-text">
                                    <div>
                                        Not connected
                                    </div>
                                </div>
                            </div>
                            <div class="sc-1ngwmbv-5 ghKyco">
                                <button class="aap711-0 LrZpX  dash-color-secondary dash-size-regular" font-weight="700"><span> 连接</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="ksa0ua-0 elwCEo">
                        <div class="sc-1ngwmbv-3 cZlSjT git-host-item dash-size-regular">
                            <div class="sc-1ngwmbv-4 gWayKh">
                                <div class="sc-1ngwmbv-1 jPmxjq title-text">
                                    Gitlab
                                </div>
                                <div class="sc-1ngwmbv-2 hhsakP sub-text">
                                    <div>
                                        Not connected
                                    </div>
                                </div>
                            </div>
                            <div class="sc-1ngwmbv-5 ghKyco">
                                <button class="aap711-0 LrZpX  dash-color-secondary dash-size-regular" font-weight="700"><span> 连接</span></button>
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
@import '@/resources/css/build/connectGit.scss';

.dingtalk-icons{
    width: 20px;
    margin-right: 10px;
}
</style>


