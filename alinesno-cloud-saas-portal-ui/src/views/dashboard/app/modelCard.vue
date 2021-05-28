<template>
<div class="account-type-item">
    <div class="plan-info">
        <div class="type">
            列表控件
        </div>
        <div class="features">
            goodsList 封装了一个列表控件，可实现一个可左右
            拖动 item 的列表视图。开发者可根据需求自定义列表的元素
        </div>
    </div>
    <button class="aap711-0 LrZpX choose-btn dash-color-primary dash-size-regular" font-weight="700">
        <span>使用</span>
    </button>
</div>
</template>

<script>
</script>

<style scoped lang="scss">
.account-type-item{
    width: calc(25% - 10px);
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    height: 220px;
    padding: 20px;
    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
    position: relative;
    z-index: 1;
    background: white;
    border: 0px solid #e6e6e6;
    border-radius: 6px;
    background: #f4f5f7;
}

.choose-btn{
    margin-top: auto;
    box-shadow: none;
    font-size: 14px;
    font-weight: 600;
    -webkit-transition: background-color 0.2s ease 0s;
    background-color: #005bd4;
    color: #fff;
    width: 100%;
    display: -webkit-inline-box;
    flex-wrap: nowrap;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.2;
    border-radius: 6px;
    border: none;
    letter-spacing: -0.01em;
    white-space: nowrap;
}

.dash-size-regular {
    padding: 8px 10px;
}

.features {
    color: rgb(152, 165, 187);
    font-size: 14px;
    line-height: 1.7;
    margin-top: 4px;
    margin-bottom: 20px;
}

.type {
    line-height: 1;
    color: rgb(51, 51, 51);
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
}

</style>

