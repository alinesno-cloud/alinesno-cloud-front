<template>
    <el-col :span="1.5">
        <el-button
                :type="btnType"
                :plain="isPlain"
                :round="isRound"
                :circle="isCircle"
                :icon="btnIcon"
                :size="btnSize"
                :loading="isExportLoading"
                @click="handleExport"
        >导出
        </el-button>
    </el-col>
</template>

<script>

    import {exportData} from "../../src/api/export";

    export default {
        props: {
            type: String,
            icon: String,
            size: String,
            plain: Boolean,
            round: Boolean,
            circle: Boolean,
            queryParams: Object, // 查询参数
            loading: Boolean,
            exportUrl: String
        },
        data() {
            return {
                // 导出遮罩层
                isExportLoading: false,
                btnType: 'info',
                btnIcon: 'el-icon-download',
                btnSize: 'mini',
                isPlain: false,
                isRound: false,
                isCircle: false,
                withQueryParams: {},
            }
        },
        mounted() {
            this.isExportLoading = this.loading ? this.loading : this.isExportLoading
            this.btnType = this.type ? this.type : this.btnType
            this.btnIcon = this.icon ? this.icon : this.btnIcon
            this.btnSize = this.size ? this.size : this.btnSize
            this.isPlain = this.plain
            this.isRound = this.round
            this.isCircle = this.circle
            this.withQueryParams = this.queryParams
        },
        methods: {
            /** 导出按钮操作 */
            handleExport() {
                const queryParams = this.queryParams;
                this.$confirm('是否确认导出所有用户数据项?', "警告", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    this.isExportLoading = true;
                    return exportData(this.exportUrl, queryParams);
                }).then(response => {
                    this.$emit("handleExportSuccess", response)
                    // this.download(response.msg);
                    this.isExportLoading = false;
                }).catch((e) => {
                    this.$emit("handleExportError", e)
                });
            },
        }
    }
</script>

<style scoped>

</style>