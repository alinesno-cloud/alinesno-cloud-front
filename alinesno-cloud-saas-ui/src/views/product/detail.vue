<template>
    <div>
        <portal-header />
        <portal-footer />
    </div>
</template>
<script>

import PortalHeader from '@/components/Header'
import PortalFooter from '@/components/Footer'
import PortalContent from '@/components/Content'

export default {
    name: "Portal",
    components:{
        PortalFooter,
        PortalHeader,
        PortalContent
    }
}
</script>
