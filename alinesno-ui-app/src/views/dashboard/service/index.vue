<template>
    <div id="aws-page-content" class="lb-none-pad lb-page-content" data-page-alert-target="true">
        <main role="main">
            <page-support />
        </main>
    </div>
</template>

<script>

import PageSupport from './Support.vue'

export default {
    name: "Portal",
    components:{
        PageSupport,
    }
}
</script>

<style scoped lang="scss">
.lb-page-content {
    max-width: 1200px;
    top: 0px !important;
    padding-bottom: 100px;
    margin: auto;
}
</style>


