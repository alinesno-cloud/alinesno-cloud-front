<template>
    <div>
        <portal-header />
        <div id="aws-page-content" class="lb-none-pad lb-page-content" data-page-alert-target="true" style="margin-top: 68px;">
            <main role="main">
                <page-banner />
                <page-summary/>
                <page-support />
                <page-service/>
            </main>
        </div>
        <portal-footer />
    </div>
</template>
<script>

import PortalHeader from '@/components/Header'
import PortalFooter from '@/components/Footer'
import PortalContent from '@/components/Content'

import PageBanner from '@/components/Banner'
import PageSummary from './Summary.vue'
import PageService from './Service.vue'
import PageSupport from './Support.vue'

export default {
    name: "Portal",
    components:{
        PageBanner ,
        PageSummary ,
        PageService ,
        PageSupport ,

        PortalFooter,
        PortalHeader,
        PortalContent
    }
}
</script>
