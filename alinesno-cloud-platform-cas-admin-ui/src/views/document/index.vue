<template>
    <div>
        <portal-header />
        <div id="aws-page-content" class="lb-none-pad lb-page-content" data-page-alert-target="true" style="margin-top: 68px;">
            <main role="main">
                <page-banner />
                <page-splite />
                <page-module />
                <page-module />
                <page-module />
                <page-module />
                <page-module />
            </main>
        </div>
        <page-splite />
        <portal-footer />
    </div>
</template>
<script>

import PortalHeader from '@/components/Header'
import PortalFooter from '@/components/Footer'
import PortalContent from '@/components/Content'

import PageBanner from '@/components/Banner'
import PageModule from './Module'
import PageSplite from './Splite.vue'

export default {
    name: "Portal",
    components:{
        PageBanner ,
        PageModule ,
        PageSplite ,

        PortalFooter,
        PortalHeader,
        PortalContent
    }
}
</script>
