<template>
    <div>
        <portal-header />
        <div id="aws-page-content" class="page-content">
            <main role="main">
            <section data-page-alert-target="true">
                <div class="aws-mobile-position-swap">
                    <page-banner />
                    <page-header />
                    <page-product />
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
import PageHeader from './ProductHeader'
import PageProduct from './ProductList.vue'

export default {
    name: "Portal",
    components:{
        PageBanner ,
        PageHeader ,
        PageProduct ,

        PortalFooter,
        PortalHeader,
        PortalContent
    }
}
</script>
