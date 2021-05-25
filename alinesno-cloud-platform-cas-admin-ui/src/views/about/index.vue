<template>
    <div>
        <portal-header />
        <portal-header />
        <div id="aws-page-content" class="lb-none-pad lb-page-content" data-page-alert-target="true" style="margin-top: 68px;">
            <main role="main">
                <page-banner />
                <page-summary/>
                <page-case />
                <page-target />
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
import PageTarget from './Target.vue'
import PageCase from './Case.vue'

export default {
    name: "Portal",
    components:{
        PageBanner ,
        PageTarget ,
        PageSummary ,
        PageCase ,

        PortalFooter,
        PortalHeader,
        PortalContent
    }
}
</script>
