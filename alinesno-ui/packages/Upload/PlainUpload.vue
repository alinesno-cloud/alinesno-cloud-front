<!--普通上传-->
<template>
    <el-upload
            class="upload-demo"
            :action="uploadUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-progress="handleFileUploadProgress"
            :on-success="handleFileSuccess"
            :on-error = "handleFileError"
            :multiple="multiple"
            :limit="fileLimit"
            :on-exceed="handleExceed"
            :file-list="fileList">
        <el-button :icon="icon" :size="size" :type="type">{{ btnText }}</el-button>
        <div slot="tip" class="el-upload__tip">{{ tip }}</div>
    </el-upload>
</template>

<script>
    export default {
        props: {
            uploadUrl: {
                type: String,
                default: '/common/upload'
            },
            multiple: {
                type: Boolean,
                default: false
            },
            limit: {
                type: String,
                default: 3
            },
            size: {
                type: String,
                default: 'mini'
            },
            type: {
                type: String,
                default: 'info'
            },
            tip: {
                type: String,
                default: '只能上传jpg/png文件，且不超过500kb'
            },
            btnText: {
                type: String,
                default: '上传按钮文字'
            },
            icon: {
                type: String,
                default: 'el-icon-upload'
            },
        },
        data() {
            return {
                fileList: [],
                fileLimit: 3
            };
        },
        mounted() {
            this.fileLimit = this.limit ? parseInt(this.limit) : this.fileLimit
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
                this.$emit('handleRemove', file, fileList)
            },
            handlePreview(file) {
                console.log(file);
                this.fileList.push(
                    { name: file.name ? file.name : file.raw.name, url: file.url }
                )
                this.$emit('handlePreview', file)
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
                this.$emit('handleExceed', files, fileList)
            },
            beforeRemove(file, fileList) {
                this.$emit('beforeRemove', file, fileList)
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            // 文件上传中处理
            handleFileUploadProgress(event, file, fileList) {
                this.$emit('handleFileUploadProgress', event, file, fileList)
            },
            // 文件上传成功处理
            handleFileSuccess(response, file, fileList) {
                this.$refs.upload.clearFiles();
                this.$emit('handleFileSuccess', response, file, fileList)
            },
            // 文件上传失败处理
            handleFileError(response, file, fileList) {
                this.$emit('handleFileError', response, file, fileList)
            },
        }
    }
</script>

<style scoped>

</style>