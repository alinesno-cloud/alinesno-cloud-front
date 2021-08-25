<!--覆盖默认方法上传-->
<template>
    <el-upload :accept="fileType" :show-file-list="showFileList" action="#" :http-request="requestUpload" >
        <el-button :size="size" :type="type" :icon="icon">{{ btnText }}</el-button>
    </el-upload>
</template>

<script>
    export default {
        props: {
            fileType: {
                type: String,
                default: 'image/jpg'
            },
            showFileList: {
                type: Boolean,
                default: false
            },
            btnSize: {
                type: String,
                default: 'mini'
            },
            btnType: {
                type: String,
                default: 'success'
            },
            btnIcon: {
                type: String,
                default: 'el-icon-upload'
            },
            btnText: {
                type: String,
                default: '点击上传'
            },
        },
        name: "OverUpload",
        methods: {
            requestUpload(data) {
                this.$emit('requestUpload', data)
            }
        }
    }
</script>

<style scoped>

</style>