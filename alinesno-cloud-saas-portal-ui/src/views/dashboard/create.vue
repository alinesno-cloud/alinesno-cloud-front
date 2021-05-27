<template>
<el-row :gutter="20">
<el-col :span="24">
<h3 class="widget-title">平台业务场景</h3>
<div class="WidgetHomeProductMy-detailContainer-3W8nd">
    <div style="position: relative; overflow: hidden; width: 100%;height: 130px;">
        <div style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
            <ul class="product_list thm-uglier">
                <li>
                <router-link to="/build/component" tag="div" class="create-item">
                <div>
                    <img src="https://gw.alicdn.com/tfs/TB10uW.CNjaK1RjSZFAXXbdLFXa-112-112.png" class="item-image" />
                </div>
                <div class="item-cont">
                    <div class="item-title">
                        业务管理应用
                    </div>
                    <div class="item-desc">
                        业务管理平台和后台快速创建
                    </div>
                </div>
                <div>
                    <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                </div>
                </router-link>
                <router-link to="/build/app/index" tag="div" class="create-item">
                <div>
                    <img src="https://gw.alicdn.com/tfs/TB1Y8PlCNjaK1RjSZKzXXXVwXXa-112-112.png" class="item-image" />
                </div>
                <div class="item-cont">
                    <div class="item-title">
                        业务App前端
                    </div>
                    <div class="item-desc">
                        移动端业务快速开发平台
                    </div>
                </div>
                <div>
                    <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                </div>
                </router-link>
                <router-link to="/build/datawork/index" tag="div" class="create-item">
                <div>
                    <img src="https://gw.alicdn.com/tfs/TB1cbCYCPTpK1RjSZKPXXa3UpXa-112-112.png" class="item-image" />
                </div>
                <div class="item-cont">
                    <div class="item-title">
                        大数据应用
                    </div>
                    <div class="item-desc">
                        在线大数据开发采集和管理平台
                    </div>
                </div>
                <div>
                    <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                </div>
                </router-link>
                <router-link to="/build/things/index" tag="div" class="create-item">
                <div>
                    <img src="https://gw.alicdn.com/tfs/TB1FNG.CMHqK1RjSZFgXXa7JXXa-102-102.png" class="item-image" />
                </div>
                <div class="item-cont">
                    <div class="item-title">
                        物联网应用(内测中)
                    </div>
                    <div class="item-desc">
                        低成本、快速地实现“设备-设备”、“设备-用户应用”
                    </div>
                </div>
                <div>
                    <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                </div>
                </router-link>
                <!-- <router-link to="/build/workflow/index" tag="div" class="create-item">
                <div>
                    <img src="https://gw.alicdn.com/tfs/TB1FNG.CMHqK1RjSZFgXXa7JXXa-102-102.png" class="item-image" />
                </div>
                <div class="item-cont">
                    <div class="item-title">
                        创建工作流应用
                    </div>
                    <div class="item-desc">
                        适用需要走审批的工作流业务场景
                    </div>
                </div>
                <div>
                    <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                </div>
                </router-link> -->
                </li>
            </ul>
        </div>
    </div>
</div>
</el-col>
</el-row>
</template>


<style scoped lang="scss">

.create-item {
    position: relative;
    cursor: pointer;
    display: inline-flex;
    width: 23%;
    height: 94px;
    border: 0px ;
    border-radius: 8px;
    align-items: center;
    background: #f7f9fa;
    padding: 0 12px;
    margin: 0 8px 8px 0;

    .item-image {
        width: 60px;
        margin-right: 12px;
        border-radius: 30%;
        margin-top: 5px;
    }

    .item-cont {
        flex: 1;
        overflow: hidden;
    }

    .item-title {
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        font-family: 'PingFangSC-Medium';
        line-height: 2;
    }

    .item-desc {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.56);
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

.product_list {
    list-style: none ;
    padding-left: 0px ;
}

.widget-title {
    margin: -16px 0 0;
    font-size: 14px;
    color: #333;
    line-height: 44px;
    font-weight: 400;
}

</style>


