<template>
<div id="aws-page-content" class="lb-none-pad lb-page-content" data-page-alert-target="true" style="margin-top: 68px;">
    <main role="main">
        <portal-banner />
        <portal-summary />
        <portal-product />
        <portal-solution />
        <portal-case />
        <portal-design />
        <portal-train />
    </main>
</div>

</template>

<script>

import PortalBanner from './Banner.vue'
import PortalSummary from './Summary.vue'
import PortalProduct from './Product.vue'
import PortalSolution from './Solution.vue'
import PortalCase from './Case.vue'
import PortalDesign from './Design.vue'
import PortalTrain from './Train.vue'

export default {
    components:{
        PortalBanner ,
        PortalSummary,
        PortalSolution ,
        PortalProduct ,
        PortalCase ,
        PortalDesign ,
        PortalTrain
    }
}

</script>

<style lang="scss" scoped>

</style>
