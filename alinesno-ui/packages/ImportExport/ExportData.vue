<template>
    <el-col :span="1.5">
        <el-button
                :type="btnType"
                :plain="plain"
                :round="round"
                :circle="circle"
                :icon="btnIcon"
                :size="btnSize"
                :loading="isExportLoading"
                @click="handleExport"
        >导出
        </el-button>
    </el-col>
</template>

<script>
    import {exportData} from "alinesno-ui/src/api/export";

    export default {
        props: {
            btnType: {
                type: String,
                default: () => 'info'
            },
            btnIcon: {
                type: String,
                default: () => 'el-icon-bottom'
            },
            btnSize: {
                type: String,
                default: () => 'medium'
            },
            plain: {
                type: Boolean,
                default: () => true
            },
            round: {
                type: Boolean,
                default: () => false
            },
            circle: {
                type: Boolean,
                default: () => false
            },
            queryParams: {
                type: Object,
                default: () => {
                }
            },
            loading: {
                type: Boolean,
                default: () => false
            },
            exportUrl: {
                type: String,
                default: () => process.env.VUE_APP_EXPORT_URL ? process.env.VUE_APP_EXPORT_URL : '/common/export'
            },
        },
        data() {
            return {
                // 导出遮罩层
                isExportLoading: false,
            }
        },
        mounted() {
            this.isExportLoading = this.loading ? this.loading : this.isExportLoading
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
                    this.$emit("exportSuccess", response)
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