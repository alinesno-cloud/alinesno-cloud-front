<template>
    <div>
        <overview-nav />
        <gitlab-main />
    </div>
</template>

<script>

import OverviewNav from './overviewNav'
import GitlabMain from './gitlabMain'

export default {
    components: {
        OverviewNav ,
        GitlabMain
    },
};
</script>


