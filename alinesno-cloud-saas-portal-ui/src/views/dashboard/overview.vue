<template>
    <el-row :gutter="20">
        <el-col :span="4">
            <overview-nav />
        </el-col>
        <el-col :span="16">
            <!-- <overview-main /> -->
        </el-col>
    </el-row>
</template>

<script>

import OverviewNav from './overviewNav'
import OverviewMain from '@/views/portal/ucenter/role/list'

export default {
    components: {
        OverviewNav ,
        OverviewMain
    },
};
</script>


