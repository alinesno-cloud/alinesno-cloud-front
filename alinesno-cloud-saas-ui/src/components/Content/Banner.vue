<template>
<div class="about">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide banner-slide"
                style="background-image: url('https://www.huaweicloud.com/content/dam/cloudbu-site/archive/china/zh-cn/banner/index_banner/2020/0318-techwave/pc-0322.jpg');">
                <div class="banner-content">
                    <div class="txt">
                        <h1>立即开始在 新狐云 平台进行构建</h1>
                        <p class="p-label">
                        无论您是需要计算能力、数据库存储、内容分发，还是其它功能，
                        新狐云 都能提供适当服务来帮助您构建复杂的应用程序，
                        同时提高灵活性、可扩展性和可靠性
                        </p>
                        <a href="/dashboard" class="link" target="_blank">开始使用</a>
                    </div>
                </div>
                <div class="img-fix">
                    <div class="img-inner">
                    </div>
                </div>
            </div>
            <!-- <div class="swiper-slide">Slide 2</div> -->
            <!-- <div class="swiper-slide">Slide 3</div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- 如果需要滚动条 -->
        <!--    <div class="swiper-scrollbar"></div>-->
    </div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
    data(){
        return {
        }
    },
    mounted() {
        new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
            //如果需要自动切换海报
            autoplay: {
                delay: 10000000,//时间 毫秒
                disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
            },
        })
    }
}
</script>

<style lang="scss" scoped>

@import '@/resources/css/variables.scss';

.swiper-container{
    height: 350px ;
    width: 100%;
    .swiper-wrapper{
        .swiper-slide{
            width: 100%;
            height: 100%;
            background-color: #42b983;
            text-align: center;
            line-height: 350px;
        }
    }

    .banner-slide {
        .banner-content {
            position: inherit;
            max-width: inherit;
            right: 0;
            height: 350px;
            bottom: 0px;
            font-size: 20px;
            width: 50% ;
            margin: auto;

            .link {
                display: block;
                background: $mainStyle ;
                transition: .2s background;
                color: #fff;
                text-align: center;
                line-height: 1.1em;
                padding: 10px 30px 10px;
                float: right;
                margin-top: 15px;
                text-decoration: none;
                margin: auto;
                float: inherit;
                width: 90px;
                font-size: 14px;
                padding: 12px;
                border-radius: 2px;
                font-weight: bold;
            }

        }
        h1{
            margin: 0px;
            line-height: 40px;
            padding-top: 100px;
        }
        .txt{
            background: none;
            color : $mainStyle ;
            height: 350px;
            text-align: center;
        }
        .p-label {
            font-size: inherit;
            margin: 20px 0px;
            line-height: 60px;
            height: 65px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
    }


}
</style>
