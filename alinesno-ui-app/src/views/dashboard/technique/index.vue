<template>
<div id="aws-page-content" class="page-content">
    <page-content-devops />
    <page-content-service />
</div>
</template>
<script>

import PortalContent from '@/components/Content'

import PageBanner from './Banner.vue'
import PageContentDevops from './ContentDevops.vue'
import PageContentService from './ContentService.vue'

export default {
    name: "Portal",
    components:{

        PageBanner ,
        PageContentDevops ,
        PageContentService ,
        PortalContent
    }
}
</script>

<style lang="scss" scoped>

.page-content{
    max-width: 1200px ;
    margin: auto ;
}

.header-top{
    padding-top: 98px;
}

</style>

