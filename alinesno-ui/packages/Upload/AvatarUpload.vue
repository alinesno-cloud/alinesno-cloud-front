<template>
    <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="showFileList"
            :on-success="handleAvatarSuccess"
            :on-error="handleAvatarError"
            :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
</template>

<script>
    export default {
        props: {
            uploadUrl: {
                type: String,
                default: process.env.VUE_APP_UPLOAD_URL ? process.env.VUE_APP_UPLOAD_URL : '/common/upload'
            },
            showFileList: {
                type: Boolean,
                default: false
            },
            fileType: {
                type: String,
                default: 'image/jpeg'
            },
            fileSize: {
                type: String,
                default: '2'
            },
        },
        data() {
            return {
                imageUrl: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.$emit('input', res.data.id)
                this.$emit('handleAvatarSuccess', res, file)
            },
            handleAvatarError(res, file) {
                this.$emit('handleAvatarError', res, file)
            },
            beforeAvatarUpload(file) {
                var split = this.fileType.split(",");
                var filter = split.filter(s => s.includes(file.type));
                const isType = filter.length > 0;
                if (!isType) {
                    let reg = new RegExp('image/', "g") // g 代表全部
                    this.$message.error('上传头像图片只能是 ' + JSON.parse(JSON.stringify(split).replace(reg, "")) + ' 格式!'); // 将所有的 image/ 替换成 ""
                }
                const isLtSize = file.size / 1024 / 1024 < parseInt(this.fileSize);
                if (!isLtSize) {
                    this.$message.error('上传头像图片大小不能超过 ' + this.fileSize + ' MB!');
                }
                this.$emit('beforeAvatarUpload', file)
                return isType && isLtSize
            }
        }
    }
</script>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>