<template>
    <div>
        <overview-nav />
        <overview-main />
    </div>
</template>

<script>

import OverviewNav from './nav'
import OverviewMain from './deployMain'

export default {
    components: {
        OverviewNav ,
        OverviewMain
    },
};
</script>


