<template>
<div>
    <portal-header />
    <div id="aws-page-content" class="page-content">
        <main role="main">
        <section data-page-alert-target="true">
            <div class="aws-mobile-position-swap">
                <page-banner />
                <page-content-devops />
                <page-content-service />
            </div>
        </section>
        </main>
    </div>
    <portal-footer />
</div>
</template>
<script>

import PortalHeader from '@/components/Header'
import PortalFooter from '@/components/Footer'
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

        PortalFooter,
        PortalHeader,
        PortalContent
    }
}
</script>

<style lang="scss" scoped>

.header-top{
    padding-top: 98px;
}

</style>
