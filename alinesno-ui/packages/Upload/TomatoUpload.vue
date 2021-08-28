<template>
    <el-upload
            class="upload-demo"
            ref="upload"
            :action="uploadUrl"
            :on-success="handleSuccess"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="autoUpload">
        <el-button :icon="chooseBtnIcon" slot="trigger" :size="chooseBtnSize" :type="chooseBtnType">{{ chooseBtnText
            }}
        </el-button>
        <el-button :icon="uploadBtnIcon" v-show="autoUpload === false" style="margin-left: 10px;" :size="uploadBtnSize"
                   :type="uploadBtnType" @click="submitUpload">{{ uploadBtnText }}
        </el-button>
        <div slot="tip" class="el-upload__tip">{{ tip }}</div>
    </el-upload>
</template>

<script>
    export default {
        props: {
            uploadUrl: {
                type: String,
                default: process.env.VUE_APP_UPLOAD_URL ? process.env.VUE_APP_UPLOAD_URL : '/common/upload'
            },
            uploadBtnText: {
                type: String,
                default: '上传到 minio'
            },
            chooseBtnText: {
                type: String,
                default: '选取文件'
            },
            tip: {
                type: String,
                default: '只能上传jpg/png文件，且不超过500kb测试提示文字'
            },
            autoUpload: {
                type: Boolean,
                default: false
            },
            chooseBtnIcon: {
                type: String,
                default: 'el-icon-thumb'
            },
            uploadBtnIcon: {
                type: String,
                default: 'el-icon-upload'
            },
            chooseBtnSize: {
                type: String,
                default: 'medium'
            },
            chooseBtnType: {
                type: String,
                default: 'success'
            },
            uploadBtnSize: {
                type: String,
                default: 'medium'
            },
            uploadBtnType: {
                type: String,
                default: 'primary'
            },
        },
        data() {
            return {
                fileList: []
            };
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleSuccess(response, file, fileList) {
                this.$emit('input', response.data.id)
                this.$emit('success', response, file, fileList)
            },
            handleRemove(file, fileList) {
                this.$emit('handleRemove', file, fileList)
            },
            handlePreview(file) {
                this.$emit('handlePreview', file)
            },
        }
    }
</script>