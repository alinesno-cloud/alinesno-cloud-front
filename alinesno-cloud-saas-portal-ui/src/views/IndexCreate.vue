<template>
<el-row :gutter="20">
<el-col :span="24">
<h3 class="widget-title">创建业务</h3>
<div class="WidgetHomeProductMy-detailContainer-3W8nd">
    <div style="position: relative; overflow: hidden; width: 100%;height: 100px;">
        <div style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
            <ul class="product_list thm-uglier">
                <li>
                <div class="create-item">
                    <div>
                        <img src="https://gw.alicdn.com/tfs/TB10uW.CNjaK1RjSZFAXXbdLFXa-112-112.png" class="item-image" />
                    </div>
                    <div class="item-cont">
                        <div class="item-title">
                            创建业务管理后台
                        </div>
                        <div class="item-desc">
                            适用于需要审批的场景
                        </div>
                    </div>
                    <div>
                        <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                    </div>
                </div>
                <div class="create-item">
                    <div>
                        <img src="https://gw.alicdn.com/tfs/TB1Y8PlCNjaK1RjSZKzXXXVwXXa-112-112.png" class="item-image" />
                    </div>
                    <div class="item-cont">
                        <div class="item-title">
                            创建业务App前端
                        </div>
                        <div class="item-desc">
                            适用于需要审批的场景
                        </div>
                    </div>
                    <div>
                        <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                    </div>
                </div>
                <div class="create-item">
                    <div>
                        <img src="https://gw.alicdn.com/tfs/TB1cbCYCPTpK1RjSZKPXXa3UpXa-112-112.png" class="item-image" />
                    </div>
                    <div class="item-cont">
                        <div class="item-title">
                            创建大数据应用
                        </div>
                        <div class="item-desc">
                            适用于需要审批的场景
                        </div>
                    </div>
                    <div>
                        <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                    </div>
                </div>
                <div class="create-item">
                    <div>
                        <img src="https://gw.alicdn.com/tfs/TB1FNG.CMHqK1RjSZFgXXa7JXXa-102-102.png" class="item-image" />
                    </div>
                    <div class="item-cont">
                        <div class="item-title">
                            创建物联网应用
                        </div>
                        <div class="item-desc">
                            适用于需要审批的场景
                        </div>
                    </div>
                    <div>
                        <img width="16" src="https://gw.alicdn.com/tfs/TB1uQuzN7Y2gK0jSZFgXXc5OFXa-128-128.png" />
                    </div>
                </div>
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
    height: 64px;
    border: 0px ;
    border-radius: 8px;
    align-items: center;
    background: #f7f9fa;
    padding: 0 12px;
    margin: 0 8px 8px 0;

    .item-image {
        width: 40px;
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
        font-weight: bold;
        color: rgba(0, 0, 0, 0.85);
        font-family: 'PingFangSC-Medium';
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


