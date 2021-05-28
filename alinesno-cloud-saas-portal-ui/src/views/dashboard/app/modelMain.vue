<template>
<div class="container-main">
    <div class="inie71-0 bTZuBz">
        <div class="sc-1u7nlc0-0 kEITgy">
            <div class="tqojp3-0 hGylxJ">
                <span class="header-title">通用模块</span>
                <span class="header-subtitle">基于h5/Android/IOS的通用模块</span>
            </div>
            <div class="account-type-selector">
                <model-card />
                <model-card />
                <model-card />
                <model-card />
                <model-card />
                <model-card />
                <model-card />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ModelCard from './modelCard'
export default {
    components: {
        ModelCard
    },
};
</script>

<style scoped lang="scss">
@import '@/resources/css/build/model.scss';
</style>

